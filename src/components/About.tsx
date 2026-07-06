import { motion } from "framer-motion";

const card = { background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 16, padding: "1.5rem", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", textAlign: "center" as const };

export function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", background: "hsl(var(--secondary) / 0.3)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>01.</span> About Me
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="about-grid">
            <div style={{ color: "hsl(var(--muted-foreground))", fontSize: "1.0625rem", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "1rem" }}>Mobile Engineer with 2+ years of experience shipping 6 production apps to the Play Store, App Store, and AppGallery. </p>
              <p>I build with Flutter and Dart, applying clean architecture and MVVM patterns alongside state management solutions like BLoC, Provider, Riverpod, and GetX to deliver performant, polished user experiences. Based in Tunis, Tunisia — open to remote roles or relocation within Europe.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[["6","Apps Deployed"],["3","Stores"],["2+","Years Experience"]].map(([num, label], i) => (
                <div key={label} style={{ ...card, gridColumn: i === 2 ? "span 2" : undefined }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "hsl(var(--primary))", marginBottom: "0.5rem" }}>{num}</span>
                  <span style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
