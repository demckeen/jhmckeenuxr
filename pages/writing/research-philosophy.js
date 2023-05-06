import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Philosophy() {
    return (
      <div>
        <Head>
          <title>My Research Philosophy</title>
          <meta name="Writing by J. Henry McKeen" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Splash pageTitle="My Research Philoshopy" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface" type="philosophy"/>
        <div className="blog container">
          <div className="blog">
            <p className="title">My Research Philoshopy</p>
            <p className="tagline"></p>
            <div className="content case-study philosophy">
            <p>
                Having a cognitive focus to UX Research endeavors, means primarily that &ldquo;measuring thought processes,&rdquo; matters.  It doesn&apos;t sound like it should be a controversial stance, yet in practice people frequently take quantitative data and assign qualitative value to it.  &ldquo;If something isn&apos;t clicked, that means users think that it&apos;s unimportant.&rdquo;  That may be true, it may also be true that users have misunderstood the purpose of the clickable element, have failed to perceive it entirely, or any number of other potentialities.
            </p>
            <p>
                &ldquo;Quantitative data answers &lsquo;what&apos; questions, qualitative data answers &lsquo;why&apos; questions.&rdquo;  It&apos;s a common phrase in the UX community, so why are we undisciplined in its application?  It may be partly to blame on another oft-repeated phrase: &ldquo;some data is better than no data.&rdquo;  It might be.  Yet there is also a risk to &ldquo;some data&rdquo; that is rarely acknowledged.  &ldquo;Some data&rdquo; might also be &ldquo;bad&rdquo; or &ldquo;low-quality data&rdquo; which convinces us of something that is not actually true.  It creates bias, making us more confident in our decisions than we should be (and more resistant to recognizing that error when those decisions reap undesirable results later on).  There are undoubtedly scenarios where &ldquo;some data&rdquo; is actually more dangerous than &ldquo;no data.&rdquo;  Is this one of those scenarios?  Unfortunately, the only way to answer this question definitively is to collect &ldquo;more data&rdquo; through the time-consuming processes of using the correct methodologies in the appropriate manner.
            </p>
            <p>
                Sometimes the practical realities of life preclude us from engaging in those time-consuming processes.  &ldquo;Data-backed decision-making&rdquo; is certainly desirable, but it&apos;s not the only kind of decision-making that exists.  Plenty of successes have occurred without it, and plenty of failures have been associated with it.  Sometimes riskier strategies have to be utilized, and that is fine as long as we are honest and transparent about that risk.
            </p>
            <p>
                UX Researchers frequently have to take on the mantle of epistemologists in their organizations.  Responsible for keeping us honest on the differences between what we &ldquo;want to be true,&rdquo; what we &ldquo;think is true,&rdquo; and what can be &ldquo;known&rdquo; in the first place.  I take this responsibility very seriously and see it as a core component of stakeholder support and research project management.  This may lead some to assume I never want to move fast, but if that were the case I would have pursued an academic career.  I certainly want to move fast.  However, I will always be honest about what that speed costs, in terms of confidence and risk.  Then we can decide together, if and when it is acceptable.
            </p>
            </div>
          </div>
        </div>   
      </div>
    )    
}