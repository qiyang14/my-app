import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        // Extract JWT token from request headers
        // const token = request.headers.authorization?.replace('Bearer ', '');
        const token = (request.headers.get('authorization') || '').replace('Bearer ', '');
        console.log('token',token);
        
        // if (!token) {
        //   throw new Error('Authorization token not found.');
        // }
    
        // Decode JWT token to get user ID
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as { userId: string };
        const userId = decodedToken.userId;
    
        // Fetch user's account money from the database using Prisma
        const user = await prisma.user.findUnique({ where: { id: userId }, select: { accountValue: true } });
        if (!user) {
          throw new Error('User not found.');
        }
    
        return { accountValue: user.accountValue };
      } catch (error) {
        console.error('Error getting user account money:', error);
        throw new Error('Failed to get user account money.');
      }
}