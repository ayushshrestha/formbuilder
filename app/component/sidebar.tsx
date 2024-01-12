
import React from 'react'
import Logo from './logo'
import Menu from './menu'

export default function sidebar() {
  return (
    <aside className='text-white bg-slate-800 rounded-l-lgX w-64 h-lvh sticky top-0'>
        <Logo />
        <div className="bg-slate-900/40 py-4 ">
          <Menu />
        </div>
    </aside>
  )
}
