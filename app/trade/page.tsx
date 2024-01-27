"use client"; 
import React from 'react'
import Navbar from "@/app/scenes/navbar"
import FormFloatingBasicExample from "@/app/trade/inputGroup"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
type Props = {}

const Trade = (props: Props) => {
  const flexBetween = "flex items-center"
  const flexCol = "flex flex-col items-center justify-between"
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    alert("Clicked me!");
    console.log('button be clicked');
  }
    
  return (
    <div className={`${flexCol} app`}>
      <div className={`${flexBetween} text-white mt-32 space-x-36`}>
        <div className={`${flexCol}`}>
          <p className={`${flexBetween}`}>ACCOUNT VALUE</p>
          <p className={`${flexBetween}`}>$100,000.00</p>
        </div>
        <div className={`${flexCol}`}>
          <p className={`${flexBetween}`}>CASH</p>
          <p className={`${flexBetween}`}>$100,000.00</p>
        </div>
      </div>
      <div className='box bg-white'>
        
        <FormFloatingBasicExample/>

      </div>
    </div>
  )
}

export default Trade