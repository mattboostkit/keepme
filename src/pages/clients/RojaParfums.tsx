import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const RojaParfumsPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [clientDescription, setClientDescription] = useState<string>(''); 
  const [clientFeatures, setClientFeatures] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Roja Parfums');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
          setClientDescription(brandData.description || 'Description not available.'); 
          setClientFeatures(brandData.features || []); 
        }
      } catch (error) {
        console.error('Error fetching Roja Parfums data:', error);
        setClientDescription('Failed to load description.'); 
        setClientFeatures([]); 
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
      clientName="Roja Parfums"
      clientFeatures={clientFeatures} 
      clientDescription={clientDescription} 
      clientImage={clientImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"}
    />
  );
};

export default RojaParfumsPage;
