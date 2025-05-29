import React from 'react';

interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-[#fdf2f4]"></div>

      {items.map((item, index) => (
        <div key={item.year} className="mb-12 relative pl-10 md:pl-0">
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 top-1 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-pink border-2 border-white z-10"></div>

          <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            {/* Content Card */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#f4cfd9] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.year}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
            {/* Spacer for alignment */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;