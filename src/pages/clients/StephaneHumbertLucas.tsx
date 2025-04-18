import React, { useState, useEffect } from 'react';
import ClientDetailTemplate from '../../components/ClientDetailTemplate';
import { fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../../lib/portfolioUtils';

const StephaneHumbertLucasPage: React.FC = () => {
  const [clientImage, setClientImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const brandData = await fetchPortfolioBrandByName('Stephane Humbert Lucas');
        if (brandData) {
          const imageUrl = getPortfolioBrandImageUrl(brandData);
          setClientImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching Stephane Humbert Lucas data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <ClientDetailTemplate
      clientName="Stephane Humbert Lucas"
      clientFeatures={['Shields', 'Caps']}
      clientDescription="Working with Stephane Humbert Lucas to develop distinctive shields and caps that complement their artistic fragrance creations."
      clientImage={clientImage || "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&q=80"}
    />
  );
};

export default StephaneHumbertLucasPage;
