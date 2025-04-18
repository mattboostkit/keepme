import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const BDXYPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="BDXY"
      clientFeatures={['Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Collaborating with BDXY to create elegant candle ceramics and luxury packaging that enhance their premium home fragrance offerings."
      clientImage="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80"
    />
  );
};

export default BDXYPage;
