import React from 'react';
import Header from '../components/Header';
class ERC20 extends React.Component {
    render() {
        return (
            <div>
                <Header />
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
                    <h1 class="ftitle">Welcome to Token SurpriSender</h1>
                    <p class="ftitle_text">A tool that allows you to batch send ERC20 tokens</p>
                    <div class="networks">
                        <div class="network">
                            <div class="network-icon network-icon-mainnet"></div>
                            <div class="network-name">Ethereum Mainnet</div>
                        </div>
                        <div class="network">
                            <div class="network-icon network-icon-binance"></div>
                            <div class="network-name">Binance Smart Chain</div>
                        </div>
                        <div class="network"><div class="network-icon network-icon-avalanche"></div>
                            <div class="network-name">Avalanche C Chain</div>
                        </div>
                        <div class="network">
                            <div class="network-icon network-icon-fantom"></div>
                            <div class="network-name">Fantom Opera</div>
                        </div>
                        <div class="network">
                            <div class="network-icon network-icon-iotex"></div>
                            <div class="network-name">IoTeX</div>
                        </div>
                        <div class="network"><div class="network-icon network-icon-matic"></div>
                            <div class="network-name">Matic Network</div>
                        </div>
                        <div class="network">
                            <div class="network-icon network-icon-poa"></div>
                            <div class="network-name">POA Network</div>
                        </div>
                        <div class="network">
                            <div class="network-icon network-icon-xdai"></div>
                            <div class="network-name">xDai</div>
                        </div>
                    </div>
                    <section class="preparation_inputs_1qX9K">
                        <div class="container">
                            <label class="toggle" for="uniqueID">
                                <input type="checkbox" class="toggle__input" id="uniqueID" />
                                <span class="toggle-track">
                                    <span class="toggle-indicator">
                                        <span class="checkMark">
                                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span><br /><br />
                                Deflationary
                            </label>
                            <label class="_base-input_label_3kGwW" data-v-404281ee="">Token address</label>
                            <div class="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><label class="_base-input_label_3kGwW" data-v-404281ee="">List of Addresses in CSV</label><a class="ExampleCSV">Show Example CSV</a></div>
                            <div class="demo-flex-spacer"></div>
                            <div class="webflow-style-input">
                                <textarea rows="4"></textarea>
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div>
                            <div class="Recipients_info_2Qot1" data-v-404281ee=""><input class="CSV-file-input" type="file" /></div>
                            <span><a type="submit"></a></span>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default ERC20;