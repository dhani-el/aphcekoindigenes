
import "./style.scss"
import { NavBar } from "../utils"





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
                <NavBar lists={navigationData} />
                <FloatingText/>
                <CenterPiece/>
    </div>
}

function PageCurtain(){
    return <div id="page-curtain">

    </div>
}

function FloatingText(){
    return <div id="floating-text-container">
                <p>Èkó</p>
        </div>
}

function CenterPiece(){
    return <div id="center-piece">
                <Danfo/>
                <Drum/>
                <Eyo/>
                <Church/>
    </div>
}

function Danfo(){
    return <div className="center-piece-item" >

    </div>
}
function Drum(){
    return <div className="center-piece-item" >

    </div>
}
function Eyo(){
    return <div className="center-piece-item" >

    </div>
}
function Church(){
    return <div className="center-piece-item" >

    </div>
}