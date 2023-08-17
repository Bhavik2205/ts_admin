import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Container fluid>
        <nav>
          <div className={styles.leftSec}>
            <div className={styles.logo}>
              <img
                src="/assets/images/logo_short.svg"
                alt="logo"
                className="img-fluid"
              />
            </div>
            <div
              className={styles.respToggler}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <FeatherIcon icon="menu" size={26} />
            </div>
            <ul
              className={`${styles.menus} ${menuToggle ? styles.active : ""}`}
            >
              <div
                className={styles.respCloser}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <FeatherIcon icon="x" size={26} />
              </div>
              <li>
                <Link
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard" ? styles.active : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/saisei"
                  className={
                    location.pathname === "/saisei" ? styles.active : ""
                  }
                >
                  Saisei
                </Link>
              </li>
              <li>
                <Link
                  to="/pro"
                  className={location.pathname === "/pro" ? styles.active : ""}
                >
                  Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className={
                    location.pathname === "/admin" ? styles.active : ""
                  }
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightSec}>
            <ul className={styles.menu}>
              <li>
                <Link
                  to="/setting"
                  className={
                    location.pathname === "/setting" ? styles.active : ""
                  }
                >
                  <FeatherIcon icon="settings" size={18} />
                </Link>
              </li>
              <li>
                <button className={`btn text-danger p-0 border-0`}>
                  <FeatherIcon icon="log-out" size={18} strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
