

export function ColoredHeaderDiv(){
    return <div id="colored-header-div">

    </div>
}

export function IntroText({header,summary}){
    return <div id="intro-text-container">
                <h3>{header}</h3>
                <p>{summary}</p>
    </div>
}

export function HeMage({image}){
    return <div id="image-container" style={{backgroundImage:`url(/${image})`, backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >

    </div>
}

export function Text({text}){
    return <div id="body-text-container">
        {
            text.map(function(Paragraph){
                return <p>{Paragraph}</p>
            }
                )
        }
    </div>
}
