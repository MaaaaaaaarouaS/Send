import React from 'react';
import { Link } from 'react-router-dom';
import net from '../components/net';
const wall = {
    wallet: [
        {
            id: 1,
            name: 'Wallet Connect',
            icon: 'network-icon network-icon-wallet',
        },
        {

            id: 2,
            name: 'Install Metamask',
            icon: 'network-icon network-icon-metamask',
        },
    ]
};
class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src="./assets/img/SurpRise.gif" alt="" />
                    </div>
                    <nav className="nav" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/nft" className="nav__link">NFT</Link></li>
                            <li className="nav__item"><Link to="/vip" className="nav__link">VIP</Link></li>
                            <li className="nav__item"><Link to="/tutorial" className="nav__link">Tutorial</Link></li>
                            <li className="nav__item"><Link to="/revoke" className="nav__link">Revoke</Link></li>
                            <li className="nav__item"><Link to="/analytics" className="nav__link">Analytics</Link></li>
                            <li className="nav__item"><Link to="/verification" className="nav__link">Verification</Link></li>
                            <li className="nav__item"><Link to="/profil" className="nav__link">Profile</Link></li>
                            <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                            <label htmlFor="modal-btn"><i style={{ color: "#fff" }} className="material-icons">language</i></label>
                            <input className="modal2-btn" type="checkbox" id="modal2-btn" name="modal2-btn" />
                            <label htmlFor="modal2-btn">contact<i className="uil uil-expand-arrows"></i></label>
                            <div className="modal">
                                <div className="modal-wrap">
                                    <h1 className="ftitle">Change network</h1>
                                    <div className="networks">
                                        {
                                            net.network.map(net => (
                                                <div key={net.id} className="nety">
                                                    <div className={net.icon}></div>
                                                    <div className="network-name">{net.name}</div>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="modal2">
                                <div className="modal2-wrap">
                                    <h1 className="ftitle">Please select your Web3 Wallet</h1>
                                    <div className="networks">
                                        {
                                            wall.wallet.map(wall => (
                                                <div key={wall.id} className="wallet">
                                                    <div className={wall.icon}></div>
                                                    <div className="network-name">{wall.name}</div>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </header>
            </div >
        )
    }
}
export default Header;