import React from 'react'
import twitter from '../assets/images/icon _Twitter.svg';
import instagram from '../assets/images/icon _Instagram.svg';
import github from '../assets/images/icon _GitHub.svg';
import mentor from '../assets/images/video_session.png';
import '../assets/styles/style.css';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <div>
        <div className='container'>
            <header className="header">
                <nav className='nav'>
                    <ul className="nav__links">
                        <li className='logo'>
                            <a href="#">SkillUp</a>
                        </li>
                        <li className='nav__right'>
                            <Link to="/signIn">
                                <button id="" className='secondary-cta'>Log In</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signUp">
                                <button id="btn__cta">Sign Up</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="hero">
                <section className="hero__text">
                    <h1 id='hero--heading_text'>Welcome to your one-stop for all things <br />mentoring</h1>
                    <p id='hero--normal_text'>Get one-on-one mentorship from  world class engineers and developers</p>
                    <button id="btn__cta">Find A Mentor</button>
                </section>
                <div className='hero_sub--section row'>
                    <ul className='hero_sub--list'>
                        <li className='hero--list'>- Have one-on-one video chat  with world class experts</li>
                        <li className='hero--list'>- Schedule meetings with multiple experts</li>
                        <li className='hero--list'>- Withdraw from meetings whenever you like</li>
                    </ul>
                    <div className='hero_sub--section-image'><img src={mentor} /></div>

                </div>
                
            </main>

            <footer className="footer">
                <div className="footer__socials">
                    <a id="socials" href="#"><img src={github} className='socials__svg'></img></a>
                    <a id="socials" href="#"><img src={instagram} className='socials__svg'></img></a>
                    <a id="socials" href="#"><img src={twitter} className='socials__svg'></img></a>
                </div>
                <div className="footer__text">
                    <p>© 2023 SkillUp</p>
                </div>
            </footer>
        </div>
    </div>
  )
}
