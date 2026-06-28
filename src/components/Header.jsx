import React from 'react';
import '../App.css';

function Header() {
  const navItems = ['Main', 'About us', 'Contacts'];

  return (
    <header className="main-header">
      <div>MyLogo</div>
      <nav>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;