import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'
import { useState } from 'react'
import Modal from '../../components/common/modal'

export default function Groceries() {
    const [modalImage, setModalImage] = useState(null);
    const images = [{id: 1, src: '/images/JobsAtlas1.png', width: 1793, height: 5709, caption: 'Jobs atlas for Superintendents (propietary information masked)'},{id: 2, src: '/images/JobsAtlas2.png', width: 1879, height: 5687, caption: 'Jobs atlas for Project Managers (proprietary information masked)'}];


    return (
      <div>
        <Head>
          <title>Versatile's Cranes - Case Study</title>
          <meta name="Writing by J. Henry McKeen" content="" /> 
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Splash pageTitle="Versatile&apos;s Cranes" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface" type="cranes"/>
        <div className="blog container">
          <div className="blog">
            <p className="title">Versatile&apos;s Cranes</p>
            <p className="tagline"></p>
            <div className="content case-study cranes">
                <h2 className='section-title'>Problem: The users are unfamiliar and <strong>VERY</strong> far away</h2>
                <p>Versatile was an intriguing company with a very compelling product.  There are innumerable variables influencing the likelihood of a large building (or buildings) making its construction budget and deadline, or not. Versatile had identified crane efficiency as being a critical, lynch-pin variable: when cranes are being used efficiently it forces many other variables to come together in cooperative synchrony. On top of the fact that cranes are themselves exceedingly expensive to operate, making sure that cranes are used as optimally as possible leads to significant savings across several cost sources.</p>
                <p>Versatile&apos;s sales team and most of their Construction Management clients are almost all in the United States. Most of the rest of their employees, including the design and development group, are in Tel Aviv, Israel. They specifically sought out a UX Researcher in the United States who could go out and collect the data necessary for the design and development team to be confident in their empathetic understanding of the user&apos;s needs and ultimately their design decision-making.</p>
                <p>While there are many distinct professional groups making up the full team on a large construction site, the only one making large budget decisions (like those associated with crane operation) is the Construction Management company running the project. They may also be the group with the fewest people actually working at the site, itself. They are represented by two primary groups/roles: Superintendents and Project Managers. Superintendents run the site and are focused on deadlines and safety. Project Managers focus on logistics and budget. They cooperatively work closely with one another to develop successful builds.</p>
                <h2 className="section-title">Process</h2>
                <p>Versatile&apos;s product includes hardware (a device attached to the crane hook itself) and software, that the hardware&apos;s numerous sensors feed data into. This data provides information on load weight, position, orientation, movement and most critically, LACK of movement. If the cement contractors say they need the crane for four hours but it only operates for three, the construction management company needs to know why that crane was still for so long. How do we make sure that Versatile&apos;s product is supporting the Superintendents and Project Managers in leading productive crews, and having the information necessary to answer questions back at headquarters?</p>
                <p>Deep-dive, contextual inquiry interviews were conducted with ~ 10 to 12 Superintendents and ~10 to 12 Project Managers. They are very difficult to pin down and work long hours with very little time to take on extra meetings, so recruitment was challenging. The sales team did an exceptional job in leveraging their own relationships with the customers to get this helpful face-time. What really needed to be learned was, how do these two groups of professionals think and act? How similar are they to one another? Can one mental model capture the needs of both, or are they distinctive enough to each require their own framework for understanding how to best serve them with Versatile&apos;s product experience?
                </p>
                <h2 className='section-title'>Findings &amp; Outcomes</h2>
                <div className='img-icons'>
                {images.map(img => (
                    <div key={img.id} onClick={() => setModalImage(img)} className='img-thumbnail'>
                    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
                    </div>
                ))}
                <Modal isOpen={!!modalImage} onClose={() => setModalImage(null)}>
                    {modalImage && <> <Image src={modalImage.src} alt={modalImage.alt} width={modalImage.width} height={modalImage.height} /> <p className='img-caption'>{modalImage.caption} </p> </>}
                </Modal>    
                </div>
                <p className='caption'>Findings graphics, masked for proprietary information</p>
                <p>Upon completion of the interviews and the initial rounds of qualitative data synthesis (a combination of affinity mapping and iterative outlining), it became clear that these were two separate groups with meaningfully different (thought related) thought processes and behavioral inclinations. Separate Personas were constructed for each group, speaking to their motivations, behaviors, challenges, and necessary success criteria for positive product experience with Versatile. It could also be said that each Persona acted as a Jobs Atlas for doing the work associated with each of these roles. It wasn&apos;t just the design and development team that benefitted from these learnings either. The sales director had this information shared with the marketing firm employed by Versatile, so that curated messaging could be designed for each audience.  Many members of the sales team were former Superintendents and Project Managers. They were impressed that such a comprehensive and exhaustive depiction of the individuals filling these roles had been cultivated so quickly, and with such limited exposure.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}