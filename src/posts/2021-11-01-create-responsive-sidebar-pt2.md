# Extend the Sidebar using ReactJS - Part 2

### by James Pickering

1/11/2021

### Writing the Sidemenu code in ReactJS

In part 1, I showed you how I wrote the HTML and CSS for the sidebar. In this part I'll walk you through how I built the sidebar using React hooks and arrow functions for best practices like code encapsulation. This is a good thing because I can control sidebar features independently of other components.

### React Hooks to control menu state

Here I've imported useState and useEffect which will come in useful later on.

```
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  return ()
}
```

### Window resize event listener

useEffect has a dependency array which must be empty when we want it to fire once as in this scenario when the component is mounted.

```
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {

    window.addEventListener("resize", () => {
      setActive("home");
      closeMenu();
    });
  }, []);

  return ()
}
```

### Scrolling behaviour

Next I imported a reusable library function scrollUp from libs.js. I setup this up to smoothly scroll the window to the top whenever the sidebar is toggled open. Note the North American spelling of the property name behavior.

```
export function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
```

### Write the toggle menu functions

Saving the sidemenu and overlay as variables and adding or removing the active class takes care of styling when the openMenu or closeMenu is called. Then the toggle boolean is set to keep the UI state in sync. Also if the window gets resized or the global home button is clicked the menu state is initialised and hidden from view.

```
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollUp } from "../libs";

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

  return ()
}
```

### Binding the click event handlers

In this section I am using ternary statements to swap the class names based on the active state so that the active menu item is highlighted when navigating to a new route in the app.

```
export default function SideMenu() {
// collpased code

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
      <ul id="slide-menu" className="slide-menu" tabIndex="0">
        <li className={active === "home" ? "active" : ""}>
          <Link
            to="/"
            className="nav-item"
            onClick={() => {
              closeMenu();
              setActive("home");
            }}
          >
            <i className="fa fa-home"></i>
            home
          </Link>
        </li>
        <li className={active === "about" ? "active" : ""}>
          <Link
            to="/about/"
            className="nav-item"
            onClick={() => {
              setActive("about");
              closeMenu();
            }}
          >
            <i className="fa fa-file"></i>
            about
          </Link>
        </li>
        <li className={active === "blog" ? "active" : ""}>
          <Link
            to="/blog/"
            className="nav-item"
            onClick={() => {
              setActive("blog");
              closeMenu();
            }}
          >
            <i className="fa fa-edit"></i>
            blog
          </Link>
        </li>
        <li className={active === "faqs" ? "active" : ""}>
          <Link
            to="/faqs/"
            className="nav-item"
            onClick={() => {
              setActive("faqs");
              closeMenu();
            }}
          >
            <i className="fa fa-question-circle"></i>
            FAQs
          </Link>
        </li>
        <li className={active === "contact" ? "active" : ""}>
          <Link
            to="/contact/"
            className="nav-item"
            onClick={() => {
              setActive("contact");
              closeMenu();
            }}
          >
            <i className="fa fa-comment"></i>
            contact
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/japickering/"
            className="nav-item"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-github"></i>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

```
