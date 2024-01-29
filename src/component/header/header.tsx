import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function Header(checkPage?: any) {
  const [top, setTop] = useState(true);

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", checkTop);
  }, []);

  function checkTop() {
    if (document?.documentElement?.scrollTop < 20) {
      return setTop(true);
    }
    return setTop(false);
  }
  return (
    <div>
      <div hidden={!sidebar}>
        <nav id="mySidenav" className={styles.sidenav}>
          <a
            type="button"
            className={styles.closebtn}
            onClick={() => {
              setSidebar(false);
            }}
          >
            &times;
          </a>
          <a href="#">Service </a>
          <a href="#">Insights</a>
          <a href="#">Our Social Impact</a>
          <a href="#">Multishore</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
      <div
        style={{ backgroundColor: top ? "rgba(255, 253, 253, 0.05" : "white" }}
        className={`${styles.header} d-flex justify-content-between`}
      >
        <div>
          <img
            className={styles.logo}
            src={top || !checkPage ? "/Logo.png" : "/Sticky-Logo.png"}
            alt=""
          />
        </div>
        <div className={`${styles.headerRight}`}>
          <img className={styles.linkdinBtn} src="/LinkedIn_icon_circle.png" />
          <button
            className={styles.button}
            onClick={(e) => {
              window.location.href = "/contact-us";
            }}
          >
            Get in Touch
          </button>
          <img
            src="/Menu_blue.svg"
            className="btn"
            onClick={() => {
              setSidebar(true);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
