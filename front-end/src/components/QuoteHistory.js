import '../css/QuoteHistory.css'
import QuoteHistoryItems from './QuoteHistoryItems'


export default function QuoteHistory() {
    return (
        <div id="hero" className="container">

            <div id="fuel">

                <div id="form-name">
                    <h2>Fuel Quote History</h2>
                </div>

                <div id="information">
                    <table>
                        <thead className='quote-history-labels'>
                            <tr>
                                <th scope="col" className="customer">Customer Name </th>
                                <th scope="col" className="gallon">Gallons </th>
                                <th scope="col" className="Delivery">Delivery Address</th>
                                <th scope="col" className="date">Delivery Date </th>
                                <th scope="col" className="price">Suggested Price</th>
                                <th scope="col" className="amount">Total Amount Due </th>
                            </tr>
                        </thead>

                        <QuoteHistoryItems

                        />

                    </table>
                </div>

            </div>

        </div>
    )
}
