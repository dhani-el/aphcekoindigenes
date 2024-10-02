import {NavBar,NavigationItem, Footer} from "../utils";
import { NoNews,NewsList } from "./component";
import "./style.scss";
import AllNews from "../news";

const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]


const navigationData = [
    {url:"/",title:"Home"},
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/support",title:"Support"},
    {url:"/join",title:"Join"},
]



export default function News(){
    return <div id="news-page-container">
                <NavBar lists={navigationData} sideItems={navItems} />
                <h2>News and Upcoming Events </h2>
                {(AllNews.length <= 0 )?<NoNews/> : <NewsList list={AllNews} />}
                <Footer data={navigationData}/>  
    </div>
}