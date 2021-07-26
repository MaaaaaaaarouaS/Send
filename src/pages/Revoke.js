import React from 'react';
import Header from '../components/Header';
class Revoke extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main class="Main" data-v-30ced784>
                    <h1 class="ftitle">Revoke</h1>
                    <p style={{ maxWidth: "50%", marginLeft: "25%" }} class="ftitle_text">If you want to remove current approval to multisender smart contract, please select token address and click Revoke button. This will set allowance to 0</p>
                    <section class="preparation_inputs_1qX9K">
                        <div class="container">
                            <label class="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div class="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><label class="_base-input_label_3kGwW" data-v-404281ee="">Multisender Address</label></div>
                            <div class="revoke">
                                <input type="radio" name="select" id="opt-1" checked />
                                <input type="radio" name="select" id="opt-2" />
                                <label for="opt-1" class="option opt-1">
                                    <div class="dot"></div>
                                    <span>Puch</span>
                                </label>
                                <label for="opt-2" class="option opt-2">
                                    <div class="dot"></div>
                                    <span>Pull</span>
                                </label>
                            </div>
                            <h1 class="rtitle">Your current multisender approval</h1>
                            <span><a href="#" type="submit"></a></span>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Revoke;