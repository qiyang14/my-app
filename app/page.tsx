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
  const flexCol = "flex flex-col items-center justify-between"
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
      <div
      className = {`${flexBetween} x-5/6`}
      >
      <Navbar 
      isTopOfPage={isTopOfPage}
      />
      </div>
      <div 
      className = {`${flexCol} x-5/6`}
      >
        <p className='text-white'>OVERVIEW</p>
        <div className='box bg-white'>
          <p className='content-in-box inset-y-1.5 inset-x-1.5'>ACCOUNT VALUE</p>
          <b className='content-in-box top-6 inset-x-1.5'>$100,000.00</b>
          <p className='content-in-box top-12 inset-x-1.5'>CASH</p>
          <p className='content-in-box top-16 inset-x-1.5'>$100,000.00</p>
        </div>
      </div>
      {/* <MyButton /> */}
    </div>
  );
}

 

