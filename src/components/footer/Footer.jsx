import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 footer-info">
                    <h3>Soft-Teacher</h3>
                    <p>
                        SoftTeacher makes eLearning pleasing to the eye, hold learners
                        attention, elicit some form of emotion, and entertain them in some way.
                    </p>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#downloads">Downloads</a></li>
                        <li><a href="#services">Features</a></li>
                        <li><a href="#why-us">Why Choose Us</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                        Kinondoni <br />
                        Dar es Salaam, Tanzania<br />
                        East Africa <br />
                        <strong>Phone:</strong> +255 769 765 563<br />
                        <strong>Email:</strong> info@softteacher.com<br />
                    </p>
                    <div className="social-links">
                        <a href="#" className="twitter" title="Our socials are coming soon"><i className="fa fa-twitter" /></a>
                        <a href="#" className="facebook" title="Our socials are coming soon"><i className="fa fa-facebook" /></a>
                        <a href="#" className="instagram" title="Our socials are coming soon"><i className="fa fa-instagram" /></a>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>
                        If you want to get notifications or updates when other releases are out,
                        you can always subscribe to our newsletters notifications by filling your
                        email down here. You can unsubscribe anytime.
                    </p>
                    <form>
                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                © Copyright <strong>Soft Teacher</strong>. All Rights Reserved
                </div>
                <div className="credits">
                Developed by <a href="https://nazzlespace.co.tz" target='_blank'>nazzleSpace</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer