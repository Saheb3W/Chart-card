import React, { useState } from 'react';
import './App.css';

import Charts, { Chart } from './component/Chart';
import SubMenu from './component/SubMenu';
import Cards from './component/Cards';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <LineChart /> */}

      
      <Charts/>
      <SubMenu/>
      <Cards/>
      {/* Your financial data and graph components can be added here */}
    </div>
  );
}

function Menu() {
  const [selectedItem, setSelectedItem] = useState('Indices'); // Set the initial selected item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="menu">
      <div className="topnav">
        <MenuItem
          title="Indices"
          isSelected={selectedItem === 'Indices'}
          onItemClick={handleItemClick}
        />
        <MenuItem
          title="Futures"
          isSelected={selectedItem === 'Futures'}
          onItemClick={handleItemClick}
        />
        <MenuItem
          title="Bonds"
          isSelected={selectedItem === 'Bonds'}
          onItemClick={handleItemClick}
        />
        <MenuItem
          title="Forex"
          isSelected={selectedItem === 'Forex'}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}

function MenuItem({ title, isSelected, onItemClick }) {
  return (
    <a
      className={`menu-item ${isSelected ? 'active' : ''}`}
      // href={`#${title}`}
      onClick={() => onItemClick(title)}
    >
      {title}
    </a>
  );
}

export default App;
