import { useState} from 'react'
import Logo from "../../../public/icon.png"
// import Link from "@/app/scenes/navbar/Link"
import Link from 'next/link'
import { log } from 'console';

type Props = {isTopOfPage: boolean;}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between"
    const flexCol = "flex-col items-center justify-between"
    const [portActive, setPortActive] = useState(true);
    const [tradeActive, setTradeActive] = useState(false);
    const [resActive, setResActive] = useState(false);
    const [gameActive, setGameActive] = useState(false);

    const handleClick1 = () => {       
        setPortActive(true);
        setTradeActive(false);
        setResActive(false);
        setGameActive(false);
      };
    const handleClick2 = () => {       
        setPortActive(false);
        setTradeActive(true);
        setResActive(false);
        setGameActive(false);
    };
    const handleClick3 = () => {       
        setPortActive(false);
        setTradeActive(false);
        setResActive(true);
        setGameActive(false);
    };
    const handleClick4 = () => {       
        setPortActive(false);
        setTradeActive(false);
        setResActive(false);
        setGameActive(true);
    };
    const handleClick5 = () => {       
        setPortActive(false);
        setTradeActive(false);
        setResActive(false);
        setGameActive(false);
    };
  return (
   <nav style={{height: 8 + 'em'}}>
    <div
    className={`${flexCol} bg-dark-blue fixed top-0 z-30 w-full py-6 text-white`}
    >
        <div
        className={`${flexBetween} mx-auto w-5/6`}
        >
            <div
            className={`${flexBetween}`}
            >
                <div className={`${flexBetween} gap-8 m-5`}>
                    <img alt="logo" src="/icon.png"/>
                    <b>Stock Prediction</b>
                </div>
                
            </div>
        </div>
        <div className='bg-dark-blue h-10'>
            <div className={`${flexBetween} hidden md:flex mx-auto w-5/6`}>
                <div
                className={`${flexBetween} gap-20 text-sm`}
                >   
                    <div className={portActive ? 'bg-menu p-2.5 px-6':""}>
                        <Link href="/" onClick={handleClick1}>PORTFOLIO</Link>
                    </div>
                    <div className={tradeActive ? 'bg-menu p-2.5 px-6':""}>
                        <Link href="/trade" onClick={handleClick2}>TRADE</Link>
                    </div>
                    <div className={resActive ? 'bg-menu p-2.5 px-6':""}>
                        <Link href="/research" onClick={handleClick3}>RESEARCH</Link>
                    </div>
                    <div className={gameActive ? 'bg-menu p-2.5 px-6':""}>
                        <Link href="/game" onClick={handleClick4}>GAME</Link>
                    </div>
                </div>

                <Link href="/login" onClick={handleClick5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                        <path d="M20 32C15.8333 32 12.15 29.8667 10 26.6667C10.05 23.3333 16.6667 21.5 20 21.5C23.3333 21.5 29.95 23.3333 30 26.6667C28.8982 28.3073 27.4098 29.6519 25.6659 30.582C23.9221 31.512 21.9763 31.999 20 32ZM20 8.33333C21.3261 8.33333 22.5979 8.86011 23.5355 9.79779C24.4732 10.7355 25 12.0072 25 13.3333C25 14.6594 24.4732 15.9312 23.5355 16.8689C22.5979 17.8065 21.3261 18.3333 20 18.3333C18.6739 18.3333 17.4022 17.8065 16.4645 16.8689C15.5268 15.9312 15 14.6594 15 13.3333C15 12.0072 15.5268 10.7355 16.4645 9.79779C17.4022 8.86011 18.6739 8.33333 20 8.33333ZM20 3.33333C17.8113 3.33333 15.644 3.76442 13.622 4.602C11.5999 5.43958 9.76254 6.66724 8.2149 8.21488C5.08929 11.3405 3.33334 15.5797 3.33334 20C3.33334 24.4203 5.08929 28.6595 8.2149 31.7851C9.76254 33.3328 11.5999 34.5604 13.622 35.398C15.644 36.2356 17.8113 36.6667 20 36.6667C24.4203 36.6667 28.6595 34.9107 31.7851 31.7851C34.9107 28.6595 36.6667 24.4203 36.6667 20C36.6667 10.7833 29.1667 3.33333 20 3.33333Z" fill="white"/>
                    </svg>
                </Link>
                    
                   
               
                
            </div>
            <div className="w-full border-t border-gray-500"></div>
        </div>
     
        
    </div>
   </nav>
  )
}

export default Navbar