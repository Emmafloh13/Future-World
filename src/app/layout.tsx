import {Kdam_Thmor_Pro} from 'next/font/google'
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass'


const kdam_thmor_pro = Kdam_Thmor_Pro({
  weight: ['400'],
  subsets: ["latin"],
})

export default function RootLayout({
  children,}: Readonly<{
  children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className={kdam_thmor_pro.className}>

      <Header/> 

        {children}

        <Footer/>

        </body>
    </html>
  );
}
