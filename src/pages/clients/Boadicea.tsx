import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const BoadiceaPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Boadicea');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Boadicea data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="Boadicea"
      clientFeatures={['Fragrance Glass', 'Vials', 'Shields', 'Caps', 'Luxury Packaging']}
      clientDescription="Partnering with Boadicea to develop premium fragrance glass, vials, shields, caps, and luxury packaging that embody their heritage-inspired brand."
      clientImage={clientImage || "https://images.unsplash.com/photo-1592945403407-9caf930b0192?auto=format&fit=crop&q=80"}
    />
  );
};

export default BoadiceaPage;
