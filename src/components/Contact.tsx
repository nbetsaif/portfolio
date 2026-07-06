import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.625rem 0.875rem", borderRadius: 8,
  border: "1px solid hsl(var(--border))", background: "hsl(var(--background))",
  color: "hsl(var(--foreground))", fontSize: "0.9rem", outline: "none",
  transition: "border-color 0.2s", boxSizing: "border-box",
};

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = `mailto:nbetsaif@gmail.com?subject=Contact from ${data.get("name")}&body=${data.get("message")}%0D%0A%0D%0AFrom: ${data.get("email")}`;
  };

  return (
    <section id="contact" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>06.</span> Get In Touch
          </h2>
          <div style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 24, padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="contact-grid">
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Let's build something.</h3>
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: "2rem" }}>Open to remote work or relocation in Europe. Whether you have a question or just want to say hi — I'll get back to you.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { href: "mailto:nbetsaif@gmail.com", Icon: FiMail, label: "Email", value: "nbetsaif@gmail.com" },
                  { href: "tel:+21625250161", Icon: FiPhone, label: "Phone", value: "+216 25250161" },
                ].map(({ href, Icon, label, value }) => (
                  <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "hsl(var(--muted-foreground))", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                    <div style={{ width: 44, height: 44, background: "hsl(var(--secondary))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon size={18} /></div>
                    <div><div style={{ fontSize: "0.75rem", fontWeight: 500 }}>{label}</div><div style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>{value}</div></div>
                  </a>
                ))}
                <div style={{ display: "flex", gap: "0.75rem", paddingTop: "0.5rem" }}>
                  <a href="https://github.com/nbetsaif" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: "hsl(var(--secondary))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "hsl(var(--muted-foreground))", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--primary) / 0.2)"; e.currentTarget.style.color = "hsl(var(--primary))"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "hsl(var(--secondary))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}><FiGithub size={18} /></a>
                  <a href="https://www.linkedin.com/in/saif-nbet/" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: "hsl(var(--secondary))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "hsl(var(--muted-foreground))", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--primary) / 0.2)"; e.currentTarget.style.color = "hsl(var(--primary))"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "hsl(var(--secondary))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}><FiLinkedin size={18} /></a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[{ id: "name", label: "Name", type: "text", placeholder: "John Doe" }, { id: "email", label: "Email", type: "email", placeholder: "john@example.com" }].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "0.375rem" }}>{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} required placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                    onBlur={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")} />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{ fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "0.375rem" }}>Message</label>
                <textarea id="message" name="message" required placeholder="Hello Saif..." rows={5} style={{ ...inputStyle, resize: "none", fontFamily: "inherit" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                  onBlur={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")} />
              </div>
              <button type="submit" style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", border: "none", borderRadius: 12, height: 48, fontSize: "1rem", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:640px){.contact-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
