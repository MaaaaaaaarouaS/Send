import React from 'react';
import Header from '../components/Header';
class Tutorial extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main_layout_tdcXQ" data-v-30ced784="">
                    <h1 className="ftitle">Video</h1>
                    <section className="vip_vip_2tBnK" data-v-33f90f42="">
                        <iframe width="600" height="355"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                        <h1 className="ftitle">How to send ERC20 tokens to multiple addresses</h1>
                        <h3>Airdrop of ERC20 token with self-generated key:Select Ethereum Mainnet in wallet</h3><span className="vertical-line"></span>
                        <h3>Wait for token balances to load</h3><span className="vertical-line"></span>
                        <h3>Select desired token from the list</h3><span className="vertical-line"></span>
                        <h3>Enter CSV addresses with balances separated by comma</h3><span className="vertical-line"></span>
                        <h3>Click Send</h3><span className="vertical-line"></span>
                        <h3>Send Approve transaction</h3><span className="vertical-line"></span>
                        <h3>Click Proceed</h3><span className="vertical-line"></span>
                        <h3>Select self-generated key option if you have more than 3 transactions</h3><span className="vertical-line"></span>
                        <h3>Click Sign Key</h3><span className="vertical-line"></span>
                        <h3>Sign with wallet</h3><span className="vertical-line"></span>
                        <h3>Click Proceed with self generated key</h3><span className="vertical-line"></span>
                        <h3>Confirm transaction</h3><span className="vertical-line"></span>
                        <h3>Wait for an airdrop to complete</h3><span className="vertical-line"></span>
                        <h3>Wait for change tx from your self-generated key</h3><span className="vertical-line"></span>
                        <h1 className="done">Done</h1>
                        <h1 className="ftitle">API</h1>
                        <p>You can prefill the form with query parameters Query Parameters:</p>
                        <p>- token address</p>
                        <p>CSV - your list separated with</p>
                        <p>Example</p>
                        <h4 className="linktuto">https://multisender.app/?
                            token=0x000000000000000000000000000000000000bEEF&csv=0x0
                            039f22efb07a647557c7c5d17854cfd6d489ef3,1\n0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87c
                            F,2</h4>
                    </section>
                </main>
            </div>
        )
    }
}

export default Tutorial;