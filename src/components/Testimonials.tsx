import React, { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';

// Define the Testimonial interface
interface Testimonial {
  _id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: any; // Sanity image reference
  displayOrder: number;
}

// Define the props for the Testimonials component
interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  useSanity?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Clients Say",
  subtitle = "Hear from brands who trust KeepMe for their fragrance manufacturing needs.",
  testimonials: propTestimonials,
  useSanity = true
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(propTestimonials || []);
  const [loading, setLoading] = useState(useSanity);

  // Fetch testimonials from Sanity if useSanity is true
  useEffect(() => {
    if (useSanity) {
      const fetchTestimonials = async () => {
        try {
          setLoading(true);
          const result = await fetchSanityData<Testimonial[]>(
            '*[_type == "testimonial"] | order(displayOrder asc)'
          );
          setTestimonials(result);
        } catch (error) {
          console.error('Error fetching testimonials:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchTestimonials();
    }
  }, [useSanity]);
  return (
    <section className="py-20 bg-[#FAEDE7]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {title.split(' ').map((word, index, array) =>
              index === array.length - 1 ?
                <span key={index}>
                  <span className="text-[#f4cfd9]">{word}</span>
                </span> :
                <span key={index}>{word} </span>
            )}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md animate-pulse">
                <div className="h-20 bg-gray-200 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))
          ) : testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div key={testimonial._id} className="bg-white p-8 rounded-2xl shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <img
                      src={urlFor(testimonial.image).width(80).height(80).url()}
                      alt={`${testimonial.name}`}
                      className="w-20 h-20 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-400">
                      <span>No Image</span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500">No testimonials available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
