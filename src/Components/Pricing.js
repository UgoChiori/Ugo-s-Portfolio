import "./pricing.css";

import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing_container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">₦ 100,000</p>
            <p>- 7 Days -</p>
            <p>3 pages</p>
            <p>-  Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                BUY NOW
            </Link>
        </div>
        <div className="card">
            <h3>- Advanced -</h3>
            <span className="bar"></span>
            <p className="btc">₦ 250,000</p>
            <p>-  5 Days -</p>
            <p>4 pages</p>
            <p>-  Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                BUY NOW
                </Link>
                </div>
                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">₦ 400,000</p>
                    <p>- 3 Days -</p>
                    <p>6 pages</p>
                    <p>-  Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        BUY NOW
                    </Link>
                    </div>

      </div>
    </div>
  );
};

export default Pricing;
