import React from 'react'
import Sidebar from './components/Sidebar'

export default function layout({children} : {children: React.ReactNode}) {
    

  return (
    <div className='flex cont gap-12'>
        <Sidebar />
        {children}
    </div>
  )
}
