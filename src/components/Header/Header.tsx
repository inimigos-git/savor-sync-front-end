"use client";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButton = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/" className={styles.title}>
          SAVORSYNC
        </Link>
        <div className={styles.menu} onClick={handleButton}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? styles.open : ""}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sobre"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Restaurantes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
