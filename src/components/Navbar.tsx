import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navLinks = ["about", "experience", "projects", "skills", "contact"];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid hsl(var(--border) / 0.4)", backgroundColor: "hsl(var(--background) / 0.8)", backdropFilter: "blur(12px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ fontWeight: 700, fontSize: "1.25rem", color: "hsl(var(--primary))", cursor: "pointer" }}>SN.</div>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "hsl(var(--foreground))", cursor: "pointer", fontSize: "0.875rem", fontWeight: 500, textTransform: "capitalize", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}>{id}</button>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{ background: "none", border: "1px solid hsl(var(--border))", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "hsl(var(--foreground))" }}>
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button onClick={() => scrollTo("contact")}
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", border: "none", borderRadius: 9999, padding: "0.375rem 1rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer" }}>
            Hire Me
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", color: "hsl(var(--foreground))", display: "none" }}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ backgroundColor: "hsl(var(--background))", padding: "1rem 1.5rem", borderTop: "1px solid hsl(var(--border))", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "hsl(var(--foreground))", cursor: "pointer", fontSize: "1rem", fontWeight: 500, textAlign: "left", textTransform: "capitalize" }}>{id}</button>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}
