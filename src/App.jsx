import { useState, useEffect, useRef } from "react";
import {
  Code2, Cpu, Smartphone, Globe, Database, Wrench,
  GraduationCap, MapPin, Mail, Phone,
  Trophy, Award, Medal, Star,
  BookOpen, Bot, ShieldCheck, Leaf, Building2, ExternalLink,
  GitBranch, Send, User, Link2
} from "lucide-react";

const theme = {
  bg: "#0a0a0f",
  bgCard: "#12121a",
  bgCardHover: "#1a1a26",
  border: "#1e1e2e",
  accent: "#6c63ff",
  accentAlt: "#00d4ff",
  accentGreen: "#00ffaa",
  text: "#e2e8f0",
  textMuted: "#8892a4",
  textDim: "#4a5568",
};

const styles = {
  app: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    background: theme.bg,
    color: theme.text,
    minHeight: "100vh",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "rgba(10,10,15,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${theme.border}`,
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
  },
  navLogo: {
    fontWeight: 800,
    fontSize: "1.25rem",
    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentAlt})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: theme.textMuted,
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.2s",
  },
  section: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "5rem 2rem",
  },
  sectionTitle: {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: 800,
    marginBottom: "0.5rem",
    position: "relative",
    display: "inline-block",
  },
  sectionTitleAccent: {
    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentAlt})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sectionDivider: {
    height: "3px",
    width: "60px",
    background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentAlt})`,
    borderRadius: "2px",
    marginBottom: "3rem",
    marginTop: "0.5rem",
  },
  card: {
    background: theme.bgCard,
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    padding: "1.75rem",
    transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  tag: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 600,
    background: "rgba(108,99,255,0.15)",
    color: theme.accent,
    border: `1px solid rgba(108,99,255,0.3)`,
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "10px",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    transition: "all 0.2s",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    label: "AI & ML",
    color: theme.accentGreen,
    Icon: Cpu,
    skills: ["TensorFlow", "PyTorch", "Hugging Face", "RAG", "Deep Learning (CNN/RNN)", "NLP", "Computer Vision", "OpenCV", "YOLO", "Object Detection", "Image Segmentation", "Face Recognition", "Multi-Agent Systems", "LangGraph", "AutoGen", "Agent Orchestration", "Tool Use", "LLM Pipelines"],
  },
  {
    label: "Mobile",
    color: theme.accentAlt,
    Icon: Smartphone,
    skills: ["Flutter", "Dart", "React Native", "Kotlin", "Jetpack Compose", "Firebase", "Android"],
  },
  {
    label: "Web & Frameworks",
    color: theme.accent,
    Icon: Globe,
    skills: ["React", "Next.js", "Node.js", "ASP.NET", "Django", "FastAPI", "GraphQL", "Tailwind CSS"],
  },
  {
    label: "Languages",
    color: "#f59e0b",
    Icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "Dart", "C++", "C"],
  },
  {
    label: "Databases",
    color: "#ec4899",
    Icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQLite", "Redis", "MongoDB", "Supabase"],
  },
  {
    label: "Tools & Ops",
    color: "#10b981",
    Icon: Wrench,
    skills: ["Docker", "GitHub Actions", "AWS", "Azure", "Vercel", "n8n", "RPA", "Postman", "Git", "CI/CD"],
  },
];

const experiences = [
  {
    role: "Lecturer",
    company: "University of Technology Sydney",
    period: "Feb 2025 – Present",
    type: "Academic",
    color: theme.accentAlt,
    points: [
      "Deliver lectures & hands-on labs for Fundamentals of Software Development",
      "Mentor 100+ students annually with 90% positive teaching feedback",
      "Conduct research on AI applications in software engineering",
      "Published findings at UTS AI Showcase 2024/2025",
    ],
  },
  {
    role: "Software Engineer",
    company: "StudyNet PTY Limited",
    period: "Mar 2024 – Present",
    type: "Full-time",
    color: theme.accent,
    points: [
      "Architected StudyNet.io with .NET backend + React.js frontend",
      "Built cross-platform Flutter mobile app (App Store & Google Play)",
      "Designed StudyNet.ai Agent using RAG & AI search technologies",
      "Engineered automation with FastAPI & n8n, cutting operational overhead significantly",
    ],
  },
  {
    role: "Assistant Manager / Software Engineer",
    company: "Giga Tech Limited (Beximco Group)",
    period: "Mar 2021 – Jul 2023",
    type: "Full-time",
    color: "#f59e0b",
    points: [
      "Built cross-platform EKYC app for Prime Bank, Meghna Bank & Basic Bank (+40% user acquisition)",
      "Real-time EKYC microservice monitoring system (−35% downtime)",
      "Face Liveness SDK integrated into 5+ banking apps (98% fraud prevention accuracy)",
      "Led a team of 4 engineers; automated workflows saving 200+ hours/month",
    ],
  },
  {
    role: "Software Engineer",
    company: "ACI Limited",
    period: "Mar 2019 – Mar 2021",
    type: "Full-time",
    color: theme.accentGreen,
    points: [
      "Built Fosholi & 3 Android apps with 100,000+ downloads — Bangladesh's top agriculture apps",
      "Developed Fosholi.com marketplace across all 64 districts (+25% sales)",
      "Lead generation microsites increasing inquiries by 15%",
      "Authored technical docs securing $500K+ in client projects",
    ],
  },
];

const education = [
  {
    degree: "M.Sc. in Artificial Intelligence",
    school: "University of Technology Sydney (UTS)",
    period: "2023 – 2025",
    gpa: "CGPA 6.5 / 7.0",
    color: theme.accent,
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "American International University – Bangladesh (AIUB)",
    period: "2015 – 2018",
    gpa: "GPA 3.74 / 4.0",
    color: theme.accentAlt,
  },
];

const projects = [
  {
    name: "StudyNet.io",
    Icon: BookOpen,
    desc: "Full-stack education platform connecting students, counselors, and agents. Built with .NET backend and React.js frontend to streamline course discovery and university applications across Australia.",
    tags: [".NET", "React.js", "Full-Stack", "EdTech"],
    color: theme.accent,
  },
  {
    name: "StudyNet Mobile App",
    Icon: Smartphone,
    desc: "Cross-platform mobile application built with Flutter, deployed on both App Store and Google Play. Served as the primary user acquisition and engagement tool for StudyNet.",
    tags: ["Flutter", "iOS", "Android", "Cross-Platform"],
    color: theme.accentAlt,
  },
  {
    name: "StudyNet.ai Agent",
    Icon: Bot,
    desc: "AI-powered education assistant using Retrieval-Augmented Generation (RAG) and AI search technologies. Delivers personalized study suggestions for students targeting Australian universities.",
    tags: ["RAG", "AI", "NLP", "FastAPI"],
    color: theme.accentGreen,
  },
  {
    name: "EKYC Banking Platform",
    Icon: Building2,
    desc: "Cross-platform EKYC mobile app for Prime Bank, Meghna Bank, and Basic Bank. Achieved 40% increase in user acquisition with real-time monitoring cutting downtime by 35%.",
    tags: ["Mobile", "Fintech", "Flutter", "Microservices"],
    color: "#f59e0b",
  },
  {
    name: "Face Liveness SDK",
    Icon: ShieldCheck,
    desc: "Biometric fraud prevention SDK integrated into 5+ banking applications. Achieved 98% accuracy in distinguishing live users from spoofing attempts.",
    tags: ["Computer Vision", "SDK", "Biometrics", "Security"],
    color: "#ec4899",
  },
  {
    name: "Fosholi Agriculture Platform",
    Icon: Leaf,
    desc: "Android apps (100,000+ downloads) and Fosholi.com marketplace covering all 64 districts of Bangladesh. Recognized as Bangladesh's top agriculture apps, boosting farmer sales by 25%.",
    tags: ["Android", "Kotlin", "Marketplace", "AgriTech"],
    color: "#10b981",
  },
];

const achievements = [
  { Icon: Trophy, title: "Dean's Award for Outstanding Results", org: "UTS", year: "2025", color: "#f59e0b" },
  { Icon: Award, title: "Fintech Impact Award for Banking Solution", org: "Team Achievement", year: "2021", color: theme.accent },
  { Icon: Medal, title: "BASIS National ICT Award", org: "Team Achievement", year: "2019", color: theme.accentAlt },
  { Icon: Star, title: "Daily Star Awards for Excellent Results", org: "Bangladesh", year: "2014", color: theme.accentGreen },
];

const events = [
  "UTS AI Showcase 2024 & 2025",
  "Kibana Data Analyst Virtual Training – 2020",
  "AIUB CS Fest – 2016 & 2017",
  "Google Android App Training – 2016",
  "Youth of Bangladesh Program – 2012",
];

// ─── Components ───────────────────────────────────────────────────────────────

function Nav({ activeSection }) {
  const links = ["About", "Experience", "Projects", "Achievements", "Contact"];
  const scroll = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav style={styles.nav}>
      <div style={styles.navLogo} onClick={() => scroll("about")}>TIR</div>
      <ul style={styles.navLinks}>
        {links.map((l) => (
          <li key={l}>
            <span
              style={{
                ...styles.navLink,
                color: activeSection === l.toLowerCase() ? theme.accent : theme.textMuted,
              }}
              onClick={() => scroll(l)}
            >
              {l}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const stats = [
  { target: 7, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "K+", label: "App Downloads" },
  { target: 100, suffix: "+", label: "Students Mentored" },
];

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatItem({ target, suffix, label, started, delay }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);
  const count = useCountUp(target, 1600, active);
  return (
    <div style={{
      textAlign: "center",
      padding: "1.25rem 1.75rem",
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${theme.border}`,
      borderRadius: "14px",
      minWidth: "130px",
      transition: "border-color 0.3s",
    }}>
      <div style={{
        fontSize: "2.25rem",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        background: `linear-gradient(135deg, #fff 30%, ${theme.accentAlt})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1.1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.78rem", color: theme.textMuted, marginTop: "0.4rem", fontWeight: 500, letterSpacing: "0.03em" }}>
        {label}
      </div>
    </div>
  );
}

function AnimatedStats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
        marginTop: "4rem", borderTop: `1px solid ${theme.border}`, paddingTop: "2.5rem",
      }}
    >
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} started={started} delay={i * 120} />
      ))}
    </div>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const titles = ["Full-Stack Developer", "AI Engineer", "Lecturer @ UTS", "Mobile App Builder"];
  const [tIdx, setTIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[tIdx];
    let timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 60);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setTIdx((tIdx + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, tIdx]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "600px",
        background: `radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ textAlign: "center", padding: "2rem", zIndex: 1, maxWidth: "900px" }}>

        {/* Name */}
        <h1 style={{
          fontSize: "clamp(3rem, 9vw, 6.5rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          margin: "0 0 1.25rem",
          letterSpacing: "-0.03em",
          background: `linear-gradient(135deg, #ffffff 40%, ${theme.accentAlt} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Tausif Islam Rafi
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          fontWeight: 400,
          color: theme.textMuted,
          maxWidth: "560px",
          margin: "0 auto 1.5rem",
          lineHeight: 1.6,
        }}>
          Building intelligent systems that matter —{" "}
          <span style={{ color: theme.text, fontWeight: 500 }}>AI engineer, full-stack developer</span>, and lecturer at the University of Technology Sydney.
        </p>

        {/* Animated role pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
          <div style={{ height: "1px", width: "40px", background: theme.border }} />
          <span style={{ fontSize: "0.95rem", fontWeight: 600, color: theme.accent, minWidth: "220px", textAlign: "center" }}>
            {typed}<span style={{ animation: "blink 1s infinite" }}>|</span>
          </span>
          <div style={{ height: "1px", width: "40px", background: theme.border }} />
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:tausifrafee@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              ...styles.btn,
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentAlt})`,
              color: "#fff",
              boxShadow: `0 4px 20px rgba(108,99,255,0.4)`,
            }}
          >
            <Send size={16} /> Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/tausif-islam-rafi"
            target="_blank"
            rel="noreferrer"
            style={{
              ...styles.btn,
              background: "transparent",
              color: theme.text,
              border: `1px solid ${theme.border}`,
            }}
          >
            <Link2 size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/tausifrafee"
            target="_blank"
            rel="noreferrer"
            style={{
              ...styles.btn,
              background: "transparent",
              color: theme.text,
              border: `1px solid ${theme.border}`,
            }}
          >
            <GitBranch size={16} /> GitHub
          </a>
        </div>

        {/* Stats */}
        <AnimatedStats />
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}

function SkillsSection() {
  return (
    <section style={{ background: `${theme.bgCard}`, borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
      <div style={{ ...styles.section, paddingTop: "4rem", paddingBottom: "4rem" }}>
        <h2 style={styles.sectionTitle}>
          Tech <span style={styles.sectionTitleAccent}>Stack</span>
        </h2>
        <div style={styles.sectionDivider} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {skillGroups.map((g) => (
            <div
              key={g.label}
              style={{
                ...styles.card,
                borderLeft: `3px solid ${g.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 700, marginBottom: "1rem", color: g.color, fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                <g.Icon size={16} strokeWidth={2} />
                {g.label.toUpperCase()}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {g.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "0.3rem 0.7rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      background: `${g.color}18`,
                      color: g.color,
                      border: `1px solid ${g.color}40`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.sectionTitleAccent}>Experience</span> & Education
      </h2>
      <div style={styles.sectionDivider} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        {/* Experience */}
        <div>
          <h3 style={{ color: theme.textMuted, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
            WORK HISTORY
          </h3>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: "11px", top: 0, bottom: 0,
              width: "2px", background: theme.border,
            }} />
            {experiences.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{
                  width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0,
                  background: e.color, display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 1, marginTop: "0.15rem", boxShadow: `0 0 12px ${e.color}60`,
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                </div>
                <div style={{ ...styles.card, flex: 1, padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1rem" }}>{e.role}</div>
                      <div style={{ color: e.color, fontSize: "0.85rem", fontWeight: 600 }}>{e.company}</div>
                    </div>
                    <span style={{
                      ...styles.tag,
                      fontSize: "0.7rem",
                      background: `${e.color}18`,
                      color: e.color,
                      border: `1px solid ${e.color}40`,
                    }}>
                      {e.period}
                    </span>
                  </div>
                  <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.1rem", color: theme.textMuted, fontSize: "0.82rem", lineHeight: 1.65 }}>
                    {e.points.map((p, j) => <li key={j} style={{ marginBottom: "0.3rem" }}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 style={{ color: theme.textMuted, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
            EDUCATION
          </h3>
          {education.map((e, i) => (
            <div key={i} style={{
              ...styles.card,
              marginBottom: "1.25rem",
              borderLeft: `3px solid ${e.color}`,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "120px", height: "120px",
                background: `radial-gradient(circle at top right, ${e.color}12, transparent 70%)`,
              }} />
              <div style={{ fontSize: "0.75rem", color: e.color, fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                {e.period}
              </div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.4rem" }}>{e.degree}</div>
              <div style={{ color: theme.textMuted, fontSize: "0.875rem", marginBottom: "0.75rem" }}>{e.school}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: `${e.color}18`, border: `1px solid ${e.color}40`,
                color: e.color, borderRadius: "8px", padding: "0.35rem 0.85rem",
                fontSize: "0.82rem", fontWeight: 700,
              }}>
                <GraduationCap size={14} strokeWidth={2} /> {e.gpa}
              </div>
            </div>
          ))}

          {/* Quick facts */}
          <div style={{ ...styles.card, marginTop: "1.5rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.85rem", color: theme.textMuted, letterSpacing: "0.05em" }}>
              AT A GLANCE
            </div>
            {[
              { Icon: MapPin, val: "Sydney, NSW, Australia" },
              { Icon: Mail, val: "tausifrafee@gmail.com" },
              { Icon: Link2, val: "linkedin.com/in/tausif-islam-rafi" },
              { Icon: GitBranch, val: "github.com/tausifrafee" },
              { Icon: Phone, val: "+61 0468 739 605" },
            ].map(({ Icon: I, val }) => (
              <div key={val} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem", fontSize: "0.875rem", color: theme.textMuted, alignItems: "center" }}>
                <I size={15} color={theme.accent} strokeWidth={1.75} style={{ flexShrink: 0 }} />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ background: theme.bgCard, borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Featured <span style={styles.sectionTitleAccent}>Projects</span>
        </h2>
        <div style={styles.sectionDivider} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...styles.card,
                transform: hovered === i ? "translateY(-4px)" : "none",
                boxShadow: hovered === i ? `0 12px 40px ${p.color}20` : "none",
                borderColor: hovered === i ? `${p.color}50` : theme.border,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "100px", height: "100px",
                background: `radial-gradient(circle at top right, ${p.color}15, transparent 70%)`,
              }} />
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: `${p.color}18`, border: `1px solid ${p.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1rem",
              }}>
                <p.Icon size={24} color={p.color} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem", color: hovered === i ? p.color : theme.text }}>
                {p.name}
              </h3>
              <p style={{ color: theme.textMuted, fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    padding: "0.25rem 0.65rem", borderRadius: "6px", fontSize: "0.75rem",
                    fontWeight: 600, background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}35`,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.sectionTitleAccent}>Achievements</span> & Events
      </h2>
      <div style={styles.sectionDivider} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <h3 style={{ color: theme.textMuted, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            AWARDS
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {achievements.map((a, i) => (
              <div key={i} style={{
                ...styles.card,
                display: "flex", gap: "1rem", alignItems: "flex-start",
              }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px", flexShrink: 0,
                  background: `${a.color}18`, border: `1px solid ${a.color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <a.Icon size={20} color={a.color} strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{a.title}</div>
                  <div style={{ color: theme.textMuted, fontSize: "0.8rem", marginTop: "0.25rem" }}>{a.org} · {a.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ color: theme.textMuted, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            EVENTS & TRAINING
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {events.map((e, i) => (
              <div key={i} style={{
                ...styles.card,
                display: "flex", gap: "1rem", alignItems: "center", padding: "1rem 1.25rem",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentAlt})`,
                }} />
                <span style={{ fontSize: "0.875rem", color: theme.textMuted }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{
      background: theme.bgCard,
      borderTop: `1px solid ${theme.border}`,
    }}>
      <div style={{ ...styles.section, textAlign: "center" }}>
        <h2 style={styles.sectionTitle}>
          Let's <span style={styles.sectionTitleAccent}>Connect</span>
        </h2>
        <div style={{ ...styles.sectionDivider, margin: "0.5rem auto 2rem" }} />
        <p style={{ color: theme.textMuted, maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
          Whether it's a project, a collaboration, a research opportunity, or just a chat about AI —
          I'd love to hear from you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Email Me", Icon: Mail, href: "mailto:tausifrafee@gmail.com", primary: true },
            { label: "LinkedIn", Icon: Link2, href: "https://linkedin.com/in/tausif-islam-rafi", primary: false },
            { label: "GitHub", Icon: GitBranch, href: "https://github.com/tausifrafee", primary: false },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.btn,
                ...(l.primary
                  ? { background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentAlt})`, color: "#fff", boxShadow: `0 4px 20px rgba(108,99,255,0.35)` }
                  : { background: "transparent", color: theme.text, border: `1px solid ${theme.border}` }),
              }}
            >
              <l.Icon size={16} /> {l.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: `1px solid ${theme.border}`, color: theme.textDim, fontSize: "0.8rem" }}>
          © 2025 Tausif Islam Rafi · Built with React · Sydney, Australia
        </div>
      </div>
    </section>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ["about", "experience", "projects", "achievements", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.app}>
      <Nav activeSection={activeSection} />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}