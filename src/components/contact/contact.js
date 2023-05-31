import React from "react";
import './contact.css';
import geo from "../../images/geo.png";
import mail from "../../images/mail.png";
import mobile from "../../images/phone1.png";

const Contact = (props) => {
    return(
        <section id={props.id} className="contact row">
            <div className="containeri">

                <div className="titlecon col-12">
                    <h1>Contact Us</h1>
                </div>

                <div className="row">

                    <div className="col-6 row">
                        <div className="info">
                            <div className="address">
                                <i><img src={geo} alt='geo' className='geo'/></i>
                                <h4>Location:</h4>
                                <p>Skupi 20 bb, Skopje</p>
                            </div>

                            <div className="email">
                                <i><img src={mail} alt='mail' className='mail'/></i>
                                <h4>Email:</h4>
                                <p>nanotx@nanotx.com</p>
                            </div>

                            <div className="phone">
                                <i><img src={mobile} alt='mobile' className='mobile'/></i>
                                <h4>Call:</h4>
                                <p>+389 (0)23095 573</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-6 row">

                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="  Your Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="  Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                            </div>

                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact;