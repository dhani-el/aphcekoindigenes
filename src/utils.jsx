
import logo from "./assets/island.png";
import "./index.scss";

export function NavBar({lists}){
    return <header id="nav-container">
                <Logo/>
                <NavLinks lists={lists}/>
    </header>
}

export function Logo(){
    return <div id="logo-container">
                <span id="island-image-container">
                    <img src={logo} alt="The associations logo" />
                </span>
                <p>Promoting the heritage and culture of eko indigenes</p>
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