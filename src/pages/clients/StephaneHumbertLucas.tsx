import React from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';

const StephaneHumbertLucasPage: React.FC = () => {
  return (
    <ClientDetailTemplate
      clientName="Stephane Humbert Lucas"
      clientFeatures={['Shields', 'Caps']}
      clientDescription="Working with Stephane Humbert Lucas to develop distinctive shields and caps that complement their artistic fragrance creations."
      clientImage="https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&q=80"
    />
  );
};

export default StephaneHumbertLucasPage;
