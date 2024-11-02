import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {IBM_Plex_Sans} from "next/font/google" ;
import { cn } from "@/lib/utils";
import { ClerkProvider , 
  RedirectToSignIn, 
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";

const IBMplex = IBM_Plex_Sans(
  {
    subsets : ["latin"] ,
    weight : ['400' , '500' , '600' , '700'] ,
    variable : '--font-ibm-plex'
  }
);
export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
          <RedirectToSignIn />
          </SignedOut>
          <SignedIn>
          {children}
          </SignedIn>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
