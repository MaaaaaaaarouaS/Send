import React from 'react';
import Head from '../components/Head';
class Faq extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main class="Main_layout_tdcXQ" data-v-30ced784="">
                    <section class="faq">
                        <h1 style={{ textAlign: "center" }}>FAQ</h1>
                        <details open>
                            <summary>SURPRISE? ERC-721 tokens?</summary>
                            <div>
                                <p>SURPRISE stands for non-fungible tokens such as ERC-721 (a smart contract standard) tokens that are hosted on Ethereum’s own blockchain. SURPRISEs are unique digital items similar to collectibles, artwork or game items. As an artist, by tokenizing your work you both ensure that it remains unique and brand it as your own. The actual ownership is blockchain-managed.</p>
                            </div>
                        </details>
                        <details>
                            <summary>What is SurpriSender?</summary>
                            <div>
                                <p>SurpriSender can send funds from an ERC721(SURPRISE) token to thousands of addresses in a single transaction and save time and money in the process.</p>
                            </div>
                        </details>
                        <details>
                            <summary>Which wallets are supported?</summary>
                            <div>
                                <p>The following wallets are currently supported: Metamask, WalletConnect, Wallet link, Fortmatic, Portis.</p>
                            </div>
                        </details>
                        <details>
                            <summary>How can I get in touch?</summary>
                            <div>
                                <p>You can contact us on Telegram or Twitter.</p>
                            </div>
                        </details>
                    </section>
                </main>

            </div>
        )
    }
}

export default Faq;