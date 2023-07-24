import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
<>
      <nav className="navbar navbar-expand-lg text-light-emphasis bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            <img src="/popcorn.jpg" alt="" width={30} /> Watch Me
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/top-series ">
                  Top Series
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-light" to="/about ">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    );
}
 
export default Navbar;
