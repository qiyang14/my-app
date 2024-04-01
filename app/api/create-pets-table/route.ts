import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {stock} from '@/data/stockPriceInfo';
import {stockPriceLaterDay} from '@/data/stockPriceforLaterDate';

 
export async function GET(request: Request) {
  try {
    const len = stock["ICM(1 year)"].length
    for (let i = 2; i < len; i++) {
      const day = stock["ICM(1 year)"][i]["Day"]
      const Open = stock["ICM(1 year)"][i]["Open"]
      const High = stock["ICM(1 year)"][i]["High"]
      const Low = stock["ICM(1 year)"][i]["Low"]
      const Close = stock["ICM(1 year)"][i]["Close"]
      const Volume = stock["ICM(1 year)"][i]["Volume"]
      console.log('i:',i, 'len', len);
      try {
        const result =
        //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
        await sql`INSERT INTO stockprice (day, Open, High, Low, Close, Volume)
        VALUES (${day}, ${Open}, ${High}, ${Low}, ${Close}, ${Volume});`;

      } catch (e) {
        console.log(e);
        
      }
      

    }
    
    console.log('stock', stock["ICM(1 year)"][1]["Day"]);
    console.log('length', len);
    

    try{
      const result = 0
      return NextResponse.json({ result }, { status: 200 });

      //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
      // await sql`INSERT INTO stockprice (day, Open, High, Low, Close, Volume)
      // VALUES (${day}, ${Open}, ${High}, ${Low}, ${Close}, ${Volume});`;

    } catch (e){
      console.log('got err', e);    
    }
    
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}