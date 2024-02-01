import React from 'react'
import Navbar from "@/app/scenes/navbar"

type Props = {}

const Game = (props: Props) => {
  return (
    <div className='app flex items-center justify-between flex-col'>
      {/* ml-96 mx-40 */}
      <div className='h-screen'>
      <ul className='list-disc list-outside text-white flex flex-col mx-32'>
        <li>Your starting capital is $100,000.</li>
        <li>Your action for each day is Buy(B), Sell(S) or Hold(H)</li>
        <li>When you buy, you will utilize at least 50% of your capital. You cannot break up your buy into smaller portions</li>
        <li>When you sell, you will sell the quantity that you are holding if half your holdings is in cash</li>
        <li>You must at least have executed 30% trading. For example, for 100 days, you should have executed at least 30 trades (buying and selling). A hold is considered as a non-trade</li>
        <li>You will write down your prediction for the following day based on the model you have created before the actual price is revealed to you</li>
        <li>After each price is revealed, you will enter the data into your personal log sheet and update the columns corresponding for the cash and share holdings. These numbers will change if a buy or sell trade is executed</li>
        <li>You must write with pen and no alteration of any form is allowed. Any amendment due to errors must be counterchecked by the administrator</li>
        <li>A buy order is considered to be executed at the mid-value of the high and low price of the day.</li>
        <li>A sell order is considered to be executed at the closing price for the day</li>
        <li>Short selling (selling shares you do not own) is not allowed</li>

      </ul>
      </div>
      
    </div>
  )
}

export default Game