import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const OrmondeJaynePage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const brandData = await fetchPortfolioBrandByName('Ormonde Jayne');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Ormonde Jayne data:', error);
      } finally {
        // Loading complete
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="Ormonde Jayne"
      clientFeatures={['Fragrance Glass', 'Vials', 'Caps', 'Candle Glass', 'Secondary Packaging']}
      clientDescription="Collaborating with Ormonde Jayne to develop sophisticated fragrance glass, vials, caps, candle glass, and secondary packaging that reflect their artisanal approach."
      clientImage={clientImage || "https://images.unsplash.com/photo-1616604426605-2fa8d26b2b4c?auto=format&fit=crop&q=80"}
    />
  );
};

export default OrmondeJaynePage;
