function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} MARC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
