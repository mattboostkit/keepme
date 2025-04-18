import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const HouseOfVisionPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="House of Vision"
      clientFeatures={['Fragrance Glass', 'Caps', 'Shields']}
      clientDescription="Working with House of Vision to create distinctive fragrance glass, caps, and shields that showcase their innovative design philosophy."
      clientImage="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80"
    />
  );
};

export default HouseOfVisionPage;
