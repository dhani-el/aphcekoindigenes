import { Helmet } from "react-helmet-async";
import "./style.scss"
import { NavBar,NavigationItem,Footer, SEO} from "../utils"
import { PageCurtain, FloatingText, CenterPiece, Mission,News, } from "./components";
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
                <SEO title={"Promotion of Heritage and Culture of Eko Indigenes."} 
                description={"Home page of the association for the promotion of heritage and culture of eko indigenes."} />
                {/* <Helmet>
                <title>Promotion of Heritage and Culture of Eko Indigenes.</title>
                <meta name='description' content='Home page of the association for the promotion of heritage and culture of eko indigenes' />
                </Helmet> */}
                <PageCurtain/>
                <NavBar lists={navigationData} sideItems={navItems} />
                <FloatingText/>
                <CenterPiece/>
                <Mission/>
                <News news={AllNews} />
                <Footer data={navigationData}/>
    </div>
}
