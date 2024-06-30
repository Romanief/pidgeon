import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar text='Chat'/>

      <div className={`w-96 h-44 bg-pBlue mx-auto rounded-xl flex flex-col justify-around p-5 text-dirtWhite translate-y-20`}>
        <div className='text-5xl font-bold'>Brooke Road</div>
        <div className='text-xl'>Please discuss when and how you'll keep the street clean this week</div>
      </div>

      <div className='h-96 w-30 mt-28 flex w-96 mx-auto justify-start'>
        <div className='bg-pPurple rounded-full text-dirtWhite text-2xl pt-1 font-semibold text-center aspect-square w-[40px] h-[40px]'>A</div>
        <div className='w-5/6 bg-dirtWhite border-pSlate rounded-xl shadow-md shadow-black/25 h-28 ml-5 p-3 text-lg'> Hi, what days are you available? I am open to Tuesday and Thursday or Saturday x</div>
      </div>

      <div className='translate-y-28 w-96 mx-auto bg-dirtWhite rounded-xl shadow-md shadow-black/25 h-16 flex'>
      <input type='text' placeholder='...' className='w-full rounded-xl p-3 text-lg'/>
      </div>


      <Footer/>
    </div>
  )
}

export default page