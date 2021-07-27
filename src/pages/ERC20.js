import React from 'react';
import Header from '../components/Header';
import Stepper from '../components/Stepper';
const net = {
    network: [
        {
            id: 1,
            name: 'Ethereum Mainnet',
            icon: 'network-icon network-icon-mainnet',
        },
        {
            id: 2,
            name: 'Binance Smart Chain',
            icon: 'network-icon network-icon-binance',
        },
        {
            id: 3,
            name: 'Avalanche C Chain',
            icon: 'network-icon network-icon-avalanche',
        },
        {
            id: 4,
            name: 'Fantom Opera',
            icon: 'network-icon network-icon-fantom',
        },
        {
            id: 5,
            name: 'IoTeX',
            icon: 'network-icon network-icon-iotex',
        },
        {
            id: 6,
            name: 'Matic Network',
            icon: 'network-icon network-icon-matic',
        },
        {
            id: 7,
            name: 'POA Network',
            icon: 'network-icon network-icon-poa',
        },
        {
            id: 8,
            name: 'xDai',
            icon: 'network-icon network-icon-xdai',
        },
    ]
};
class ERC20 extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main" data-v-30ced784>
                    <Stepper />
                    <h1 className="ftitle">Welcome to Token SurpriSender</h1>
                    <p className="ftitle_text">A tool that allows you to batch send ERC20 tokens</p>
                    <div className="networks">
                        {
                            net.network.map(net => (
                                <div key={net.id} className="network">
                                    <div className={net.icon}></div>
                                    <div className="network-name">{net.name}</div>
                                </div>
                            )
                            )
                        }
                    </div>
                    <section className="preparation_inputs_1qX9K">
                        <div className="container">
                            <label className="toggle" htmlFor="uniqueID">
                                <input type="checkbox" className="toggle__input" id="uniqueID" />
                                <span className="toggle-track">
                                    <span className="toggle-indicator">
                                        <span className="checkMark">
                                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span><br /><br />
                                Deflationary
                            </label>
                            <label className="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div className="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button><i className="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><label className="_base-input_label_3kGwW" data-v-404281ee="">List of Addresses in CSV</label><a className="ExampleCSV">Show Example CSV</a></div>

                            <div className="webflow-style-input">
                                <textarea rows="4"></textarea>
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><input className="CSV-file-input" type="file" /></div>
                            <span><a type="submit"></a></span>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default ERC20;