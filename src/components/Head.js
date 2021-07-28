import React from 'react';
import { Link } from 'react-router-dom';
const wallnft = {
    walletnft: [
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
                    <div style={{ marginRight: "30%" }} className="logo">
                        <img src="./assets/img/SurpRise.gif" alt="" />
                    </div>
                    <nav className="nav" id="nav-menu">
                        <ul className="nav_list">
                            <li className="nav__item"><Link to="/nft" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/vipNft" className="nav__link">VIP</Link></li>
                            <li className="nav__item"><Link to="/tutorialNft" className="nav__link">Tutorial</Link></li>
                            <li className="nav__item"><Link to="/faq" className="nav__link">FAQ</Link></li>
                            <li className="nav__item"><Link to="/" className="nav__link">ERC20</Link></li>
                            <input className="modal2-btn" type="checkbox" id="modal2-btn" name="modal2-btn" />
                            <label htmlFor="modal2-btn">contact<i className="uil uil-expand-arrows"></i></label>
                            <div className="modal2">
                                <div className="modal2-wrap">
                                    <h1 className="ftitle">Please select your Web3 Wallet</h1>
                                    <div className="networks">
                                        {
                                            wallnft.walletnft.map(wallnft => (
                                                <div key={wallnft.id} className="wallet">
                                                    <div className={wallnft.icon}></div>
                                                    <div className="network-name">{wallnft.name}</div>
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