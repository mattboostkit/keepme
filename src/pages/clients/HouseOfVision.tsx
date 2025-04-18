import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const HouseOfVisionPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('House of Vision');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching House of Vision data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="House of Vision"
      clientFeatures={['Fragrance Glass', 'Caps', 'Shields']}
      clientDescription="Working with House of Vision to create distinctive fragrance glass, caps, and shields that showcase their innovative design philosophy."
      clientImage={clientImage || "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80"}
    />
  );
};

export default HouseOfVisionPage;
