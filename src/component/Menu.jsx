import React, { useState } from 'react'

const  Menu=()=> {
    const [selectedItem, setSelectedItem] = useState('Indices'); // Set the initial selected item
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      console.log(item)
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
   export default Menu;
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
  