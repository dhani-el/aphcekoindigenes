

import { NavBar,NavigationItem, Footer } from "../utils";
import { Intro,Point,CallToAction,Founders,Works } from "./component";
import "./style.scss";
import One from "../assets/members/1.jpeg"
import Two from "../assets/members/2.jpeg"
import Three from "../assets/members/3.jpeg"
import Four from "../assets/members/4.jpeg"
import Five from "../assets/members/5.jpeg"
import Six from "../assets/members/6.jpeg"
import Seven from "../assets/members/7.jpeg"
import Eight from "../assets/members/8.jpeg"
import Nine from "../assets/members/9.jpeg"
import Ten from "../assets/members/10.jpeg"
import Eleven from "../assets/members/11.jpeg"

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

const imagesOfMeembers = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    ]

export default function AboutUs(){
    return <div id="about-page-container">
                <NavBar sideItems={navItems} lists={navigationData} />
                <div id="about-body-container">
                    <Intro/>
                    <Point/>
                    <Works/>
                    <Founders images={imagesOfMeembers}/>
                    <CallToAction/>
                    <Footer data={navigationData} />
                </div>
    </div>
}