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
                            <li class="nav__item"><Link to="/nft" className="nav__link">NFT</Link></li>
                            <li class="nav__item"><Link to="/vip" className="nav__link">VIP</Link></li>
                            <li class="nav__item"><Link to="/tutorial" className="nav__link">Tutorial</Link></li>
                            <li class="nav__item"><Link to="/revoke" className="nav__link">Revoke</Link></li>
                            <li class="nav__item"><Link to="/analytics" className="nav__link">Analytics</Link></li>
                            <li class="nav__item"><Link to="/verification" className="nav__link">Verification</Link></li>
                            <li class="nav__item"><Link to="/profil" className="nav__link">Profile</Link></li>
                            <button class="btnn button3" style={{ marginLeft: "20px" }}><a href="#"><i style={{ color: "#fff" }} class="material-icons">language</i></a></button>
                            <button class="button button3"><a href="#">CONNECT</a></button>
                        </ul>
                    </nav>
                    <ion-icon name="menu-outline" class="header__toggle" id="nav-toggle"></ion-icon>
                </header>
            </div >
        )
    }
}
export default Header;