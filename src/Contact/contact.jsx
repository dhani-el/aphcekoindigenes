
import { NavBar,NavigationItem } from "../utils";
import { SendMesssageForm, GetInTouch } from "./component";
import "./contact-style.scss";
import { Footer } from "../Home/components";

const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]

export default function Contact(){
    return <div id="contact-page">
                <NavBar lists={navigationData} sideItems={navItems} />
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
                <Footer data={navigationData}/>
    </div>
}