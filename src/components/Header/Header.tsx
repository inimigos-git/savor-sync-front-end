"use client";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import "../../assets/scss/main.scss";

export const Header = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <div className={styles.headerNav_logo}>
          <Link to="/" className={styles.headerNav_logo}>
            SaviorSync
          </Link>
        </div>
        <ul className={styles.headerNav_menu}>
          <li>
            <NavLink to="my-reservations">Minhas Reservas</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favoritos</NavLink>
          </li>
          <li>
            <NavLink to="signin" className="btn-secondary">
              Entrar
            </NavLink>
          </li>
          <li>
            <NavLink to="signup" className="btn">
              Cadastrar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
