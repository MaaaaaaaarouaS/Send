import React from 'react';
import Head from '../components/Head';
const vip = {
    vips: [
        {
            id: 1,
            plan: 'plan',
            title: 'STARTER',
            price: '0.5 ETH',
            content: 'for 1 day',
        },
        {
            id: 2,
            plan: 'plan basic',
            title: 'PROFESSIONAL',
            price: '1.0 ETH',
            content: 'for 7 days',
        },
        {
            id: 3,
            plan: 'plan standard',
            title: 'BUSSINESS',
            price: '2.0 ETH',
            content: 'for 1 month',
        },
        {
            id: 4,
            plan: 'plan ultimite',
            title: 'ENTERPRISE',
            price: 'CUSTOM',
            content: 'Tailored to company needs',
        },
    ]
};
class Vip2 extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <main className="Main_layout_tdcXQ" data-v-30ced784="">
                    <section className="vip_vip_2tBnK" data-v-33f90f42="">
                        <div className="vip_vip__container_1Fx-z" data-v-33f90f42="">
                            <h1 className="vip_vip__title_2YpMo" data-v-33f90f42="">VIP gives you discounted access to NFT-Multisender.app and all of your tx will be free</h1>
                            <div id="price">
                                {
                                    vip.vips.map(vip => (
                                        <div key={vip.id} className={vip.plan}>
                                            <div className="plan-inner">
                                                <div className="entry-title">
                                                    <h3>{vip.title}</h3>
                                                    <div className="price">{vip.price}</div>
                                                </div>
                                                <div className="entry-content">
                                                    <ul>
                                                        <li style={{ maxWidth: "14rem", fontSize: "15px", marginTop: "-15px", }}>{vip.content}</li>
                                                    </ul>
                                                </div>
                                                <div className="btn">
                                                    <a>GET BUY</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                        <h1 style={{ color: "red", fontSize: "18px", marginTop: "60px", marginBottom: "-30px", textAlign: "center" }}>Keep in mind, you would still need to pay for ETH/BSC/xDAi network fees</h1>
                    </section>
                </main>
            </div>
        )
    }
}

export default Vip2;