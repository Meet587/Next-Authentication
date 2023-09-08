import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import { MongoClient, MongoClientOptions } from "mongodb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "cjhzxkjcvbzxcbcfkabd",
  },
});
