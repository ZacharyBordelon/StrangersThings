import React, { useState } from 'react'

const LogIn = () => { 
    const [ displayLogInButton, setDisplayLogInButton] = useState(true)
    const [ usernameInput, setUsernameInput] = useState('')
    const [ passwordInput, setPasswordInput] = useState('')

    const displayRegisterButton = () =>{
      setDisplayLogInButton(false);
    }
    const logIn = () => {
      
    }

    return(
      <div>
        <h1>Log In</h1>
        <form onSubmit={logIn}>
          <input placeholder='Username' onChange={(event) => setUsernameInput(event.target.value)}></input>
          <input placeholder='Password' onChange={(event) => setPasswordInput(event.target.value)}></input>
          {
            displayLogInButton ? 
            <>
              <button>Log In</button>
              <button onClick={displayRegisterButton}>Register Here</button>
            </> : 
            <>
              {/* <input placeholder="confirm password"></input>           */}
              <button>Register</button>
              <button onClick={() => setDisplayLogInButton(true)}>Return to Log In</button>
            </>
          }
        </form>
      </div>
    )
}



export default LogIn