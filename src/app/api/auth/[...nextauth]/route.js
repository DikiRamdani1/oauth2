import nextAuth from "next-auth";
import googleProvider from "next-auth/providers/google"

const option = {
    providers: [
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
  secret: process.env.NEXTAUTH_SECRET,
}
const handler = nextAuth(option)

export {
    handler as GET, handler as POST
}
