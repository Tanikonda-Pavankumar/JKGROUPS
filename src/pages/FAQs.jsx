import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What types of doors does JK Group manufacture?",
    a: "We manufacture a wide range of doors including Teak Wood Doors, Veneer Doors, Laminate Doors, WPC (Wood-Plastic Composite) Doors, and matching Door Frames. We also supply Marine Plywood and door hardware.",
  },
  {
    q: "Do you offer custom sizes and designs?",
    a: "Yes. Custom manufacturing is one of our core strengths. We can produce doors and frames in non-standard sizes, custom profiles, and bespoke finishes to match your architectural requirements.",
  },
  {
    q: "How long has JK Group been in business?",
    a: "JK Group was established in 2006 in Bengaluru. We have over 18 years of experience in premium door and frame manufacturing, serving thousands of residential and commercial clients.",
  },
  {
    q: "Are your products termite and moisture resistant?",
    a: "Our WPC doors are 100% waterproof and termite-proof. Our teak wood doors are naturally resistant to moisture and termites due to the inherent oil content of teak. All products undergo quality treatment before dispatch.",
  },
  {
    q: "What warranty do your products carry?",
    a: "Warranty varies by product: Teak Wood Doors carry a 10-year warranty, Veneer and Frame products carry 7 years, Laminate Doors carry 5 years, and WPC Doors carry a 10-year warranty. All warranties cover manufacturing defects.",
  },
  {
    q: "Do you supply to builders and interior designers?",
    a: "Yes. We work closely with architects, interior designers, builders and contractors. We offer bulk pricing, project-specific customisation, and dedicated account support for trade clients.",
  },
  {
    q: "Where is JK Group located?",
    a: "Our manufacturing facility and showroom are located in Bengaluru, Karnataka. We supply across Bengaluru and to clients throughout South India.",
  },
  {
    q: "How can I get a quote?",
    a: "You can request a quote by visiting our Contact page, calling us directly, or reaching out via WhatsApp. Our team will respond within one business day with a detailed quotation.",
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        borderBottom: "1px solid #e2e8f0",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: open ? "var(--primary-orange)" : "var(--text-dark)",
            transition: "color 0.25s ease",
            lineHeight: 1.4,
          }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1.5px solid",
            borderColor: open ? "var(--primary-orange)" : "#cbd5e1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            lineHeight: 1,
            color: open ? "var(--primary-orange)" : "var(--text-light)",
            transition: "border-color 0.25s, color 0.25s",
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                color: "#000000",
                lineHeight: "1.8",
                fontSize: "1rem",
                fontWeight: "500",
                paddingBottom: "1.5rem",
                margin: 0,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => (
  <AnimatedPage>
    {/* Banner */}
    <div
      style={{
        background: `linear-gradient(to right, rgba(0,31,63,0.92), rgba(0,51,102,0.7)),
        url(https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80)`,
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
        Got Questions?
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          color: "#ffffff",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          marginBottom: "1rem",
          lineHeight: 1.15,
        }}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontSize: "1.05rem",
          color: "#e2e8f0",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          maxWidth: "560px",
        }}
      >
        Everything you need to know about JK Group products and services.
      </motion.p>
    </div>

    {/* FAQ Accordion */}
    <section
      style={{
        padding: "5rem var(--px-main)",
        backgroundColor: "var(--bg-light)",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h2
            className="section-title"
            style={{ color: "var(--primary-blue)" }}
          >
            Common Questions
          </h2>
          <p className="section-subtitle">
            Can't find your answer?{" "}
            <a
              href="/contact"
              style={{
                color: "var(--primary-orange)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Contact us directly.
            </a>
          </p>
        </motion.div>

        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </section>
  </AnimatedPage>
);

export default FAQs;
