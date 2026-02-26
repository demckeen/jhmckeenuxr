"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Writing", href: "/writing" },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="navflex">
          <Link
            href="/"
            className="logo-link"
          >
            <img className="logo-img" src="/images/kingofcarbs-icon.png" alt="icon size illustration playing card styled like king holding fries and corn-dog and letter H in the corners"></img>
          </Link>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "nav-open mobile-only" : "nav-close mobile-only"
            }`}
          >
            <div className="navbar-button">
              <button
              className="toggle"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="navbar-toggler-icon">
              </span>
            </button>
            </div>
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                >
                  <Link onClick={() => {setIsMobileMenuOpen(false);}} href={item.href} className="active nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-only">
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                >
                  <Link href={item.href} className="active nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}