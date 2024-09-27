

import { NavBar,NavigationItem } from "../utils"
import { Intro,Point,CallToAction,Founders } from "./component"

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
    return <div>
                <NavBar sideItems={navItems} lists={navigationData} />
                <div>
                    <Intro/>
                    <Point/>
                    <CallToAction/>
                    <Founders/>
                </div>
    </div>
}