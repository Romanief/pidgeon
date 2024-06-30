"use client"

import React, { useState } from 'react'

import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Post(
  {
    title, 
    description,
    heros, 
    herosNeeded = 5,
    distance
  } : {
    title: string, 
    description: string,
    heros: number, 
    herosNeeded?: number,
    distance: string
  }
  ) {
    const [selected, setSelected] = useState(false)

    function handleClick () {
      setSelected(!selected)
    }

    return (
      <div onClick={handleClick} className='flex cursor-pointer justify-between w-full h-28 bg-dirtWhite rounded-xl mb-3 shadow-md shadow-black/25'>
        <div className='w-4/5 flex flex-col text-lg px-5 py-2'>
        <div className='font-semibold'>{title}</div>
          <div className='flex justify-between'>
            <div>
              <div className='pt-1'>{distance} miles away</div>
              <div className='pt-1'>{description}</div>
            </div>
            <div className='flex flex-col'>
              <div><span className='text-3xl font-semibold'>{heros}</span> of <span className='text-3xl font-semibold'>{herosNeeded}</span></div>
              <div>signed up</div>
            </div>
          </div>
        </div>
        <div className='bg-pPurple w-1/5 rounded-r-xl pt-5'>
        <IoIosArrowForward className='text-dirtWhite text-7xl'/>
        </div>
      </div>
    )
  }

export default Post