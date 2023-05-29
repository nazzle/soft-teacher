import React from 'react'

const Features = () => {
  return (
    <>
        <section id="services" className="section-bg">
            <div className="container">
                <header className="section-header">
                <h3>Key Features</h3>
                <p>How we Can Help You Achieve More</p>
                </header>
                <div className="row">
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                    <div className="box">
                    <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
                    <h4 className="title"><a href>How we Can Help You Achieve More</a></h4>
                    <p className="description">
                    SoftTeacher provides two-way learning by taking inputs and prompting immediate feedback to the learners. 
                    It improves learners cognitive skills by requiring them to make a decision about a situation or circumstance and... 
                    </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                    <div className="box">
                    <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}} /></div>
                    <h4 className="title"><a href>Highly engaging </a></h4>
                    <p className="description">
                    SoftTeacher makes eLearning pleasing to the eye, hold learners attention, elicit some form of emotion, and entertain them in some way, 
                    “enticing, attention-grabbing, and relatable” and ultimately increase the retention rate of the information. 
                    </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                    <div className="box">
                    <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}} /></div>
                    <h4 className="title"><a href> Instant feedback </a></h4>
                    <p className="description">
                    SoftTeachers provides instant feedback to learners upon completion of an activity, a puzzle or a game. Learners can immediately evaluate 
                    themselves and make corrections to the... 
                    </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                    <div className="box">
                    <div className="icon"><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}} /></div>
                    <h4 className="title"><a href>No need of internet connection to do activities</a></h4>
                    <p className="description">
                    SoftTeacher is designed to be used offline. This feature makes SoftTeacher a safe self learning digital platform for children. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features