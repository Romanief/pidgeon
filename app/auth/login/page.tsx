"use client"

import React, {useState} from 'react'

import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  const [inputEmail, setEmail] = useState("")
  const [inputPassword, setPassword] = useState("")
  const {user, setUser} = useUser()

  const router = useRouter()

  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (!res.ok) {
      console.log("Do something")
    }

    const data : any = await res.json()

    const name = data.name
    const mail = data.email 
    const number = data.number 
    const id = data.id  

    setUser({
      id: id,
      name: name,
      email: mail,
      phone: number,
    })

    router.push("/")
  }

  return (
        <div className='h-screen flex flex-col justify-start text-center gap-5'>
          <Image src="/trashgift.svg" alt='Trashgift' width={276} height={300} className='mx-auto mt-10 mb-5 text-pSlate translate-x-4'/>
          <div className='flex flex-col font-bold text-3xl'>
            <div>Welcome to</div>
            <div>StreetKeeper</div>
          </div>

          <div className='flex flex-col justify-start w-[360px] mx-auto text-start mt-10 font-bold'>
            <label>Email</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputEmail} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-start w-[360px] mx-auto text-start font-bold'>
            <label>Password</label>
            <input className='bg-dirtWhite h-14 rounded-xl border border-pSlate shadow-md shadow-black/25 p-5' type='text' value={inputPassword} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div 
          onClick={()=> login(inputEmail, inputPassword)} 
          className='bg-pTeal w-[360px] h-16 mx-auto rounded-xl text-4xl p-3 hover:bg-neutral-200 cursor-pointer mt-20 shadow-md shadow-black/25'>
            Sign in
          </div>
          <p className='-m-2'>No account? <Link href={"/auth/register"}>Register</Link></p>
        </div>
  )
}

export default page