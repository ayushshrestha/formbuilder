import React from 'react'
import Image from 'next/image'

export default function logo() {
  return (
    <div className='mb-1 p-4 '>
        <Image
        width={30}
        height={30}
        src="../shresthabros-logo.svg"
        />
    </div>
  )
}
