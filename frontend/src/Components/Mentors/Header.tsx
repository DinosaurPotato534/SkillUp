import * as React from 'react'

function Header() {
  return (
            <header className="header">
                <nav className='nav '>
                    <ul className="mentor__links">
                        <li className='logo'><a href="#">SkillUp</a></li>
                        <li className='nav__right'><a href="#"><button id="" className='secondary-cta'>Profile</button></a></li>
                    </ul>
                </nav>
            </header>

  )
}

export default Header