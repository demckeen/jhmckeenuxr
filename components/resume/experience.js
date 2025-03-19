import React from 'react';

const Experience = () => {
  const jobs = [
    {title: "Senior UX Researcher", company: "Versatile", dates: "May 2024 – April 2025", summary: "The only UX Researcher in a small start-up environment building technology for construction companies.  Studied GC’s to build Jobs Atlas/Mental Models of primary product users (Superintendents & Project Managers). Led tactical research into both our product’s digital experience and systems built for internal users. Established expectations for a UX Research lab internally and built out the archival space for research access from raw data all the way through final summary artifacts. Led research projects for stakeholders distributed across international borders and successfully recruited from difficult to reach, professional populations of potential users."},
    {title: "Senior UX Researcher", company: "Collibra", dates: "October 2022 – April 2023", summary: "With several, separate systems by which users could be receiving notifications in the platform, it wasn’t uncommon for people to miss when critical information was being passed in their direction.  A number of tactical usability tests were conducted to concept test proposed notification hubs, meant to bring messages from all parts of the platform into a centralized location.  Critical questions included whether the hub should act as a workspace in of itself, or a launchpad to workspaces.  Additionally, ‘asset pages’ act as nodes, or a form of data container, in the platform.  Tests were conducted to create maximized utility, balancing scannability and transparency/immediacy.  "},
    {title: "Senior UX Researcher", company: "SecurityScorecard", dates: "November 2021 – August 2022", summary: "Users were not engaging in a number of diverse modules across the product platform.  Contextual Inquiry interviews uncovered weaknesses in user’s understanding of the platform’s Information Architecture.  It was necessary to diversify wayfinding strategies across navigational tools; tested via tactical methods (primarily traditional usability and treejack testing).  Convinced Sr. Leadership and design team to change navigation of the platform (a major change they had resisted for years).  Educated the UX and PM teams on digital wayfinding terms and concepts.  Coached designers through research, increasing perceived value of research overall.  Mentored junior researchers and designers on research practices."},
    {title: "Senior UX Researcher", company: "Shipt", dates: "May 2019 – November 2021", summary: "Maintaining an engaged and pleased gig-economy population, fulfilling grocery orders and delivering them to consumers via our mobile app.  Identifying pain points through various means (metrics and analytics with the data science team, contextual inquiry interviews, diary studies, think-aloud shadowing, etc.) and hypothesizing how the app could eliminate issues (validated via moderated and unmoderated usability tests, card sorts, and surveys).  Reduced time-on-task for out-of-stock items and decreased likelihood of late delivery.  Created Personas and Jobs Atlases (Jobs To Be Done artifact) from generative data to inspire empathy among stake-holders.  Decreased adversarial attitudes in headquarters towards gig-economy shoppers, recognizing them as consumers (“we sell them work”, they are not just a “cost center”).  Mentoring junior researchers and designers on research practices."},
    {title: "Senior UX Researcher", company:"The Home Depot", dates: "October 2016 - May 2019", summary: "Taking generative data (contextual inquiry interviews, field studies, diary studies, and think-aloud shadowing) to create Jobs Atlases and Journey Maps for purchasing decisions in various home-improvement product and project categories (DIY tiling, appliance purchasing, workwear, etc).  Using generative research outputs to inform hypothesized designs, validated through usability testing and design-sprint workshops.  Utilizing card sort and survey strategies to define sentiment and semantic connectivity across critical nodes in informative spaces.  Supported the exploration of, and unveiling, new product categories both on-line and in-store.  Mentoring junior researchers and designers on research practices."},
    {title: "Senior UX Researcher ", company:"Dealer.com", dates: "January 2012 – October 2016", summary: "Founded the lab and established UX Research practices for the first time in the organization.  Utilized contextual inquiry interviews and think-aloud shadowing to collect generative data on car-shopping perceptions and behavior.  Created high-level, car-shopper Personas which became the anchors for user-stories among scrum masters.  Used eye-tracking experiments to devise add-purchase schedules that either maintained conversions at decreased costs, or increased conversions at maintained costs by quantifying influence of content alignment across visit/add content and add/page content (indirect measurements of implicit processing)."}
  ];
  return (
    <section className="section experience">
        <h2>Experience</h2>
        <div className="jobs">
          { jobs.map((job, key) =>                       
            <div className="job-details" key={key}>
              <div className="intro-line">
                <p className="job-title">{job.title}</p>
                <p className="company">{job.company}</p>
                <p className="dates">{job.dates}</p>
              </div>
              <p className="summary">{job.summary}</p>
            </div> 
            )
          }
        </div>
    </section>
  );
}
export default Experience;