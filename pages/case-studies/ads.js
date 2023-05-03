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
        <div className="blog container ads">
          <div className="blog">
            <p className="title">Automotive Ads &amp; Targeted Ad&#8209;Display</p>
            
            <div className="content case-study groceries">
              <p className="section-title">Problem:</p> 
              <p className="subhead">We&apos;re Spending a LOT on Retargeted Ad-Display</p>
              <p>There was research coming out of MIT at the time that was suggesting a critical aspect of retargeted ad efficacy was matching the appropriate &ldquo;level&rdquo; at which the user had last been exposed to the merchants online information. &ldquo;Level&rdquo; in this case referred to how deep into the merchandise content that the user had visited, and there were three levels:</p>
              <ol>
                <li>Only visiting the home screen</li>
                <li>Having visited a product listing page</li>
                <li>Having visited a product detail page</li>
              </ol>
            <p>
              If a user had last been at the listing page level, then a retargeted ad with listing page forms of content would be more capable of triggering a return to the merchant&apos;s site.
            </p>
            <p>
              There was also research questioning the value of selecting different pay schedules for whether or not the page a user was currently on happened to be thematically aligned with the content of the ad.
            </p>
            <p>
              A lot of this research suggested that implicit through processes were influencing many of the affects. We attempted to look for indirect evidence of differential implicit processes by running an experiment using eye-tracking hardware, combined with a post-experiment debriefing and questionnaire.
            </p>
            <p>
              The experiment involved having participants going through a 3x3x2 set with randomized trials. They were shown a prime (either a home screen, product listing page, or product detail page) a series of masks (visual noise to return starting focus position to baseline) and a retargeted ad (either aligned or not aligned to level, in a page either aligned or not aligned in terms of thematic content). These exposures were extremely brief, on the order of a half second.
            </p>
            <div className='img-box ads3x3'>
              <Image src="/images/3x3x2.png" width="2401px" height="2573px" alt="graphic representing the two sets of 3x3 trials with either aligned or unaligned thematic content"></Image>
            </div>
            <p>
              After the participants had gone through the exposures, we explained the purpose of the experimented and asked them to predict if their results would show any consistently differentiating patterns and in what direction. The participants were all convinced there would be no consistent patterns differentiating any of the variable states. We might as well have been trying to convince them that I had magic powers.
            </p>
            <p className='section-title'>Findings</p>
            <p className='subhead'>Implicit Processes are VERY Sneaky</p>
            <p>
              What we found was that, while &ldquo;level&rdquo; alignment had no specific impact in this setting (a detail page content ad was always more effective than the other ad conditions regardless of prime alignment), the context alignment with the page the retargeted ad was on had a very dramatic and predictable relationship.  When the content was not aligned, the participants attention stopped at the ads much more quickly compared to when it was aligned.  However, when there was alignment, they remained focused on the ad for much longer compared to when there was no alignment.  This suggested that while the ad may &ldquo;stick out&rdquo; more in a contextually unaligned space, the likelihood of increased attention (and potential processing influence) would occur in the contextually aligned spaces.</p>
            <p>
              These findings positioned the ad-display team to alter their strategies.  
            </p>
            <ul>
              <li>Increase click-through rates for the same amount of money we had been spending, by redirecting funds for payment schedules specifically to contextually aligned pages.</li>
              <li>Maintain click-through rates where they were for less money than had been spent up to that point, by simply decreasing budget spent on schedules specifically for contextually unaligned pages.</li>
              <li>Increase click-through rates even MORE by increasing budget specifically towards contextually aligned pages.</li>
            </ul>
            <p>
              Being able to fluidly manipulate these strategies was valuable for the team, as car dealerships are frequently more motivated to push for sales during certain time periods in monthly cycles.  One strategy might be optimized for the first two weeks of the month, while another might be optimized for the last two weeks of the month.  Overall, we were in a better position to compliment the client&apos;s needs in a dynamic manner while still being measured with costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}