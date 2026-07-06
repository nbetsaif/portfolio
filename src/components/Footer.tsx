export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid hsl(var(--border))", padding: "2rem 1.5rem", background: "hsl(var(--background))" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <p style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.875rem", margin: 0 }}>
          &copy; {new Date().getFullYear()} Saif Nbet. All rights reserved.
        </p>
      </div>
    </footer>
  ); 
}
