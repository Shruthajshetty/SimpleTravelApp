
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" >
      <h1>About Us</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne" style={{backgroundColor:"#247175"}}>
            <h5 className="mb-0">
            Stravel
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <h4> Established in 2022, Stravel has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers,  while updating them from time to time to better suit our customers’ evolving needs and demands.</h4>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#247175"}}>
            <h5 className="mb-0">
             Adress
            </h5>
          </div>
            <div className="card-body" >
            <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                
              </ul>
            </div>
          </div>
        <div className="card" >
          <div className="card-header" id="headingFour" style={{backgroundColor:"#247175"}}>
            <h5 className="mb-0">
              Contact Details
            </h5>
          </div>
            <div className="card-body">
            <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
