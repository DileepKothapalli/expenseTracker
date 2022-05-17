import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "998124565016-r1q9h37lqb7932r4cbngaudcdmthvbiu.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = {
          id: 1,
          name: "Jean Dupont",
          email: "jean.dupont@yopmail.com",
        };

        if (user.id === 1) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        // If you return null or false then the credentials will be rejected
        return null;
        // You can also Reject this callback with an Error or with a URL:
        // throw new Error('error message') // Redirect to error page
        // throw '/path/to/redirect'        // Redirect to a URL
      },
    }),
  ],

  secret: "process.env.NEXT_PUBLIC_NEXTAUTH_SECRET",
});

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}
