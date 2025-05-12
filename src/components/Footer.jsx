import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto text-center py-4 text-gray-500">
      <p>© {year} Keeper App</p>
    </footer>
  );
};

export default Footer;
