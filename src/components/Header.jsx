import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img src={logo} alt="Logo" />
      </div>

      <div className="headerRight">
        <a href="#">Help</a>
      </div>
    </header>
  );
};

export default Header;
