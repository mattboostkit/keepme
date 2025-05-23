import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const OrmondeJaynePage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Ormonde Jayne');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Ormonde Jayne data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="Ormonde Jayne"
      clientFeatures={['Fragrance Glass', 'Vials', 'Caps', 'Candle Glass', 'Luxury Packaging']}
      clientDescription="Collaborating with Ormonde Jayne to develop sophisticated fragrance glass, vials, caps, candle glass, and luxury packaging that reflect their artisanal approach."
      clientImage={clientImage || "https://images.unsplash.com/photo-1616604426605-2fa8d26b2b4c?auto=format&fit=crop&q=80"}
    />
  );
};

export default OrmondeJaynePage;
