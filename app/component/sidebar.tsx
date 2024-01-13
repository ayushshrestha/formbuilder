
import React from 'react'
import Logo from './logo'
import Menu from './menu'
import { BusinessCenter, Dashboard, HistoryToggleOff, HorizontalSplit } from '@mui/icons-material'

const menuData = [
  {
    id: 1,
    label: 'Elements',
    icon: <HistoryToggleOff />,
    children: [
      {
        id: 31,
        label: 'Avatar',
        icon: <HistoryToggleOff />,
        link: '/',
      },
      {
        id: 32,
        label: 'Badges',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Button',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Card',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Table',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Icon',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Textfield',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Toggle',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Loading',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Modal',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Tooltip',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Search',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Navigation',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Radio',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Checkbox',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Tabs',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 32,
        label: 'Toast',
        icon: <Dashboard />,
        link: '/',
      },
    ],
  },
  {
    id: 2,
    label: 'Pages',
    icon: <Dashboard />,
    children: [
      {
        id: 5,
        label: 'Login',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Pricing',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: '404',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Contact Us',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Sign up',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'FAQ',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Blog Post',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Careers',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Team',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Cart',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Press',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Search',
        icon: <Dashboard />,
        link: '/',
      },
      {
        id: 6,
        label: 'Blog',
        icon: <Dashboard />,
        link: '/',
      },
    ],
  },
];


export default function sidebar() {
  return (
    <aside className='text-white bg-slate-800 rounded-l-lgX w-64 h-lvhX sticky top-0'>
        <Logo />
        <div className="bg-slate-900/40 py-4 h-lvh overflow-y-scroll">
          <Menu  menuData={menuData}  />
        </div>
    </aside>
  )
}
