import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const RojaParfumsPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Roja Parfums"
      clientFeatures={['Fragrance Glass', 'Vials', 'Candle Ceramics', 'Luxury Packaging']}
      clientDescription="Partnering with Roja Parfums to create exquisite fragrance glass, vials, candle ceramics, and luxury packaging that embody their premium brand identity."
      clientImage="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"
    />
  );
};

export default RojaParfumsPage;
