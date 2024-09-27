



export function Intro(){
    return <section>
                <div>
                    <h2>About Us</h2>
                    <p>A Little About Us</p>
                </div>

    </section>
}


export function Point(){
    return <div>
                <Text/>
                <Image/>
    </div>
}

function Text(){
    return <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum architecto quidem necessitatibus veritatis eos vitae totam accusantium fugit incidunt iure, consequuntur facere suscipit mollitia labore neque esse. Eaque dolorum debitis recusandae atque perferendis aspernatur minus voluptatum totam cumque aut. Odit eius ullam eligendi accusamus voluptates?
    </p>
}

function Image(){

    return <div>
                <img/>
            </div>
}

export function CallToAction(){
    return <div id="ad-container">
                <div id="background-image">
                    <img src="" alt="background image of the association" />
                </div>
                <div>
                    <h2>Are You An Eko Indigen Who Resonates With Us?</h2>
                    <button>Join Us</button>
                </div>
    </div>
}

export function Founders({images=[]}){
    return <div>
                <h4>Meet the Founders</h4>
                <div>
                    {
                        images.map(function(image){
                                    return <img src={image} />
                        })
                    }
                </div>
    </div>
}