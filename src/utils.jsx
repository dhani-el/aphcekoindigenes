import { HambergerMenu,CloseCircle } from "iconsax-react";
// import { NavigationItem } from "./Home/components";
import logo from "./assets/logo.png";
import "./index.scss";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);



export function NavBar({lists=[],sideItems=[]}){
    return <header id="nav-container">
                    <SideNavigation items={sideItems} />
                    <Logo/>
                    <NavLinks lists={lists}/>
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
                <Link to={navItem.url} >
                    <p>
                        {navItem.title}
                    </p>
                </Link>
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

export function NavigationItem({data}){
    return <div id="navigation-item-container" >
                <a href={data.url}><p>{data.title}</p></a>
    </div>
}
