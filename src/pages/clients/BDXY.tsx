import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const BDXYPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="BDXY"
      clientFeatures={['Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Collaborating with BDXY to create elegant candle ceramics and luxury packaging that enhance their premium home fragrance offerings."
    />
  );
};

export default BDXYPage;
