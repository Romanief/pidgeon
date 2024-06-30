"use client"

import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Reward from '@/components/Reward'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar text='Rewards'/>
      <div className='pt-20 flex flex-col gap-5 mb-20'>
      <Reward color='#5DDDD0' reward='£50' text='pre-paid card sent to your address' textColor={"#000000"}/>
      <Reward color='#86A4CA' reward='5 free coffees' text='provided by TramStore' textColor={"#F5F9FF"}/>
      <Reward color='#5DDDD0' reward='2 ice cream cones' text='provided by The Sweet Colab' textColor={"#000000"}/>
      <Reward color='#874A97' reward='Free pint' text='provided by The Clapton Hart' textColor={"#F5F9FF"}/>
      <Reward color='#86A4CA' reward='5% discount' text='provided by Petals and Pidgeons' textColor={"#F5F9FF"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default page