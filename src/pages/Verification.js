import React from 'react';
import Header from '../components/Header';
class Verification extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main class="Main" data-v-30ced784>
                    <h1 class="ftitle">Batch Verification</h1>
                    <p class="ftitle_text">If you have a list of recipients and a list of transactions from your previous multi-send, you can check which recipients received their tokens.</p>
                    <section class="preparation_inputs_1qX9K">
                        <div class="container">
                            <label class="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div class="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><label class="_base-input_label_3kGwW" data-v-404281ee="">Yours TX's hashes</label><a class="ExampleCSV" href="#">Show Example CSV</a></div>
                            <div class="demo-flex-spacer"></div>
                            <div class="webflow-style-input">
                                <textarea rows="4"></textarea>
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><input class="CSV-file-input" type="file" /></div>
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><label class="_base-input_label_3kGwW" data-v-404281ee="">Original list of recipients</label><a class="ExampleCSV" href="#">Show Example CSV</a></div>
                            <div class="demo-flex-spacer"></div>
                            <div class="webflow-style-input">
                                <textarea rows="4"></textarea>
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><input class="CSV-file-input" type="file" /></div>
                            <span><a href="#" type="submit"></a></span>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default Verification;