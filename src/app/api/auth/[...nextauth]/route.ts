import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

import User from "@/models/User"
import connect from "@/utils/db"

export const authOptions: AuthOptions = {
  providers: [

    // 🔐 Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    // 🔐 Email + Password Login
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        await connect()

        const user = await User.findOne({ email: credentials.email })
        if (!user) throw new Error("User not found")

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) throw new Error("Wrong password")

        return user
      }
    })
  ],

  session: {
    strategy: "jwt" as const
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as { _id: string })._id
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },

  pages: {
    signIn: "/login"
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
