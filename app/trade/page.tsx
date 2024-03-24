"use client"; 
import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from "@/app/scenes/navbar"
import FormFloatingTextarea from "@/app/trade/inputGroup"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
type Props = {}

const Trade = (props: Props) => {
  const flexBetween = "flex items-center"
  const flexCol = "flex flex-col items-center justify-between"
  const [show, setShow] = useState(true);
  const [accountValue, setAccountValue] = useState<number>(1000000);
  const [cashValue, setCashValue] = useState<number>(1000000);
  const [day, setDay] = useState<number>(1);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    alert("Clicked me!");
    console.log('button be clicked');
  }
  useEffect(() => {
    const fetchAccountValue = async () => {
      try {
        const response = await fetch('/api/user/me');
        if (!response.ok) {
          throw new Error('Failed to fetch account money');
        }
        const data = await response.json();
        // console.log('data of res of me', data.data.accountValue);
        setAccountValue(data.data.accountValue);
        setCashValue(data.data.cash)
        setDay(data.data.day)
        // console.log('setAccountValue(data.accountValue)',data.accountValue);
        
      } catch (error) {
        console.error('Error fetching account money:', error);
      }
    };
    fetchAccountValue();
  }, []);
 
  return (
    <div className={`${flexCol} app`}>
      <div className={`${flexBetween} text-white mt-14 space-x-36`}>
        <div className={`${flexCol}`}>
          <p className={`${flexBetween}`}>ACCOUNT VALUE</p>
          <p className={`${flexBetween}`}>$ {accountValue}</p>
        </div>
        <div className={`${flexCol}`}>
          <p className={`${flexBetween}`}>CASH</p>
          <p className={`${flexBetween}`}>$ {cashValue}</p>
        </div>
      </div>
      <div className='box bg-white'>
        
        <FormFloatingTextarea day={day}/>

      </div>
    </div>
  )
}

export default Trade