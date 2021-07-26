import React from 'react';
import Header from '../components/Header';
class Vip extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main_layout_tdcXQ" data-v-30ced784="">
                    <section className="vip_vip_2tBnK" data-v-33f90f42="">
                        <div className="vip_vip__container_1Fx-z" data-v-33f90f42="">
                            <h1 style={{ fontSize: "15px" }} className="vip_vip__title_2YpMo" data-v-33f90f42="">
                                VIP gives you discounted access to SurpriSender.app and all of your tx will be free.
                                Keep in mind, you would still need to pay for ETH network fees.
                                If you need additional information, feel free to ask in our Telegram channel. t.me/MultiSender</h1>
                        </div>
                        <div>
                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">1day {'=>'} 1ETH</div>
                            </label>

                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">7days {'=>'} 2ETH</div>
                            </label>

                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">1month {'=>'} 6ETH</div>
                            </label>
                        </div>
                        <span className="vip"><b type="submit"></b></span>
                    </section>
                </main>
            </div>
        )
    }
}

export default Vip;