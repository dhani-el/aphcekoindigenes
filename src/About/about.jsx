

import { NavBar,NavigationItem, Footer } from "../utils";
import { Intro,Point,CallToAction,Founders,Works } from "./component";
import "./style.scss";

const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
    <NavigationItem data={{url:"/news",title:"News"}} key={"News"}/>,
]

const navigationData = [
    {url:"/",title:"Home"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

export default function AboutUs(){
    return <div id="about-page-container">
                <NavBar sideItems={navItems} lists={navigationData} />
                <div id="about-body-container">
                    <Intro/>
                    <Point/>
                    <Works/>
                    <Founders/>
                    <CallToAction/>
                    <Footer data={navigationData} />
                </div>
    </div>
}