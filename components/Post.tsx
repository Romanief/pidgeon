"use client"

import React, { useState } from 'react'

import { FaUserAlt } from "react-icons/fa";

function Post(
  {
    title, 
    description,
    heros, 
    herosNeeded = 5,
  } : {
    title: string, 
    description: string,
    heros: number, 
    herosNeeded?: number,
  }
  ) {
    const [selected, setSelected] = useState(false)

    function handleClick () {
      setSelected(!selected)
    }

    return (
      <div onClick={handleClick} className='fex flex-col border-b border-neutral-200 px-10 py-5 hover:bg-dirtyWhite cursor-pointer'>
        <div className='flex text-2xl gap-5'>
          <div className=''>{title}</div>
          <div className='flex'><FaUserAlt className='text-xl mt-1 mr-1'/>: {selected ? heros + 1 : heros}/{herosNeeded}</div>
        </div>
        <div>{description}</div>
      </div>
    )
  }

export default Post