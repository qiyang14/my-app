"use client"
import { useState, useEffect, useRef  } from 'react';
import { useRouter } from 'next/router';
import { sql } from '@vercel/postgres';
import { PrismaClient } from "@prisma/client";
import type { ReactElement } from 'react'
import Navbar from "@/app/scenes/navbar"
import axios , { AxiosResponse, AxiosError } from "axios";
import Chart from 'chart.js/auto';


const prisma = new PrismaClient();

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

interface User {
  name: string;
  owner: string;
}
interface HistoricalData {
  day: number;
  tAccountValue: number;
}
// async function getPosts(){
//   const posts = await prisma.post.findMany({
//     where: {published: true},
//     include: {
//       author: {
//         select: {name: true}
//       }
//     }
//   })
//   return posts;
// }

export default function Portfolio() {
  const flexBetween = "flex items-center justify-between"
  const flexCol = "flex-col items-center flex"
  // const result = await sql`
  //   SELECT Name, Owner
  //   FROM pets;`;
  // console.log(result);
  const chartRef = useRef<Chart>();
  const [accountValue, setAccountValue] = useState<number>(1000000);
  const [cashValue, setCashValue] = useState<number>(1000000);
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  // const [currentUrl, setCurrentUrl] = useState('');

    // useEffect(() => {
    //   // Check if window object is available (client-side)
    //   if (typeof window !== 'undefined') {
    //     // Get current URL
    //     setCurrentUrl(window.location.href);
    //   }
    // }, []); // Run once when component mounts
  const getHistoricalData = async () => {
    // if(currentUrl != ''){
    try {
      // console.log('response.data',response.data.data);
      const response = await axios.get('/api/portfolio/get-historical-data');
      // console.log(data.data.data)
      // console.log('getHistoricalData is called');
      
      setHistoricalData(response.data.data);
    } catch (error) {
      // console.log(error);
      
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        // console.error('Axios request failed:', axiosError.message);
    } else {
        // console.error('Request failed:', error);
    }
    throw error; // rethrow the error for handling in the caller
      console.error('Error fetching historical prices:', error);
    }
  // }
  };

  getHistoricalData();
  useEffect(() => {
    if (historicalData.length > 0) {
      // console.log('this function is called');
      
      // if (chartRef.current) {
      //   chartRef.current.destroy();
      // }
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const values = historicalData.map(item => item.tAccountValue);
    const labels = historicalData.map(item => item.day);
    if (chartRef.current) {
      // console.log('it alr show');
      
    } else {
      chartRef.current = new Chart(ctx, {
        type: 'line', // or 'bar', 'radar', etc.
        data: {
            labels: labels, // Your days array
            datasets: [{
                label: 'Account Value',
                data: values, // Your values array
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });}
    }

  }, [historicalData])

  // const router = useRouter();
//   const getUserDetails = async () => {
//     const res = await axios.get('/api/users/me')
//     console.log(res.data);
// }
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
        // console.log('setAccountValue(data.accountValue)',data.accountValue);
        
      } catch (error) {
        console.error('Error fetching account money:', error);
      }
    };
    fetchAccountValue();
  }, []);

  
  // const users: User[] = result.rows as User[];
  // console.log(users);
  
  // const users = result.rows as User[];
  return (
    <div className={`${flexCol} h-screen app text-black `}>
      <div className = 'flex flex-row p-7 w-2/3 mx-32'>
        <div className='basis-1/3'>
        <div className = {`${flexCol}`}>
          <p className='text-white m-5'>OVERVIEW</p>
          <div className='box bg-white h-72' style={{width:'100%'}}>
            <p className='content-in-box inset-y-1.5 inset-x-1.5'>ACCOUNT VALUE</p>
            {/* {users.map((user) => (
            <b key={user.name} className='content-in-box top-6 inset-x-1.5'>this{user.name}</b>
        ))} */}
            <b className='content-in-box top-6 inset-x-1.5'>$ {accountValue.toFixed(2)}</b>

            <p className='content-in-box top-12 inset-x-1.5'>CASH</p>
            <p className='content-in-box top-16 inset-x-1.5'>$ {cashValue.toFixed(2)}</p>
          </div>
        </div>
        <div className = {`${flexCol}`}>
          <div className='text-white m-5'>GAME INFO</div>
          <div className='box bg-white h-36 'style={{width:'100%'}}>
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
          <div className='box bg-white h-96' style={{width:'80%'}}>
          <canvas id="myChart" width="100" height="100"></canvas>
          </div>
        </div>
      </div>
      
      {/* <MyButton /> */}
    </div>
  );
}

 

