"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"
import { Check } from "lucide-react"

interface Feature {
  step?: string
  title?: string
  content: string
  image?: string
}

interface ClickableFeatureStepsProps {
  features: Feature[]
  className?: string
  title?: React.ReactNode
}

export function ClickableFeatureSteps({
  features,
  className,
  title = "How to get Started",
}: ClickableFeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(-1) // Start with no feature selected

  // Handle click on a feature
  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
  }

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-1 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200">
              {Array.from({ length: features.length }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute w-0.5 transition-all duration-500",
                    i < currentFeature ? "bg-brand-mauve" : "bg-transparent"
                  )}
                  style={{
                    top: `${(i * 100) / features.length}%`,
                    height: `${100 / features.length}%`,
                  }}
                />
              ))}
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-center gap-6 md:gap-8 cursor-pointer transition-all duration-300 relative z-10",
                  index === currentFeature ? "scale-105" : "hover:scale-105"
                )}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: index === currentFeature || index < currentFeature ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleFeatureClick(index)}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-brand-mauve border-brand-mauve text-white"
                      : index < currentFeature
                        ? "bg-brand-mauve border-brand-mauve text-white"
                        : "bg-muted border-muted-foreground"
                  )}
                >
                  {index < currentFeature ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {/* Remove leading number and period from title */} 
                    {feature.title?.substring(feature.title.indexOf(' ') + 1) || feature.step}
                  </h3>
                  <AnimatePresence>
                    {index === currentFeature && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-lg text-gray-600">
                          {feature.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
