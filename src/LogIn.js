import React, { useState } from 'react'

const LogIn = () => { 
    const [ displayLogInButton, setDisplayLogInButton] = useState(true)
    const [ usernameInput, setUsernameInput] = useState('')
    const [ passwordInput, setPasswordInput] = useState('')
    const [ token, setToken ] = useState('')

    const logInOrRegister = async(event) =>{ 
      const logInOrRegisterEndPoint = event.target.childNodes[2].id === 'login' ? 'login' 
      : 'register'
      
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/${logInOrRegisterEndPoint}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          user: {
            username: usernameInput,
            password: passwordInput
          }
        })        
      })
      const info = await response.json()
      console.log(info)
      setToken(info.data.token)
    }

    return(
      <div>
        <h1>Log In</h1>
        <form onSubmit={logInOrRegister}>
          <input placeholder='Username' onChange={(event) => setUsernameInput(event.target.value)}></input>
          <input placeholder='Password' onChange={(event) => setPasswordInput(event.target.value)}></input>
          {
            displayLogInButton ? 
            <>
              <button id="login">Log In</button>
              <button type="button" onClick={() => setDisplayLogInButton(false)} >Register Here</button>
            </> : 
            <>
              {/* <input placeholder="confirm password"></input>           */}
              <button id='register'>Register</button>
              <button type="button" onClick={() => setDisplayLogInButton(true)}>Return to Log In</button>
            </>
          }
        </form>
      </div>
    )
}



export default LogIn