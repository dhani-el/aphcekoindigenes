
import "./style.scss"
import { NavBar,NavigationItem,Footer} from "../utils"
import { PageCurtain, FloatingText, CenterPiece, Mission,News, } from "./components";
import dummyMember from "../assets/dummyMember.jpeg"
import AllNews from "../news"


const navItems = [
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/news",title:"News"}} key={"News"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]


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
                <NavBar lists={navigationData} sideItems={navItems} />
                <FloatingText/>
                <CenterPiece/>
                <Mission/>
                <News news={AllNews} />
                <Footer data={navigationData}/>
    </div>
}
