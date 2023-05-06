import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'
import Link from 'next/link'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="UX Writing" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
      <div className="writing container">
        <div className="card blog" id="first">
          <Link href="/writing/generative-vs-tactical">
            <a>
              <span className="type">blog</span>
              <div className="info-text">
                <p className="title">Generative vs. Tactical Research</p>
                <p className="tagline"></p>
              </div>
            </a>
          </Link>
        </div>
        <div className="card article" id="second">
          <a href="https://www.uxmatters.com/mt/archives/2018/11/presenting-ux-research-findings-using-the-jobs-to-be-done-framework.php" target="_blank" rel="noreferrer">
            <span className="type">article</span>
            <div className="info-text">
              <p className="title">Presenting UX Research Findings Using the Jobs to Be Done Framework</p>
              <p className="tagline"></p>
            </div>
          </a>
        </div>
        <div className="card blog" id="third">
          <Link href="/writing/henrys-manual">
            <a>
              <span className="type">blog</span>
              <div className="info-text">
                <p className="title">Henry&apos;s User Manual</p>
                <p className="tagline">A guide to working with your UX Researcher</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="card article" id="fourth">
          <a href="https://www.uxmatters.com/mt/archives/2019/02/the-pitfalls-of-personas-and-advantages-of-jobs-to-be-done.php" target="_blank" rel="noreferrer">
            <span className="type">article</span>
            <div className="info-text">
              <p className="title">The Pitfalls of Personas and the Advantages of Jobs to Be Done</p>
              <p className="tagline"></p>
            </div>
          </a>
        </div>
        <div className="card blog" id="fifth">
          <Link href="/writing/research-philosophy">
            <a>
              <span className="type">blog</span>
              <div className="info-text">
                <p className="title">My Research Philosophy</p>
                <p className="tagline"></p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}