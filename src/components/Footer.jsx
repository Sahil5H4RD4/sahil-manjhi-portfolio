export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p>© {currentYear} Sahil Manjhi. All rights reserved.</p>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            Designed & Engineered by Sahil. Built with React, Vite, and Premium CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
