"use client"
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './page.css';

const redirectToTokopedia = () => {
    // Redirect to Tokopedia
    window.location.href = 'https://www.tokopedia.com/';
};

const PremiumPage2 = () => {
    return (
        <HelmetProvider>
            <div className="freemium2-container">
                <Helmet>
                    <title>exported project</title>
                </Helmet>
                <div className="freemium2-freemium2">
                    <div className="freemium2-frame45">
                        <span className="freemium2-text">
                            <span>You ordered:</span>
                        </span>
                        <div className="freemium2-frame40">
                            <div className="freemium2-frame39">
                                <span className="freemium2-text02">
                                    <span>Individual</span>
                                </span>
                                <div className="freemium2-frame38">
                                    <div className="freemium2-frame35">
                                        <div className="freemium2-group13">
                                            <span className="freemium2-text04">
                                                <span>Subscribe independently</span>
                                            </span>
                                            <div className="freemium2-group11">
                                                <img
                                                    src="/external/ellipse41264-tzbu-200h.png"
                                                    alt="Ellipse41264"
                                                    className="freemium2-ellipse4"
                                                />
                                                <span className="freemium2-text06">✓</span>
                                            </div>
                                        </div>
                                        <div className="freemium2-group14">
                                            <div className="freemium2-group12">
                                                <img
                                                    src="/external/ellipse31265-vx1o-200h.png"
                                                    alt="Ellipse31265"
                                                    className="freemium2-ellipse3"
                                                />
                                                <span className="freemium2-text07">✓</span>
                                            </div>
                                            <span className="freemium2-text08">
                                                <span>Unlimited scans and quizzes</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="freemium2-frame37">
                                        <div className="freemium2-frame36">
                                            <span className="freemium2-text10">
                                                <span>30k</span>
                                            </span>
                                            <span className="freemium2-text12">
                                                <span>/person monthly</span>
                                            </span>
                                        </div>
                                        <span className="freemium2-text14">
                                            <span>10% discount for annual package</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="freemium2-frame44">
                            <div className="freemium2-frame43">
                                <span className="freemium2-text16">
                                    <span>Payment method</span>
                                </span>
                                <div className="freemium2-frame42">
                                    <div className="freemium2-frame41">
                                        <div className="freemium2-group15">
                                            <img
                                                src="/external/ellipse51261-uarj-200h.png"
                                                alt="Ellipse51261"
                                                className="freemium2-ellipse5"
                                            />
                                            <img
                                                src="src/app/page2/ellipse61261-jhq-200h.png"
                                                alt="Ellipse61261"
                                                className="freemium2-ellipse6"
                                            />
                                        </div>
                                        <span className="freemium2-text18">
                                            <span className="freemium2-text19">
                                                Tokopedia
                                            </span>
                                        </span>
                                    </div>
                                    <span className="freemium2-text20">
                                        <span>Terms and How to Order:</span>
                                        <br></br>
                                        <span>- Select the product you want to order</span>
                                        <br></br>
                                        <span>- Press &quot;Add to Cart&quot; or &quot;Buy Now&quot;</span>
                                        <br></br>
                                        <span>- Determine and select the variation you want to buy</span>
                                        <br></br>
                                        <span>- Please include your email in Notes or Chat</span>
                                        <br></br>
                                        <span>- Checkout and make payment</span>
                                        <br></br>
                                        <span>- Orders are processed as quickly as possible (3 - 60 minutes) according to queue.</span>
                                        <br></br>
                                        <span>- Voucher code will be sent via email or chat.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="freemium2-button" onClick={redirectToTokopedia}>
                            <span className="freemium2-text38">
                                <span>Redirect to Tokopedia</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default PremiumPage2;
