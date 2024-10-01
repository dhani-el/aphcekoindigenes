import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import  "./style.scss";


export default function Support(){
    const publicKey = "pk_your_public_key_here"
    const [amount, setAmount] = useState(0) // Remember, set in kobo!
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

    return <div>
                <h3>Do You Want to Support the Association Financally? </h3>
                <form>
                    <label>Enter Your Email:</label>
                    <input value={email} onChange={(e)=>handleInputValueChange(setEmail, e.target.value)} type="email" placeholder="johndoe@gmail.com"/>
                    <label>Your Phone Number:</label>
                    <input value={phone}  type='number' onChange={(e)=>handleInputValueChange(setPhone, e.target.value)} placeholder="Phone Number"/>
                    <label>Amount:</label>
                    <input value={amount} type='number' onChange={(e)=>handleInputValueChange(setAmount, e.target.value)} placeholder="5000"/>
                    <PaystackButton className="paystack-button" {...componentProps} />
                </form>
    </div>
}