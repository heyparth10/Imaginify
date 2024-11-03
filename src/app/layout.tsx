import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider , 
  RedirectToSignIn, 
  SignedIn,
  SignedOut,
   } from "@clerk/nextjs";

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
