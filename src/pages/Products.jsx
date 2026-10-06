import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgTeak from '../product images/TEAK WOOD DOORS.png';
import imgVeneer from '../product images/VENEER DOORS.png';
import imgLaminate from '../product images/LAMINATE DOORS.png';
import imgWpc from '../product images/WPC DOORS Premium.png';
import imgWpcFrames from '../product images/WPC FRAMES.png';
import imgPlywood from '../product images/PLYWOOD.png';

const filters = [
  "All",
  "Teak Wood",
  "Veneer",
  "Laminate",
  "WPC",
  "Frames",
  "Plywood",
  "Hardware",
];

const products = [
  {
    id: 1,
    title: "Teak Wood Doors",
    description: "Premium teakwood for luxury & durability.",
    category: "Teak Wood",
    image: imgTeak,
    tagline: "Timeless Teak. Lasting Luxury.",
    fullDescription:
      "Our teak wood doors are crafted from the finest A-grade teak sourced sustainably. Known for its natural oil content, teak is inherently resistant to moisture, warping, and termites — making it the ultimate choice for both interior and exterior applications. Every door is hand-finished and polished to reveal the wood's rich, warm grain.",
    features: [
      "Premium A-Grade Teak",
      "Natural Oil Finish",
      "Termite & Moisture Resistant",
      "Available in Custom Sizes",
      "Solid Core Construction",
      "10-Year Warranty",
    ],
    specs: {
      material: "Solid Teak Wood",
      thickness: "35mm / 45mm",
      finish: "Natural Polish / Lacquer",
      sizes: "Standard & Custom",
      warranty: "10 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Veneer Doors",
    description: "Natural wood veneer with modern design.",
    category: "Veneer",
    image: imgVeneer,
    tagline: "The Elegance of Natural Wood. Redefined.",
    fullDescription:
      "Veneer doors combine the beauty of natural wood with modern engineering. A thin slice of premium wood is bonded to a stable engineered core, giving you the authentic look and texture of solid wood at superior dimensional stability. Available in teak, oak, walnut, and wenge veneers.",
    features: [
      "Real Wood Veneer Surface",
      "Stable Engineered Core",
      "Multiple Wood Species",
      "Consistent Grain Pattern",
      "Smooth Factory Finish",
      "Eco-Friendly Manufacturing",
    ],
    specs: {
      material: "Veneer on MDF/Plywood Core",
      thickness: "32mm / 40mm",
      finish: "PU / NC Lacquer",
      sizes: "Standard & Custom",
      warranty: "7 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1615876234886-fdba0fdf81eb?w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Laminate Doors",
    description: "Stylish, durable and low maintenance.",
    category: "Laminate",
    image: imgLaminate,
    tagline: "Bold Designs. Zero Compromise.",
    fullDescription:
      "Our laminate doors offer a perfect balance of style, durability, and affordability. High-pressure laminates (HPL) are fused onto a premium core, offering scratch resistance, easy cleaning, and an incredible variety of textures — from wood grain to solid colors and contemporary patterns.",
    features: [
      "High-Pressure Laminate (HPL)",
      "Scratch & Stain Resistant",
      "200+ Colors & Textures",
      "Easy to Clean",
      "Budget-Friendly",
      "ISI Certified",
    ],
    specs: {
      material: "HPL on Plywood/MDF Core",
      thickness: "30mm / 38mm",
      finish: "Matte / Gloss / Texture",
      sizes: "Standard & Custom",
      warranty: "5 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "WPC Doors",
    description: "Waterproof and termite resistant doors.",
    category: "WPC",
    image: imgWpc,
    tagline: "Built to Withstand. Designed to Impress.",
    fullDescription:
      "Wood-Plastic Composite (WPC) doors are the future of modern door engineering. These doors are completely waterproof, 100% termite proof, and will never warp or swell — making them ideal for bathrooms, kitchens, and humid coastal climates. Zero maintenance required.",
    features: [
      "100% Waterproof",
      "Termite & Borer Proof",
      "Will Not Warp or Swell",
      "Zero Maintenance",
      "Eco-Friendly (Recycled Content)",
      "Fire Retardant Option",
    ],
    specs: {
      material: "Wood-Plastic Composite",
      thickness: "35mm",
      finish: "Factory Laminated",
      sizes: "Standard & Custom",
      warranty: "10 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1615876234886-fdba0fdf81eb?w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Premium Door Frames",
    description: "Sturdy frames crafted for a perfect fit.",
    category: "Frames",
    image: imgWpcFrames,
    tagline: "The Foundation of Every Great Door.",
    fullDescription:
      "A great door deserves an equally great frame. Our door frames are engineered for structural integrity and a perfect fit. Available in teak, hardwood, and WPC — our frames are pre-drilled and ready for installation. Precision milling ensures consistent profiles and seamless door alignment.",
    features: [
      "Precision Milled Profiles",
      "Available in Teak / Hardwood / WPC",
      "Pre-Drilled for Hardware",
      "Perfect Door Alignment",
      "Anti-Warp Treatment",
      "Custom Arch Profiles Available",
    ],
    specs: {
      material: "Teak / Hardwood / WPC",
      thickness: "75mm / 100mm / 125mm",
      finish: "Polish / Laminate",
      sizes: "Standard & Custom",
      warranty: "7 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1615876234886-fdba0fdf81eb?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Marine Plywood",
    description: "High-grade plywood for superior strength.",
    category: "Plywood",
    image: imgPlywood,
    tagline: "The Core of Premium Craftsmanship.",
    fullDescription:
      "Our marine-grade plywood is the backbone of premium door and interior manufacturing. Made from hardwood veneers bonded with waterproof adhesive under high pressure, our plywood offers exceptional strength, uniform thickness, and a void-free core — ideal for door skins, furniture, and interior panelling.",
    features: [
      "IS:710 Marine Grade Certified",
      "Waterproof BWP Adhesive",
      "Void-Free Core",
      "Calibrated Thickness",
      "Available in Multiple Grades",
      "Termite Resistant",
    ],
    specs: {
      material: "Hardwood Veneers + BWP Adhesive",
      thickness: "6mm to 25mm",
      finish: "Natural / Sanded",
      sizes: "8x4 ft Standard",
      warranty: "5 Years",
    },
    gallery: [
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?w=800&q=80",
    ],
  },
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
          Our Products
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
                <div style={{ overflow: "hidden" }}>
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
                </div>
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
