import React from "react";
import {Link } from "react-router-dom";
import Films from "../Films/Films";
import footer_logo from "../../images/footer__logo.png";
import './FAQMenu.css'
export default function FAQMenu() {
 return (
    <div className="menu_FAQ">
        <h3>FAQ</h3>
        <div className="FAQ">
            <ul>
                <li><Link to="/TMDB">Our History</Link></li>
                <li><Link to="/Contact">Staying In Touch</Link></li>
                <li><Link to="/General">General</Link></li>
                <li><a href = "FAQ_account.html" className="FAQ_links">Account</a></li>
                <li><a href = "FAQ_website.html" className="FAQ_links">Website</a></li>
                <li><a href = "FAQ_API_Overview.html" className="FAQ_links">API Overwiew</a></li>
                <li><a href = "FAQ_API_Sessions.html" className="FAQ_links">API Sessions</a></li>
            </ul>
        </div>
    </div>
) 
}