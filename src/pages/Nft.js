import React from 'react';
import Head from '../components/Head';
import Stepper from '../components/Stepper';
class Nft extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main className="Main" data-v-30ced784>
                    <Stepper />
                    <h1 className="ftitle">Welcome to SurpriSender</h1>
                    <p className="ftitle_text">A tool that allows you to conveniently send your SURPRISE tokens to multiple recipients.</p>
                    <section style={{ marginBottom: "-5%" }} className="preparation_inputs_1qX9K">
                        <div className="container">
                            <label className="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div className="webflow-style-input">
                                <input type="text" placeholder="select token address" />
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><label className="_base-input_label_3kGwW" data-v-404281ee="">Please provide list of recipients (Insert manually or upload file)</label><input className="custom-file-input" type="file" /></div>
                            <div className="demo-flex-spacer"></div>
                            <div className="webflow-style-input">
                                <textarea rows="4" />
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><a className="showexample">Show example</a></div>
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

export default Nft;