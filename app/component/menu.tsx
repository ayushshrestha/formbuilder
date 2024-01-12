"use server"
import { BusinessCenter, Dashboard, HistoryToggleOff, HorizontalSplit } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import signup from '../pages/signup'

export default async function menu() {
  return (
    <nav>
      <ul className='flex flex-col text-sm'>
        <li>
          <Link href="/" className='transition ease duration-700 p-3 block hover:bg-slate-700 flex items-center gap-2'> <Dashboard fontSize='20' /> Avatar</Link>
        </li>    
        <li>
          <Link href="/my-shares" className='transition ease duration-700 p-3 block hover:bg-slate-700 flex items-center gap-2'> <BusinessCenter fontSize='20' /> Badge</Link>
        </li>    
        <li>
          <Link href="/my-portfolio" className='transition ease duration-700 p-3 block hover:bg-slate-700 flex items-center gap-2'> <HorizontalSplit fontSize='20' /> Button</Link>
        </li>    
        <li>
          <Link href="/transaction-history" className='transition ease duration-700 p-3 block hover:bg-slate-700 flex items-center gap-2'> <HistoryToggleOff fontSize='20' /> Card</Link>
        </li>    
    </ul>
  </nav>
  )
}
