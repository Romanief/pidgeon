"use client"

import React, {useState} from 'react'
import Container from '@/components/Container'

import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'

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
      <Container>
        <div className='h-screen flex flex-col justify-center text-center gap-5'>
          {user && <div>logged in as {user.name}</div>}
          <input className='text-center border-b border-black' type='text' value={inputName} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
          <input className='text-center border-b border-black' type='text' value={inputEmail} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
          <input className='text-center border-b border-black' type='text' value={inputNumber} onChange={(e) => setNumber(e.target.value)} placeholder='Number'/>
          <input className='text-center border-b border-black' type='text' value={inputAddress} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
          <input className='text-center border-b border-black' type='text' value={inputPassword} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
          <div onClick={()=> register(inputName, inputEmail, inputNumber, inputPassword, inputAddress)} className=' border-black hover:bg-neutral-200 cursor-pointer'>Register</div>
        </div>
      </Container>
  )
}

export default page