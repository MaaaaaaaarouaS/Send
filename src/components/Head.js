import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div class="logo">
                        <img src="./assets/img/SurpRise.gif" alt="" />
                    </div>
                    <nav class="nav" id="nav-menu">
                        <ion-icon name="close-outline" class="header__close" id="nav-close"></ion-icon>
                        <ul class="nav__list">
                            <li class="nav__item"><Link to="/nft" className="nav__link">Home</Link></li>
                            <li class="nav__item"><Link to="/vipNft" className="nav__link">VIP</Link></li>
                            <li class="nav__item"><Link to="/tutorialNft" className="nav__link">Tutorial</Link></li>
                            <li class="nav__item"><Link to="/faq" className="nav__link">FAQ</Link></li>
                            <li class="nav__item"><Link to="/" className="nav__link">ERC20</Link></li>
                            <button class="button button3" style={{ marginLeft: "25px" }}><a>CONNECT</a></button>
                        </ul>
                    </nav>
                    <ion-icon name="menu-outline" class="header__toggle" id="nav-toggle"></ion-icon>
                </header>
            </div >
        )
    }
}
export default Header;