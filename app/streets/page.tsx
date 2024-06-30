"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import React, { useState } from 'react'
import Image from 'next/image'

import { FaCheckCircle } from "react-icons/fa";

function page() {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <div>
    <div className={showDialog ? 'bg-black/30 h-screen w-screen fixed z-10 flex flex-col justify-center' : "hidden"}>
      <div className='mx-auto bg-dirtWhite rounded-xl w-96 h-48 shadow-md shadow-black/25 text-center text-xl pt-3'>
        <div>Are you Sure to proceed with</div>
        <div className='font-semibold'>Brooke Road</div>
        <div>for the week of</div>
        <div className='font-semibold'>July 1</div>
        <div className='flex justify-around'>
          <div onClick={() => {setShowDialog(false)}} className='bg-pTeal h-12 p-2 mx-auto rounded-xl hover:bg-neutral-200 cursor-pointer '>Cancel</div>
          <div onClick={() => {setShowDialog(false)}} className='bg-pTeal h-12 p-2 mx-auto rounded-xl hover:bg-neutral-200 cursor-pointer '>Confirm</div>
        </div>
      </div>
    </div>
      <Navbar text='Streets'/>
      <Image src={"/street.jpeg"} alt="Street" width={360} height={48}  className="rounded-xl mx-auto translate-y-24 shadow-md shadow-black/25"/>
      <div className='fixed bottom-20 right-5 z-10' onClick={() => setShowDialog(true)}>
        <FaCheckCircle className='text-pPurple text-6xl'/>
      </div>
      <div className="flex flex-col w-96 mx-auto gap-5 pt-32 pb-20">
        <Post title="Ickbrgh road" description='200 of road' distance='.2' heros={1} herosNeeded={4}/>
        <Post title="Brooke road" description='400 of road' distance='.15' heros={2} herosNeeded={4}/>
        <Post title="Lea Bridge Roundabout" description='300m of road' distance='.22' heros={0} herosNeeded={6}/>
        <Post title="Kenninghal road" description='300m of road' distance='.37' heros={0} herosNeeded={3}/>
        <Post title="Prout road" description='250m of road' distance='.45' heros={2} herosNeeded={4}/>
      </div>
      <Footer/>
    </div>
  )
}

export default page