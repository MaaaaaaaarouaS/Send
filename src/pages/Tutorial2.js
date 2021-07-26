import React from 'react';
import Head from '../components/Head';
class Tutorial2 extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main className="Main_layout_tdcXQ" data-v-30ced784="">
                    <section className="tutorial_tutorial_19LFO">
                        <div className="tutorial_tutorial__container_1PvTT">
                            <h2 className="tutorial_tutorial__desc_kVnaz">How to send Surprise token to multiple addresses?</h2>
                            <h4 className="tutorial_tutorial__preTitle_135dj">Preparation</h4>
                            <ol className="tutorial_tutorial__list_114iX">
                                <li className="tutorial_tutorial__listItem_2zIb6">Connect your wallet</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Select desired token from the list. Or insert token address (the address must be an ERC721 or ERC1155 contract)</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Provide list of recipients, you can upload file(CSV, XLS, XLSX) or manually enter addresses with token IDs separated by comma</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Click Proceed button</li>
                            </ol>
                            <h4 className="tutorial_tutorial__preTitle_135dj">Approving</h4>
                            <ol className="tutorial_tutorial__list_114iX">
                                <li className="tutorial_tutorial__listItem_2zIb6">Click the checkbox of service of conditions and click the Continue button</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Before the system checks all the conditions, approve the transaction in your wallet</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Please wait until the transaction is completed and you will automatically be redirect to the Distribution step</li>
                            </ol>
                            <h4 className="tutorial_tutorial__preTitle_135dj">Distribution</h4>
                            <ol className="tutorial_tutorial__list_114iX">
                                <li className="tutorial_tutorial__listItem_2zIb6">Click MultiSend button</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Confirm the transaction in your wallet</li>
                                <li className="tutorial_tutorial__listItem_2zIb6">Wait till your transactions will be mined</li>
                            </ol>
                            <h3 className="tutorial_tutorial__lastTitle_3dMy1">Congratulations, you have completed MultiSend!</h3>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Tutorial2;