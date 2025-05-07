import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const FragranceDuBoisPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Fragrance Du Bois');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Fragrance Du Bois data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-accent"></div>
      </div>
    );
  }

  return (
    <ClientDetailTemplate
      clientName="Fragrance Du Bois"
      clientFeatures={['Exotic Perfume Oils', 'Custom Bottle Design', 'Global Distribution Support']}
      clientDescription="Collaborating with Fragrance Du Bois to craft unique scents and present them in stunning, bespoke bottles."
      clientImage={clientImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"} // Fallback image
    />
  );
};

export default FragranceDuBoisPage;
