import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const RojaParfumsPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Roja Parfums');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Roja Parfums data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="Roja Parfums"
      clientFeatures={['Fragrance Glass', 'Vials', 'Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Partnering with Roja Parfums to create exquisite fragrance glass, vials, candle ceramics, and luxury packaging that embody their premium brand identity."
      clientImage={clientImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"}
    />
  );
};

export default RojaParfumsPage;
