import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-yellow-500 text-black py-4 px-6">
      <h1 className="text-2xl font-bold">My Blog</h1>
      {/* Add your header content here */}
    </header>
  );
};

export default Header;