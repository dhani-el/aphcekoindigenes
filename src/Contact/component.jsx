
import { Location,Sms,Call,Facebook,Youtube,Instagram } from "iconsax-react";

const associationEmail = ""

export function GetInTouch(){
    return <div id="get-in-touch-container">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad recusandae reiciendis voluptas nulla eaque?</p>
                <ContactItem Icon={Location} type={"Address"} value={"45/47 martins street Lagos-Island Lagos"}/>
                <ContactItem Icon={Call} type={"Phone Number"} value={`08052013552 | 0818825832 | 08037234488 `}/>
                <ContactItem Icon={Sms} type={"E-Mail"} value={"assoproheritagecultureeko@gmail.com"}/>
                <FollowUs/>
    </div>
}

function ContactItem({Icon,type,value}){
    return <div className="contact-item-container">
                <Icon/>
                <div>
                    <h4>{type}</h4>
                    <p>{value}</p>
                </div>
    </div>
}

function FollowUs(){
    return <div id="follow-us">
                <h4>Follow Us:</h4>
                <div id="icons-container">
                   <a href="www.facebook.com/#"><Facebook/></a>

                   <a href="www.youtube.com/#"><Youtube/></a>

                   <a href="www.instagram.com/#"><Instagram/></a>
                </div>
    </div>
}

export function SendMesssageForm(){
    return <div id="send-messsage-form">
                <h3>Send us a Message</h3>
                <form action={`mailto:${associationEmail}`} method="post" enctype="text/plain">
                    <input name="name" required placeholder="Name" type="text" />
                    <input name="email" required placeholder="E-Mail Address " type="email" />
                    <input name="message" required placeholder="Message" type="text" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A corrupti minus, expedita nisi laborum eligendi?</p>
                    <button type="submit" >Submit</button>
                </form>
    </div>
}

export function Map(){
    return <div>
                <img src={"https://img.pintrest.com"} />
    </div>
}
