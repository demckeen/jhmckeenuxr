import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Generative vs. Tactical</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="Generative vs. Tactical" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface" type="blog"/>
      <div className="blog container">
        <div className="blog">
          <p className="title">Generative Research vs. Tactical Research</p>
          <p className="tagline"></p>
          <div className="blog-intro">
            <p className="subhead">Summary:</p>
            <ul>
                <li>Understanding the distinction between Tactical and Generative research can facilitate cooperative interaction with a UX Researcher</li>
                <li>Generative Research is used for creating complex understandings of your user&apos;s mental models</li>
                <li>Tactical Research is used for testing hypothesized experiences meant to be aligned with your user&apos;s mental models</li>
            </ul>
          </div>
          <div className="content">
            <p className="subhead">Why does the distinction matter?</p>
            <p>As a UX Researcher, it really helps for me to have this shared understanding with my stakeholders because <strong>it makes cooperative communication a lot easier.</strong> I have a google document that I like to share with people, I call it my <a href="/writing/henrys-manual" target="_blank" rel="_noreferrer">&lsquo;user&apos;s manual&rsquo;</a> - as in, it&apos;s a guide for how to get the BEST work out of me when we are working together. One of the first things we tell people is that a good way to get the ball rolling is to speak to what problem you are trying to solve for the user, and what questions would be helpful to answer in terms of making it easier for us to solve that problem?</p>
            <p>
            Then one of the next big steps is defining whether or not those questions are generative or tactical in nature. <strong>This can be very informative because there are certain methodologies which lend themselves to answering each type of question well. Certain methodologies employ activities associated with greater or lesser costs, longer or shorter timelines, etc. This makes it a lot easier for everyone to be level set around shared expectations</strong> that are accurate and empowering.
            </p>
            <p className='section-title'>Tactical Research</p>
            <p>Sometimes people refer to &lsquo;tactical&rsquo; research by other names like &lsquo;evaluative&rsquo; or &lsquo;experimental.&rsquo; Any of these terms are acceptable. At their core, they are all speaking to the idea that <strong>this type of research is getting at some form of measurable reaction to a stimulus that we (the TESTERS) are controlling.</strong> We have prototypes or mocks for them to react towards. We have survey questions for them to react to. We have distinct conditions for participants to be exposed to and provide a reaction towards, etc.</p>
            <p>
            It is, at the end of the day, a more simple <strong>stimulus-response form of data collection.</strong>  It is grounded in something concrete or tangible/perceivable by the participants. Are you more or less likely to click when it looks like &lsquo;this&rsquo; or when it looks like &lsquo;that&rsquo;? Why? When given this pile of &lsquo;items&rsquo; and you are instructed to sort them into groups (however it makes sense to you - open card sort), how are you going to do it? Why? etc. Their responses will be used to increase our confidence as <strong>we shape the tactics of the product&apos;s user experience.</strong>
            </p>
            <p className="section-title">Generative Research</p>
            <p>Sometimes people refer to &lsquo;generative&rsquo; research by other names like &lsquo;exploratory&rsquo;, &lsquo;formative&rsquo;, or &lsquo;foundational.&rsquo; All of these terms are acceptable, I simply prefer generative because it speaks to this research focusing on participants <strong>creating responses either in the absence of a concrete stimulus or they may be asked to specify or demonstrate a concrete stimulus</strong> as a part of the data collection process. The goal is for a stimulus to be <strong>GENERATED from the participant&apos;s responses to CONCEPTUAL or abstract questions.</strong></p>
            <ul className="questions-list">
                <li>&lsquo;What does it mean to do your job?&rsquo;</li>
                <li>&lsquo;Who are you interacting with in that capacity? How do those interactions typically go? Can you show me?&rsquo;</li> 
                <li>&lsquo;What tools are you utilizing in that capacity? What is it like, using those tools? Can you show me?&rsquo;</li>
                <li>&lsquo;What does it mean for your work to be completed successfully? What does that most desirable end-state look like? When that most desirable end-state doesn&apos;t happen, what causes it not to happen? What improvements can be made to these experiences that will increase the likelihood of that most desirable end-state?&rsquo;</li> 
            </ul>
            <p>This is the kind of data which is most typically used for creating things like Personas, Journey Maps, and Jobs Atlases. That is because the <strong>deeply qualitative nature of generative research data typically requires some kind of framework to help make it more digestible/usable/recognizable in terms of its value.</strong> By comparison, tactical research can be fairly simplistic when identifying its value.</p> 
            <ul className='questions-list'>
                <li>&lsquo;This condition was greatly preferred over that condition.&rsquo;</li>
                <li>&lsquo;This condition led to increased conversion numbers.&rsquo;</li>
            </ul>  
            <p className="follow-tag">Ok, cool, let&apos;s go with that condition then.</p>
            <p>
            Generative research is more about <strong>helping build understandings of the cognitive strategies employed by users, or their mental models.</strong> The results of tactical research may align with the understandings taken from generative research, but on their own they are too insubstantial to be the basis for forming anything as complex as a mental model, on their own.
            </p>
            <p className='section-title'>Generative and Tactical Research Evolve One Another</p>
            <p>In a perfect world, generative research would always come first. Generative findings would provide the complex understanding of a user&apos;s needs, perceptions, and expectations which inspire the hypothesized stimuli in tactical tests. In turn, as the patterns of responses to tactical tests start to shift out of alignment with generative models of understanding (because technology and people are both always changing), that reveals the need for further generative research to understand what needs, perceptions, and expectations are causing these shifts, and how they might be properly addressed tactically from this point on.</p>
            <p>
            This is not a perfect world. Sometimes because of insufficient resources, we are forced to &lsquo;respond creatively&rsquo; to demanding circumstances. Perhaps we have generative questions, but no time or capacity to actually answer them. <strong>You can &lsquo;tactify&rsquo; a generative question by creating a hypothetical stimulus for participants to respond to.</strong> &lsquo;We don&apos;t really KNOW how people think about this kind of information, and how that shapes the best possible way for it to be organized… but if they DID think about it this hypothesized way… they would most likely respond positively to THIS hypothesized stimulus.&rsquo;
            </p>
            <p><strong>The benefit of this strategy is that it makes things happen very quickly. The drawback is that it severely limits our understanding.</strong> Even if the participants do respond to the stimulus as predicted, it only supports the idea that their cognitive strategies and mental models MAY BE aligned with our hypothesis. We know that it&apos;s a good tactic to employ, and it MIGHT be good for this alignment with a hypothesized mental model. But we really don&apos;t know for sure. <strong>This makes the findings much less generalizable.</strong> All we really know is, what to do with this stimulus (use it, scrap it, change it, etc.) … not much else. And if the participants do NOT respond as predicted, we have no idea if it&apos;s because the hypothesized mental model is incorrect, or if it is correct but this stimulus just represents an unsuccessful execution of satisfying the needs, perceptions, and expectations with the participants. The underlying understanding might still be correct, it&apos;s just this concrete demonstration based on the understanding might be wrong.</p>
          </div>
        </div>
      </div>
    </div>
  )
}