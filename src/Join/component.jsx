


const associationEmail = "ukuhoromotayo@gmail.com"

export function JoinForm(){
    return <div id="join-form">
                <h2>Want to Join Us? </h2>
                <p>We would love to have You Join Us</p>
                <form action={`mailto:${associationEmail}`} method="post" enctype="text/plain" >
                    <label>Full Name:</label>
                    <input required placeholder="Enter Your Full Name" type="text" />
                    <label>Email Address:</label>
                    <input required placeholder="Enter Your Email Address " type="email" />
                    <label>Phone Number:</label>
                    <input required placeholder="Enter Your Phone Number" type="number"  />
                    <label>Local Government of Birth:</label>
                    <input required placeholder="Where in Lagos are You From?" type="text" />
                    <label>Gender:</label>
                    <div id="radio-container">
                        <div className="radio-component">
                            <input required type="radio" name="Gender" value="Male"/>
                            <label>Male</label>
                        </div>
                        <div className="radio-component">
                            <input  required type="radio" name="Gender" value="Female" />
                            <label>Female</label>
                        </div>
                    </div>
                    <input type="submit" id="submit-button" />
                </form>
            </div>
}