import React from 'react'
import Navbar from "@/app/scenes/navbar"
import Button from 'react-bootstrap/Button';

type Props = {}

const Research = (props: Props) => {
  const flexBetween = "flex items-center"
  const flexCol = "flex flex-col items-center justify-between"
  return (
    <div className={`${flexCol} app`}>
      <div className='box bg-white h-96'>
        <div className={`${flexBetween} mt-20 space-x-7 ml-6`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="41" viewBox="0 0 31 41" fill="none">
          <path d="M20.8143 12.4864C25.2429 10.0636 31 11.1818 31 11.1818C27.0143 6.70909 22.3643 6.89545 19.0429 7.82727V7.45455C21.4786 4.47273 26.35 4.65909 26.35 4.65909C22.8071 2.05 19.7071 2.79545 17.7143 3.72727C16.6071 1.49091 15.5 0 15.5 0C14.6143 1.30455 13.95 2.60909 13.2857 3.91364C11.2929 2.79545 7.97143 2.05 4.42857 4.65909C4.42857 4.65909 9.52143 4.65909 11.9571 7.82727C8.63571 6.89545 3.98571 6.70909 0 11.1818C0 11.1818 5.75714 10.0636 10.1857 12.4864C5.53572 14.7227 2.21429 19.9409 2.21429 26.0909C2.21429 34.2909 8.19286 41 15.5 41C22.8071 41 28.7857 34.2909 28.7857 26.0909C28.7857 19.9409 25.4643 14.7227 20.8143 12.4864ZM23.9143 29.4455C23.6929 30.1909 23.4714 30.9364 23.0286 31.6818L19.9286 27.9545L16.6071 31.6818L20.15 35.5955C19.4857 35.9682 19.0429 36.3409 18.3786 36.7136L15.5 33.5455L12.6214 36.7136C11.9571 36.5273 11.2929 36.1545 10.85 35.5955L14.3929 31.6818L11.0714 27.9545L7.75 31.4955C7.52857 30.75 7.08571 30.0045 6.86429 29.2591L9.96428 26.0909L7.08571 22.7364C7.30714 21.9909 7.52857 21.2455 7.97143 20.5L11.0714 24.2273L14.3929 20.5L10.85 16.5864C11.5143 16.2136 11.9571 15.8409 12.6214 15.4682L15.5 18.6364L18.3786 15.4682C19.0429 15.6545 19.7071 16.0273 20.15 16.5864L16.6071 20.5L19.9286 24.2273L23.25 20.6864C23.4714 21.4318 23.9143 22.1773 24.1357 22.9227L21.0357 26.0909L23.9143 29.4455ZM15.5 22.3636L18.8214 26.0909L15.5 29.8182L12.1786 26.0909L15.5 22.3636Z" fill="black"/>
          </svg>
            <h1>ABC</h1>
        </div>
        <h2 className='ml-6 mt-4'><b>42.45</b>   SGD</h2>

      </div>
      <div className={`${flexBetween}`}>
        <h1 className='m-10 text-white'>HISTORICAL DATA</h1>
        <button className={`${flexBetween} bg-blue p-3 rounded-lg text-white`}>
          DOWNLOAD DATA IN  XLSX FILE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ml-3'>
          <path d="M8 17V15H16V17H8ZM16 10L12 14L8 10H10.5V6H13.5V10H16ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" fill="white"/>
          </svg>
        </button>
      </div>
      <div className='box bg-white h-96'>
      <table className='mx-auto mt-4'>
        <tr>
          <th>DAY</th>
          <th>OPEN</th> 
          <th>HIGH</th>
          <th>LOW</th>
          <th>CLOSE</th>
          <th>VOLUME</th>
        </tr>
        <tr>
          <td>1</td>
          <td>42.259998</td> 
          <td>42.400002</td>
          <td>41.799999</td>
          <td>42.139999</td>
          <td>9921100</td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Research