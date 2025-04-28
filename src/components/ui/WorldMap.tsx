// src/components/ui/WorldMap.tsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map"; // Ensure this is installed

interface Location {
  name: string;
  lat: number;
  lng: number;
}

interface MapProps {
  dots?: Array<{ // Make dots optional
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  locations?: Location[]; // Add new prop for single locations
  lineColor?: string;
}

// Default colours (approximating light theme from original)
const defaultDotColor = "#00000040";
const defaultBackgroundColor = "white";

export function WorldMap({
  dots = [],
  locations = [], // Add locations prop with default
  lineColor = "#DA627D", // Default line color (brand-card)
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  // Generate SVG map data URI
  const svgMap = map.getSVG({
    radius: 0.22,
    color: defaultDotColor,
    shape: "circle",
    backgroundColor: defaultBackgroundColor,
  });
  const mapDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`;

  // Function to project lat/lng to SVG coordinates
  const projectPoint = (lat: number, lng: number) => {
    const mapWidth = 800; // SVG viewBox width
    const mapHeight = 400; // SVG viewBox height
    const x = (lng + 180) * (mapWidth / 360);
    // Revert to simpler linear projection
    let y = (90 - lat) * (mapHeight / 180);
    // Add a vertical offset to shift points down (adjust value as needed)
    const yOffset = 15; // Experiment with this value
    y += yOffset;
    return { x, y };
  };

  // Function to create curved path string
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    // Adjust control point based on distance and direction
    const controlX = start.x + dx / 2 - dy * 0.2; // Adjust curvature factor (0.2)
    const controlY = start.y + dy / 2 + dx * 0.2;
    // Simple quadratic curve, adjust control point for arc
    // const midX = (start.x + end.x) / 2;
    // const midY = Math.min(start.y, end.y) - 50; // Simple upward curve
    return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
  };

  return (
    // Use aspect-ratio for responsive sizing
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans overflow-hidden">
      {/* Standard img tag */}
      <img
        src={mapDataUri}
        className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="Dotted world map background"
        loading="lazy" // Add lazy loading
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400" // Match projection dimensions
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          // Basic check if points are valid
          if (isNaN(startPoint.x) || isNaN(startPoint.y) || isNaN(endPoint.x) || isNaN(endPoint.y)) {
            console.error("Invalid coordinates for dot:", dot);
            return null;
          }
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {/* Animated Points */}
        {dots.map((dot, i) => {
           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
           if (isNaN(startPoint.x) || isNaN(startPoint.y) || isNaN(endPoint.x) || isNaN(endPoint.y)) {
             return null;
           }
          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g key={`start-${i}`}>
                <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={lineColor} />
                <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              </g>
              {/* End Point */}
              <g key={`end-${i}`}>
                <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={lineColor} />
                <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin={`${i * 0.5 + 0.5}s`} repeatCount="indefinite" /> {/* Offset end animation slightly */}
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin={`${i * 0.5 + 0.5}s`} repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          );
        })}

        {/* Animated Single Locations */}
        {locations.map((location, i) => {
          const point = projectPoint(location.lat, location.lng);
          if (isNaN(point.x) || isNaN(point.y)) {
            console.error("Invalid coordinates for location:", location);
            return null;
          }
          return (
            <g key={`location-${i}`}>
              <title>{location.name}</title> {/* Add tooltip */}
              <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
              <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" /> {/* Stagger animation slightly */}
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Export default if this is the only export, or named export if preferred
export default WorldMap;