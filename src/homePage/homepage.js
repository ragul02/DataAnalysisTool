import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        {/* Logo and branding */}
        <h1 className="logo">Data Analyzer</h1>
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/features" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          {/* Catchy headline */}
          <h2 className="hero-title">Unlock Insights from Your Data</h2>
          {/* Brief description */}
          <p className="hero-description">Our Data Analysis Tool empowers you to analyze your data quickly and easily with advanced features and visualizations.</p>
          {/* Call-to-Action */}
          <Link to="/signup" className="cta-btn">Sign Up for Free</Link>
        </div>
        {/* Data-related visuals */}
        <div className="hero-visuals">
          {/* Use charts, graphs, or data visualizations to showcase the capabilities of the tool */}
          <img src="/assets/data-visuals.png" alt="Data Visualizations" />
        </div>
      </section>
      <section className="features-section">
        {/* Highlight key features of the Data Analysis Tool */}
        <h3 className="section-title">Key Features</h3>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/assets/feature1.png" alt="Feature 1" />
            <h4 className="feature-title">Advanced Data Analysis</h4>
            <p className="feature-description">Perform complex data analysis tasks with ease using our intuitive interface and powerful algorithms.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/feature2.png" alt="Feature 2" />
            <h4 className="feature-title">Customizable Visualizations</h4>
            <p className="feature-description">Create stunning visualizations to understand your data better and gain actionable insights.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/feature3.png" alt="Feature 3" />
            <h4 className="feature-title">Collaboration Tools</h4>
            <p className="feature-description">Collaborate with your team in real-time, share insights, and work together to make data-driven decisions.</p>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        {/* Pricing details */}
        <h3 className="section-title">Pricing</h3>
        <p className="pricing-desc">your data with our powerful Data Analysis Tool.</p>
<div className="pricing-cards">
<div className="pricing-card">
<h4 className="pricing-title">Free</h4>
<p className="pricing-description">Basic features</p>
<h3 className="pricing-price">$0</h3>
<ul className="pricing-features">
<li>Limited Data Analysis</li>
<li>Basic Visualizations</li>
<li>Single User</li>
<li>3 Datasets</li>
</ul>
<Link to="/signup" className="pricing-cta-btn">Sign Up</Link>
</div>
<div className="pricing-card">
<h4 className="pricing-title">Pro</h4>
<p className="pricing-description">Advanced features</p>
<h3 className="pricing-price">$49/month</h3>
<ul className="pricing-features">
<li>Unlimited Data Analysis</li>
<li>Custom Visualizations</li>
<li>Multi-user Collaboration</li>
<li>Unlimited Datasets</li>
</ul>
<Link to="/signup" className="pricing-cta-btn">Sign Up</Link>
</div>
<div className="pricing-card">
<h4 className="pricing-title">Enterprise</h4>
<p className="pricing-description">Customized solutions</p>
<h3 className="pricing-price">Contact Us</h3>
<ul className="pricing-features">
<li>Advanced Data Analysis</li>
<li>Custom Visualizations</li>
<li>Enterprise-level Collaboration</li>
<li>Customized Pricing</li>
</ul>
<Link to="/contact" className="pricing-cta-btn">Contact Us</Link>
</div>
</div>
</section>
<section className="about-section">
{/* About Us section */}
<h3 className="section-title">About Us</h3>
<p className="about-description">At Data Analyzer, we are passionate about helping businesses make data-driven decisions. Our powerful Data Analysis Tool provides advanced features and visualizations to unlock insights from your data quickly and easily. Our team of experts is dedicated to providing excellent customer support and delivering the best-in-class data analysis experience.</p>
<Link to="/about" className="about-cta-btn">Learn More</Link>
</section>
<section className="contact-section">
{/ Contact Us section /}
<h3 className="section-title">Contact Us</h3>
<p className="contact-description">Have questions or need support? Contact our team to get in touch with us.</p>
<Link to="/contact" className="contact-cta-btn">Contact Us</Link>
</section>
<footer className="footer">
{/ Footer with copyright information */}
<p className="footer-text">© 2023 Data Analyzer. All rights reserved.</p>
</footer>
</div>
);
};

export default HomePage;