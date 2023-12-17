import * as React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
            <header className="header">
                <nav className='nav '>
                    <ul className="mentor__links">
                        <Link to="/" className='logo'><a href="#">SkillUp</a></Link>
                        <li className='nav__right'><a href="#"><button id="" className='secondary-cta'>Profile</button></a></li>
                    </ul>
                </nav>
            </header>

  )
}

export default Header