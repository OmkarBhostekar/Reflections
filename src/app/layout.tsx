import "./globals.css";
import { unstable_getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";
import Login from "components/Login";
import Navbar from "components/Navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  const providers = await getProviders();
  console.log(session);

  if (!session)
    return (
      <html>
        <head></head>
        <body>
          <Login providers={providers} />
        </body>
      </html>
    );
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar/>
        {children}</body>
    </html>
  );
}
