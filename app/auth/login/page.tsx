"use client"

import React, {useState} from 'react'
import Container from '@/components/Container'

import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'

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
      <Container>
        <div className='h-screen flex flex-col justify-center text-center gap-5'>
          {user && <div>logged in as {user.name}</div>}
          <input className='text-center border-b border-black' type='text' value={inputEmail} onChange={(e) => setEmail(e.target.value)}/>
          <input className='text-center border-b border-black' type='text' value={inputPassword} onChange={(e) => setPassword(e.target.value)}/>
          <div onClick={()=> login(inputEmail, inputPassword)} className=' border-black hover:bg-neutral-200 cursor-pointer'>Login</div>
        </div>
      </Container>
  )
}

export default page