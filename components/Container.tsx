import React, { ReactNode } from 'react'

function Container({children} : {children: ReactNode}) {
  return (
    <div className='h-screen w-1/2 overflow-scroll mx-auto bg-white'>{children}</div>
  )
}

export default Container