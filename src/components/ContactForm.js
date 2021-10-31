import React, { useState } from "react";

function Form (){
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    const handleInputChange = (e)=>{
        const { name, value } = e.target;

        if(name==='firstName'){
            setFirstName(value)
        }
        else if(name==='lastName'){
            setLastName(value)
        }
        else if(name==='email'){
            setEmail(value)
        }
        else if(name==='message'){
            setMessage(value)
        }

    };

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        alert( `Hello ${firstName} ${lastName} thank you for contacting me!`)
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div>
        <p>
          Hello {firstName} {lastName}
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
             <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="you@email.com"
          />
             <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
}

export default Form