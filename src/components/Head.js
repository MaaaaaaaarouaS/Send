import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src="./assets/img/SurpRise.gif" alt="" />
                    </div>
                    <nav className="nav" id="nav-menu">
                        <ion-icon name="close-outline" className="header__close" id="nav-close"></ion-icon>
                        <ul className="nav_list">
                            <li className="nav__item"><Link to="/nft" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/vipNft" className="nav__link">VIP</Link></li>
                            <li className="nav__item"><Link to="/tutorialNft" className="nav__link">Tutorial</Link></li>
                            <li className="nav__item"><Link to="/faq" className="nav__link">FAQ</Link></li>
                            <li className="nav__item"><Link to="/" className="nav__link">ERC20</Link></li>
                            <button className="button button3" style={{ marginLeft: "25px" }}><a>CONNECT</a></button>
                        </ul>
                    </nav>
                    <ion-icon name="menu-outline" className="header__toggle" id="nav-toggle"></ion-icon>
                </header>
            </div >
        )
    }
}
export default Header;