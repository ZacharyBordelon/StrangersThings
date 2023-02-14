import React from 'react' 
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header>
            <span><Link to='/'>Posts</Link></span>
            <span><Link to='/login'>Login/Register</Link></span>
        </header>
    )
}

export default Header;