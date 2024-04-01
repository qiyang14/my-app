import { getDataFromToken } from "@/helpers/getDataFromToken";
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        try{
            const hisData = await prisma.historicalTransaction.findMany({
                where: {
                    user_id: userId
                },
                select: {
                  day: true,
                  tAccountValue: true,
                },
                orderBy: {
                  day: 'asc',
                },
              });
            // console.log('hisData',hisData);
            return NextResponse.json({
                mesaaage: "Historical Data Found",
                data: hisData
            })
        }catch(e){
            console.log(e);
        }
    } catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
}