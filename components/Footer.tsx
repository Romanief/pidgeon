"use client"

import React, { useState } from 'react'

import { AiFillHome } from "react-icons/ai";
import { FaGift } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import Link from 'next/link';
import { useFooter } from '@/context/footerContext';

function Footer() {
  const {x, setX} = useFooter()
  return (
    <div className='w-full h-16 bg-pSlate fixed -bottom-1 shadow-md shadow-black/25 text-pWhite flex gap-3 text-4xl justify-around pt-2 transition-all'>
      <div 
        className={`fixed w-10 h-2 bg-pTeal rounded-xl bottom-1 left-[30px]`}
        style={{transform: `translate(${x * 110}px, 0)`}}>
      </div>
      <Link href="/"><AiFillHome onClick={() => setX(0)}/></Link>
      <Link href={"/rewards"}><FaGift onClick={() => setX(1)}/></Link>
      <Link href={"/chat"}><BsChatFill onClick={() => setX(2)}/></Link>
      <FaNewspaper onClick={() => setX(3)}/>
    </div>
  )
}

export default Footer