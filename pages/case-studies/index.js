import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'
import Link from 'next/link'

export default function CaseStudies() {
  return (
    <div>
      <Head>
        <title>Case Studies</title>
        <meta name="Case Studies By J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="Case Studies" mainSaying="" textBody="" actionButton="" imgUrl="" imgAlt="" type=""/>
      <div className="case-studies writing container">
        <div className="card case-study" id="first">
          <Link href="/case-studies/groceries">
            <a>
              <span className="type">case study</span>
              <div className="info-text">
                <p className="title">Groceries &amp; Gig&#8209;Economy</p>
                <p className="tagline"></p>
              </div>
            </a>
          </Link>
        </div>
        <div className="card case-study" id="second">
        <Link href="/case-studies/ads">
            <a>
              <span className="type">case study</span>
              <div className="info-text">
                <p className="title">Automotive Sales &amp; Targeted Ad&#8209;Display</p>
                <p className="tagline"></p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}