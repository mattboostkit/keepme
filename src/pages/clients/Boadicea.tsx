import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const BoadiceaPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Boadicea"
      clientFeatures={['Fragrance Glass', 'Vials', 'Shields', 'Caps', 'Luxury Packaging']}
      clientDescription="Partnering with Boadicea to develop premium fragrance glass, vials, shields, caps, and luxury packaging that embody their heritage-inspired brand."
    />
  );
};

export default BoadiceaPage;
