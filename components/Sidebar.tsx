import React from 'react'

function Sidebar() {
  return (
    <aside className='flex flex-col gap-5 h-screen fixed p-10 '>
      <div>Username</div>
      <div>Your Tasks</div>
      <div>Suggest a Task</div>
      <div>Rewards</div>
      <div>Settings</div>
      <div>Logout</div>
    </aside> 
  )
}

export default Sidebar