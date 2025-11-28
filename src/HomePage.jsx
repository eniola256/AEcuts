import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import "./HomePage.css"
import { Link } from "react-router-dom";
function HomePage(){
    return(
    <>
    <div className="Nav-section">
            <Navbar />
        </div>
    <div className="HomePage">
        <main className="hero">
            <div className="hero-content">
               <h1>
                  Elevate Your Style With
                   <br />  <span>AE Cuts</span>
               </h1> 
                <p>Premium fades, clean shaves, and detailed grooming designed for the modern man.</p>
                <Link to="/booking" className=" book-btn">Book an Appointment</Link>
            </div>
        </main>
          <section className="services">
  <h2>Our Services</h2>
  <p className="services-sub">Professional grooming crafted with precision.</p>

  <div className="services-grid">

    {/* Quick Cut */}
    <div className="service-card">
      <div className="service-img">
        <img src="/quickcut.jpg" alt="Quick Cut" />
        <span className="material-symbols-outlined icon-badge">content_cut</span>
      </div>
      <h3>Quick Cut</h3>
      <p>A clean, sharp cut done fast with expert precision.</p>
    </div>

    {/* Skin Fade */}
    <div className="service-card">
      <div className="service-img">
        <img src="/skinfade.jpg" alt="Skin Fade" />
        <span className="material-symbols-outlined icon-badge">switch_account</span>
      </div>
      <h3>Fade / Skin Fade</h3>
      <p>Crisp fades that blend smoothly into your natural style.</p>
    </div>

    {/* Beard Trim */}
    <div className="service-card">
      <div className="service-img">
        <img src="/beardtrim.jpg" alt="Beard Trim" />
        <span className="material-symbols-outlined icon-badge">face_retouching_natural</span>
      </div>
      <h3>Beard Trim</h3>
      <p>Perfectly shaped beards with detailed finishing.</p>
    </div>

    {/* Dye & Styling */}
    <div className="service-card">
      <div className="service-img">
        <img src="/dye.jpg" alt="Dye & Styling" />
        <span className="material-symbols-outlined icon-badge">brush</span>
      </div>
      <h3>Dye & Styling</h3>
      <p>Color and styling that brings your look to life.</p>
    </div>
  </div>
    {/* More Button */}
  <div className="services-more">
    <Link to="/services" className="more-btn book-btn">More Services</Link>
  </div>
</section>
<section className="why-us">
  <h2 className="why-title">Why Choose Us</h2>

  <div className="why-grid">
    <div className="why-grid-top">
    {/* 1 */}
    <div className="why-card">
      <span className="material-symbols-outlined">cleaning_services</span>
      <h3>Clean Workspace</h3>
      <p>We maintain a spotless, hygienic space so you feel relaxed and safe.</p>
    </div>

    {/* 2 */}
    <div className="why-card">
      <span className="material-symbols-outlined">groups</span>
      <h3>Skilled Barbers</h3>
      <p>Our team is trained, experienced, and up-to-date with modern techniques.</p>
    </div>

    {/* 3 */}
    <div className="why-card">
      <span className="material-symbols-outlined">style</span>
      <h3>Modern Styles</h3>
      <p>We deliver trendy and classic cuts tailored to your unique look.</p>
    </div>
    </div>
    <div className="why-grid-bottom">
    {/* 4 */}
    <div className="why-card">
      <span className="material-symbols-outlined">event_available</span>
      <h3>Easy Booking</h3>
      <p>Book appointments online without stress or waiting time.</p>
    </div>

    {/* 5 */}
    <div className="why-card">
      <span className="material-symbols-outlined">verified</span>
      <h3>Customer Satisfaction</h3>
      <p>We guarantee comfort, precision, and a look you'll love.</p>
    </div>
    </div>
  </div>
</section>
<section className="booking-cta">
  <div className="booking-content">
    <h2>Ready for a Fresh Cut?</h2>
    <p>Book your appointment today and step out in style!</p>
    <Link to="/booking" className="book-btn">Book Now</Link>
  </div>

  <div className="footer-contact">
    <p>Follow us on:</p>
    <div className="socials">
      <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      <a href="https://tiktok.com"><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
      <a href="https://twitter.com"><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
    </div>
    <p>Email: <a href="mailto:info@aecuts.com">info@aecuts.com</a></p>
  </div>
</section>


    </div>        
    </>
);
};

export default HomePage