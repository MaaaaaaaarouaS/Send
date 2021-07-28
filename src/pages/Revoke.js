import React from 'react';
import Header from '../components/Header';
class Revoke extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main" data-v-30ced784>
                    <h1 className="ftitle">Revoke</h1>
                    <p className="ftitle_text">If you want to remove current approval to multisender smart contract, please select token address and click Revoke button. This will set allowance to 0.</p>
                    <section style={{ marginBottom: "-5%" }} className="preparation_inputs_1qX9K">
                        <div className="container">
                            <label className="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div className="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><label className="_base-input_label_3kGwW" data-v-404281ee="">Multisender Address</label></div>
                            <div className="revoke">
                                <input type="radio" name="select" id="opt-1" checked />
                                <input type="radio" name="select" id="opt-2" />
                                <label htmlFor="opt-1" className="option opt-1">
                                    <div className="dot"></div>
                                    <span>Push</span>
                                </label>
                                <label htmlFor="opt-2" className="option opt-2">
                                    <div className="dot"></div>
                                    <span>Pull</span>
                                </label>
                            </div>
                            <h1 className="rtitle">Your current multisender approval</h1>
                            <div align="center">
                                <span><a type="submit"></a></span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Revoke;