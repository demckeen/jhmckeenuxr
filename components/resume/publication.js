import next from 'next';
import React from 'react';

const Publication = () => {
  const articles = [
    {title: "Presenting UX Research Findings Using the Jobs to Be Done Framework", link: "https://www.uxmatters.com/mt/archives/2018/11/presenting-ux-research-findings-using-the-jobs-to-be-done-framework.php"},
    {title:"The Pitfalls of Personas and the Advantages of Jobs to Be Done", link:"https://www.uxmatters.com/mt/archives/2019/02/the-pitfalls-of-personas-and-advantages-of-jobs-to-be-done.php"}
  ];
  return (
    <section className="section publication">
        <h2>UX Research Blog Publucations</h2>
        <div className="articles">
          { articles.map((article, key) =>                       
            <a href={article.link} target="_blank" rel="noreferrer" className="article" key={key} >
              {article.title}
            </a> 
            )
          }
        </div>
    </section>
  );
}
export default Publication;