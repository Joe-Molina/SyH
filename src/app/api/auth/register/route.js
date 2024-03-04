import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
import bcrypt from 'bcrypt'

export async function POST(request){
    try {
        const data = await request.json();

        console.log(data)

    const userFound = await prisma.users.findUnique({
        where: {
          email: data.email,
        },
      });
  
      if (userFound) {
        return NextResponse.json(
          {
            message: "Email already exists",
          },
          {
            status: 400,
          }
        );
      }
      
      const hashedPassword = await bcrypt.hash(data.password, 10);

      console.log(hashedPassword)

    const newUser = await prisma.users.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashedPassword,
          },
    })
    
    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
          message: 'tomal'
        })
    }
}