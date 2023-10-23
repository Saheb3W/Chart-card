
import React, { useState } from 'react'
import '../App.css'
function SubMenu() {
  
    const [selectedItem, setSelectedItem] = useState('all'); // Set the initial selected item

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <div className="menu">
        <div className="topnav">
          <MenuItem
            title="1D"
            isSelected={selectedItem === '1D'}
            onItemClick={handleItemClick}
          />
          <MenuItem
            title="1M"
            isSelected={selectedItem === '1M'}
            onItemClick={handleItemClick}
          />
          <MenuItem
            title="3M"
            isSelected={selectedItem === '3M'}
            onItemClick={handleItemClick}
          />
          <MenuItem
            title="1Y"
            isSelected={selectedItem === '1Y'}
            onItemClick={handleItemClick}
          />
             <MenuItem
            title="5Y"
            isSelected={selectedItem === '5Y'}
            onItemClick={handleItemClick}
          />
             <MenuItem
            title="all"
            isSelected={selectedItem === 'all'}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
  )
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
export default SubMenu
