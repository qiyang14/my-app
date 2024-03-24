import { getDataFromToken } from "@/helpers/getDataFromToken";
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

interface StockData {
    id: number;
    stock_symbol: string;
}

interface UserData {
    id: string;
    day: number;
}

export async function GET(request:NextRequest, {params}: any) {
    try {
        const stock_symbol = params.stock_symbol;
        const userId = await getDataFromToken(request);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
        });
            const stock = await prisma.stock.findFirst({
                where: { stock_symbol: stock_symbol },
                select: { id: true, stock_symbol: true },
              });
              if (!stock) {
                throw new Error(`Stock with symbol ${stock_symbol} not found`);
              }
            //   console.log(stock);
          
        const stockPrice = await prisma.stockprice.findFirst({
        where: {
            stock_id: stock.id,
            day: user.day,
        },
        select: { close: true },
        });
        if (!stockPrice) {
        throw new Error(`Close value not found for stock ${stock_symbol} on ${user.day}`);
        }
        // console.log(stockPrice);

        return NextResponse.json({
            mesaaage: "Stockprice found",
            data: stockPrice
        })
    } catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
}