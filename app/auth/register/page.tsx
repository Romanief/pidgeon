"use client"

import React, {useState} from 'react'

import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { IoIosAddCircle } from "react-icons/io";

function page() {
  const [inputEmail, setEmail] = useState("")
  const [inputPassword, setPassword] = useState("")
  const [inputName, setName] = useState("")
  const [inputNumber, setNumber] = useState("")
  const [inputAddress, setAddress] = useState("")
  const {user, setUser} = useUser()

  const router = useRouter()

  const register = async (name:string, email: string, number: string, password: string, address: string) => {
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: number,
        email: email,
        password: password,
        address: address
      })
    })

    if (!res.ok) {
      console.log("Do something")
    }

    const data : any = await res.json()

    const nam = data.name
    const mail = data.email 
    const phone = data.phone 
    const id = data.id  

    setUser({
      id: id,
      name: nam,
      email: mail,
      phone: phone,
    })

    router.push("/")
  }

  return (
        <div className='h-screen flex flex-col justify-center text-center gap-5'>
          <div className='relative'>
            <IoIosAddCircle className='text-pPurple text-7xl absolute bottom-0 right-24'/>
          <Image src="/gertrude.jpg" alt="Most awesome elderly lady ever" width={200} height={200} className='rounded-full aspect-square mx-auto shadow-md shadow-black/25' />
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start mt-3 font-bold'>
            <label>Name</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputName} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start font-bold'>
            <label>Email</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputEmail} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start font-bold'>
            <label>Number</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputNumber} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start font-bold'>
            <label>Address</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputAddress} onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start font-bold'>
            <label>Password</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='password' value={inputPassword} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div 
          onClick={()=> register(inputName, inputEmail, inputNumber, inputPassword, inputAddress)} 
          className='bg-pTeal w-[360px] h-16 mx-auto rounded-xl text-4xl p-3 hover:bg-neutral-200 cursor-pointer mt-8 shadow-md shadow-black/25'>
            Register
          </div>
        </div>
  )
}

export default page