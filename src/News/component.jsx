
import { EmojiSad } from "iconsax-react";


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
                        return <ANewsArticle image={aNews.image} title={aNews.title} description={aNews.description} author={aNews.author} date={aNews.date} />
                    })
                }
    </div>
}

function ANewsArticle({image,title,description,date,author}){
    return <div className="a-news-article-container">
                <div id="image-container" style={{backgroundImage:`url(/${image})`}}>
                </div>
                <div id="text-container">                    
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>{date}</p>
                    <p>{description}</p>
                </div>
    </div>
}