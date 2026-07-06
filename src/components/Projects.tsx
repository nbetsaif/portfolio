import { motion } from "framer-motion";
import { FiExternalLink, FiSmartphone } from "react-icons/fi";

const projects = [
    {
    title: "DigiExpert",
    context: "Avidea",
    description:
      "Enterprise mobile application for automotive insurance experts to manage claims and field missions. Developed features for real-time mission tracking, instant messaging, secure document exchange, push notifications, offline capabilities, and seamless integration with enterprise backend services.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Cloud Messaging",
      "Firebase Crashlytics",
      "REST APIs",
      "Provider",
      "MVVM",
      "Git",
      "Jenkins",
      "Jira",
      "Figma",
      "Postman"
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.avidea.digiconstat.digiexpert"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/tn/app/digiexpert/id6478974598"
      },
      {
        label: "AppGallery",
        url: "https://appgallery.huawei.com/app/C104091313"
      },
    ],
    image: "/digiexpert.png",
  },
  {
    title: "DigiConstat",
    context: "Avidea",
    description:
      "Digital accident reporting application that simplifies the completion and submission of vehicle accident reports. Developed features for guided report creation, interactive accident sketching, digital signatures, PDF generation, secure document sharing, and seamless integration with insurance backend services.",
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Firebase",
      "Firebase Cloud Messaging",
      "Firebase Crashlytics",
      "REST APIs",
      "Git",
      "Jenkins",
      "Jira",
      "Figma",
      "Postman"
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.avidea.digitconstat"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/tn/app/digiconstat/id1662349577"
      },
      {
        label: "AppGallery",
        url: "https://appgallery.huawei.com/app/C104091177"
      }
    ],
    image: "/DigiConstat.png",
  },

  {
    title: "E-Constat FTUSA",
    context: "Avidea",
    description:
      "Digital vehicle accident reporting application enabling policyholders to declare insurance claims directly from their smartphones. Implemented OTP authentication, insurance API integration, QR code-based claim sharing, interactive accident sketching, geolocation, voice notes, digital signatures, PDF generation with authenticity verification, and secure photo uploads for a seamless end-to-end claims experience.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Cloud Messaging",
      "Firebase Crashlytics",
      "REST APIs",
      "Bloc",
      "Git",
      "Jenkins",
      "Jira",
      "Figma",
      "Postman",
      "Google Maps",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.ftusa.econstat&hl=en"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/tn/app/e-constat-ftusa/id6748530907"
      },
      {
        label: "AppGallery",
        url: "https://appgallery.huawei.com/app/C114932331"
      }
    ],
    image: "/econstat.png",
  },
  {
    title: "CTAMA Claims",
    context: "Avidea",
    description:
      "Customer-facing insurance claims application enabling policyholders to monitor the entire lifecycle of their vehicle claims in real time. Developed features for claim tracking, secure document and photo uploads, push notifications, and seamless communication with insurers, automotive experts, and repair centers through integrated enterprise services.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Cloud Messaging",
      "Firebase Crashlytics",
      "REST APIs",
      "Bloc",
      "Git",
      "Jenkins",
      "Jira",
      "Figma",
      "Postman",
      "Google Maps",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.ctama.digiclaim&hl=en"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/ctama-claims/id6756491309"
      }
    ],
    image: "/ctama.png",
  },


  {
    title: "Hypha Wallet",
    context: "Think-it",
    description:
      "Blockchain-based DAO mobile application enabling users to securely manage decentralized identities, participate in governance, and interact with the Hypha ecosystem. Implemented proposal creation, proposal management, and decentralized voting features using GraphQL APIs, contributing to production releases on Google Play and the Apple App Store.",
    stack: [
      "Flutter",
      "Dart",
      "GraphQL",
      "Apollo Client",
      "BLoC",
      "Firebase",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Blockchain",
      "DAO"
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=earth.hypha.wallet.hypha_wallet"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/tn/app/hypha-wallet/id1659926348"
      }
    ],
    image: "/hypha.png",
  },
  {
    title: "C1EURO", context: "Freelance", description: "Cross-platform marketplace application built with Flutter and Firebase. Designed a serverless backend with Firebase Functions and Firestore, integrated Stripe, Apple Pay, Google Pay, Google & Apple authentication, Google Maps APIs, and YouTube Shorts embedding for product promotion.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Functions",
      "Provider",
      "Stripe",
      "Apple Pay",
      "Google Pay",
      "Google Sign-In",
      "Sign in with Apple",
      "Google Maps API",
      "YouTube Player"
    ],
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.c1euro.user" }, { label: "App Store", url: "https://apps.apple.com/fr/app/c1euro/id6470069252" }],
    image: "public/c1euro.jpg",
  },
  {
    title: "C1EURO PRO", context: "Freelance",
    description: "Cross-platform merchant application built with Flutter and Firebase. Implemented product and catalog management, team administration, Stripe payment links, digital wallet, advanced search, and secure authentication using Google and Apple Sign-In.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Functions",
      "Provider",
      "Stripe",
      "Google Sign-In",
      "Sign in with Apple",
    ],
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.c1euro.pro" }, { label: "App Store", url: "https://apps.apple.com/fr/app/c1euro-pro/id6470123803" }],
    image: "/C1EUROPRO.png",

  },
  {
    title: "C1EURO Admin Portal",
    context: "Freelance",
    description:
      "Flutter Web administration portal for managing the entire C1EURO ecosystem. Developed dashboards for user, merchant, product, catalog, transaction, and content management with role-based access control, real-time Firestore synchronization, and a scalable Firebase-powered backend.",
    stack: [
      "Flutter Web",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Functions",
      "Provider",
      "Role-Based Access Control",
      "Git"
    ],
    links: [],
    image: "/c1euro-admin.png",
  },
  {
    title: "NourishNow",
    context: "Freelance / CodeCanyon",
    description:
      "Multi-restaurant food delivery platform enabling users to browse restaurants, order food, and track deliveries in real time. Built a scalable Flutter application with Firebase backend, supporting authentication, push notifications, payments, and multi-vendor architecture for production deployment.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Stripe",
      "Google Sign-In",
      "GETX",
      "Git",
      "CSS",
      "HTML",
      "Hugo",
      "TypeScript",
      "Photoshop",
      "Figma",
    ],
    links: [
      {
        label: "CodeCanyon",
        url: "https://codecanyon.net/item/nourishnow-full-android-ios-multirestaurants-food-delivery-app-flutter-37-support/45563097"
      }
    ],
    image: "/nourishnow.png",
  },
{
    title: "Ducas",
    context: "Freelance",
    description:
      "Ride management application enabling ride invitations, forwarding, and real-time status tracking between professional drivers. Implemented interactive map-based ride details, availability management, and coverage-area selection, along with ride history, performance statistics, and wallet balance tracking.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Riverpod",
      "Postman",
      "Figma"
    ],
    links: [],
    image : "/ducas.png",    
  },
  {
    title: "Swarm",
    context: "Think-it",
    description:
      "Internal enterprise platform designed to streamline employee engagement and office management. Developed features including location-based services with Mapbox, real-time push notifications, office resource management, authentication, and REST API integrations, while contributing to the planning of an AI-powered knowledge assistant leveraging Notion and vector embeddings.",
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
    ],
    links: [],
    image: "/swarm.png",
  },

  {
  title: "BoutiqGo App",
  context: "BoutiqGo",
  description:
    "Cross-platform e-commerce application built with Flutter, enabling users to discover local stores, browse products, manage shopping carts, and place orders through a fast and intuitive mobile experience. Contributed to feature development, performance optimization, and application maintenance, improving overall responsiveness by approximately 30%.",
  stack: [
    "Flutter",
    "Dart",
    "GetX",
    "Firebase",
    "REST APIs",
    "Git"
  ],
  links: [],
  image: "/boutiqgo.png",
  
},
{
  title: "Avidea ERP",
  context: "Avidea",
  description:
    "Internal enterprise mobile application built with Flutter to streamline employee management and HR operations. The app enables employees to log working hours, request leave, access administrative documents, and submit HR-related requests through a secure and intuitive mobile interface.",
  stack: [
    "Flutter",
    "Dart",
    "REST APIs",
    "Spring Boot",
    "Provider",
    "Git"
  ],
  links: [],
  image: "/avidea-erp.png", 
},
{
    title: "Umah",
    context: "Junior Entreprise INSAT",
    description:
      "Student services mobile application provided to an external client through Junior Entreprise INSAT. Served as Project Manager and Mobile Developer, building service discovery, provider profiles, ratings, and an onboarding flow focused on accessibility and user engagement.",
    stack: [
      "Flutter",
      "Dart",
      "GetX",
      "Figma",
      "NestJs"
    ],
    links: [],
    image : "/umah.png",    
  }
];

const techPill = { border: "1px solid hsl(var(--border) / 0.6)", color: "hsl(var(--muted-foreground))", borderRadius: 4, padding: "0.15rem 0.5rem", fontSize: "0.7rem", fontFamily: "monospace" };

export function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", background: "hsl(var(--secondary) / 0.3)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "hsl(var(--primary))", fontFamily: "monospace", fontSize: "1.25rem" }}>03.</span> Featured Projects
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
              <div
                style={{
                  height: 200,
                  overflow: "hidden",
                  borderBottom: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, margin: 0 }}>{p.title}</h3>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {p.links.map((l, j) => (
                      <a key={j} href={l.url} title={l.label} target="_blank" rel="noopener noreferrer" style={{ color: "hsl(var(--muted-foreground))", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
                        onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}><FiExternalLink size={18} /></a>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "hsl(var(--primary))", marginBottom: "0.75rem" }}>{p.context}</div>
                <p style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stack.map(t => <span key={t} style={techPill}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.projects-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
