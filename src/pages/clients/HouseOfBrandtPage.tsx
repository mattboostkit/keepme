import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const HouseOfBrandtPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [clientDescription, setClientDescription] = useState<string>(''); 
  const [clientFeatures, setClientFeatures] = useState<string[]>([]); 

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const brandData = await fetchPortfolioBrandByName('House of Brandt');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
          setClientDescription(brandData.description || 'Description not available.'); 
          setClientFeatures(brandData.features || []); 
        }
      } catch (error) {
        console.error('Error fetching House of Brandt data:', error);
        setClientDescription('Failed to load description.'); 
        setClientFeatures([]); 
      } finally {
        // Loading complete
      }
    };

    fetchBrandData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-mauve"></div>
      </div>
    );
  }

  return (
    <ClientDetailTemplate
      clientName="House of Brandt"
      clientFeatures={clientFeatures} 
      clientDescription={clientDescription} 
      clientImage={clientImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"} 
    />
  );
};

export default HouseOfBrandtPage;
