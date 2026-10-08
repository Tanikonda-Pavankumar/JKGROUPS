import imgTeak from './product images/TEAK WOOD DOORS.png';
import imgVeneer from './product images/VENEER DOORS.png';
import imgLaminate from './product images/LAMINATE DOORS.png';
import imgWpc from './product images/WPC DOORS Premium.png';
import imgWpcFrames from './product images/WPC FRAMES.png';
import imgPlywood from './product images/PLYWOOD.png';
import imgLocks from './product images/hands and locks.png';

// Import real gallery images
import g1 from './gallery/WhatsApp Image 2026-10-08 at 10.04.11 AM.jpeg';
import g2 from './gallery/WhatsApp Image 2026-10-08 at 10.04.11 AM (1).jpeg';
import g3 from './gallery/WhatsApp Image 2026-10-08 at 10.04.12 AM.jpeg';
import g4 from './gallery/WhatsApp Image 2026-10-08 at 10.04.12 AM (1).jpeg';
import g5 from './gallery/WhatsApp Image 2026-10-08 at 10.04.13 AM.jpeg';
import g6 from './gallery/WhatsApp Image 2026-10-08 at 10.04.13 AM (1).jpeg';
import g7 from './gallery/WhatsApp Image 2026-10-08 at 10.04.14 AM.jpeg';
import g8 from './gallery/WhatsApp Image 2026-10-08 at 10.04.14 AM (1).jpeg';
import g9 from './gallery/WhatsApp Image 2026-10-08 at 10.04.15 AM.jpeg';
import g10 from './gallery/WhatsApp Image 2026-10-08 at 10.04.16 AM.jpeg';
import g11 from './gallery/WhatsApp Image 2026-10-08 at 10.04.17 AM.jpeg';
import g12 from './gallery/WhatsApp Image 2026-10-08 at 10.04.17 AM (1).jpeg';

const commonGallery = [g1, g2, g3];
const alternativeGallery = [g4, g5, g6];

export const products = [
  {
    id: 1,
    title: "Wooden Frames",
    description: "Premium wooden door frames.",
    category: "Frames",
    image: imgWpcFrames,
    tagline: "The Foundation of Every Great Door.",
    fullDescription: "A great door deserves an equally great frame. Our wooden frames are engineered for structural integrity and a perfect fit.",
    features: ["Precision Milled Profiles", "Available in Teak / Hardwood", "Pre-Drilled for Hardware"],
    specs: { material: "Hardwood/Teak", thickness: "Standard", sizes: "Custom" },
    gallery: commonGallery
  },
  {
    id: 2,
    title: "Teak Wood Doors",
    description: "Premium teakwood for luxury & durability.",
    category: "Doors",
    image: imgTeak,
    tagline: "Timeless Teak. Lasting Luxury.",
    fullDescription: "Our teak wood doors are crafted from the finest A-grade teak sourced sustainably.",
    features: ["Premium A-Grade Teak", "Natural Oil Finish", "Termite Resistant"],
    specs: { material: "Solid Teak Wood", thickness: "35mm / 45mm", sizes: "Custom" },
    gallery: alternativeGallery
  },
  {
    id: 3,
    title: "Veneer Doors",
    description: "Natural wood veneer with modern design.",
    category: "Doors",
    image: imgVeneer,
    tagline: "The Elegance of Natural Wood.",
    fullDescription: "Veneer doors combine the beauty of natural wood with modern engineering.",
    features: ["Real Wood Veneer Surface", "Stable Engineered Core", "Multiple Wood Species"],
    specs: { material: "Veneer on Core", thickness: "32mm / 40mm", sizes: "Custom" },
    gallery: commonGallery
  },
  {
    id: 4,
    title: "Laminate Doors",
    description: "Stylish, durable and low maintenance.",
    category: "Doors",
    image: imgLaminate,
    tagline: "Bold Designs. Zero Compromise.",
    fullDescription: "Our laminate doors offer a perfect balance of style, durability, and affordability.",
    features: ["High-Pressure Laminate", "Scratch Resistant", "Easy to Clean"],
    specs: { material: "HPL on Plywood Core", thickness: "30mm / 38mm", sizes: "Custom" },
    gallery: alternativeGallery
  },
  {
    id: 5,
    title: "Micro Coated Doors",
    description: "Premium micro coated finish.",
    category: "Doors",
    image: g7,
    tagline: "Modern Precision Coating.",
    fullDescription: "High-quality micro coated doors offering extreme durability and an ultra-smooth finish.",
    features: ["Micro Coated Surface", "Moisture Resistant", "Smooth Finish"],
    specs: { material: "Coated Wood", thickness: "Standard", sizes: "Custom" },
    gallery: commonGallery
  },
  {
    id: 6,
    title: "Primer Doors",
    description: "Ready-to-paint primer doors.",
    category: "Doors",
    image: g8,
    tagline: "A Blank Canvas.",
    fullDescription: "Factory primed doors ready for any paint application to match your exact interior style.",
    features: ["Factory Primed", "Smooth Surface", "Paint-Ready"],
    specs: { material: "Primed Core", thickness: "Standard", sizes: "Custom" },
    gallery: alternativeGallery
  },
  {
    id: 7,
    title: "Memran Doors",
    description: "Membrane pressed doors with stunning profiles.",
    category: "Doors",
    image: g9,
    tagline: "Seamless Membrane Finish.",
    fullDescription: "Membrane doors are manufactured by pressing PVC foil onto routed flush doors.",
    features: ["PVC Membrane Foil", "Seamless Edges", "Moisture Resistant"],
    specs: { material: "Membrane on MDF", thickness: "Standard", sizes: "Custom" },
    gallery: commonGallery
  },
  {
    id: 8,
    title: "WPC Door and Frames",
    description: "100% Waterproof and termite resistant.",
    category: "WPC",
    image: imgWpc,
    tagline: "Built to Withstand.",
    fullDescription: "Wood-Plastic Composite (WPC) doors and frames are the future of modern engineering.",
    features: ["100% Waterproof", "Termite Proof", "Will Not Warp"],
    specs: { material: "WPC", thickness: "35mm", sizes: "Custom" },
    gallery: alternativeGallery
  },
  {
    id: 9,
    title: "Ply Wood",
    description: "High quality marine grade plywood.",
    category: "Materials",
    image: imgPlywood,
    tagline: "Strength in Layers.",
    fullDescription: "Premium grade plywood available in various thicknesses for all woodworking needs.",
    features: ["Borer & Termite Proof", "High Core Density", "ISI Certified"],
    specs: { material: "Hardwood Layers", thickness: "18mm / 19mm", sizes: "8x4 ft" },
    gallery: commonGallery
  },
  {
    id: 10,
    title: "Block Board",
    description: "Sturdy block boards for heavy furniture.",
    category: "Materials",
    image: g10,
    tagline: "Solid Foundation.",
    fullDescription: "Premium block boards designed for extreme load bearing applications.",
    features: ["Solid Pine Wood Core", "Warp Resistant", "Excellent Screw Holding"],
    specs: { material: "Pine/Hardwood", thickness: "19mm / 25mm", sizes: "8x4 ft" },
    gallery: alternativeGallery
  },
  {
    id: 11,
    title: "Laminates",
    description: "Decorative laminate sheets.",
    category: "Materials",
    image: g11,
    tagline: "Endless Design Possibilities.",
    fullDescription: "A wide variety of decorative laminates in wood grains, solid colors, and textures.",
    features: ["High Pressure", "Scratch Resistant", "Vibrant Designs"],
    specs: { material: "Paper & Resin", thickness: "1mm", sizes: "8x4 ft" },
    gallery: commonGallery
  },
  {
    id: 12,
    title: "Locks and Handles",
    description: "Premium architectural hardware.",
    category: "Hardware",
    image: imgLocks,
    tagline: "The Perfect Finishing Touch.",
    fullDescription: "High-security locks, mortise handles, hinges, and accessories.",
    features: ["Premium Finishes", "High Security", "Durable Mechanisms"],
    specs: { material: "Brass / SS / Zinc", finish: "Multiple", warranty: "5 Years" },
    gallery: alternativeGallery
  }
];
