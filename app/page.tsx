import Image from 'next/image'
import Navbar from "@/app/scenes/navbar"

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      {/* <MyButton /> */}
    </div>
  );
}
