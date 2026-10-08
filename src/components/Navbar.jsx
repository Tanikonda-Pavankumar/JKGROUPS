import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',            label: 'Home' },
  { to: '/products',    label: 'Products' },
  { to: '/catalogue',   label: 'Catalogue' },
  { to: '/about',       label: 'About Us' },
  { to: '/gallery',     label: 'Gallery' },
  { to: '/why-jk-group',label: 'Why JK Group' },
  { to: '/faqs',        label: 'FAQs' },
  { to: '/contact',     label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
          <span>jk</span> JK GROUP
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{ color: location.pathname === l.to ? 'var(--primary-orange)' : undefined }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-orange">Get a Quote</Link>
          <a href="https://wa.me/918971794949" target="_blank" rel="noreferrer" className="btn btn-green" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ color: 'var(--text-dark)' }}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0,
              background: 'var(--bg-light)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              zIndex: 999,
              padding: '1.5rem var(--px-main) 2rem',
              borderTop: '1px solid #e2e8f0',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  style={{ borderBottom: '1px solid #f0f0f0' }}
                >
                  <Link
                    to={l.to}
                    style={{
                      display: 'block', padding: '0.9rem 0',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600, fontSize: '0.95rem',
                      color: location.pathname === l.to ? 'var(--primary-orange)' : 'var(--text-dark)',
                      textDecoration: 'none',
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-orange" style={{ flex: 1, justifyContent: 'center' }}>Get a Quote</Link>
              <a href="https://wa.me/918971794949" target="_blank" rel="noreferrer" className="btn btn-green" style={{ flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
