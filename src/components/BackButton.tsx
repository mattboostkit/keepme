import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  to: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, label = 'Back' }) => {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center text-gray-700 hover:text-[#f4cfd9] transition-colors mb-4"
    >
      <ArrowLeft className="h-5 w-5 mr-1" />
      <span>{label}</span>
    </Link>
  );
};

export default BackButton;
