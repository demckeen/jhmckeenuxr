import Head from 'next/head'
import Image from 'next/image'
import Splash from '../components/common/splash'
import Intro from '../components/resume/intro-block'
import Experience from '../components/resume/experience'
import Education from '../components/resume/education'
import Publication from '../components/resume/publication'
import Skills from '../components/resume/skills'

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta name="Resume for J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="Resume" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
      <Intro />
      <Experience />
      <Education />
      <Publication />
      <Skills />
    </div>
  )
}