import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const OrmondeJaynePage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Ormonde Jayne"
      clientFeatures={['Fragrance Glass', 'Vials', 'Caps', 'Candle Glass', 'Luxury Packaging']}
      clientDescription="Collaborating with Ormonde Jayne to develop sophisticated fragrance glass, vials, caps, candle glass, and luxury packaging that reflect their artisanal approach."
    />
  );
};

export default OrmondeJaynePage;
