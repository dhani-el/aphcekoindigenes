
import { NavBar } from "../utils";
import { SendMesssageForm, GetInTouch } from "./component";
import "./contact-style.scss";

const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

export default function Contact(){
    return <div id="contact-page">
                <NavBar lists={navigationData}/>
                <div id="contact-page-body">
                    <div id="contact-us-container">
                        <h2> Contact Us </h2>
                        <p>minus impedit iusto eaque voluptatum tempore. Doloremque sit explicabo vel rem consectetur asperiores eum, illum ullam molestiae corporis nulla unde modi animi! Totam!</p>
                    </div>
                    <div id="main-contact-us-content-container">
                        <GetInTouch/>
                        <SendMesssageForm/>
                    </div>
                </div>
    </div>
}