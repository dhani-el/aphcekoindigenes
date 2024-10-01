
import { JoinForm } from "./component";
import {Footer,NavBar,NavigationItem} from "../utils";
import "./style.scss"

const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]


const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
]



export default function Join(){
    return <div  id="join-page-container">
                <NavBar lists={navigationData} sideItems={navItems} />
                <JoinForm />
                <Footer data={navigationData}/>
    </div>
}