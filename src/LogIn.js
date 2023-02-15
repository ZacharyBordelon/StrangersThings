import React, { useState } from 'react'

const LogIn = () => { 
    const [ displayLogInButton, setDisplayLogInButton ] = useState(true)

    const displayRegisterButton = () =>{
      setDisplayLogInButton(false);
    }

    return(
      <div>
        <h1>Log In</h1>
        <form>
          <input placeholder='Username'></input>
          <input placeholder='Password'></input>
          {
            displayLogInButton ? 
            <>
              <button>Log In</button>
              <button onClick={displayRegisterButton}>Register Here</button>
            </> : 
            <>
              <input placeholder="confirm password"></input>          
              <button>Register</button>
              <button onClick={()=> setDisplayLogInButton(true)}>Return to Log In</button>
            </>
          }
        </form>
      </div>
    )
}



export default LogIn