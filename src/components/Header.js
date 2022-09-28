import "./header.scss";

import logo from "../image/logo.svg"
import humburger from "../image/humburger.svg"
import humburger2 from "../image/humburger-x.svg"



function Header() {
  return(
    <>
    
    <header className="site-header">
      <div className="header__container container">
        <div className="header__inner">
          <a className="header__logo logo" href="index.html">
            <img
              className="logo__img"
              src={logo}
              alt="Site logo"
              width="199"
              height="33"
            />
          </a>
        </div>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">Visiting</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Explore</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Video</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Gallery</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Tickets</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Contacts</a>
            </li>
          </ul>
        </nav>
    
        <label className="haeder__humurger humburger" htmlFor="humurger">
          <input className="visually-hidden humburger__check" type="checkbox" name="humurger" id="humurger"/>

          <div className="humburger__modal">
            <ul className="humburger__list">
              <li className="humburger__item">
                <a className="humburger__link" href="#link">Visiting</a>
              </li>

              <li className="humburger__item">
                <a className="humburger__link" href="#link">Explore</a>
              </li>

              <li className="humburger__item">
                <a className="humburger__link" href="#link">Video</a>
              </li>

              <li className="humburger__item">
                <a className="humburger__link" href="#link">Gallery</a>
              </li>

              <li className="humburger__item">
                <a className="humburger__link" href="#link">Tickets</a>
              </li>

              <li className="humburger__item">
                <a className="humburger__link" href="#link">Contacts</a>
              </li>
            </ul>
          </div>

          <img className="humburger__img" src={humburger} alt="humburger" width="32" height="18"/>

          <img className="humburger__img-x" src={humburger2} alt="humburger-x" width="32" height="18"/>
        </label>
      </div>
    </header>
    </>
  )
  
}

export default Header