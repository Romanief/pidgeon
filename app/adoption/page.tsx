import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar text='Adoption'/>
      <div className='fixed -z-10'>
        <Image src={"/bg.svg"} width={470} height={940} alt='background'/>
      </div>
      <div className='mx-auto text-4xl text-pSlate pt-40 w-96 text-center font-bold'>
        Congratulations!
      </div>
      <div className='mx-auto w-96 flex justify-center mt-10'>
        <Image src={"/certificate.jpeg"} width={314} height={220} alt='HELP'/>
      </div>
      <Footer/>
    </div>
  )
}

export default page