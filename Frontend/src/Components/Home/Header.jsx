import headerStyle from "../../Assets/Styles/Home/header.module.css";

const Header = () => {
  return (
    <header>
      <div className={headerStyle.container}>
        <div className={headerStyle.navbar}>
          <div className={headerStyle.logo}>
            <img src="/Images/Icon.png" alt="icon" />
          </div>
          <nav>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutUs">About</a>
            </li>
            <li>
              <a href="/contactUs">Contact Us</a>
            </li>
            <li>
              <a href="/register">Login</a>
            </li>
          </nav>
          <div className={headerStyle.btn}>
            <i className="fa fa-bars menu-btn" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;