import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Pricing.css'


function Pricing() {
    return (
        <>
            <Header />
            <div className="pricebody">
                <div class="main-content">
                    <div class="heading">
                        <h2> Our Pricing</h2>
                        <div>
                        </div>
                    </div>
                    <div class="Pricing-main">
                        <div class="princings white">
                            <h4> Economy</h4>
                            <h1 id="change1">PKR 19.99</h1>
                            <hr />
                            <p> Max 10 kg per seat</p>
                            <hr />
                            <p>Internet upto 1 GB</p>
                            <hr />
                            <p>Refreshment</p>
                            <hr />
                            <p>Normal Legroom</p>

                        </div>
                        <div class="princings purple">
                            <h4> Executive</h4>
                            <h1 id="change2">PKR 24.99</h1>
                            <hr />
                            <p>Max 20 kg per seat</p>
                            <hr />
                            <p> Internet upto 2.5 GB</p>
                            <hr />
                            <p> Meal</p>
                            <hr />
                            <p>Extra Leg room</p>

                        </div>
                        <div class="Pricing-main">
                            <div class="princings white">
                                <h4> Business</h4>
                                <h1 id="change3">PKR 39.99</h1>
                                <hr />
                                <p>Max 30 kg per seat</p>
                                <hr />
                                <p> Internet upto 5 GB</p>
                                <hr />
                                <p>Refreshment + Meal</p>
                                <hr />
                                <p>Extra Leg room + bigger seat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )
}

export default Pricing;