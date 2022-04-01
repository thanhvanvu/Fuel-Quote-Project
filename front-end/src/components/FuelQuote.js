import '../css/FuelQuote.css'


export default function FuelQuote() {

    return (
        <div id="hero" className="container">


            <div id="fuel">

                <form id="fuel-form" >

                    <div id="form-name">
                        <h2>Fuel Quote</h2>
                    </div>

                    <div id="information">

                        <div id="gallons">
                            <label>Gallons</label>

                            <input
                                type="number"
                                id="gallons"
                                name="gallons"
                                placeholder="Enter Gallons"
                                required
                                
                            />
                        </div>

                        <div id="delivery-address">
                            <label>Delivery Address</label>
                            <p>address</p>
                        </div>

                        <div id="delivery-date">
                            <label>Delivery Date</label>
                            <input
                                type="text"
                                id="date"
                                name="delivery_date"
                                placeholder="yyyy-mm-dd"
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                required
                            />
                        </div>

                        <div id="result">

                            <div id="suggested-price">
                                <label>Suggested Price</label>
                                <input
                                    type="number"
                                    id="suggested-price"
                                    name="suggested_price"
                                    placeholder="Suggested Price"
                                    required
                                    readOnly
                                />
                            </div>

                            <div id="amount">
                                <label>Total Amount Due</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="total_amount"
                                    placeholder="Total Amount Due"
                                    required
                                    readOnly                             
                                />
                            </div>

                        </div>


                        <div id="fuel-submit">
                            <button type="submit">Quote</button>
                        </div>

                    </div>

                </form>


            </div>

        </div>
    )
}
