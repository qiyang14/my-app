import { getDataFromToken } from "@/helpers/getDataFromToken";
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {
        // const userId = await getDataFromToken(request);
        // const user = await prisma.user.findUnique({
        //     where: {
        //         id: userId
        //     },
        // });
        const stocks = await prisma.stock.findMany();
        return NextResponse.json({
            mesaaage: "Stocks found",
            data: stocks
        })
    } catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
   
}