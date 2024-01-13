import React from 'react'
import Image from 'next/image'

export default function logo() {
  return (
    <div className='mb-1 px-4 py-3 sticky top-0 bg-slate-800'>
        <Image
        width={30}
        height={30}
        alt="Logo"
        src="../shresthabros-logo.svg"
        />
    </div>
  )
}
