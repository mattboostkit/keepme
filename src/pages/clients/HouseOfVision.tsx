import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const HouseOfVisionPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="House of Vision"
      clientFeatures={['Fragrance Glass', 'Caps', 'Shields']}
      clientDescription="Working with House of Vision to create distinctive fragrance glass, caps, and shields that showcase their innovative design philosophy."
    />
  );
};

export default HouseOfVisionPage;
