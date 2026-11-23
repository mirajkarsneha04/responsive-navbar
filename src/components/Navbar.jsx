import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

// Must match the desktop breakpoint in index.css
const DESKTOP_QUERY = "(min-width: 1024px)";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Close the menu automatically when the screen grows to desktop
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Escape closes the menu + lock page scroll while the menu is open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__bar">
        <a href="#home" className="logo">
          Logo
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-menu"
          className={`menu ${open ? "menu--open" : ""}`}
          aria-label="Primary"
        >
          <div className="menu__head">
            <a href="#home" className="logo logo--light" onClick={close}>
              Logo
            </a>
            <button
              type="button"
              className="menu__close"
              aria-label="Close menu"
              onClick={close}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="menu__links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#create-account" className="btn" onClick={close}>
            Create Account
          </a>
        </nav>
      </div>
    </header>
  );
}
