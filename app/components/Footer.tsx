export default function Footer() {
  return (
    <footer style={{ paddingTop: '2rem', paddingBottom: '2rem', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--color-accent)' }}>
          &copy; {new Date().getFullYear()} Cristian Herrera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}