import React from 'react';
import Header from '../components/Header';
class Verification extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main" data-v-30ced784>
                    <h1 className="ftitle">Batch Verification</h1>
                    <p className="ftitle_text">If you have a list of recipients and a list of transactions from your previous multi-send, you can check which recipients received their tokens.</p>
                    <section className="preparation_inputs_1qX9K">
                        <div className="container">
                            <label className="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div className="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><label className="_base-input_label_3kGwW" data-v-404281ee="">Yours TX's hashes</label><a className="ExampleCSV">Show Example CSV</a></div>
                            <div className="demo-flex-spacer"></div>
                            <div className="webflow-style-input">
                                <textarea rows="4"></textarea>
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><input className="CSV-file-input" type="file" /></div>
                            <div className="Recipients_info_2Qot1" data-v-404281ee=""><label className="_base-input_label_3kGwW" data-v-404281ee="">Original list of recipients</label><a className="ExampleCSV">Show Example CSV</a></div>
                            <div className="demo-flex-spacer"></div>
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
export default Verification;