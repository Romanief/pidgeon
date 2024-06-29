import React from 'react'
import { useUser } from '@/context/userContext'
import Link from 'next/link'

function Sidebar() {
  const {user, setUser} = useUser()
  return (
    <aside className='flex flex-col gap-5 h-screen fixed p-10 '>
      {user ? (
        <>
          <div>{user.name}</div>
          <div>Your Tasks</div>
          <div>Suggest a Task</div>
          <div>Rewards</div>
          <div>Settings</div>
          <div className='cursor-pointer' onClick={() => setUser(null)}>Logout</div>
        </>
        ) : (
        <>
          <Link href={"/auth/login"}>login</Link>
          <Link href={"/auth/register"}>Register</Link>
        </>
        )
        }

    </aside> 
  )
}

export default Sidebar