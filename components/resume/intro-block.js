import next from 'next';
import React from 'react';

const Intro = () => {
  return (
    <section className="section intro">
        <a target="_blank" href="/JHMResume2023.pdf"><i className="mdi mdi-file-pdf-box"></i>Download PDF Version</a>
      <div className="intro-summary">
        <h2>Summary</h2>
        <p>I am a behavioral researcher by training, and a UX researcher by profession. My academic focus was spatial cognition with an emphasis on wayfinding/navigation. I spent my entire academic career documenting the cognitive strategies of people getting lost in complex, real-world environments. Now I spend my entire professional career documenting the cognitive strategies of people getting lost in complex, digital environments. They parallel one another more than I had ever imagined!</p>
      </div>
    </section>
  );
}
export default Intro;