import next from 'next';
import React from 'react';

const Splash = ({pageTitle, subHead, imgUrl, imgAlt, url}) => {
  return (
    <section className={url + " section position-relative hero splash"}>
        <div className="hero-text">
            <p className="text-uppercase page-title">{pageTitle}</p>
            <p className="subhead">{subHead}</p>
        </div>
    </section>
  );
}
export default Splash;