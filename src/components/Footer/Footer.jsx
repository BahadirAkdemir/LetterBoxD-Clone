import React from "react";
import "primeicons/primeicons.css";

const Footer = () => {
  return (
    <footer
      id="page-footer"
      className="mx-auto max-w-screen-lg flex flex-col text-center py-10"
    >
      <div className="text-footer-about font-bold flex flex-wrap justify-between px-9">
        <nav>
          <ul className="flex flex-row space-x-4 text-sm pr-10">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Pro</a>
            </li>
            <li>
              <a href="/">Apps</a>
            </li>
            <li>
              <a href="/">Podcast</a>
            </li>
            <li>
              <a href="/">Year in Review</a>
            </li>
            <li>
              <a href="/">Gift Guide</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={
            "flex flex-wrap justify-between align-middle space-x-4 text-xl text-footer-copywrite brightness-75"
          }
        >
          <div className={"listitem -icononly"}>
            <a href="/" className={"pi pi-twitter"}></a>
          </div>
          <div className={"listitem -icononly"}>
            <a href="/" className={"pi pi-facebook"}></a>
          </div>
          <div className={"listitem -icononly"}>
            <a href="/" className={"pi pi-instagram"}></a>
          </div>
          <div className={"listitem -icononly"}>
            <a href="/" className={"pi pi-youtube"}></a>
          </div>
        </div>
        <div
          className={
            "flex flex-wrap justify-between align-middle container mx-auto space-y-4 font-thin text-xs"
          }
        >
          <p className="copyright">
            © Letterboxd Limited. Made by{" "}
            <a href="/crew/" className="mute">
              fans
            </a>{" "}
            in Aotearoa New Zealand.
            <span className="nobr">
              <a
                href="https://letterboxd.com/about/film-data/"
                className="mute"
              >
                Film data
              </a>{" "}
              from{" "}
              <a href="https://www.themoviedb.org" className="mute">
                TMDb
              </a>
              .
              <a
                href="#"
                className="mute mobile-site-switch"
                data-use-mobile-site="yes"
              >
                Mobile&nbsp;site
              </a>
              .
            </span>
            <span className="recap" style={{ display: "none" }}>
              <br />
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="mute"
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="mute"
              >
                terms of service
              </a>
              &nbsp;apply.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
