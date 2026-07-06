import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const btn = (bg: string, color: string, border?: string) => ({
    background: bg, color, border: border || "none", borderRadius: 9999,
    padding: "0.75rem 2rem", fontSize: "1rem", fontWeight: 600, cursor: "pointer",
    transition: "opacity 0.2s"
  } as React.CSSProperties);

  return (
    <section id="hero" style={{ position: "relative", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.15 }}>
        <div style={{ position: "absolute", top: "25%", left: "25%", width: 384, height: 384, background: "hsl(var(--primary))", borderRadius: "50%", filter: "blur(80px)", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "33%", right: "25%", width: 288, height: 288, background: "#3b82f6", borderRadius: "50%", filter: "blur(80px)", opacity: 0.3 }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }} className="hero-content">
        <div style={{ flex: "1 1 480px", minWidth: 280 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ color: "hsl(var(--primary))", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Hello, I'm</p>
            <h1 style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 0.5rem", lineHeight: 1 }}>Saif Nbet</h1>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 600, color: "hsl(var(--muted-foreground))", margin: 0 }}>Mobile Engineer.</h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: "1.125rem", color: "hsl(var(--muted-foreground))", maxWidth: 600, lineHeight: 1.7, margin: "1.5rem 0" }}>
            Flutter & Dart specialist with 2+ years of experience shipping production apps to the Play Store, App Store, and AppGallery.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "2rem 0" }}>
            <button style={btn("hsl(var(--primary))", "hsl(var(--primary-foreground))")} onClick={() => scrollTo("projects")}>View Projects</button>
            <a href="/cv_saif.pdf" download="Saif_Nbet_CV.pdf" style={{ ...btn("transparent", "hsl(var(--foreground))", "1px solid hsl(var(--border))"), textDecoration: "none", display: "inline-block" }}>Download CV</a>
            <button style={btn("transparent", "hsl(var(--foreground))")} onClick={() => scrollTo("contact")}>Contact Me</button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              { href: "mailto:nbetsaif@gmail.com", Icon: FiMail, label: "Email" },
              { href: "tel:+21625250161", Icon: FiPhone, label: "Phone" },
              { href: "https://github.com/nbetsaif", Icon: FiGithub, label: "GitHub", external: true },
              { href: "https://www.linkedin.com/in/saif-nbet/", Icon: FiLinkedin, label: "LinkedIn", external: true },
            ].map(({ href, Icon, label, external }) => (
              <a key={label} href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={{ color: "hsl(var(--muted-foreground))", padding: "0.5rem", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ flex: "0 0 auto" }}>
          <img
            src="/profile.jpg"
            alt="Saif Nbet"
            style={{
              width: 300, 
              height: 300,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 30%",
              border: "px solid hsl(var(--primary) / 0.4)",
              boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.3)"
            }}
          />
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.hero-content{flex-direction:column-reverse;text-align:center}}`}</style>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} onClick={() => scrollTo("about")}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", color: "hsl(var(--muted-foreground))", cursor: "pointer", animation: "bounce 2s infinite" }}>
        <FiArrowDown size={24} />
      </motion.button>
      <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)} }`}</style>
    </section>
  );
}
