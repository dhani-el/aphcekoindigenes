
import "./style.scss"
import { NavBar } from "../utils"
import { PageCurtain, FloatingText, CenterPiece, Mission,News } from "./components";




const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

export default function Home(){

    return <div id="home-container">
                <PageCurtain/>
                <NavBar lists={navigationData} />
                <FloatingText/>
                <CenterPiece/>
                <Mission/>
                <News/>
    </div>
}
