import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactPage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iu2d7wn', 'template_peru4tt', form.current, 'zJi6NSwd-PyDKasVd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contactForm">
            <label>Name</label>
            <br/>
            <input type="text" name="user_name" />
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" name="user_email" />
            <br/>
            <label>Message</label>
            <br/>
            <textarea name="message" />
            <br/>
            <input type="submit" value="Send" />
        </form>
    )
}

export default ContactPage;