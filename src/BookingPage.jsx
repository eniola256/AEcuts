import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./BookingPage.css";

function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! (Demo only, no backend)");
    setFormData({ name:"", phone:"", service:"", date:"", time:"" });
  };

  return (
    <>
      <Navbar />
      <section className="booking-page">
        <div className="booking-hero">
          <h1>Book Your Appointment</h1>
          <p>Choose your service, pick a date & time, and step out in style.</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="quick-cut">Quick Cut</option>
            <option value="fade">Fade / Skin Fade</option>
            <option value="beard-trim">Beard Trim</option>
            <option value="dye-styling">Dye & Styling</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <button type="submit">Book Now</button>
        </form>
      </section>
    </>
  );
}

export default BookingPage;
