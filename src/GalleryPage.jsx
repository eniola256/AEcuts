
import Navbar from "./Navbar.jsx";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <>
      <div className="Nav-section">
        <Navbar />
      </div>

      <section className="gallery-page">

        {/* HERO */}
        <div className="gallery-hero">
          <h1>Gallery</h1>
          <p>Browse our clean cuts, fades, and trending styles.</p>
        </div>

        {/* MAIN GALLERY GRID */}
        <div className="gallery-grid">
          <img src="/skinfade.jpg" alt="Haircut 1" />
          <img src="/quickcut.jpg" alt="Haircut 2" />
          <img src="/dread retwist.jpg" alt="Haircut 3" />
          <img src="/low fade.jpg" alt="Haircut 4" />
          <img src="/beardtrim.jpg" alt="Haircut 5" />
          <img src="/360 waves.jpg" alt="Haircut 6" />
        </div>

        {/* TRENDING HAIRSTYLES */}
        <div className="trending-section">
          <h2>Trending Hairstyles</h2>

          <div className="trending-grid">

            <div className="trend-card">
              <img src="/low fade.jpg" alt="Low Fade" />
              <h3>Low Fade</h3>
              <p>A smooth, clean fade perfect for any face shape.</p>
            </div>

            <div className="trend-card">
              <img src="/burst fade.jpg" alt="Burst Fade" />
              <h3>Burst Fade</h3>
              <p>Edgy, rounded fade that stands out instantly.</p>
            </div>

            <div className="trend-card">
              <img src="/Afro Taper.jpg" alt="Afro Taper" />
              <h3>Afro Taper</h3>
              <p>Natural afro volume with sharp taper sides.</p>
            </div>

            <div className="trend-card">
              <img src="/dread retwist.jpg" alt="Dread Retwist" />
              <h3>Dread Retwist</h3>
              <p>Fresh retwisting with neat parting and shine.</p>
            </div>

            <div className="trend-card">
              <img src="/360 waves.jpg" alt="Waves" />
              <h3>360 Waves</h3>
              <p>Clean wave pattern with smooth brushing.</p>
            </div>

            <div className="trend-card">
              <img src="/curly sponge.jpg" alt="Curly Sponge" />
              <h3>Curly Sponge</h3>
              <p>Defined curls using sponge & finishing spray.</p>
            </div>

          </div>
        </div>

        {/* CTA SECTION */}
        <div className="gallery-cta">
          <h2>Ready to get your next clean look?</h2>
          <a href="/book" className="book-btn">Book an Appointment</a>
        </div>

      </section>
    </>
  );
}

export default GalleryPage;