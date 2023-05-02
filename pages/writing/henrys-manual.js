import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Henry&#39;s User Manual</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="Henry's User Manual" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
      <div className="blog container">
        <div className="blog">
          <p className="title">Henry&#39;s User Manual</p>
          <p className="tagline">A Guide to Working with Your UX Researcher</p>
          <div className="content">
            <p>Think of this area as being a more high-level description of my approach to research, in general. It should be answering questions like:</p>
            <ul className="questions-list">
              <li>How do I work?</li>
              <li>What do I believe research NEEDS to be, how it NEEDS to work?</li>
              <li>How do you get the best product out of me?</li>
              <li>Would you want that experience, working with me?</li>
            </ul>
            <p>In many ways, I have come to see this section as my own &ldquo;user&apos;s manual.&rdquo;  It helps define my mental models, my tactics, and vernacular.  In a couple of ways, it can also reveal the quirks, hang-ups, and biases I have accumulated; and suggests where there are spaces I need to focus for growth.</p>
            <p className='section-title'>
              My Process: Planning work and aligning (or level-setting) expectations
            </p>
            <p>Tell me what you are trying to learn, in this first step it&apos;s all about defining the NATURE of the question. Is it <strong>GENERATIVE</strong> (exploratory, discovery, etc.) or <strong>TACTICAL</strong> (evaluative, experimental, etc.)</p>
            <p>At its core, all behavioral research is about documenting a stimuli-response relationship.</p>
            <p className='section-opener'><strong>Generative</strong> = the stimuli is controlled by the participants</p>
            <p>We need THEM to explain the nature of the stimuli to us, then we can analyze perceptions and behaviors.</p>
            <ul>
              <li>Very deep-diving, empathy building research</li>
              <li>Leads to the understanding/creation of mental models, personas, journey maps, jobs atlases, etc.</li>
              <li>Exploring concepts and abstractions, then user-led focus towards concrete examples</li>
            </ul>
            <p><strong>Methodologies:</strong> contextual Inquiry Interviews, diary studies, participatory design workshops, etc.
            </p>
            <p><strong>LOW N:</strong> small sample sizes 5 people minimum, 20 people maximum
            </p>
            <p className="subhead">Examples:</p>
            <ul>
              <li>How do people shop for dishwashers?</li>
              <li>How do luxury car shoppers and budget-conscious car shoppers compare with one another?</li>
              <li>What&apos;s currently lacking from customers feeling totally secure about their business partners?</li>
              <li>What&apos;s the best possible search experience in an exploration of security factors?</li>
            </ul>
            <p><strong>Typical timelines</strong> (completely separate from participant recruitment): 4+ weeks</p>
            <ul>
              <li>Takes comparatively less time up front developing measurement protocols</li>
              <li>Takes comparatively more time for qualitative data analysis and synthesis</li>
            </ul>
            <p className='section-opener'><strong>Tactical</strong> = the stimuli is controlled by <strong>us</strong> (the researchers, designers, developers, etc.)</p>
            <ul>
              <li>We are bringing an explicit stimuli to the participants attention and measuring some response</li>
              <li>Very concrete and specific in nature (but lacking in some generalizability)</li>
              <li>Providing specific, directional feedback to very defined hypotheses</li>
            </ul>
            <p><strong>Methodologies:</strong> Usability tests, experiments, surveys, card sorts, tree-jack tests, projective testing, etc.
            </p>
            <p><strong>LOW to HIGH N:</strong> Usability tests, experiments, surveys, card sorts, tree-jack tests, projective testing, etc.
            </p>
            <ul>
              <li>Low N: (5 to 20 people) Usability tests, some forms of experiments. Etc.</li>
              <li>High N: (50 to 100&apos;s of people) surveys, card sorts, tree-jack tests, etc.</li>
            </ul>
            <p className="subhead">Examples:</p>
            <ul>
              <li>Will this new layout help customers feel increasingly confident in one&apos;s scorecard metrics?</li>
              <li>Will this new summary style help customers more comfortably assess a business partner&apos;s security?</li>
              <li>Which of these (demonstrable) prototypes offers the best search experience on security factors?</li>
            </ul>
            <p><strong>Typical timelines</strong> (completely separate from participant recruitment): 1-4 weeks</p>
            <ul>
              <li>Takes more time up front developing methodologically sound measurement protocols</li>
              <li>Takes comparatively less time for data analysis and synthesis</li>
            </ul>
            <p>
            In a perfect world, generative research acts as the foundational knowledge that inspires the hypothesis which leads to the development of test stimuli for tactical testing. When creating our roadmaps, we should always be planning our generative research a quarter in advance (we are working this quarter to meet the generative knowledge needs of next quarter). The tactical research from this quarter will have been inspired by the generative research of last quarter, etc.
            </p>
            <p>
            If you have generative questions, with a tactical timeline - we&apos;re going to have to TACT-IFY the question. For example, we really wish we knew &ldquo;What is the best possible global search experience on our platform?&rdquo; But things have to be decided and built on tight deadlines so instead we say &ldquo;Well, I have these two ideas, which one constitutes the greatest improvement to our global search experience right now?&rdquo;
            </p>
            <p>The generative question would have given us a broader and deeper understanding of the user&apos;s needs when engaged in global searches, helping us to generalizable-y predict the best possible outcome more easily. Tact-ify-ing the question makes us rely on tight, shallow knowledge and little by little the tool becomes better and better over time (with likely occasional dips when we make incorrect predictions and are forced to correct - most likely more frequently dipping than if we had the generative/foundational knowledge in the first place).</p>
            <p>This is why it&apos;s so critical to come to your researcher with your question in mind, first and foremost. Then you and the researcher can discuss all of the other variables (time, resources, etc) that will also influence how the research must be carried out. There will almost always be tension between the method which will maintain the most methodological rigor and highest confidence, and the amount of resources which can be allotted for the research. The compromise which most ideally meets your organizations&apos; needs in THIS instance, is what you and your researcher (and potentially any other critical stakeholders) need to come into agreement on as quickly as possible.</p>
            <div className="blog-img-box centered">
              <Image src="/images/defining_the_question.png" width="800" height="966"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}