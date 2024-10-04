import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import  "./style.scss";
import { NavBar,NavigationItem,Footer } from '../utils'; 



const navItems = [
  <NavigationItem data={{url:"/",title:"Home"}} key={"home"}/>,
  <NavigationItem data={{url:"/about",title:"About Us"}} key={"About Us"}/>,
  <NavigationItem data={{url:"/contact",title:"Contact"}} key={"Contact"}/>,
  <NavigationItem data={{url:"/join",title:"Join"}} key={"Join"}/>,
  <NavigationItem data={{url:"/news",title:"News"}} key={"News"}/>,
]


const navigationData = [
  {url:"/",title:"Home"},
  {url:"/about",title:"About Us"},
  {url:"/contact",title:"Contact"},
  {url:"/news",title:"News"},
  {url:"/join",title:"Join"},
]


export default function Support(){
    const publicKey = "pk_test_85ae9f3c0f90ea71f1b605a390aa0fa60a769f42"
    const [amount, setAmount] = useState() // Remember, set in kobo!
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const componentProps = {
        email,
        amount:(amount * 100),
        metadata: {
          phone,
        },
        publicKey,
        text: "Send Now",
        onSuccess: () =>
          alert("Thanks Supporting Us !!!"),
    }

    function handleInputValueChange(setter,value){;
            setter((init)=>value);
    }

    return <div id='support-page-container'>
                <NavBar lists={navigationData} sideItems={navItems} />
                <h3>Do You Want to Support the Association Financally? </h3>
                <div id='form-div'>
                    <label>Enter Your Email:</label>
                    <input value={email} onChange={(e)=>handleInputValueChange(setEmail, e.target.value)} type="email" placeholder="johndoe@gmail.com"/>
                    <label>Your Phone Number:</label>
                    <input value={phone}  type='number' onChange={(e)=>handleInputValueChange(setPhone, e.target.value)} placeholder="Phone Number"/>
                    <label>Amount:</label>
                    <input value={amount} type='number' onChange={(e)=>handleInputValueChange(setAmount, e.target.value)} placeholder="5000"/>
                    <PaystackButton className="paystack-button" {...componentProps} />
                </div>
                <Footer data={navigationData}/>
    </div>
}
