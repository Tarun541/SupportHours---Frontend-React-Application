import React from 'react';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar/SearchBar';
import ContactSupport from './components/ContactSupport/ContactSupport';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <ContactSupport />
    </header>
  );
};

export default Header; 