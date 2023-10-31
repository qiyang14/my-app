import type { ReactElement } from 'react'
import Navbar from "@/app/scenes/navbar"

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function Portfolio() {
  return (
    <div className='app'>
      <Navbar />
      {/* <MyButton /> */}
    </div>
  );
}

 

