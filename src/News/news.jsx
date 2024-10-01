import {NavBar,NavigationItem, Footer} from "../utils";
import { NoNews,NewsList } from "./component";
import "./style.scss";


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

const DummyNewsList = [{
    image:"logo.png",
    title:"Meet and greet",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur dolore possimus! Ex, dicta? Pariatur, quibusdam est! Excepturi, veniam deserunt.",
    author:"Daniel Ukuhor",
    date:"3 months ago",
    body:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, magnam quia.
     Eveniet veniam sequi corporis dolorem, dolores aliquam iusto odio nam ea commodi assumenda esse 
     minima similique facilis reprehenderit itaque labore ducimus eaque! Debitis ipsum explicabo, accusamus, 
     minus porro corporis placeat optio ipsa fugiat exercitationem itaque nisi maiores nam. Illo, fugit id.
    Consectetur odio veritatis accusamus hic rem corrupti numquam illo placeat distinctio cumque deleniti 
    animi, aliquid nesciunt nihil fugit dolores velit odit soluta omnis, quia nisi, ullam temporibus blanditiis.
    Sunt voluptatem ab libero id error aliquid hic, deleniti saepe modi blanditiis, obcaecati cumque sapiente? 
    Qui in sint quod maxime. Dolore sit animi cumque ratione doloremque esse voluptatibus nulla maiores ullam!
    Commodi nesciunt, ab, deserunt vitae nostrum molestiae ipsam temporibus ex itaque doloribus exercitationem 
    excepturi harum tenetur necessitatibus molestias labore nisi vel. Temporibus corporis accusamus ut quaerat
    tempore quidem, cupiditate quas, libero ipsum, cum sed pariatur voluptate enim dolorum eum?`
}]

export default function News(){
    return <div id="news-page-container">
                <NavBar lists={navigationData} sideItems={navItems} />
                <NewsList list={DummyNewsList} />
                <Footer data={navigationData}/>  
    </div>
}