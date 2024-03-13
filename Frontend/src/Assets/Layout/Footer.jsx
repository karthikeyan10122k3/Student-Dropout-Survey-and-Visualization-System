import footerStyle from "../Styles/HomePage/header_footer.module.css";

const Footer = () => {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer className={footerStyle.homePageFooter}>
      <p>&copy; {year} Dropout Analysis</p>
    </footer>
  );
};

export default Footer;
