import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

// ─── SVG Icons ───
const IconTrophy = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M6 9a6 6 0 0 0 12 0" />
    <path d="M12 15v4" />
    <path d="M8 19h8" />
    <rect x="6" y="3" width="12" height="6" rx="1" />
  </svg>
);
const IconLeafAbout = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 0 0 1.38 1.38C8.55 18.69 14.9 16 17 8z" />
    <path d="M3.82 19.34C6 14 9 10 17 8" />
  </svg>
);
const IconShield = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconLightbulb = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6H8.3A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" />
  </svg>
);
const IconTarget = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconStar = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const timelineData = [
  {
    year: "2006",
    title: "Business Established",
    desc: "Founded with a vision to craft premium wooden doors in Bengaluru.",
  },
  {
    year: "Growth",
    title: "Expanded Product Range",
    desc: "Diversified into veneer, laminate, WPC doors and custom frames.",
  },
  {
    year: "Innovation",
    title: "Modern Materials & Manufacturing",
    desc: "Adopted cutting-edge machinery and sustainable materials.",
  },
  {
    year: "Today",
    title: "Premium Doors & Interior Solutions",
    desc: "Serving 5000+ clients across residential and commercial sectors.",
  },
];

const values = [
  {
    icon: <IconTrophy />,
    title: "Excellence",
    desc: "We pursue perfection in every detail — from raw material sourcing to the final finishing touch.",
  },
  {
    icon: <IconLeafAbout />,
    title: "Sustainability",
    desc: "Committed to responsible sourcing and eco-friendly manufacturing practices for a greener future.",
  },
  {
    icon: <IconShield />,
    title: "Integrity",
    desc: "We build lasting relationships through transparent communication, fair pricing and honest service.",
  },
  {
    icon: <IconLightbulb />,
    title: "Innovation",
    desc: "Continually evolving our designs and processes to stay ahead of industry trends.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <AnimatedPage>
      {/* ─── Banner ─── */}
      <div
        style={{
          background: `
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.82),
        rgba(0, 0, 0, 0.35)
      ),
      url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80")
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "var(--py-hero) var(--px-main)",
          color: "white",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "var(--primary-orange)",
            marginBottom: "1rem",
            fontWeight: 600,
          }}
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            color: "#ffffff",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "1.2rem",
            color: "#e2e8f0",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            maxWidth: "600px",
          }}
        >
          Craftsmanship. Quality. Innovation.
        </motion.p>
      </div>

      {/* ─── Our Story + Timeline ─── */}
      <div style={{ padding: "var(--py-section) var(--px-main)", backgroundColor: "var(--bg-light)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Story */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2
              style={{
                color: "var(--primary-orange)",
                fontSize: "2rem",
                marginBottom: "1.5rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Our Story
            </h2>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.9",
                fontSize: "1.05rem",
                marginBottom: "1.5rem",
              }}
            >
              JK Group began its journey in{" "}
              <strong style={{ color: "var(--primary-blue)" }}>2006</strong>{" "}
              with a singular focus on quality craftsmanship and premium wooden
              products.
            </p>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.9",
                fontSize: "1.05rem",
                marginBottom: "2rem",
              }}
            >
              Today, we bring together premium materials, modern manufacturing
              and architectural design to create doors, frames and interior
              solutions for residential and commercial spaces across Bengaluru
              and beyond.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-orange"
              style={{
                padding: "0.9rem 2.2rem",
                fontSize: "1rem",
                alignSelf: "flex-start",
              }}
            >
              Know More &rarr;
            </motion.button>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
            }}
            style={{ position: "relative", paddingLeft: "2rem" }}
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                left: "2rem",
                top: 10,
                bottom: 10,
                width: "2px",
                backgroundColor: "#e2e8f0",
                zIndex: 0,
              }}
            />

            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: i !== timelineData.length - 1 ? "2.5rem" : 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    border: "2px solid var(--primary-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: "translateX(-20px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: "var(--primary-orange)",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={{ paddingTop: "0.2rem" }}>
                  <h3
                    style={{
                      color: "var(--primary-blue)",
                      fontSize: "1.1rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.year}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-dark)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Mission & Vision ─── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(0,77,128,0.96), rgba(0,40,80,0.98)), url(https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "var(--py-section) var(--px-main)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "var(--primary-orange)",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            What Drives Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              color: "white",
              marginBottom: "4rem",
            }}
          >
            Our Mission & Vision
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2.5rem",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "rgba(245,134,52,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <IconTarget />
              </div>
              <h3
                style={{
                  color: "var(--primary-orange)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Our Mission
              </h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                To deliver world-class wooden doors, frames and interior
                solutions through superior craftsmanship, sustainable materials
                and an unwavering commitment to customer satisfaction — making
                every home and workplace a place of beauty.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2.5rem",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "rgba(245,134,52,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <IconStar />
              </div>
              <h3
                style={{
                  color: "var(--primary-orange)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Our Vision
              </h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                To be the most trusted and preferred name in premium door and
                interior manufacturing across South India — renowned for
                innovation, quality and lasting design that stands the test of
                time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Our Values ─── */}
      <div style={{ padding: "var(--py-section) var(--px-main)", backgroundColor: "#f7f9fc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "var(--primary-orange)",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            What We Stand For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              color: "var(--primary-blue)",
              marginBottom: "3.5rem",
            }}
          >
            Our Core Values
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "2rem",
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  border: "1px solid #e2e8f0",
                  transition: "box-shadow 0.3s",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    background: "rgba(245,134,52,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    color: "var(--primary-blue)",
                    fontSize: "1.2rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    lineHeight: "1.7",
                    fontSize: "0.95rem",
                  }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Team / Craft Section ─── */}
      <div style={{ padding: "var(--py-section) var(--px-main)", backgroundColor: "var(--bg-light)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "var(--primary-orange)",
                marginBottom: "0.5rem",
                fontWeight: 600,
              }}
            >
              Our People
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                color: "var(--primary-blue)",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              The Hands Behind
              <br />
              Every Masterpiece
            </h2>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Our team of over 150 skilled artisans, engineers and designers
              bring decades of combined expertise to every project. From
              hand-carving intricate panel designs to precision-fitting frames,
              every JK Group product is a result of human mastery.
            </p>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
            >
              We invest in continuous training, ensuring our craftsmen are
              equipped with the latest techniques while preserving the timeless
              traditions that make our work truly exceptional.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
              style={{ padding: "0.9rem 2.2rem", fontSize: "1rem" }}
            >
              Meet Our Team
            </motion.button>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="JK Group craftsmen at work"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
