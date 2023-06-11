import React from 'react'
import './snapshots.css'
import MATH1 from '../../assets/img/snapshots/math1.png'
import MATH2 from '../../assets/img/snapshots/math2.png'
import TESTIMG from '../../assets/img/testimg.png'
import ENG1 from '../../assets/img/snapshots/english1.png'
import ENG2 from '../../assets/img/snapshots/writting1.png'
import SCIENCE1 from '../../assets/img/snapshots/science.png'
import SCIENCE2 from '../../assets/img/snapshots/com1.png'

const Snapshots = () => {
  return (
    <>
        <section id="portfolio" className="clearfix">
            <div className="container">
                <header className="section-header">
                <h3 className="section-title">App Snapshots</h3>
                </header>
                <div className="row">
                <div className="col-lg-12">
                    <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-math">Mathematics</li>
                    <li data-filter=".filter-eng">English</li>
                    <li data-filter=".filter-sc">Science & Technology</li>
                    </ul>
                </div>
                </div>
                <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item filter-math" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                    <img src={MATH1} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4><a href="#">Mathematics</a></h4>
                        <p>Equip Yourself</p>
                        <div>
                        <a href={MATH1} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye" /></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-math" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <img src={MATH2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4><a href="#">Mathematics</a></h4>
                            <p>Equip Yourself</p>
                            <div>
                                <a href={MATH2} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye" /></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-sc" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                    <img src={SCIENCE1} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4><a href="#">Science & Technology</a></h4>
                        <p>Explore all possibilities</p>
                        <div>
                        <a href={SCIENCE1} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-sc" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <img src={SCIENCE2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4><a href="#">Science & Technology</a></h4>
                            <p>Explore all possibilities</p>
                            <div>
                                <a href={SCIENCE2} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-eng" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                    <img src={ENG1} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4><a href="#">English Language</a></h4>
                        <p>Familiarize with vocabulary</p>
                        <div>
                        <a href={ENG1} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-eng" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <img src={ENG2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4><a href="#">English Language</a></h4>
                            <p>Familiarize with vocabulary</p>
                            <div>
                                <a href={ENG2} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Snapshots