
import danfo from "../assets/church 2.png"
import palace from "../assets/palace.png"
import eyo from "../assets/eyoOnly.png"
import drum from "../assets/drumOnly.png"
import church from "../assets/mosque2.png"
import dummyMember from "../assets/dummyMember.jpeg"
import { register } from 'swiper/element/bundle';
import { useRef } from "react"


register()
export function PageCurtain(){
    return <div id="page-curtain">

    </div>
}



export function FloatingText(){
    return <div id="floating-text-container">
                <p>Èkó</p>
        </div>
}



export function CenterPiece(){
    return <div id="center-piece">
                 <Danfo/> 
                <Drum/>
                <Palace/>
                 <Eyo/>
                <Church/> 
    </div>
}
function Danfo(){
    return <div className="center-piece-item" id="Danfo" >
                <img src={danfo} alt="Danfo a public commonly bus found in lagos"/>
    </div>
}
function Drum(){
    return <div className="center-piece-item" id="Drum" >
                <img src={drum} alt="A talking Drum from the yoruba land"/>
    </div>
}
function Eyo(){
    return <div className="center-piece-item" id="Eyo" >
                <img src={eyo} alt="Danfo a public commonly bus found in lagos"/>
    </div>
}
function Church(){
    return <div className="center-piece-item" id="Church" >
                <img src={church} alt="Danfo a public commonly bus found in lagos"/>
    </div>
}

function Palace(){
    return <div className="center-piece-item" id="Church" >
                <img src={palace} alt="Danfo a public commonly bus found in lagos"/>
    </div>
}



export function Mission(){
    return <div id="mission-container">
                <h2>Our Mission</h2>
                <Amission/>
    </div>
}
function Amission(){
    return <div id="a-mission-container">
                        <p>To promote the heritage and culture of Eko indigenes.</p>
                        <p>To promote peace and unity among EKO indigenes from the 5 Divisions(IBILE) OF Lagos State. </p>
                        <p>To work towards bringing back the integrity of our State as we used to have it in the days of our Forefathers. </p>
                        <p>To encourage our young ones to develop keen interest in education, skill acquisition and good morals, by holding symposiums and public lectures.</p>
                        <p>To discourage our youths from political thurggery during electioneering processes.</p>
                        <p>To foster good relationship with the government, HRH's, indigenes and households.</p>
                        <p> To always remember and honour our Heroes and Heroines.</p>
    </div>
}
function Amission2(){
    return <div id="a-mission-container2">
                <div id="image-container2">
                    <img src={dummyMember} />
                </div>
                <div id="text-container2">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ut tempora harum ipsam, cum aperiam eum quibusdam maiores doloremque porro impedit quae consequuntur, facilis qui. Asperiores explicabo voluptatum ducimus ipsam dolores commodi fugiat, qui ipsa in ad accusamus aut laudantium veniam. Aliquam nam dolorum reiciendis velit dolor facilis voluptate, sunt modi asperiores ab sapiente ratione, hic quo nostrum? Ducimus, ea sapiente possimus nobis, accusamus maiores nisi saepe ex molestias assumenda fugit totam repudiandae non iure velit reprehenderit sit libero aut similique nam dolorum? Ipsam beatae dolore sunt ratione. Mollitia adipisci sit labore inventore, facilis, minus cumque, vero quasi ratione repellat aperiam illo?
                    </p>
                </div>
    </div>
}


export function News({news}){
    return <section id="news-container">
                <h2>NEWS</h2>
                <NewsList news={news}/>
    </section>
}
 function NewsList({news=[]}){
    const swiperElRef = useRef(null);

    return <swiper-container ref={swiperElRef} slides-per-view="1" center={true} navigation="true" pagination="true" id="list-of-news" >
                {
                   news.map(function(info){
                             return <swiper-slide  style={{width:"fit-content"}} key={`${info.url}`}>
                                        <a href={info.url}>
                                            <NewsItem data={info} />
                                        </a>
                                     </swiper-slide>
                     })
                }
            </swiper-container>
}

function NewsItem({data}){
    return <div id="single-news-item">
                <div id = "image-div" style={{backgroundImage:`url(/${data.image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                </div>
                <div id="text-div">
                    <h2>{data.title}</h2>
                    <p id="description">{data.description}</p>
                    <p id="author-date">by {data.author} &#x2022; {data.date} </p>
                </div>
    </div>
}

export function NavigationItem({data}){
    return <div id="navigation-item-container" >
                <a href={data.url}><p>{data.title}</p></a>
    </div>
}

