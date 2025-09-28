import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ 
  children, 
  headerProps = {}, 
  footerProps = {},
  className = "" 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header {...headerProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default Layout;