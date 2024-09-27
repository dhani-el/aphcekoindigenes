
import "./style.scss"
import { NavBar,NavigationItem,Footer} from "../utils"
import { PageCurtain, FloatingText, CenterPiece, Mission,News, } from "./components";
import dummyMember from "../assets/dummyMember.jpeg"



const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]


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
        url:"/newws"
    },
]

export default function Home(){

    return <div id="home-container">
                <PageCurtain/>
                <NavBar lists={navigationData} sideItems={navItems} />
                <FloatingText/>
                <CenterPiece/>
                <Mission/>
                <News news={news} />
                <Footer data={navigationData}/>
    </div>
}
