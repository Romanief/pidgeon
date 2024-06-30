"use client"

import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';

function Navbar({text}: {text:string}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <div onClick={()=> setIsMenuVisible(!isMenuVisible)} className='w-full fixed bg-pSlate text-dirtWhite flex h-16 shadow-md shadow-black/25'>    
    <Sidebar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
    <GiHamburgerMenu  className='text-3xl cursor-pointer fixed top-4 left-5'/>
    <div className='text-4xl p-3 text-center w-full'>{text}</div>
    </div>

  )
}

export default Navbar