import AnimatedPage from "../components/AnimatedPage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const WA_NUMBER = "918971794549"; // WhatsApp number with country code

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #e2e8f0",
  background: "white",
  color: "var(--text-dark)",
  outline: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.92rem",
  width: "100%",
};

const labelStyle = {
  fontSize: "0.82rem",
  color: "var(--primary-blue)",
  fontWeight: 700,
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: "0.3px",
};

const Contact = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [formState, setFormState] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");

    // Build WhatsApp message
    const msg = [
      "🏠 *New Enquiry — JK Group*",
      "─────────────────────────",
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      form.subject ? `📦 *Product Category:* ${form.subject}` : null,
      form.product ? `🚪 *Product Interested In:* ${form.product}` : null,
      form.message ? `💬 *Message:* ${form.message}` : null,
      "─────────────────────────",
      "Sent via JK Group Website",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setFormState("success");
    }, 600);
  };

  return (
    <AnimatedPage>
      {/* Page Banner */}
      <div
        ref={heroRef}
        style={{
          position: "relative",
          isolation: "isolate",
          overflow: "hidden",
          padding: "var(--py-hero) var(--px-main)",
          color: "white",
        }}
      >
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-12% 0",
            y: heroImageY,
            scale: heroImageScale,
            backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
            willChange: "transform",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.45))",
            zIndex: -1,
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "0.7rem", letterSpacing: "4px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "0.75rem", fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
        >
          JK Group · Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            color: "#ffffff",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginBottom: "0.5rem",
            fontWeight: 600,
          }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ fontSize: "1.1rem", color: "#e2e8f0", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
        >
          Let's Create Something Beautiful Together
        </motion.p>
      </div>

      <div style={{ padding: "var(--py-section) var(--px-main)", backgroundColor: "var(--bg-light)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "4rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* ── Contact Details (Left Column) ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--primary-blue)", marginBottom: "0.4rem" }}>
                Get In Touch
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Fill the form and your enquiry will be sent directly to our WhatsApp. We typically respond within 30 minutes.
              </p>
            </motion.div>

            {[
              {
                icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
                title: "Visit Us",
                content: "Sy #63/3, Near Paramount Sanskruti Public School, Aduru Village, Bidarahalli, Bengaluru - 560049",
              },
              {
                icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />,
                title: "Call Us",
                content: "8971794549  |  9380668222",
              },
              {
                icon: <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.79L2 22l5.32-1.19C8.68 21.58 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.45 14.3c-.23.64-1.34 1.22-1.85 1.29-.48.06-1.12.12-3.21-.75-2.52-1.05-4.14-3.64-4.26-3.8-.13-.16-1.02-1.35-1.02-2.58s.64-1.83.86-2.07c.22-.23.48-.29.64-.29.16 0 .32 0 .46.01.14.01.33-.06.51.39.19.46.64 1.57.7 1.7.06.13.1.29.01.48-.08.19-.13.31-.25.46-.13.14-.26.31-.38.42-.13.13-.26.27-.12.51.15.25.66 1.08 1.41 1.76.96.88 1.77 1.15 2.01 1.26.25.11.39.1.53-.06.14-.17.61-.71.77-.95.16-.25.32-.21.54-.12.22.08 1.41.66 1.65.79.24.13.4.19.46.29.06.11.06.63-.17 1.27z" />,
                title: "WhatsApp",
                content: "8971794549",
              },
              {
                icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                title: "Email",
                content: "jkgroupsince2006@gmail.com",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <div style={{ color: "var(--primary-orange)", marginTop: "0.2rem", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">{item.icon}</svg>
                </div>
                <div>
                  <h3 style={{ color: "var(--primary-blue)", marginBottom: "0.3rem", fontSize: "1rem", fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.92rem", lineHeight: 1.6 }}>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Form (Right Column) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 style={{ color: "var(--primary-blue)", marginBottom: "0.3rem", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
              Send Us a Message
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "0.85rem", marginBottom: "1.8rem", fontFamily: "'Montserrat', sans-serif" }}>
              Your details will be sent directly to our WhatsApp.
            </p>

            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "2.5rem", borderRadius: "12px", textAlign: "center" }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✅</div>
                <h3 style={{ color: "#166534", marginBottom: "0.5rem", fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}>
                  Enquiry Sent to WhatsApp!
                </h3>
                <p style={{ color: "#15803d", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Your message has been opened in WhatsApp. We will get back to you shortly.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ name: "", phone: "", email: "", subject: "", product: "", message: "" }); }}
                  className="btn btn-outline"
                  style={{ marginTop: "1.5rem" }}
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                {/* Name + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={labelStyle}>Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your full name" style={inputStyle} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={labelStyle}>Phone Number *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="10-digit number" style={inputStyle} />
                  </div>
                </div>

                {/* Email + Product Category */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={labelStyle}>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={labelStyle}>Product Category</label>
                    <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select Category</option>
                      <option value="Teak Wood Doors">Teak Wood Doors</option>
                      <option value="Veneer Doors">Veneer Doors</option>
                      <option value="Laminate Doors">Laminate Doors</option>
                      <option value="WPC Doors">WPC Doors</option>
                      <option value="Door Frames">Door Frames</option>
                      <option value="Plywood">Plywood</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Product Interest */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={labelStyle}>Product / Requirement Details</label>
                  <input name="product" value={form.product} onChange={handleChange} type="text" placeholder="e.g. 5 teak wood doors, 7ft x 3ft, polished finish" style={inputStyle} />
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, budget or any specific requirements..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                {/* WhatsApp note */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "0.8rem 1rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>💬</span>
                  <p style={{ fontSize: "0.8rem", color: "#166534", margin: 0, fontFamily: "'Montserrat', sans-serif" }}>
                    Your details will be sent directly via <strong>WhatsApp</strong> to our team.
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn btn-orange"
                    style={{ padding: "0.9rem 2.5rem", fontSize: "1rem", opacity: formState === "submitting" ? 0.7 : 1, display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    {formState === "submitting" ? "Opening WhatsApp..." : (
                      <>
                        <span>Send via WhatsApp</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.79L2 22l5.32-1.19C8.68 21.58 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.45 14.3c-.23.64-1.34 1.22-1.85 1.29-.48.06-1.12.12-3.21-.75-2.52-1.05-4.14-3.64-4.26-3.8-.13-.16-1.02-1.35-1.02-2.58s.64-1.83.86-2.07c.22-.23.48-.29.64-.29.16 0 .32 0 .46.01.14.01.33-.06.51.39.19.46.64 1.57.7 1.7.06.13.1.29.01.48-.08.19-.13.31-.25.46-.13.14-.26.31-.38.42-.13.13-.26.27-.12.51.15.25.66 1.08 1.41 1.76.96.88 1.77 1.15 2.01 1.26.25.11.39.1.53-.06.14-.17.61-.71.77-.95.16-.25.32-.21.54-.12.22.08 1.41.66 1.65.79.24.13.4.19.46.29.06.11.06.63-.17 1.27z" /></svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
