import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
        });
        // console.log("me found", user);
        
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}