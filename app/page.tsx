"use client"; 
import type { ReactElement } from 'react'
import Navbar from "@/app/scenes/navbar"

import { useEffect, useState } from "react";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function Portfolio() {
  const flexBetween = "flex items-center justify-between"
  const flexCol = "flex-col items-center flex"
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`app`}>
      <div className = 'flex flex-row'>
        <div className='basis-1/3'>
        <div className = {`${flexCol}`}>
          <p className='text-white m-5'>OVERVIEW</p>
          <div className='box bg-white h-72'>
            <p className='content-in-box inset-y-1.5 inset-x-1.5'>ACCOUNT VALUE</p>
            <b className='content-in-box top-6 inset-x-1.5'>$100,000.00</b>
            <p className='content-in-box top-12 inset-x-1.5'>CASH</p>
            <p className='content-in-box top-16 inset-x-1.5'>$100,000.00</p>
          </div>
        </div>
        <div className = {`${flexCol}`}>
          <div className='text-white m-5'>GAME INFO</div>
          <div className='box bg-white h-36'>
            <p>CURRENT RANK</p>
            <p>23/36</p>
            <p>TOP PLAYER</p>
            <div>
              <p>ericeco123</p>
              <p>$128,000.00</p>
            </div>
          </div>
        </div>
        </div>
        <div className = {`${flexCol} basis-2/3`}>
          <p className='text-white m-5'>PERFORMANCE</p>
          <div className='box bg-white h-96'>
            
          </div>
        </div>
      </div>
      
      {/* <MyButton /> */}
    </div>
  );
}

 

