import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://avatars.githubusercontent.com/u/48286657?v=4" alt="" />
      </Link>
      <header>
        <h2>Karthik M</h2>
        <p>
          <a href="mailto:mkarthik556@gmail.com">mailto:mkarthik556@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I build cross-platform mobile apps &  web apps using Flutter, React  & Svelte
      </p>
      <p>Currently exploring NodeJS, System Design and some bit of DevOps.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy;Karthik M<Link to="/">karthik.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
