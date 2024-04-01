import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { sql } from '@vercel/postgres';

interface User {
  id: string;
  cash: number;
  accountValue: number;
  day: number; // Or whatever type `day` should be
}

interface FormData {
  action: 'Buy' | 'Sell'; // action can only be 'Buy' or 'Sell'
  quantity: number;
  price: number;
}
export async function POST(request:NextRequest) {
    try {
        const formData = await request.json()
        const action = formData.action
        const stock_id = formData.stock_id
        const quantity = formData.quantity

        // Log form data (for demonstration purposes)
        console.log('Received form data:', action);

        // find user
        const userId = await getDataFromToken(request);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
        });

        if (!user) {
            throw new Error('User not found');
        }
        const qtyPass: number = parseInt(formData.quantity, 10);
        const dayforcreateHistoricalTransactionEntry: number = user.day
        await handleUserStock(userId,stock_id, action, quantity)
        const valueReturned = await handleUserAccount(user, formData, stock_id)
        console.log('valueReturned', valueReturned);
        
        // const avForHT = parseFloat(valueReturned)
        const avForHT = valueReturned

        await createHistoricalTransactionEntry(dayforcreateHistoricalTransactionEntry, formData.action, userId, stock_id, qtyPass, avForHT)
        return NextResponse.json({ formData }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
}

async function handleUserStock(userId: number, stock_id: String, action: String, quantity: number): Promise<void>{
    try {
        const userHolding = 
        // await sql`SELECT * FROM userholding WHERE userId = ${userId} AND stockId = ${stock_id}`
        await sql`SELECT COUNT(*) AS count_entries FROM userholding WHERE userId = ${String(userId)} AND stockId = ${String(stock_id)}`;
        const countEntries = userHolding.rows[0].count_entries;
        if (countEntries == 0) {
        // if (1) {
          // If user holding doesn't exist, add a new entry
          if (action == 'Buy'){
            await sql`INSERT INTO userholding (userId, stockId, quantity) VALUES (${String(userId)}, ${String(stock_id)}, ${Number(quantity)})`;
            console.log('create the user hodling');
          }
        } else {
            // console.log(userHolding);
          // If user holding exists, update the quantity
          if (action == 'Buy'){
            await sql`UPDATE userholding SET quantity = quantity + ${Number(quantity)} WHERE userId = ${String(userId)} AND stockId = ${String(stock_id)}`;
          } else if (action == 'Sell'){
            await sql`UPDATE userholding SET quantity = quantity - ${Number(quantity)} WHERE userId = ${String(userId)} AND stockId = ${String(stock_id)}`;
          }

        console.log('update the user hodling');

        }
        console.log('User stock handling successful');
      } catch (error) {
        console.error('Error:', error);
      } 
}

async function handleUserAccount(user: User, formData: FormData, stock_id: String): Promise<number>{
    let updatedCash = user.cash;
    let updatedAccountValue = user.accountValue;
    let day: number= Number(user.day)
    const updatedday: number = day + 1
    
    const stockPrice = await prisma.stockprice.findFirst({
      where: {
          stock_id: {
            equals: stock_id as string | undefined, // Assuming stock_id is a string
          },
          day: {
              equals: updatedday, // Assuming updatedday is a date
          },
      },
      select: { close: true },
  });
  
    if (!stockPrice) {
      throw new Error('stockPrice not found.');
    }
    const stockPriceCloseData= stockPrice.close
    console.log('stockPriceCloseData', stockPriceCloseData);
    const stockholding = await prisma.userholding.findFirst({
        where: {
            stockid: stock_id as string | undefined,
            userid: user.id,
        },
        select: { quantity: true },
    });
    if (!stockholding) {
      throw new Error('stockholding not found.');
    }
    // Update cash and account value based on action
    console.log('stockholding',stockholding);
    
    if (formData.action === 'Buy') {
    updatedCash -= formData.quantity * formData.price;
    } else if (formData.action === 'Sell') {
    updatedCash += formData.quantity * formData.price;
    } else {
    throw new Error('Invalid action');
    }
    updatedAccountValue = updatedCash + stockPriceCloseData*stockholding.quantity;
    console.log('updatedCash, updatedAccountValue', updatedCash, updatedAccountValue);
    updateUserAccount(user.id, updatedAccountValue, updatedCash, updatedday)
    return updatedAccountValue
}

async function updateUserAccount(userId: string, newAccountValue: number, newCash: number, newDay: number): Promise<void> {
    try {
      await prisma.user.update({
        where: {
          id: userId, // Assuming the `id` field is used to uniquely identify users
        },
        data: {
          accountValue: newAccountValue,
          cash: newCash,
          day: newDay
        },
      });
      console.log('User account updated successfully.');
    } catch (error) {
      console.error('Error updating user account:', error);
    }
}

async function createHistoricalTransactionEntry(day: number, action: string, userId: string, stockId: string, quantity:number, tAccountValue: number) {
    try {
      const transaction = await prisma.historicalTransaction.create({
        data: {
          day,
          action,
        user: { connect: { id: userId } },
        stock: { connect: { id: stockId } },
        quantity: quantity,
        tAccountValue: tAccountValue
        },
      });
      console.log('Historical Transaction created:', transaction);
    } catch (error) {
      console.error('Error creating historical transaction:', error);
    } finally {
      await prisma.$disconnect();
    }
}

