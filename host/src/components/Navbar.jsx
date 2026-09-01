import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      {" "}
      <div className="navbar__inner">
        {" "}
        <Link to="/" className="navbar__brand">
          {" "}
          Shop<span>.</span>{" "}
        </Link>{" "}
        <nav className="navbar__nav">
          {" "}
          <Link to="/">Products</Link>{" "}
          <Link to="/cart" className="navbar__cart">
            {" "}
            <span>Cart</span> <span className="navbar__badge">0</span>{" "}
          </Link>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}
export default Navbar;
