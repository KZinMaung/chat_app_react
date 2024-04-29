import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
