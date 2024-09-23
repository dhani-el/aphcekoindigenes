
import "./style.scss"
import { NavBar } from "../utils"
import { PageCurtain, FloatingText, CenterPiece, Mission,News,Footer } from "./components";
import dummyMember from "../assets/dummyMember.jpeg"




const navigationData = [
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/news",title:"News"},
    {url:"/join",title:"Join"},
]

const news = [
    {
        img:dummyMember,
        title:"December 2024 Get together",
        url:"/news"
    },
    {
        img:dummyMember,
        title:"December 2024 Get together",
        url:"/news"
    },
]

export default function Home(){

    return <div id="home-container">
                <PageCurtain/>
                <NavBar lists={navigationData} />
                <FloatingText/>
                <CenterPiece/>
                <Mission/>
                <News news={news} />
                <Footer data={navigationData}/>
    </div>
}
