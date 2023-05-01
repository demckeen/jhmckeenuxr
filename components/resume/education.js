import next from 'next';
import React from 'react';

const Education = () => {
  const schools = [
    {degree: "PhD Cognitive Psychology", school: "University of Alabama", date: "2011"},
    {degree: "MA Cognitive Psychology", school: "University of Alabama", date: "2007"},
    {degree: "BS Psychology", school: "Brigham Young University", date: "2004"},
  ];
  return (
    <section className="section education">
        <h2>Education</h2>
        <div className="schools">
          { schools.map((school, key) =>                       
            <div className="school-details" key={key} >
              <p className="school">{school.school}</p>
              <p className="degree">{school.degree}</p>
              <p className="date">{school.date}</p>
            </div> 
            )
          }
        </div>
    </section>
  );
}
export default Education;