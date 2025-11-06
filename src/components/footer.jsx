import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";

export default function Footer() {
  return (
    <footer
      className="footer w-100 d-flex flex-column align-items-center"
      style={{ backgroundColor: "#23242a" }}
    >
      <div className="mb-3">
        <a
          href="https://www.facebook.com/munamiicupcakes/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Munamii Cupcakes on Facebook (opens in new tab)"
          className="btn"
        >
          <img src={facebookIcon} alt="Facebook logo" style={{ width: 48 }} />
        </a>

        <a
          href="https://www.instagram.com/munamii.cakery/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Munamii Cupcakes on Instagram (opens in new tab)"
          className="btn"
        >
          <img src={instagramIcon} style={{ width: 48 }} alt="Instagram logo" />
        </a>
      </div>

      <div
        className="text-center p-3 mb-2"
        style={{ backgroundColor: "#23242a" }}
      >
        © 2025 Copyright: Martin
        {/* <a className="text-white" href="https://appfinningar.se/">
          Appfinningar.se
        </a> */}
      </div>
    </footer>
  );
}
