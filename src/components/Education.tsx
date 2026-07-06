import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" style={{ padding: "5rem 1.5rem", background: "hsl(var(--secondary) / 0.3)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>05.</span> Education
          </h2>
          <div style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 16, padding: "2rem", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Engineering Degree in Computer Science</h3>
              <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", background: "hsl(var(--primary) / 0.1)", padding: "0.25rem 1rem", borderRadius: 9999, fontSize: "0.875rem", fontWeight: 500 }}>Sep 2019 – Sep 2024</span>
            </div>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "hsl(var(--muted-foreground))", margin: "0 0 0.25rem" }}>National Institute of Applied Sciences and Technologies (INSAT)</p>
            <p style={{ color: "hsl(var(--muted-foreground))", margin: 0, fontSize: "0.875rem" }}>Tunis, Tunisia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
