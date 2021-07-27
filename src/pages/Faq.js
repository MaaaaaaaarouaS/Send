import React from 'react';
import Head from '../components/Head';
const faq = {
    faq: [
        {
            id: 1,
            question: 'SURPRISE? ERC-721 tokens?',
            description: 'SURPRISE stands for non-fungible tokens such as ERC-721 (a smart contract standard) tokens that are hosted on Ethereum’s own blockchain. SURPRISEs are unique digital items similar to collectibles, artwork or game items. As an artist, by tokenizing your work you both ensure that it remains unique and brand it as your own. The actual ownership is blockchain-managed.',
        },
        {
            id: 2,
            question: 'What is SurpriSender?',
            description: 'SurpriSender can send funds from an ERC721(SURPRISE) token to thousands of addresses in a single transaction and save time and money in the process.',
        },
        {
            id: 3,
            question: 'Which wallets are supported?',
            description: 'The following wallets are currently supported: Metamask, WalletConnect, Wallet link, Fortmatic, Portis.',
        },
        {
            id: 4,
            question: 'How can I get in touch?',
            description: 'You can contact us on Telegram or Twitter.',
        },
    ]
};
class Faq extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main className="Main_layout_tdcXQ" data-v-30ced784="">
                    <section className="faq">
                        <h1 style={{ textAlign: "center" }}>FAQ</h1>
                        {
                            faq.faq.map(faq => (
                                <details key={faq.id} open>
                                    <summary>{faq.question}</summary>
                                    <div>
                                        <p>{faq.description}</p>
                                    </div>
                                </details>
                            )
                            )
                        }
                    </section>
                </main>

            </div>
        )
    }
}

export default Faq;