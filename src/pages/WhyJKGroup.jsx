import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";

const IconFactory = () => (
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
    <rect x="2" y="7" width="20" height="14" rx="1" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);
const IconLeaf = () => (
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
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 0 0 1.38 1.38C8.55 18.69 14.9 16 17 8z" />
    <path d="M3.82 19.34C6 14 9 10 17 8" />
  </svg>
);
const IconRuler = () => (
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
    <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0L2.7 16.7a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z" />
    <path d="m7.5 10.5 2 2" />
    <path d="m10.5 7.5 2 2" />
    <path d="m13.5 4.5 2 2" />
  </svg>
);
const IconPalette = () => (
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
    <circle cx="13.5" cy="6.5" r="1" />
    <circle cx="17.5" cy="10.5" r="1" />
    <circle cx="8.5" cy="7.5" r="1" />
    <circle cx="6.5" cy="12.5" r="1" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);
const IconDoor = () => (
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
    <path d="M13 4H5v16h14V8z" />
    <path d="M13 4v4h4" />
    <circle cx="15" cy="13" r="1" fill="var(--primary-orange)" />
  </svg>
);
const IconHandshake = () => (
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
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const reasons = [
  {
    icon: <IconFactory />,
    title: "In-House Manufacturing",
    desc: "Every door and frame is manufactured at our own facility in Bengaluru. No outsourcing — complete quality control from raw material to finished product.",
  },
  {
    icon: <IconLeaf />,
    title: "Premium Raw Materials",
    desc: "We source only certified, sustainably harvested teak, hardwood and engineered materials. Every batch is inspected before entering production.",
  },
  {
    icon: <IconRuler />,
    title: "Custom Manufacturing",
    desc: "Non-standard sizes, unique profiles, custom finishes — we manufacture to your exact specifications. No compromise on fit or finish.",
  },
  {
    icon: <IconPalette />,
    title: "Modern Designs",
    desc: "Our design team stays ahead of architectural trends. From minimalist flush doors to ornate carved panels, we offer designs for every style.",
  },
  {
    icon: <IconDoor />,
    title: "Door & Frame Expertise",
    desc: "We are specialists — not generalists. Doors and frames are our core expertise, built over 18+ years of focused manufacturing experience.",
  },
  {
    icon: <IconHandshake />,
    title: "Customer-First Service",
    desc: "From first enquiry to post-installation support, our team is with you at every step. We build long-term relationships, not one-time transactions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WhyJKGroup = () => (
  <AnimatedPage>
    {/* Banner */}
    <div
      style={{
        background: `linear-gradient(to right, rgba(0,31,63,0.92), rgba(0,51,102,0.7)),
        url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem var(--px-main)",
        color: "white",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: "var(--primary-orange)",
          marginBottom: "1rem",
          fontWeight: 600,
        }}
      >
        Our Promise
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          color: "white",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          marginBottom: "1rem",
          lineHeight: 1.15,
        }}
      >
        <Typewriter text="Why Choose JK Group?" delay={300} />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontSize: "1.1rem",
          color: "#e2e8f0",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          maxWidth: "600px",
        }}
      >
        18 years of craftsmanship, quality and trust — built one door at a time.
      </motion.p>
    </div>

    {/* Reasons Grid */}
    <section
      style={{
        padding: "5rem var(--px-main)",
        backgroundColor: "var(--bg-light)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <h2 className="section-title" style={{ color: "var(--primary-blue)" }}>
          What Sets Us Apart
        </h2>
        <p
          className="section-subtitle"
          style={{ maxWidth: "560px", margin: "0 auto" }}
        >
          We don't just manufacture doors — we craft experiences that last a
          lifetime.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "2rem",
        }}
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #e2e8f0",
              transition: "box-shadow 0.3s",
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
                marginBottom: "1.2rem",
              }}
            >
              {r.icon}
            </div>
            <h3
              style={{
                color: "var(--primary-blue)",
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
              }}
            >
              {r.title}
            </h3>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.7",
                fontSize: "0.93rem",
              }}
            >
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Since 2006 Story */}
    <section
      style={{ padding: "5rem var(--px-main)", backgroundColor: "#f7f9fc" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "var(--primary-orange)",
            marginBottom: "0.75rem",
            fontWeight: 600,
          }}
        >
          Est. 2006 · Bengaluru
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: "var(--primary-blue)",
            marginBottom: "1.5rem",
          }}
        >
          A Legacy Built on Craftsmanship
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            color: "var(--text-light)",
            lineHeight: "1.85",
            fontSize: "1.02rem",
            marginBottom: "1.5rem",
          }}
        >
          Since 2006, JK Group has been Bengaluru's trusted name in premium door
          and frame manufacturing. What started as a focused workshop has grown
          into a full-scale manufacturing house serving architects, interior
          designers, builders and homeowners across South India.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            color: "var(--text-light)",
            lineHeight: "1.85",
            fontSize: "1.02rem",
          }}
        >
          Every product that leaves our facility carries the weight of 18 years
          of experience, the precision of modern machinery, and the care of
          skilled artisans who take pride in their craft.
        </motion.p>
      </div>
    </section>
  </AnimatedPage>
);

export default WhyJKGroup;
