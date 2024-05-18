import React, { useState } from  'react';
    
function UserForm (props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");  
    
    return(

      <div>
        <form action='action'>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirmpassword: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>Your form data</p>
        <p>First Name:{firstname}</p>
        <p>Last Name:{lastname}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirmpassword:{confirmpassword}</p>
      </div>
    );
};

export default UserForm;


