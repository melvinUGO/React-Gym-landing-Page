import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const handleSubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const bottom = tempBtn.bottom - 1.5;
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu(page, { center, bottom });
  };
  const handleClose = (e) => {
    if (!e.target.classList.contains("links-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleClose}>
      <div className="nav-center">
        <div className="nav-header">
          <img src="src\assets\logo.png" alt="logo" />
          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="links-btn" onMouseOver={handleSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="links-btn" onMouseOver={handleSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="links-btn" onMouseOver={handleSubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
