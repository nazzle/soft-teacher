import React from 'react'
import './about.css'
import TOPICS from '../../assets/img/snapshots/math1.png'
import AboutHeader from "./AboutHeader";
import TopicsHeader from "./TopicsHeader";
import Topics from "./Topics";

const About = () => {
  return (
    <>
        <section id="about">
            <div className="container">
                <header className="section-header">
                    <AboutHeader />
                </header>
                <div className="row about-container">
                <div className="col-lg-6 content order-lg-1 order-2">
                    <TopicsHeader />
                    <Topics />
                </div>
                <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                    <img src={TOPICS} className="img-fluid" alt="" />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About