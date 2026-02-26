// components/layout.js
import { Montserrat } from 'next/font/google';
import Header from './common/header';
import Footer from './common/footer';

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Layout ({ children }) {
  return (
    <>
      <Header className={montserrat.className} />
        <main className={montserrat.className}>{ children }</main>
      <Footer className={montserrat.className} />
    </>
  )
}