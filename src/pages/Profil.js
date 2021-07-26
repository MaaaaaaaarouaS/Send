import React from 'react';
import Header from '../components/Header';
class Profil extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main class="Main" data-v-30ced784>
                    <h1 class="ftitle">MultiSender Referral Program</h1>
                    <p style={{ maxWidth: "50%", marginLeft: "25%" }} class="ftitle_text">Put your address below, click generate link and share the link with your referrals. You will earn 0.01 ETH from any airdrop done by your referral.</p>
                    <section class="preparation_inputs_1qX9K">
                        <div class="container">
                            <label class="_base-input_label_3kGwW" data-v-404281ee="">Address</label>
                            <div class="webflow-style-input">
                                <input type="text" placeholder="select your token " />
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div><br />
                            <h1 class="ftitle">Refund funds</h1>
                            <p style={{ maxWidth: "50%", marginLeft: "25%" }} class="ftitle_text">Self generated balance ETH Address:</p>
                            <span><a href="#" type="submit"></a></span><br />
                            <h1 class="ftitle">VIP status</h1>
                            <p style={{ maxWidth: "50%", marginLeft: "25%" }} class="ftitle_text">Until:none</p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Profil;