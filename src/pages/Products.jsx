import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import { products } from '../productsData';

const filters = [
  "All",
  "Doors",
  "Frames",
  "WPC",
  "Materials",
  "Hardware",
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <AnimatedPage>
      {/* Page Banner */}
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(0, 31, 63, 0.9), rgba(0, 51, 102, 0.75)), url(https://images.unsplash.com/photo-1611117775350-ac3950990985?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "var(--py-hero) var(--px-main)",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            color: "#ffffff",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "0.5rem",
            fontWeight: 600,
          }}
        >
          <Typewriter text="Our Products" delay={300} />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "#cbd5e1",
            letterSpacing: "0.3px",
          }}
        >
          Premium doors, frames and interior solutions.
        </motion.p>
      </div>

      <div
        style={{
          padding: "var(--py-section) var(--px-main)",
          backgroundColor: "var(--bg-light)",
        }}
      >
        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "20px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
                backgroundColor:
                  activeFilter === filter ? "var(--primary-orange)" : "#f1f5f9",
                color: activeFilter === filter ? "white" : "var(--text-light)",
                flex: "1 1 auto",
                maxWidth: "max-content",
              }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "2rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Link to={`/products/${product.id}`} style={{ display: 'block', overflow: "hidden" }}>
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    whileHover={{ scale: 1.07 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Link>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--primary-blue)",
                      marginBottom: "0.5rem",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-light)",
                      marginBottom: "1.5rem",
                      fontSize: "0.92rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    style={{
                      color: "var(--primary-blue)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      letterSpacing: "0.5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    View Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Products;
