import { NavLink } from "react-router";
import styles from "./style.module.css";

export const NavigationLink = ({ title, linkPath }) => (
  <li className={styles.li}>
    <NavLink to={linkPath}>{title}</NavLink>
  </li>
);
