import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Groceries() {
    return (
      <div>
        <Head>
          <title>Groceries &amp; Gig&#8209;Economy</title>
          <meta name="Writing by J. Henry McKeen" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Splash pageTitle="Groceries &amp; Gig&#8209;Economy" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface" type="groceries"/>
        <div className="blog container">
          <div className="blog">
            <p className="title">Groceries &amp; Gig&#8209;Economy</p>
            <p className="tagline"></p>
            <div className="content case-study groceries">
                <p className='section-title'>Problem: Too Many Orders Are Arriving Late</p>
                <p className="subhead">No UX Researcher (I wasn&apos;t hired yet)</p>
                <p>This effort was supporting delivery workers (making money through a gig-economy application) purchasing and delivering groceries for online consumers. I like this case study, because it represents a big win, but also a failure on our parts. It is a story of delayed victory, won only after hardfought redemption. It starts before I had even begun working at the company, and the designers were forced to try to work towards solutions without the benefit of a researcher on the team.</p>
                <p>The design team had met with the data science team, discussing how there seemed to be a lot of late deliveries and one of the variables predicting an increased likelihood of late delivery was if the order had several &ldquo;out-of-stock&rdquo; (OOS) items. Customers make complaints with late orders, and they are given credits to keep their loyalty, eating into corporate profits. The customers also tend to tip the delivery workers less on late orders. Nobody comes out of the incident happy. The next stop for the design team was going to the service support group to find out if there were delivery workers making complaints specifically about dealing with OOS items. A number of themes come up in the complaints made regarding OOS items. The design team decides one specific theme will be their focus for a proposed solution: &ldquo;Sometimes when a product is out of stock, and it&apos;s an item I am not familiar with, it&apos;s hard to judge what would be an appropriate substitution to either purchase or offer to the customer.&rdquo;</p>
                <div className='img-box workflow'>
                    <Image src="/images/workflow.png" width="1000px" height="327px"></Image>
                </div>
                <p>They don&apos;t REALLY know if that&apos;s the issue driving lateness, but they know it&apos;s the one that they can address while incurring the least possible pushback from other groups in the company. So they say, &ldquo;we can use the data from past times an item was OOS, what was deemed an acceptable substitution and provide those as suggestions to the delivery worker.&rdquo; They put a lot of effort into building a very high-fidelity prototype and I show up just in time to put it through usability testing.</p>
                <div className='presentation-block'>
                    <ul>
                        <li>Design team goes to Data Science, see that lateness correlates with &ldquo;out-of-stock&rdquo; (OOS) items</li>
                        <li>Go to Service Support group to hear if Shoppers have complaints about OOS workflows</li>
                        <li>They have a list of frequent themes related to Shopper OOS comments</li>
                        <li>Team gets an idea for a new feature to address one of the themes
                            <ul>
                                <li>The <strong>one least likely to get pushed back against</strong> by internal pressure</li>
                                <li>The one that doesn&apos;t require getting other team&apos;s buy-in</li>
                            </ul>
                        </li>
                        <li>Despite not really knowing whether Theme 4 was THE ONE…
                            <ul>
                                <li><strong>Is THAT what was driving lateness likelihood?</strong></li>
                                <li>… they invest in an entire <strong>(complex, high-fidelity)</strong> prototype for Usability Testing</li>
                            </ul>
                        </li>
                    </ul>
                    <div className='img-box workflow-issues'>
                        <Image src="/images/workflow_issues.png" width="600px" height="795px"></Image>
                    </div>
                </div>
                <p>This is where I, as the brand new UX Researcher, have to let them know that had I been here when this effort had started, I would have suggested holding off on proposing solutions, and conducting generative research instead. Since we were already at the point of having a testable solution ready to go, the compromise was to do a mixed-method usability and concept test, with comprehensive debriefing interviews attached.</p>
                <p className="section-title">UX Researcher Arrives</p>
                <p>The design team has their test stimuli for the usability test, hot in their hands and ready to go (clickable prototypes). However, the only thing that the usability test will really help us answer, is whether or not the proposed solution is &ldquo;usable.&rdquo;</p>
                <ul>
                    <li>What we were actually asking: &ldquo;How might we make selecting potential substitutions for OOS items faster?&rdquo;</li>
                    <li><strong>What we SHOULD have been asking:</strong> &ldquo;How might we stop OOS items from causing late deliveries?&rdquo;</li>
                </ul>
                <p>I have shoehorned a series of generative questions into the debriefing interviews, so I can try to get at whether the solutions is truly &ldquo;useful&rdquo; as well as &ldquo;usable.&rdquo;  We still did our tactical test, but I snuck in my opportunity to collect generative data in a tactical scenario, based on my fears that we had focused on the wrong element of the overall OOS item process.
                </p>
                <div className="test-q-block">
                    <div className="gen-spec">
                        <p id="one">General</p>
                        <div className="line-vertical arrow-down"></div>
                        <p id="three">Specific</p>
                    </div>
                    <ul>
                        <li>&ldquo;What are your thoughts on how to handle OOS items when working?&rdquo;</li>
                        <li>&ldquo;What are your overall thoughts and impressions on what we&apos;ve been looking at here?&rdquo;</li>
                        <li>&ldquo;These things we&apos;ve been looking at doing, will they influence what it&apos;s like handling OOS items?  How so?  In what ways?&rdquo;</li>
                        <li>&ldquo;Do OOS items potentially influence a delivery&apos;s timing?  How so?  In what ways?&rdquo;</li>
                        <li>&ldquo;Will the things we&apos;ve been looking at today potentially influence that relationship between OOS items and a delivery&apos;s timing?&rdquo;
                        </li>
                    </ul>
                </div>
                <p>The participants (taken from the actual population of delivery workers) are exceedingly underwhelmed by the concept. It&apos;s usable enough, but it&apos;s not going to make them have fewer late deliveries. Sure, it&apos;s annoying when you aren&apos;t sure what might be a good alternative for an OOS item. However, it&apos;s not what is driving the delivery workers to be late. The LATENESS is mostly occurring because the customers are very slow when responding to the delivery workers&apos; texts about OOS items and proposing potential alternatives. We were attending to the wrong set of complaints associated with OOS. We focused on reducing the amount of time spent on judging potential alternatives, when we should have focused on reducing the number of text interactions between customers and delivery workers.</p>
                <p>
                Thankfully, those debriefing interviews are what provided us with the insight. Text exchanges with customers ATE time to a devastating degree.
                </p>
                <div className="presentation-block" id="two">
                    <div className="img-box-one">
                        <p className='image-heading'>Relied on Data Like This</p>
                        <Image src="/images/workflow_issues.png" width="800px" height="1061" alt="table showing a choice to work on theme 4"></Image>
                    </div>
                    <div className="img-box-two">
                        <p className='image-heading'>Needed Data Like This</p>
                        <Image src="/images/jobs_atlas.png" width="1200px" height="1221px"></Image>
                    </div>
                </div>
                <p>
                    We took the qualitative data from the debriefing interviews and were able to define where the real culprit issue was. We do that by defining where the preponderance of their thought processes are focused (Jobs Drivers), what actions they are doing to try to satisfy the needs and motivations expressed in those thought processes (Behaviors), the reasons why those actions to not lead to the satisfaction of said needs and motivations (Painpoints, Obstacles, & Opportunities, and the delivery worker&apos;s ultimate vision of the optimal scenario outcome (Success Criterion). The resulting Jobs Atlas, tells us where to focus, what tactical strategies are more likely to be efficacious, and what has to happen in order for the delivery workers to perceive it as a good user experience.</p>
                <div className='img-box workflow-issues'>
                    <Image src="/images/workflow_amended.png" width="800px" height="1061px"></Image>
                </div>
                <p>
                    The delivery workers don&apos;t want it to be EASIER to send texts to the customer, they want to know the desired substitution without having to text the customer in the first place. Sure, it&apos;s not BAD to hear corporate&apos;s suggestions about likely good substitutes on OOS products. Yet, having those good substitutes simply being effective a higher percentage of the time is not ultimately meaningful in terms of reducing their time spent working. Knowing what the CUSTOMER deems as a good substitute is FAR more effective. So, maybe customers should be able to list good substitutes as they are picking out items. Selecting secondary options that are acceptable in the absence of the first choice being available would be ideal. And maybe we should STRESS that they do it when they are selecting items that have a high probability of being OOS.
                </p>
                <p className='section-title'>Good news: we know which direction to go in</p>
                <p className="subhead stronger">Bad news: it&apos;s the most terrifying direction</p>
                <p>This comes in with its own set of challenges, of course. This is exactly the kind of strategy that the design team KNEW would cause pushback. It would mean affecting the consumers experience, bringing extra steps or work into their list building. The customer facing side of the company was, obviously, terrified of anything that could be perceived as creating friction for the customer. If we lost the customer, we lose everything. So, we have to push really hard to prove that the risk will be worth the reward. We need back up from two different groups: 1) the UX researcher on the customer facing side, 2) data science, once again.
                </p>
                <p>
                The UX researcher was able to speak to some of the product owners fears about priming substitute item selection for customers. They relented that yes, it could be construed as adding friction to the list-making process. However, one of the primary reasons customers are using this service, is to spend the time they would be using shopping to do other things. The more texts that they have to respond to during the order, the less value they are getting by having someone else do that work for them. In terms of at least attempting to test a solution, the UX researcher on the customer side had our backs.
                </p>
                <p>
                Additionally, the quantitative data provided many insights to help in this persuasion (the data science team had our backs, too).  We learned that the consequences of orders having increased likelihood of more OOS items, and therefore more texts with customers, was costing corporate money in an entire other manner. Veteran delivery workers would stay away from orders with many high-likelihood OOS items. The closer that order gets to the time that it needs to be shopped without anyone taking it, the more corporate has to place bonuses on it, to make it a more desirable effort. Or worse, a novice delivery worker takes it, and with their lack of experience, they perform even worse and are MORE late than a veteran delivery worker would have been with the same tasks. There are many valuable reasons to decrease the likelihood of customer/delivery worker texts. The data science team knew that pattern existed, but they did not know WHY it existed until the qualitative and quantitative data were brought to be reflected upon together.
                </p>
                <p>
                Finally, we were allowed to create a proposed solution that included shoppers selecting alternative items during list creation.
                </p>
                <p className="section-title">Turning an Oil Tanker in Rough Seas</p>
                <p className="subhead">Over a year of pressuring leadership to finally put us on the right track</p>
                <p>It was a resounding success. Of course the delivery workers loved it. They were able to see that yes, this list did have a lot of high-likelihood OOS items, but the customer had also provided alternatives for some amount of those items. Secondary items being readily available would mean fewer text interactions. It would mean less likelihood of being late and receiving a smaller tip for a very arduous order. It became less difficult to get those orders picked up without having to load them with bonuses.</p>
                <p>Thankfully, the customers loved it, too. The customers loved having people go to the store so they didn&apos;t have to. Getting texts throughout the whole effort to approve substitutions made having somebody else do it less valuable. They much preferred the extra seconds spent selecting desirable substitutions during list-building, than the extra minutes having to interact with the delivery workers through text. It was literally an &ldquo;everyone wins&rdquo; scenario.</p>
                <p>It also demonstrated to the organization, the risks inherent to jumping into solutioning before it&apos;s truly known what the actual problem needing to be solved is. Lots of time was spent working towards proposing the corporates suggested substitutions solution, which was ultimately judged of too little perceived value to build.</p>
            </div>
        </div>
      </div>
    </div>
  )
}