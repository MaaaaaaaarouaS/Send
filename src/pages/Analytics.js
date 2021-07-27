import React from 'react';
import Header from '../components/Header';
const analy = {
    analytic: [
        {
            id: 1,
            title: '$99 143 571,68',
            description: 'Total USD Volume Processed',
        },
        {
            id: 2,
            title: '1244 days',
            description: 'Uptime',
        },
        {
            id: 3,
            title: 'Monday, November 11, 2019, 7:30 AM',
            description: 'Last time events parsed',
        },
        {
            id: 4,
            title: '565',
            description: 'Total number of tokens used multisender',
        },
    ]
};
const tbl = {
    table: [
        {
            id: 1,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 2,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 3,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 4,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 5,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 6,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
        {
            id: 7,
            name: 'Swipe',
            symbol: 'SXP',
            adress: '0x8CE9137d39326AD0cD649....',
            amount: '$83151075.44',
            usd: '$83151075.44',
        },
    ]
};
class Analytics extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="Main" data-v-30ced784>
                    <section className="preparation_inputs_1qX9K">
                        <div className="contain group">
                            {
                                analy.analytic.map(analy => (
                                    <div key={analy.id} className="grid-1-5">
                                        <h3>{analy.title}</h3>
                                        <p>{analy.description}</p>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </section>
                    <section className="analytics">
                        <div className="tbl-header">
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th>Token Name</th>
                                        <th>Token Symbol</th>
                                        <th>Address</th>
                                        <th>Total Amount</th>
                                        <th>Total Amount in USD</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="tbl-content">
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <tbody>
                                    {
                                        tbl.table.map(tbl => (
                                            <tr key={tbl.id}>
                                                <td>{tbl.name}</td>
                                                <td>{tbl.symbol}</td>
                                                <td>{tbl.adress}</td>
                                                <td>{tbl.amount}</td>
                                                <td>{tbl.usd}</td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Analytics;