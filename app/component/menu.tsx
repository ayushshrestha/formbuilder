'use client'

// menu.tsx
import React, { useState } from 'react';

import Icon from '@mui/material/Icon';
import { BusinessCenter, Dashboard, ExpandLessOutlined, ExpandMoreOutlined, HistoryToggleOff, HorizontalSplit } from '@mui/icons-material'


interface MenuItem {
  id: number;
  label: string;
  icon?: React.ReactNode;
  link?: string;
  children?: MenuItem[];
}

interface menuProps {
  menuData: MenuItem[];
}

const menu: React.FC<menuProps> = ({ menuData }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (menuId: number) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  const renderMenu = (menu: MenuItem) => (
    <li key={menu.id}>
      <div onClick={() => handleMenuClick(menu.id)}>
        {menu.link ? (
          <a href={menu.link}  className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'>
            {menu.icon}{menu.label}</a>
        ) : (
          <span className='mt-5 block px-3 py-1 text-slate-400 flex items-center justify-between'>{menu.label} {menu.children && (
            <div>
              {activeMenu === menu.id ? (
                <ExpandLessOutlined />
              ) : (
                <ExpandMoreOutlined />
              )}
            </div>
          )}</span>
        )}
      </div>
      {menu.children && activeMenu === menu.id && (
        <ul>
          {menu.children.map((child) => renderMenu(child))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="menu">
      <ul>
        {menuData.map((menuItem) => renderMenu(menuItem))}
      </ul>
    </div>
  );
};

export default menu;
