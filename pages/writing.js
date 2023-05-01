import Head from 'next/head'
import Image from 'next/image'
import Splash from '../components/common/splash'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="UX Writing" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
    </div>
  )
}