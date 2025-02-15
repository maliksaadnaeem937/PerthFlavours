import React from 'react'

export default function Container({children}) {
  return (
    <div>
    <div className='w-[100%] mt-[70px] border-black'>
        {children}
      
    </div>

    </div>
  )
}
