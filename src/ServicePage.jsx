import "./ServicePage.css"
import Navbar from "./Navbar.jsx"
import { Link } from "react-router-dom"
function ServicePage(){
    return(
         <>
      <div className="Nav-section">
        <Navbar />
      </div>

      <section className="services-page">

        {/* PAGE TITLE */}
        <div className="services-hero">
          <h1>Our Services</h1>
          <p>Premium grooming with clean fades, sharp lines, and expert detailing.</p>
        </div>

        {/* MAIN SERVICES */}
        <div className="services-list">

          <div className="service-box">
            <span className="material-symbols-outlined">content_cut</span>
            <h3>Quick Cut</h3>
            <p>A clean, sharp haircut done fast — perfect for routine grooming.</p>
            <span className="price">₦1500</span>
          </div>

          <div className="service-box">
            <span className="material-symbols-outlined">switch_account</span>
            <h3>Fade / Skin Fade</h3>
            <p>Smooth blends and precise fade transitions for a modern look.</p>
            <span className="price">₦2500</span>
          </div>

          <div className="service-box">
            <span className="material-symbols-outlined">face_retouching_natural</span>
            <h3>Beard Trim</h3>
            <p>Crisp beard shaping with razor finishing and detailing.</p>
            <span className="price">₦1200</span>
          </div>

          <div className="service-box">
            <span className="material-symbols-outlined">brush</span>
            <h3>Dye / Styling</h3>
            <p>Enhance your look with custom colors or professional styling.</p>
            <span className="price">₦5000+</span>
          </div>

          <div className="service-box">
              <span className="material-symbols-outlined">auto_fix_high</span>
              <h3>Hair Line Enhancement</h3>
              <p>Temporary color/airbrush to sharpen your hairline naturally.</p>
              <span className="price">₦1000</span>
            </div>

            <div className="service-box">
              <span className="material-symbols-outlined">styler</span>
              <h3>Dread Retwist</h3>
              <p>Neat, clean dread maintenance with long-lasting retwists.</p>
              <span className="price">₦4000+</span>
            </div>

            <div className="service-box">
              <span className="material-symbols-outlined">waves</span>
              <h3>Wave Brushing & Setting</h3>
              <p>Professional wave brushing session with moisturizer application.</p>
              <span className="price">₦1000</span>
            </div>

            <div className="service-box">
              <span className="material-symbols-outlined">spa</span>
              <h3>Hot Towel Treatment</h3>
              <p>Warm towel therapy to relax your face and soften your beard.</p>
              <span className="price">₦1500</span>
            </div>

            <div className="service-box">
              <span className="material-symbols-outlined">cleaning_services</span>
              <h3>Scalp Detox</h3>
              <p>Deep scalp cleansing to remove buildup and restore freshness.</p>
              <span className="price">₦3000</span>
            </div>

            <div className="service-box">
              <span className="material-symbols-outlined">cut</span>
              <h3>Kids Cut</h3>
              <p>Gentle, clean haircut for kids with extra care and patience.</p>
              <span className="price">₦1200</span>
            </div>

        </div>

        {/* ADD-ON SERVICES */}
        <div className="addons-section">
          <h2>Add-On Services</h2>

          <div className="addons-list">
            <div className="addon-box">
              <h4>Hair Wash</h4>
              <span className="price">₦800</span>
            </div>

            <div className="addon-box">
              <h4>Razor Line-Up</h4>
              <span className="price">₦700</span>
            </div>

            <div className="addon-box">
              <h4>Facial Scrub</h4>
              <span className="price">₦1500</span>
            </div>

            <div className="addon-box">
              <h4>Hair Sponge Styling</h4>
              <span className="price">₦500</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="services-cta">
          <h2>Ready for your next clean cut?</h2>
          <Link to="/booking" className="cta-btn book-btn">Book an Appointment</Link>
        </div>

      </section>
    </>
    )
}

export default ServicePage