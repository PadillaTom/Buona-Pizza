import React from 'react'
import {MdEmail} from "react-icons/md"

const Newsletter = () => {
    return (
        <section className="section newsletter-sect">

        <div className="newsletter-container">
<MdEmail className="newsletter-icon"></MdEmail>
            <h2>Suscribe Now!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="newsletter-control">
            <input type="email" placeholder="Enter your E-mail" className="newsletter-input"/>
            <button className="btn-newsletter">Join</button>
            </div>

        </div>

        </section>
    )
}

export default Newsletter
