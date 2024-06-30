import React, { useState } from 'react'

import { AiFillHome } from "react-icons/ai";
import { FaGift } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";

function Footer() {
  const [x, setX] = useState(1)
  return (
    <div className='w-full h-16 bg-pSlate fixed -bottom-1 shadow-md shadow-black/25 text-pWhite flex gap-3 text-4xl justify-around pt-2 transition-all'>
      <div 
        className={`fixed w-10 h-2 bg-pTeal rounded-xl bottom-1 left-[30px]`}
        style={{transform: `translate(${x * 110}px, 0)`}}>
      </div>
      <AiFillHome onClick={() => setX(0)}/>
      <FaGift onClick={() => setX(1)}/>
      <BsChatFill onClick={() => setX(2)}/>
      <FaNewspaper onClick={() => setX(3)}/>
    </div>
  )
}

export default Footer