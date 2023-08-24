import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollUp } from "../libs/scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFile,
  faPencil,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
  { name: "home", icon: faHome },
  { name: "about", icon: faFile },
  { name: "blog", icon: faPencil },
  { name: "contact", icon: faAddressBook },
];

export default function SideMenu() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  const openMenu = () => {
    const slidemenu = document.querySelector(".slide-menu");
    const overlay = document.querySelector(".overlay");

    slidemenu.classList.add("active");
    overlay.classList.add("active");
    setToggle(true);
    scrollUp();
  };

  const closeMenu = () => {
    const slidemenu = document.querySelector(".slide-menu");
    const overlay = document.querySelector(".overlay");

    slidemenu.classList.remove("active");
    overlay.classList.remove("active");
    setToggle(false);
  };

  const onToggle = (e) => {
    e.preventDefault();
    toggle === true ? closeMenu() : openMenu();
  };

  useEffect(() => {
    closeMenu();
    const home = document.getElementById("home");

    home.addEventListener("click", function (e) {
      setActive("home");
      closeMenu();
    });

    window.addEventListener("resize", () => {
      setActive("home");
      closeMenu();
    });
  }, []);

  return (
    <nav id="sidebar" className="sidebar">
      <button
        className="btn-toggle"
        aria-label="toggle button"
        onClick={(e) => {
          onToggle(e);
        }}
      >
        {toggle === true ? <span>&times;</span> : <span>&#8801;</span>}
      </button>
      <div
        className="overlay"
        aria-label="close button"
        onClick={() => closeMenu()}
      ></div>
      <ul id="slide-menu" className="slide-menu">
        {menu.map((item) => {
          const { name, icon } = item;
          const path = name === "home" ? "/" : "/" + name;

          return (
            <li key={name} className={active === name ? "active" : ""}>
              <Link
                to={path}
                className="nav-item"
                onClick={() => {
                  setActive(name);
                  closeMenu();
                }}
              >
                <FontAwesomeIcon className="icon" icon={icon} />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
