import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Mobile Development",
    primary: true,
    skills: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Swift",
      "BLoC",
      "Cubit",
      "Provider",
      "Riverpod",
      "GetX",
      "MVVM",
      "MVC",
      "Figma",
      "Adobe XD",
    ],
  }, {
    title: "Backend & Cloud",
    skills: [
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Firebase Cloud Messaging",
      "Cloud Functions",
      "Node.js",
      "GraphQL",
      "Stripe",
      "REST APIs",
      "PostgreSQL",
      "MySQL"
    ],
  }, {
    title: "Programming Languages",
    skills: [
      "Dart",
      "Java",
      "Python",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS"
    ],
  }, {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "Android Studio",
      "VS Code",
      "Xcode",
      "Postman",
      "Jira",
      "Notion"
    ],
  },
  { title: "Methodology", skills: ["Agile/Scrum"] },
  { title: "Spoken Languages", skills: ["English", "French", "Arabic", "Spanish"] },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>04.</span> Skills
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 16, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: cat.primary ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}>{cat.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.skills.map(s => (
                  <span key={s} style={{
                    borderRadius: 9999, padding: "0.25rem 0.75rem", fontSize: "0.8125rem", fontWeight: 500,
                    background: cat.primary ? "hsl(var(--primary) / 0.15)" : "hsl(var(--secondary) / 0.6)",
                    color: cat.primary ? "hsl(var(--primary))" : "hsl(var(--secondary-foreground))"
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.skills-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
