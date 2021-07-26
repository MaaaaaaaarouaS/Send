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
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/nft" className="nav__link">NFT</Link></li>
                            <li className="nav__item"><Link to="/vip" className="nav__link">VIP</Link></li>
                            <li className="nav__item"><Link to="/tutorial" className="nav__link">Tutorial</Link></li>
                            <li className="nav__item"><Link to="/revoke" className="nav__link">Revoke</Link></li>
                            <li className="nav__item"><Link to="/analytics" className="nav__link">Analytics</Link></li>
                            <li className="nav__item"><Link to="/verification" className="nav__link">Verification</Link></li>
                            <li className="nav__item"><Link to="/profil" className="nav__link">Profile</Link></li>
                            <button className="btnn button3" style={{ marginLeft: "20px" }}><a><i style={{ color: "#fff" }} className="material-icons">language</i></a></button>
                            <button className="button button3"><a>CONNECT</a></button>
                        </ul>
                    </nav>
                    <ion-icon name="menu-outline" className="header__toggle" id="nav-toggle"></ion-icon>
                </header>
            </div >
        )
    }
}
export default Header;