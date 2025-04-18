import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const RojaParfumsPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Roja Parfums"
      clientFeatures={['Fragrance Glass', 'Vials', 'Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Partnering with Roja Parfums to create exquisite fragrance glass, vials, candle ceramics, and luxury packaging that embody their premium brand identity."
    />
  );
};

export default RojaParfumsPage;
