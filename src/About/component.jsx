
import lagosBridge from "../assets/Lagosbridge.jpeg";
import talkingdrum from "../assets/talkingdrum.jpeg";


export function Intro(){
    return <section id="intro-section">
                <div id="text-div">
                    <h1>About Us</h1>
                    <p>A Little About Us</p>
                </div>
                <div id="background-image-div">
                </div>
    </section>
}


export function Point(){
    return <div id="main-point">
                <Text/>
                <Image/>
    </div>
}

function Text(){
    return <p id="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum architecto quidem necessitatibus veritatis eos vitae totam accusantium fugit incidunt iure, consequuntur facere suscipit mollitia labore neque esse. Eaque dolorum debitis recusandae atque perferendis aspernatur minus voluptatum totam cumque aut. Odit eius ullam eligendi accusamus voluptates?
    </p>
}

function Image(){

    return <div id="image-container">
                <img src={lagosBridge}/>
            </div>
}

export function CallToAction(){

    function handleClick(){
        window.location.href = "/join"
    }
    
    return <div id="ad-container">
                <div id="background-image">
                </div>
                <div id="overlapping-text-container">
                    <h2>Are You An Eko Indigen Who Resonates With Us?</h2>
                    <button onClick={handleClick}>Join Us</button>
                </div>
    </div>
}

export function Founders({infos=[]}){
    return <div id="founders-container">
                <h2>Founders</h2>
                <p>Meet Some of the Founding Members</p>
                <div id="list-of-members">
                    {
                        infos.map(function(info){
                                    return <Amember image ={info.image} name={info.name} role={info.role} />
                        })
                    }
                </div>
    </div>
}

function Amember({image,name,role}){
    return <div className="a-member">
                <div id="a-member-image-container">
                    <img src={image} />
                </div>
                <div id="text-container">
                    <h4>{name}</h4>
                    <p>{role}</p>
                </div>
    </div>
}

export function Works(){
    return <div id="works-container">
        <h2>What We're Doing</h2>
        <p>what are we currently doing as the the  association for the promotion of heritage and culture of Eko indigenes?</p>
        <div id="case-studies">
            <WorkCase image={talkingdrum}   title={"Example 1"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa at nulla tempora cupiditate quis!"} />
            <WorkCase image={talkingdrum}   title={"Example 2"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa at nulla tempora cupiditate quis!"} />
            <WorkCase image={talkingdrum}   title={"Example 3"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa at nulla tempora cupiditate quis!"} />
        </div>
    </div>
}

function WorkCase({image,title,description}){
    return <div className="work-case-container">
                <div id="image-container">
                    <img src={image}/>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
}