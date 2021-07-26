import React from 'react';
import Head from '../components/Head';
class Nft extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main class="Main" data-v-30ced784>
                    <div class="View_wrap_1OgEa">
                        <ul class="Stepper_list_2y0f2">
                            <li class="Stepper_list__item_Ua5YM X">
                                <span class="Stepper_list__marker_pKk08"></span>
                                <span class="Stepper_list__itemTitle_1ql1S">preparation</span>
                            </li>
                            <li class="Stepper_list__item_Ua5YM Stepper_hereafter_2CKHf">
                                <span class="Stepper_list__marker_pKk08"></span>
                                <span class="Stepper_list__itemTitle_1ql1S">approval</span>
                            </li>
                            <li class="Stepper_list__item_Ua5YMN Stepper_hereafter_2CKHf">
                                <span class="Stepper_list__marker_pKk08"></span>
                                <span class="Stepper_list__itemTitle_1ql1S">distribution</span>
                            </li>

                        </ul>
                    </div>
                    <h1 class="ftitle">Welcome to SurpriSender</h1>
                    <p class="ftitle_text">A tool that allows you to conveniently send your SURPRISE tokens to multiple recipients.</p>
                    <section class="preparation_inputs_1qX9K">
                        <div class="container">
                            <label class="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div class="webflow-style-input">
                                <input type="text" placeholder="select token address" />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><label class="_base-input_label_3kGwW" data-v-404281ee="">Please provide list of recipients (Insert manually or upload file)</label><input class="custom-file-input" type="file" /></div>
                            <div class="demo-flex-spacer"></div>
                            <div class="webflow-style-input">
                                <textarea rows="4" />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><a class="showexample" href="#">Show example</a></div>
                            <span><a href="#" type="submit"></a></span>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Nft;