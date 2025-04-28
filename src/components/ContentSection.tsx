import React from 'react';

interface ContentSectionProps {
  title: string;
  text: React.ReactNode;
  imageUrl: string;
  imageLeft?: boolean; // Determines image position, defaults to right
  index?: number; // Section index for alternating backgrounds
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  text,
  imageUrl,
  imageLeft = false,
  index = 0,
}) => {
  // Alternate background colors based on index
  const bgColor = index % 2 === 0 ? "bg-white" : "bg-brand-background";

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imageLeft ? '' : 'md:grid-flow-col-dense'}`}>
          {/* Text Content */}
          <div className={`space-y-4 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
            <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{text}</p>
            {/* Optional: Add more elements like bullet points or buttons here */}
          </div>

          {/* Image */}
          <div className={`mt-8 md:mt-0 ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;