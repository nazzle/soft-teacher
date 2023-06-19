import React, {Component} from 'react';
import './downloads.css'
import PRESCHOOL from '../../assets/img/preschool.png'
import GRADEONE from '../../assets/img/gradeone.png'
import GRADETWO from '../../assets/img/gradetwo.png'
import  COMINGSOON from '../../assets/img/comingsoon.png'
import WINDOWS from '../../assets/img/windowslogo.png'
import * as CONSTANTS from '../constants/api'

class Downloads extends Component {
    render() {
        return (
            <>
                <div id="downloads">
                    <div className="downloads-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 downloads-info">
                                    <h3>Downloads</h3>
                                    <p>
                                        Downloading our apps is easy! Simply select the app category that you want to download.
                                        Follow the on-screen instructions to complete the installation process, and you'll be
                                        ready to start learning in no time!
                                    </p>
                                </div>
                                <div className="col-lg-5 col-md-6 downloads-links">
                                    <h4>Download and installation steps</h4>
                                    <ol>
                                        <li>Choose and download the desired app grade.</li>
                                        <li>Locate and right-click on the downloaded "SoftTecher.exe" file.</li>
                                        <li>Select "Run as administrator" from the context menu.</li>
                                        <li>If prompted by User Account Control, click "Yes" to proceed.</li>
                                        <li>Choose the installation path by clicking on "Browse" or "Change".</li>
                                        <li>Navigate to the desired drive (e.g., D, E, or F) and select it.</li>
                                        <li>Click "OK" or "Apply" to confirm the new installation path.</li>
                                        <li>Click "Next" to proceed with the installation.</li>
                                        <li>Review additional options/ settings presented.</li>
                                        <li>Click "Finish" to complete the installation.</li>
                                    </ol>
                                </div>
                                <div className="col-lg-3 col-md-6 downloads-newsletter">
                                    <h4>Current supported OS (Windows)</h4>
                                    <p>
                                        <img src={WINDOWS} alt="" className="img-fluid intro-image" />
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <h4>Available Applications</h4>
                        </div>
                        <div className="apps-table">
                            <div id="pricing-table" className="clear">
                                <div className="plan">
                                    <h3>Pre-School/Nursery<span><img src={PRESCHOOL} alt="" className="img-fluid intro-image" /></span></h3>
                                    <a className="signup" href={CONSTANTS.PRESCHOOLAPP} >Download</a>
                                    <ul>
                                        <li><b>6</b> Subjects</li>
                                        <li><b>12</b> Topics</li>
                                        <li><b>53</b> Questions</li>
                                        <li><b>23</b> Test</li>
                                    </ul>
                                </div>
                                <div className="plan" id="most-popular">
                                    <h3>Grade 1<span><img src={GRADEONE} alt="" className="img-fluid intro-image" /></span></h3>
                                    <a className="signup" href={CONSTANTS.GRADE1APP} >Download</a>
                                    <ul>
                                        <li><b>7</b> Subjects</li>
                                        <li><b>13</b> Topics</li>
                                        <li><b>90</b> Questions</li>
                                        <li><b>25</b> Test</li>
                                    </ul>
                                </div>
                                <div className="plan">
                                    <h3>Grade 2<span><img src={GRADETWO} alt="" className="img-fluid intro-image" /></span></h3>
                                    <a className="signup" href={CONSTANTS.GRADE2APP} >Download</a>
                                    <ul>
                                        <li><b>6</b> Subjects</li>
                                        <li><b>40</b> Topics</li>
                                        <li><b>55</b> Questions</li>
                                        <li><b>30</b> Test</li>
                                    </ul>
                                </div>
                                <div className="plan">
                                    <h3>Other Grades<span><img src={COMINGSOON} alt="" className="img-fluid intro-image" /></span></h3>
                                    <a className="signup coming" href>Coming...</a>
                                    <ul>
                                        <li> Want to get  <b>notification</b> when other releases are out?</li>
                                        <li>Register for newsletter notifications down <i className="fa fa-arrow-circle-o-down"></i> </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Downloads;