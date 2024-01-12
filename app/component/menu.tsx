"use server"
import { BusinessCenter, Dashboard, HistoryToggleOff, HorizontalSplit } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import signup from '../pages/signup'

export default async function menu() {
  return (
    <nav>
      <ul className='flex flex-col text-sm'>
        <li className='px-3 py-1 text-slate-400'>
            Elements
        </li>
        <li>
          <Link href="/" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <Dashboard fontSize='20' /> Avatar</Link>
        </li>    
        <li>
          <Link href="/my-shares" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <BusinessCenter fontSize='20' /> Badge</Link>
        </li>    
        <li>
          <Link href="/my-portfolio" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <HorizontalSplit fontSize='20' /> Button</Link>
        </li>    
        <li>
          <Link href="/transaction-history" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <HistoryToggleOff fontSize='20' /> Card</Link>
        </li>

        
        <li className='mt-5 px-3 py-1 text-slate-400'>
            Pages
        </li>
        <li>
          <Link href="/" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <Dashboard fontSize='20' /> Login</Link>
        </li>    
        <li>
          <Link href="/my-shares" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <BusinessCenter fontSize='20' /> Pricing</Link>
        </li>    
        <li>
          <Link href="/my-portfolio" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <HorizontalSplit fontSize='20' /> 404</Link>
        </li>    
        <li>
          <Link href="/transaction-history" className='transition ease duration-700 px-3 py-2 block hover:bg-slate-700 flex items-center gap-2'> <HistoryToggleOff fontSize='20' /> Contact Us</Link>
        </li>    
    </ul>
  </nav>
  )
}
