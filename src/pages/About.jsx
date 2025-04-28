import React from 'react';
import './About.css';
import { FaShippingFast, FaHandsHelping, FaAward } from 'react-icons/fa';
import Banner from "../components/Banner/Banner";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <Banner title="Contact Us" />


      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, ZippyBuy began as a small local store with a big vision. 
                Today, we've grown into one of the leading e-commerce platforms, serving 
                millions of customers worldwide with quality products and exceptional service.
              </p>
              <p>
                Our journey has been guided by our core values of integrity, innovation, 
                and customer satisfaction. We're proud to be more than just a store - 
                we're a community.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="img-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <h2 className="text-center mb-5">Our Values</h2>
          <div className="row">
            <div className="col-md-4 value-card">
              <FaShippingFast className="value-icon" />
              <h3>Fast Delivery</h3>
              <p>We guarantee speedy delivery to your doorstep within 2-3 business days.</p>
            </div>
            <div className="col-md-4 value-card">
              <FaHandsHelping className="value-icon" />
              <h3>Customer Support</h3>
              <p>Our dedicated team is available 24/7 to assist with any inquiries.</p>
            </div>
            <div className="col-md-4 value-card">
              <FaAward className="value-icon" />
              <h3>Quality Guarantee</h3>
              <p>All our products undergo strict quality checks before shipping.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;