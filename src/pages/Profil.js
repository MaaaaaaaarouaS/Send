import React from 'react';
import Header from '../components/Header';
class Profil extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main" data-v-30ced784>
                    <h1 className="ftitle">MultiSender Referral Program</h1>
                    <p className="ftitle_text">Put your address below, click generate link and share the link with your referrals. You will earn 0.01 ETH from any airdrop done by your referral.</p>
                    <section style={{ marginBottom: "-5%" }} className="preparation_inputs_1qX9K">
                        <div className="container">
                            <label className="_base-input_label_3kGwW" data-v-404281ee="">Address</label>
                            <div className="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <h1 className="ftitle">Refund funds</h1>
                            <div align="center">
                                <p className="ftitle_text">Self generated balance ETH Address:</p>
                                <span><a type="submit"></a></span>
                            </div>
                            <br />
                            <h1 className="ftitle">VIP status</h1>
                            <div>
                                <p className="ftitle_text">Until:none</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Profil;