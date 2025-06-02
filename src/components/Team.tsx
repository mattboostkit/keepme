import React, { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';
import { Linkedin } from 'lucide-react';

// Define the TeamMember interface
interface TeamMember {
  _id: string;
  name: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  }; // Sanity image reference
  linkedinUrl?: string;

  displayOrder: number;
}

// Define the props for the Team component
interface TeamProps {
  title?: React.ReactNode;
  subtitle?: string;
  useSanity?: boolean;
  teamMembers?: TeamMember[];

  maxMembers?: number;
}

const Team: React.FC<TeamProps> = ({
  title = "Our Team",
  subtitle = "Meet the experts behind our innovative solutions",
  useSanity = true,
  teamMembers: propTeamMembers,

  maxMembers
}) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(propTeamMembers || []);
  const [loading, setLoading] = useState(useSanity);

  // Fetch team members from Sanity if useSanity is true
  useEffect(() => {
    if (useSanity) {
      const fetchTeamMembers = async () => {
        try {
          setLoading(true);
          const query = '*[_type == "teamMember"] | order(displayOrder asc)';

          const result = await fetchSanityData<TeamMember[]>(query);

          // Apply maxMembers limit if specified
          const limitedResult = maxMembers ? result.slice(0, maxMembers) : result;

          setTeamMembers(limitedResult);
        } catch (error) {
          console.error('Error fetching team members:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchTeamMembers();
    }
  }, [useSanity, maxMembers]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              typeof title === 'string' ? (
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  {title.split(' ').map((word, index, array) =>
                    index === array.length - 1 ?
                      <span key={index}>
                        <span className="text-brand-mauve">{word}</span>
                      </span> :
                      <span key={index}>{word} </span>
                  )}
                </h2>
              ) : (
                title
              )
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {loading ? (
          // Loading skeleton
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl w-full h-[300px] mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : teamMembers && teamMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member._id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4">
                  <img
                    src={urlFor(member.image).width(600).height(600).url()}
                    alt={member.name}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-[#f4cfd9] hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No team members available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
