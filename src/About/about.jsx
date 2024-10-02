

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
    {role:"Grand Patron of the Association.",name:"PA YOMADE BRAIMO-IGBO",image:One},
    {role:"Chairman and member of Board of Trustees.",name:"ELDER BABAJIDE O. LAYENI.",image:Two},
    {role:"Member of Board of Trustees",name:"ALH. ABDUL LATEEF O.BAKARE",image:Three},
    {role:"Gen. Secretary and member of Board of Trustees.",name:"ALH. TAOFEEK A. ANIMASHAUN",image:Four},
    {role:"Member of Board of Trustees.",name:"ALH. CHIEF MAROOF-DEEN BABATUNDE OSHODI.",image:Five},
    {role:"Member of Board of Trustees.",name:"ALH. CHIEF ABIBU OLADOTUN OKI.",image:Six},
    {role:"Baba Egbe.",name:"ALH. NOJIMDEEN A. GIWA.  ",image:Seven},
    {role:"Treasurer.",name:"ALH. ASHIMIYU O. APATA.",image:Eight},
    {role:"Financial Secretary.",name:"PRINCE KASSIM NURUDEEN.",image:Nine},
    {role:"Publicity Secretary.",name:"PRINCE ADEYEMI A. KOSOKO.",image:Ten},
    {role:"Social secretary.",name:"PRINCE HABEEB O. SHONIBARE.",image:Eleven},
    ]

export default function AboutUs(){
    return <div id="about-page-container">
                <NavBar sideItems={navItems} lists={navigationData} />
                <div id="about-body-container">
                    <Intro/>
                    <Point/>
                    <Works/>
                    <Founders infos={imagesOfMeembers}/>
                    <CallToAction/>
                    <Footer data={navigationData} />
                </div>
    </div>
}