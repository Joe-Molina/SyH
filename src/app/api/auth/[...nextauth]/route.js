import {prisma} from '@/app/libs/prisma'
import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        const userFound = await prisma.users.findFirst({
          where: {
            email: credentials.email
          }
        })
        console.log('hambre')

        if (!userFound) throw new Error('No user found')

        console.log(userFound)

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        console.log(matchPassword)

        if (!matchPassword) throw new Error('Wrong password')

        return {
            id: userFound.id,
            name: userFound.username,
            email: userFound.email,
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/"
  }
};

export async function loginIsRequiredServer(){
  const session = await getServerSession(authOptions)
  console.log(session)

  if(!session) return redirect("/auth/login")
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

