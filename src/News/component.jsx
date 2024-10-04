
import { EmojiSad } from "iconsax-react";
import { Link } from "react-router-dom";

export function NoNews(){
    return <div id="no-news-container">
                <p>There is Currently No News</p>
                <EmojiSad variant="Bold" color="grey"/>
    </div>
}

export function NewsList({list=[]}){
    return <div id="news-list-container">
                {
                    list.map(function(aNews){
                        return <Link to={`/news-update?title=${aNews.title}&author=${aNews.author}`} ><ANewsArticle image={aNews.image} title={aNews.title} description={aNews.description} author={aNews.author} date={aNews.date} /></Link>
                    })
                }
    </div>
}

function ANewsArticle({image,title,description,date,author}){
    return <div className="a-news-article-container">
                <div id="image-container" style={{backgroundImage:`url(/${image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                </div>
                <div id="text-container">                    
                    <h3>{title}</h3>
                    <p id="description">{description}</p>
                    <p id="author-date">by {author} &#x2022; {date} </p>
                </div>
    </div>
}