import React from 'react'

function Reward({color, reward, text, textColor}: {color:string, reward:string, text:string, textColor: string}) {
  return (
    <div className={`w-96 h-44 bg-pBlue mx-auto rounded-xl flex flex-col justify-around p-5`}
    style={{backgroundColor: color, color: textColor}}>
      <div className='text-5xl font-bold'>{reward}</div>
      <div>{text}</div>
    </div>
  )
}

export default Reward