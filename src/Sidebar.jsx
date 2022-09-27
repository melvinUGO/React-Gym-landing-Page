import React from "react";
import sublinks from "./data";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={
        isSidebarOpen ? "sidebar-wrapper show-sidebar" : "sidebar-wrapper"
      }
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaWindowClose />
        </button>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sub-links">
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
