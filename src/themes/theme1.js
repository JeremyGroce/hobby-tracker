import React from 'react';

const Theme1 = () => {
  const themeStyles = {
    position: 'absolute',
    backgroundcolor: '#a471f9',
    height: '100vh',
    width: '100vw',  // Added width to cover the entire viewport

  };

  return <div style={themeStyles}></div>;
};

export default Theme1;
