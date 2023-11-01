import React from 'react'
import Navbar from "@/app/scenes/navbar"

type Props = {}

const Trade = (props: Props) => {
  const flexBetween = "flex items-center"
  const flexCol = "flex flex-col items-center justify-between"
  return (
    <div className='app'>
      <Navbar isTopOfPage={true}/>
      <div className={`${flexBetween} text-white`}>
        <div className={`${flexCol} pl-20`}>
          <p className={`${flexBetween}`}>ACCOUNT VALUE</p>
          <p className={`${flexBetween}`}>$100,000.00</p>
        </div>
        <div className={`${flexCol}`}>
          <p className={`${flexBetween}`}>CASH</p>
          <p className={`${flexBetween}`}>$100,000.00</p>
        </div>

      </div>
      <div className='box bg-white'>
        <b className='content-in-box inset-y-1.5 inset-x-1.5'>DAY: 267</b>
        <p className='content-in-box top-6 inset-x-1.5'>Predicted Price</p>
      </div>
    </div>
  )
}

export default Trade