import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Groceries() {
    return (
      <div>
        <Head>
          <title>Automotive Ads &amp; Targeted Ad&#8209;Display</title>
          <meta name="Writing by J. Henry McKeen" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Splash pageTitle="Automotive Ads &amp; Targeted Ad&#8209;Display" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface" type="ads"/>
        <div className="blog container">
          <div className="blog">
            <p className='title'>Coming Soon</p>
            {/* <p className="title">Automotive Ads &amp; Targeted Ad&#8209;Display</p> */}
            <p className="tagline"></p>
            <div className="content">
            </div>
        </div>
      </div>
    </div>
  )
}