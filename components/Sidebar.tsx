import React from 'react'
import { useUser } from '@/context/userContext'
import Link from 'next/link'

function Sidebar({isMenuVisible, setIsMenuVisible}: {isMenuVisible: boolean, setIsMenuVisible: (isVisible: boolean) => void}) {
  const {user, setUser} = useUser()
  return (
    <aside className={`flex flex-col gap-3 w-full fixed p-6 top-16 bg-pSlate ${!isMenuVisible && "opacity-0"}`}>
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