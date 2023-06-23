'use client';
import './globals.css'
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scrollbar-w-2 w-full h-screen overflow-scroll scrollbar scrollbar-h-1 scrollbar-track-transparent  scrollbar-thumb-yellow-300  scrollbar-thumb-rounded-md  scroll-smooth' >
      <head />
      <body> <ThemeProvider enableSystem={true} attribute="class">{children} </ThemeProvider> </body>
    </html>
  )
}
