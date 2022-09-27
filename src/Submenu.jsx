import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const container = useRef(null);
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const [column, setColumn] = useState("col-2");
  useEffect(() => {
    setColumn("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;

    if (links.length === 3) {
      setColumn("col-3");
    }

    if (links.length > 3) {
      setColumn("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
