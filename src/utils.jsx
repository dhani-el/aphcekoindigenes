import { HambergerMenu,CloseCircle } from "iconsax-react";
import { NavigationItem } from "./Home/components";
import logo from "./assets/logo.png";
import "./index.scss";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const navItems = [
    <NavigationItem data={{url:"/home",title:"Home"}} key={"Home"}/>,
    <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
    <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
    <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
    <NavigationItem data={{url:"/support",title:"Support"}} key={"Support"}/>,
]

export function NavBar({lists}){
    return <header id="nav-container">
                    <Logo/>
                    <NavLinks lists={lists}/>
                    <SideNavigation items={navItems} />
    </header>
}

export function Logo(){
    return <div id="logo-container">
                <span id="island-image-container">
                    <a href="/">
                        <img src={logo} alt="The associations logo" />
                    </a>
                </span>
    </div>
}

export function NavLinks({lists}){
    return <ul id="nav-links-container">
                {
                    lists.map((anItem)=>{
                        return <ANavLink navItem={anItem} key={anItem.title} />
                    })
                }
    </ul>
}

function ANavLink({navItem}){
    return <li>
                <a href={navItem.url} >
                    <p>
                        {navItem.title}
                    </p>
                </a>
    </li>
}

function SideNav(){
    return <div id="side-nav">
                <div>
                    <HambergerMenu/>
                </div>
    </div>
}

function SideNavigation({items=[]}){
    const navBodyRef =  useRef(null);
    function openSideBar(){
        gsap.to('#nav-body',{right:"0vw",duration:1})
    }

    function closeSideBar(){
        gsap.to('#nav-body',{right:"120vw",duration:1})
    }



    return <div id="side-navigation-container">
                <div id="hamberger-container" onClick={openSideBar}>
                    <HambergerMenu/>
                </div>
                <div id="nav-body" ref={navBodyRef}>
                    <div id="close-circle" onClick={closeSideBar}>
                        <CloseCircle/>
                    </div>
                    {items.map(function(Item){
                        return Item
                    })}
                </div>
    </div>
}


