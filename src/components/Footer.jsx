import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="nav-brand" style={{ color: 'white', marginBottom: '1rem' }}>
            <span style={{ color: '#cc0000' }}>jk</span> JK GROUP
          </div>
          <p>
            The leading manufacturing hub for premium luxury wooden doors, frames, and custom interior solutions since 2006.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Catalogues</h3>
          <ul>
            <li><Link to="/catalogue">Doors & Frames Catalog</Link></li>
            <li><Link to="/catalogue">Lather Catalog</Link></li>
            <li><Link to="/catalogue">Laminates Catalog</Link></li>
            <li><Link to="/catalogue">Premium Doors & Frames</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul style={{ lineHeight: '1.6' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.2rem' }}>Visit Us</strong>
              Sy #63/3, Near Paramount Sanskruti Public School, Aduru Village, Bidarahalli, Bengaluru - 560049
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.2rem' }}>Call Us</strong>
              8971794549 | 9380668222
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.2rem' }}>WhatsApp</strong>
              8971794549
            </li>
            <li>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.2rem' }}>Email</strong>
              <a href="mailto:jkgroupsince2006@gmail.com">jkgroupsince2006@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JK Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
