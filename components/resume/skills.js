import next from 'next';
import React from 'react';

const Skills = () => {
  const skills = [
    { id : 1, title : "High-Level Strategies",
      child : [
          { title : "Qualitative Research - “Why?” questions" },
          { title : "Quantitative Research - “What?” questions" },
          { title : "Generative/Exploratory/Discovery Research" },
          { title : "Tactical/Evaluative/Experimental Research" },
          { title : "Parametric/Non-Parametric Test Statistics" },
          { title : "Descriptive Statistics" },
          { title : "Moderated/Unmoderated Protocols" },
          { title : "Remote/In-Person Data Collection" },
          { title : "Qualitative Data Analysis", detail1: "Iterative Outlining", detail2: "Affinity Mapping" }
      ]
    },
    { id : 2, title : "Specific Methodologies",
      child : [
          { title : "Contextual Inquiry Interview" },
          { title : "Diary Studies" },
          { title : "Participatory Design" },
          { title : "Field Observations" },
          { title : "Think-Aloud/Shadowing" },
          { title : "Usability Testing" },
          { title : "Iterative Testing (RITE)" },
          { title : "Surveys" },
          { title : "Card Sorts" },
          { title : "Treejacking" },
          { title : "Projective Testing" },
          { title : "Eye-Tracking" }
      ]
    },
    { id : 3, title : "Platforms",
      child : [
          { title : "UserTesting.com" },
          { title : "UserZoom.com" },
          { title : "UserLytics.com" },
          { title : "Maze" },
          { title : "Qualtrics" },
          { title : "SurveyMonkey" },
          { title : "ProvenByUsers" },
          { title : "SPSS" },
          { title : "Jamovi" },
          { title : "Omnigraffle" },
          { title : "Miro" },
          { title : "Ethnio" },
          { title : "UserInterviews.com" },
          { title : "Respondent.IO" },
          { title : "Tremendous.com" }
      ]
    }
  ];
  return (
    <section className="section skills">
        <h2>Skills</h2>
        <div className="skills-list">
          { skills.map((skill, key) =>
                  <div key={key} md={6}>
                    <p className="category">{skill.title}</p>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        skill.child.map((sKill, key) =>
                          <li key={key} className="skill">{sKill.title}
                            {sKill.detail1 ? <span className="detail">{sKill.detail1}</span> : ""}
                            {sKill.detail2 ? <span className="detail">{sKill.detail2}</span> : ""}
                          </li>
                        )
                      }
                    </ul>
                  </div>
                )
          }
        </div>
    </section>
  );
}
export default Skills;