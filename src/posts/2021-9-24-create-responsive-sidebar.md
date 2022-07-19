2021/9/25

# Create a Responsive Sidebar in JavaScript

#### By James Pickering

#### 25/9/2021

### Assemble the Blueprint

In this tutorial I'll assume you have an understanding of HTML, CSS and vanilla Javascript. With a bit of effort you can apply the techniques here to any future JS framework. In part one of this tutorial I explain how I created the responsive sidebar for my portfolio.

Keep it simple and decide how many links to show and which icons to use. In my case I use the free Font Awesome CSS library because it offers hundreds of system icons in SVG format which scale with no loss of quality. In this html I've swapped the anchor tags for <Link> components because my React app uses a router library. Then I clone the menu items for as many links as I need.

```
<nav id="navbar" className="navbar" tabIndex="0">
<ul>
 <li>
  <Link
   to="/home/"
   className="nav-item"
  >
   <i className="fa fa-home"></i>
   home
  </Link>
 </li>
</nav>
```

Then I repeat the process for the sidebar menu.

```
<nav id="sidebar" className="sidebar">
  <button className="btn-toggle"
    aria-label="toggle button">
    {toggle === true ? <span>&times;</span> : <span>&#8801;</span>}
  </button>
   <div className="overlay" aria-label="close button"></div>
   <ul id="slide-menu" className="slide-menu" tabIndex="0">
     <li className="home">
     	<Link to="/" className="nav-item">
         <i className="fa fa-home"></i>home
        </Link>
     </li>
  </ul>
</nav>
```

#### SASS Modules

I wrote my CSS for this project using SASS stylesheets which are imported into `main.scss`. Live SASS compiler watches sass file changes and compiles these modules into main.css whenever I save my code changes. By specifying CSS classes like this the JS code I produce is cleaner and maintainable than if I had simply chained styles to variables in JS. The main CSS looks like this:

```
@import "styles/nav";
@import "styles/mobile";
```

```
.navbar {
 ul {
  margin-top: 2%;

  li {
    display: inline-block;
    margin-left: 20px;
    a {
      display: block;
      text-transform: capitalize;
    }
  }
 }
}
```

#### Layer the Sidebar

Define the sidebar as a floating menu and nested its child elements. The slide menu is positioned at the top right below the main header for clear visual separation. I'm not hiding the menu using display:none so it is important to define style pointer-events: none; to prevent accidental navigation while the menu is invisible.

```
.sidebar {
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  color: #fff;
  z-index: 10;

  .btn-toggle {
    display: block;
    padding: 0;
    margin-top: 20px;
    margin-right: 25px;

    span {
      font-size: 24px;
    }
  }

  .slide-menu {
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 2%;
    background: #111;
    min-height: 100vh;
    width: 0px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
    z-index: 99;

    &.active {
      width: 200px;
      opacity: 1;
      pointer-events: auto;
    }

    li {
      display: block;
      background: inherit;
      transition: all 0.5s;

      a {
        display: block;
        margin: 10px 15px;
        padding: 10px;
        text-transform: capitalize;
      }

    	&:hover,
    	&:focus,
    	&.active {
        background: var(--primary);

        .nav-item {
          color: var(--black);
        }
      }
    }
  }
}
```

#### Overlay

The overlay doubles up as a dismiss button in a layer under the sidebar menu. In my original code I have it nested in the sidebar class but shown here for brevity. We must use z-index to control the stacking order and add a cursor pointer to signal that it's a clickable hotspot.

```
.overlay {
  position: absolute;
  width: 0px;
  min-height: 100vh;
  top: 70px;
  right: 0px;
  background: #111;
  opacity: 0;
  z-index: 10;
  // transition: all 0.5s;

  &.active {
    width: 800px;
    opacity: 0.5;
    cursor: pointer;
  }
}
```

#### Finishing up with Mobile Media Queries

Next I toggle the menus depending on the browser window width. I can specify display: none; for each media query so only one or the other is part of the document tree.

It is important to emphasise the browser responds to CSS media queries as the browser window size changes at run time or when a user resizes the window. So I created 2 media queries: `min-width`, then a `max-width` after that so the display toggles between the two accordingly. In this way mobile break points take precedence over desktop defaults. That wraps it up for part one. In part 2 I will hook up toggle menu functionality in JS.

```
@media screen and (min-width: 820px) {
  .sidebar {
    display: none;
  }
}

@media screen and (max-width: 820px) {
  .navbar {
    display: none;
  }
}
```
