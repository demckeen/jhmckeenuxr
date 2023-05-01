import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Henry's User Manual</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="Henry's User Manual" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
      <div className="blog container">
        <div className="blog">
          <p className="title">Henry's User Manual</p>
          <p className="tagline"></p>
          <p className="content"></p>
        </div>
      </div>
    </div>
  )
}