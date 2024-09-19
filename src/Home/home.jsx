
import "../index.scss"
import { NavBar } from "../utils"





const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

export default function Home(){

    return <div id="home-container">
                <NavBar lists={navigationData} />
    </div>
}