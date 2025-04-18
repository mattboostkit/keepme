import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const BDXYPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('BDXY');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching BDXY data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="BDXY"
      clientFeatures={['Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Collaborating with BDXY to create elegant candle ceramics and luxury packaging that enhance their premium home fragrance offerings."
      clientImage={clientImage || "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80"}
    />
  );
};

export default BDXYPage;
