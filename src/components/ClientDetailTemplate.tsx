import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ClientDetailTemplateProps {
  clientName: string;
  clientImage?: string;
  clientDescription?: string;
  clientFeatures?: string[];
  children?: React.ReactNode;
}

const ClientDetailTemplate: React.FC<ClientDetailTemplateProps> = ({
  clientName,
  clientImage,
  clientDescription,
  clientFeatures = [],
  children
}) => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#fffded] to-[#eed9b2]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                {clientName}
              </h1>
              {clientDescription && (
                <p className="text-lg text-gray-700 mb-8">
                  {clientDescription}
                </p>
              )}
              {clientFeatures && clientFeatures.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Products & Services:</h3>
                  <div className="flex flex-wrap gap-2">
                    {clientFeatures.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-[#f4cfd9] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <Link
                to="/portfolio"
                className="inline-flex items-center text-[#f4cfd9] hover:text-[#f4cfd9]/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              {clientImage ? (
                <img
                  src={clientImage}
                  alt={`${clientName} showcase`}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              ) : (
                <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Image coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {children ? (
            children
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're currently working on detailed content for this client showcase.
                Please check back soon for more information about our partnership with {clientName}.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Explore More <span className="text-[#f4cfd9]">Clients</span>
          </h2>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="bg-[#f4cfd9] text-white px-6 py-3 rounded-full hover:bg-[#f4cfd9]/80 transition-colors inline-flex items-center"
            >
              View All Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDetailTemplate;
