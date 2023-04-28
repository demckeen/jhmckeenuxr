// components/layout.js

import Header from './common/header';
import Footer from './common/footer';

export default function Layout ({ children }) {
  return (
    <>
      <Header />
        <main>{ children }</main>
      <Footer />
    </>
  )
}