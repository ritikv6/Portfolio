import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/main_logo.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4a3a1a4e-0d28-4707-8335-04a2d208f93e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message);
        }
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>
                        I am a passionate web developer specializing in building modern, responsive websites and web applications.
                        My expertise includes React, JavaScript, and UI/UX design. I enjoy turning ideas into reality and delivering high-quality digital solutions.
                    </p>
                    <div className="contact-delails">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>ritikverma5767@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+918319788117</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>INDIA</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' />
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;