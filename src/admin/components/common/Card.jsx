import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-sm border border-gray-200 bg-white transition-all duration-300 hover:shadow-md]]] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;