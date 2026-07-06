import { motion } from "framer-motion";

const experiences = [
  { role: "Mobile Engineer", company: "Avidea", location: "Tunis, Tunisia", period: "Nov 2024 – Present",
    description: "Developed and maintained Flutter applications for Avidea and its enterprise clients. Took ownership of DigiExpert, DigiConstat, CTAMA Claims, and E-Constat FTUSA from development to production, delivering cross-platform applications published on Google Play Store, the Apple App Store, and Huawei AppGallery",
    stack: ["Flutter","Dart","Firebase Cloud Messaging (FCM)","Firebase Crashlytics","Cubit","BLoC","Provider","MVVM","Git","Jenkins","Jira","Postman"] },
  {
  role: "Mobile Engineer",
  company: "Think-it",
  location: "Tunis, Tunisia",
  period: "Aug 2024 – Nov 2024",
  description:
    "Developed and enhanced Hypha Wallet, a blockchain-based DAO mobile application built with Flutter. Designed and implemented proposal creation, management, and decentralized voting features using GraphQL APIs. Collaborated in an Agile environment, contributed to CI/CD workflows, and delivered production releases on Google Play and the Apple App Store.",
  stack: [
    "Flutter",
    "Dart",
    "GraphQL",
    "Firebase",
    "BLoC",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Blockchain"
  ]
},
  {
  role: "Mobile Developer Intern",
  company: "Think-it",
  location: "Tunis, Tunisia",
  period: "Feb 2024 – Aug 2024",
  description:
    "Developed and enhanced Swarm, an internal Flutter application for employee engagement and office management. Implemented location-based features with Mapbox, push notifications using Firebase Cloud Messaging, and integrated REST APIs. Collaborated in an Agile team, contributing to scalable and maintainable mobile solutions while improving the employee experience.",
  stack: [
    "Flutter",
    "Dart",
    "Firebase",
    "Firebase Cloud Messaging",
    "Provider",
    "Mapbox",
    "REST APIs",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Postman",
    "Notion"
  ]
},
{
  role: "Mobile Developer",
  company: "BoutiqGo",
  location: "Tunis, Tunisia",
  period: "Sep 2023 – Feb 2024",
  description:
    "Contributed to the development and maintenance of BoutiqGo, a cross-platform e-commerce application built with Flutter. Improved application performance by approximately 30% through feature optimization and code refactoring, enhancing stability, scalability, and overall user experience.",
  stack: [
    "Flutter",
    "Dart",
    "GetX",
    "Firebase",
    "REST APIs",
    "Git"
  ]
},

];

const pill = { background: "hsl(var(--secondary) / 0.6)", color: "hsl(var(--secondary-foreground))", borderRadius: 9999, padding: "0.2rem 0.75rem", fontSize: "0.75rem", fontWeight: 500 };

export function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>02.</span> Experience
        </motion.h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "2rem", alignItems: "start" }} className="exp-grid">
              <div style={{ textAlign: "right" }} className="exp-meta">
                <span style={{ color: "hsl(var(--primary))", fontWeight: 500, fontSize: "0.875rem", display: "block" }}>{exp.period}</span>
                <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.8rem", display: "block" }}>{exp.location}</span>
              </div>
              <div style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 16, padding: "1.5rem", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem" }}>{exp.role}</h3>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(var(--primary))", marginBottom: "1rem" }}>{exp.company}</div>
                <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: "1.25rem" }}>{exp.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.stack.map(t => <span key={t} style={pill}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr !important}.exp-meta{text-align:left !important}}`}</style>
    </section>
  );
}
