import { useEffect, useState } from "react";
import "./style.scss";
import AllNews from "../news";
import {NavBar,Footer,NavigationItem} from "../utils";
import { useSearchParams } from "react-router-dom";
import { ColoredHeaderDiv, IntroText,HeMage, Text } from "./components";

const navItems = [
    <NavigationItem data={{url:"/",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/news",title:"News"}} key={"News"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]


const navigationData = [
    {url:"/",title:"Home"},
    {url:"/about",title:"About Us"},
    {url:"/contact",title:"Contact"},
    {url:"/news",title:"News"},
    {url:"/support",title:"Support"},
    {url:"/join",title:"Join"},
]


export default function SingleNewsPage(){
    const [params,setParams] = useSearchParams()
    const [data,setData] = useState();

    useEffect(()=>{
        if (AllNews.length >0) {
           const pageData =  AllNews.find(function(story){
                return story.title == params.get("title") && story.author == params.get("author")
            })
            if(pageData != undefined){
                setData(init=>pageData)
            }
        }
    },[params])

    useEffect(function(){
        console.log(data);
    },[data])

    return <div id="single-page-news-container">
        <NavBar lists={navigationData} sideItems={navItems}/>
        <ColoredHeaderDiv/>
        <section>
            <IntroText header={data?.title} summary={data?.description}/>
            <HeMage image={data?.image} />
            <Text text={data?.body} />
            <Footer data={navigationData}/>
        </section>

    </div>
}