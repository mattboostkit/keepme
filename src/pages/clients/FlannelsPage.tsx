import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const FlannelsPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Flannels');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Flannels data:', error);
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
      clientName="Flannels"
      clientFeatures={['Luxury Retail Fragrances', 'In-Store Experience Design', 'Limited Edition Collections']}
      clientDescription="Working with Flannels to develop exclusive fragrance lines for their discerning clientele."
      clientImage={clientImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"} // Fallback image
    />
  );
};

export default FlannelsPage;
