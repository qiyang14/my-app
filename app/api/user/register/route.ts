import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        // const salt = await bcryptjs.genSalt(10)
        // const hashedPassword = await bcryptjs.hash(password, salt)


        // const savedUser = await newUser.save()
        // console.log(savedUser);
        const savedUser = await prisma.user.create({
            data: {
               name,
               password,
               email,
            }
         })
         console.log(savedUser);
        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}