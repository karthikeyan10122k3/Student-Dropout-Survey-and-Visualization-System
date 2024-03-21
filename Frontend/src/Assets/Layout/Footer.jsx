import "./footer.css";

const Footer = () => {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} Dropout Analysis</p>
    </footer>
  );
};

export default Footer;
