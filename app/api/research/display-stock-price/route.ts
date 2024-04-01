import { getDataFromToken } from "@/helpers/getDataFromToken";
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    const userId = await getDataFromToken(request);
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
    });
     
    if (!user) {
        throw new Error('user not found.');
      }
    try {
        const stockPrices = await prisma.stockprice.findMany({
            where: {
            day: {
                lt: user.day, // Filter for day > 46
            },
            },
            orderBy: {
            day: 'desc', // Order by day in descending order
            },
            select: {
            open: true,
            high: true,
            low: true,
            close: true,
            volume: true,
            day: true,
            },
        });
        return NextResponse.json({
            mesaaage: "Stock prices found",
            data: stockPrices
        })
    } catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
   
}