import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const StephaneHumbertLucasPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Stephane Humbert Lucas"
      clientFeatures={['Shields', 'Caps']}
      clientDescription="Working with Stephane Humbert Lucas to develop distinctive shields and caps that complement their artistic fragrance creations."
    />
  );
};

export default StephaneHumbertLucasPage;
