import { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronUp,
  Gem,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Image as ImageIcon,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  FileDown,
  Globe,
  Award,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const logo = new URL("../A&G LOGO.png", import.meta.url).href;
const heroVideo = new URL("../video.mp4", import.meta.url).href;

const projectLogos = [
  new URL("../PROJECT LOGO/1.png", import.meta.url).href,
  new URL("../PROJECT LOGO/2.png", import.meta.url).href,
  new URL("../PROJECT LOGO/3.png", import.meta.url).href,
  new URL("../PROJECT LOGO/4.png", import.meta.url).href,
  new URL("../PROJECT LOGO/5.png", import.meta.url).href,
  new URL("../PROJECT LOGO/6.png", import.meta.url).href,
  new URL("../PROJECT LOGO/7.png", import.meta.url).href,
  new URL("../PROJECT LOGO/8.png", import.meta.url).href,
  new URL("../PROJECT LOGO/9.png", import.meta.url).href,
];

const projectImages = {
  county107: new URL("../projects image/107 balcony view.jpg", import.meta.url).href,
  county107Building: new URL("../projects image/107 building.jpg", import.meta.url).href,
  county107Bouilding: new URL("../projects image/107 bouilding.webp", import.meta.url).href,
  county107Map: new URL("../projects image/107 map.webp", import.meta.url).href,
  cherry: new URL("../projects image/cherry aminities.jpg", import.meta.url).href,
  cherryBuilding: new URL("../projects image/cherry building.webp", import.meta.url).href,
  cherryGarden: new URL("../projects image/cherry garden.jpeg", import.meta.url).href,
  cherryMap: new URL("../projects image/cherry map.jpeg", import.meta.url).href,
  cleoGarden: new URL("../projects image/cleo garden scenery.jpg", import.meta.url).href,
  cleoBuilding: new URL("../projects image/cleo building.jpg", import.meta.url).href,
  cleoInterior: new URL("../projects image/cleo interior.jpg", import.meta.url).href,
  cleoMap: new URL("../projects image/cleo map.jpg", import.meta.url).href,
  cleo: new URL("../projects image/cleo.webp", import.meta.url).href,
  cloveAerial: new URL("../projects image/clove ariel building.jpg", import.meta.url).href,
  cloveSitting: new URL("../projects image/clove outside sitting.jpg", import.meta.url).href,
  cloveBuilding: new URL("../projects image/clove building.webp", import.meta.url).href,
  cloveBuildingAlt: new URL("../projects image/clove building123.jpg", import.meta.url).href,
  cloveBuildings: new URL("../projects image/clove buildings.jpg", import.meta.url).href,
  cloveGarden: new URL("../projects image/clove garden.webp", import.meta.url).href,
  cloveLocation: new URL("../projects image/clove location.jpeg", import.meta.url).href,
  cloveMap: new URL("../projects image/clove map.jpeg", import.meta.url).href,
  clove: new URL("../projects image/clove.jpg", import.meta.url).href,
  cocoBuilding: new URL("../projects image/coco building.avif", import.meta.url).href,
  cocoClub: new URL("../projects image/coco club house.webp", import.meta.url).href,
  cocoMap: new URL("../projects image/coco locationmap.jpg", import.meta.url).href,
  cocoLocation: new URL("../projects image/mapcoco.jpg", import.meta.url).href,
  ivory: new URL("../projects image/IVORY BANNER.webp", import.meta.url).href,
  ivoryBuilding: new URL("../projects image/ivory building.webp", import.meta.url).href,
  ivoryGardenPng: new URL("../projects image/ivory gaarden.png", import.meta.url).href,
  ivoryGarden: new URL("../projects image/ivory garden.webp", import.meta.url).href,
  ivoryMap: new URL("../projects image/ivory map.webp", import.meta.url).href,
  ivyBuilding: new URL("../projects image/ivy building.webp", import.meta.url).href,
  ivy: new URL("../projects image/ivy inside.webp", import.meta.url).href,
  jadeLocation: new URL("../projects image/jad location.jpg", import.meta.url).href,
  jadeAerial: new URL("../projects image/jade ariel garden.jpg", import.meta.url).href,
  jadeBuilding: new URL("../projects image/jade building.webp", import.meta.url).href,
  jadeGarden: new URL("../projects image/jade garden.jpg", import.meta.url).href,
  jadeMap: new URL("../projects image/jade map.webp", import.meta.url).href,
  jadeSitting: new URL("../projects image/jade sitting.jpg", import.meta.url).href,
  olive: new URL("../projects image/olive building.jpg", import.meta.url).href,
  oliveGarden: new URL("../projects image/olive garden.jpg", import.meta.url).href,
  oliveMap: new URL("../projects image/olive map.jpg", import.meta.url).href,
};

const projects = [
  {
    name: "County 107",
    short: "107",
    location: "Sector 107, Noida",
    type: "Ultra-Luxury Residences",
    category: "Luxury",
    image: projectImages.county107,
    logo: projectLogos[0],
    copy: "High-rise residences with expansive private decks, bespoke layouts, and direct lift lobbies. Designed for the country's elite class.",
    gallery: [projectImages.county107, projectImages.county107Building, projectImages.county107Bouilding, projectImages.county107Map],
    highlights: ["Private entry foyer & elevator access", "Breathtaking panoramic sky views", "Platinum rating IGBC certified green build", "Elite concierge & secure access controls"],
    price: "₹3.80 Cr onwards",
    config: "4 BHK Residences & Sky Penthouses",
    status: "Immediate Possession",
    badge: "Signature Collection",
    roi: "6.2% Rental Yield / 12% Projected YoY Appreciation"
  },
  {
    name: "Cherry County",
    short: "Cherry",
    location: "Greater Noida West",
    type: "Modern Community Estates",
    category: "Residential",
    image: projectImages.cherry,
    logo: projectLogos[1],
    copy: "Amenity-led spacious estates built around manicured podium gardens, social facilities, and seamless commuter connection.",
    gallery: [projectImages.cherry, projectImages.cherryBuilding, projectImages.cherryGarden, projectImages.cherryMap],
    highlights: ["Sprawling 12-acre themed central park", "Bespoke high-street shopping arcade inside", "Excellent connectivity to Delhi & central Noida", "Fully operational luxury clubhouse facility"],
    price: "₹1.45 Cr onwards",
    config: "2, 3, 4 BHK Apartments",
    status: "Ready to Move",
    badge: "Exclusive Listing",
    roi: "4.8% Rental Yield / 8% Projected YoY Appreciation"
  },
  {
    name: "Cleo County",
    short: "Cleo",
    location: "Sector 121, Noida",
    type: "Resort-Style Living",
    category: "Luxury",
    image: projectImages.cleoGarden,
    logo: projectLogos[2],
    copy: "Egyptian themed luxury landscape integrated with pristine cascading pools, dynamic clubhouses, and premium residential spaces.",
    gallery: [projectImages.cleoGarden, projectImages.cleoBuilding, projectImages.cleoInterior, projectImages.cleo, projectImages.cleoMap],
    highlights: ["Noida's first unique indoor swimming pool", "Bespoke resort-themed landscaping", "Vast sports zone & wellness facilities", "Established, secure gated luxury community"],
    price: "₹2.20 Cr onwards",
    config: "3, 4 BHK Residences",
    status: "Ready to Move",
    badge: "Luxury Showcase",
    roi: "5.4% Rental Yield / 10% Projected YoY Appreciation"
  },
  {
    name: "Clove County",
    short: "Clove",
    location: "Sector 151, Noida",
    type: "Expressway Retreats",
    category: "Expressway",
    image: projectImages.cloveSitting,
    logo: projectLogos[3],
    copy: "Serene residences overlooking direct reserve forests. Designed with large balconies and optimized layout configuration.",
    gallery: [projectImages.cloveSitting, projectImages.cloveAerial, projectImages.cloveBuilding, projectImages.cloveBuildingAlt, projectImages.cloveBuildings, projectImages.cloveGarden, projectImages.cloveLocation, projectImages.cloveMap, projectImages.clove],
    highlights: ["Facing reserve green forest corridor", "Immediate connectivity to Noida Expressway", "Extensive walking & jogging green tracks", "High investment potential zone"],
    price: "₹1.80 Cr onwards",
    config: "3, 4 BHK Green-Facing Units",
    status: "Ready to Move",
    badge: "Limited Release",
    roi: "5.2% Rental Yield / 9% Projected YoY Appreciation"
  },
  {
    name: "Coco County",
    short: "Coco",
    location: "Greater Noida West",
    type: "Bespoke Club Living",
    category: "Investment",
    image: projectImages.cocoClub,
    logo: projectLogos[4],
    copy: "Smart apartments optimized for modern young families, featuring high-spec structural design and luxury utility amenities.",
    gallery: [projectImages.cocoClub, projectImages.cocoBuilding, projectImages.cocoMap, projectImages.cocoLocation],
    highlights: ["State of the art fitness & pool clubhouse", "Designed with wind flow orientation layout", "Premium high-speed lifts & smart security", "Close proximity to top corporate centers"],
    price: "₹1.15 Cr onwards",
    config: "2, 3 BHK Club Residences",
    status: "Ready to Move",
    badge: "Value Pick",
    roi: "4.5% Rental Yield / 8% Projected YoY Appreciation"
  },
  {
    name: "Ivory County",
    short: "Ivory",
    location: "Sector 115, Noida",
    type: "Next-Gen Luxury Living",
    category: "Luxury",
    image: projectImages.ivory,
    logo: projectLogos[5],
    copy: "A premium private sanctuary setting new standards in contemporary residential design, luxury amenities, and secure isolation.",
    gallery: [projectImages.ivory, projectImages.ivoryBuilding, projectImages.ivoryGardenPng, projectImages.ivoryGarden, projectImages.ivoryMap],
    highlights: ["Next-generation luxury specifications", "Advanced double glazed noise insulation", "Dedicated private lounge bar & banquet hall", "Premium premium address value location"],
    price: "₹3.10 Cr onwards",
    config: "3, 4 BHK Luxury Apartments",
    status: "Under Construction (Possession 2027)",
    badge: "Signature Collection",
    roi: "6.5% Rental Yield / 15% Projected YoY Appreciation"
  },
  {
    name: "Ivy County",
    short: "Ivy",
    location: "Sector 75, Noida",
    type: "Premium City Living",
    category: "Residential",
    image: projectImages.ivy,
    logo: projectLogos[6],
    copy: "Polished residential layouts configured for modern working professionals seeking luxury and seamless workspace access.",
    gallery: [projectImages.ivy, projectImages.ivyBuilding],
    highlights: ["Located in prime central Noida hub", "Premium wooden flooring & interior specs", "Walking distance to metro link station", "Excellent secondary market appreciation"],
    price: "₹2.60 Cr onwards",
    config: "3, 4 BHK Urban Homes",
    status: "Ready to Move",
    badge: "Exclusive Listing",
    roi: "5.8% Rental Yield / 11% Projected YoY Appreciation"
  },
  {
    name: "Jade County",
    short: "Jade",
    location: "Noida",
    type: "Premium Garden Estates",
    category: "Luxury",
    image: projectImages.jadeAerial,
    logo: projectLogos[7],
    copy: "Quiet low-density luxury cluster surrounded by expansive private lawns, outdoor decks, and tranquil water streams.",
    gallery: [projectImages.jadeAerial, projectImages.jadeSitting, projectImages.jadeBuilding, projectImages.jadeGarden, projectImages.jadeLocation, projectImages.jadeMap],
    highlights: ["Designed by award-winning landscape architects", "Dedicated central sensory zen garden", "Super-low density layout per acre plan", "High security biometric entry lobbies"],
    price: "₹2.10 Cr onwards",
    config: "3, 4 BHK Garden Homes",
    status: "Ready to Move",
    badge: "Luxury Showcase",
    roi: "5.1% Rental Yield / 9% Projected YoY Appreciation"
  },
  {
    name: "Olive County",
    short: "Olive",
    location: "Noida",
    type: "Balanced Residential Value",
    category: "Investment",
    image: projectImages.olive,
    logo: projectLogos[8],
    copy: "Practical layouts tailored for families focused on space optimization, security, and long-term investment yield metrics.",
    gallery: [projectImages.olive, projectImages.oliveGarden, projectImages.oliveMap],
    highlights: ["Vast open green layout spaces", "Robust and reliable build quality structures", "Low monthly utility & maintenance charge", "Consistent high occupancy rental demand"],
    price: "₹1.35 Cr onwards",
    config: "2, 3 BHK Residences",
    status: "Ready to Move",
    badge: "Investment Pick",
    roi: "4.9% Rental Yield / 8% Projected YoY Appreciation"
  },
];

const filters = ["All", "Luxury", "Residential", "Expressway", "Investment"];

const services = [
  { icon: SearchCheck, title: "Wealth Portfolio Curation", text: "Tailoring private asset lists based on wealth preservation directives, risk indices, and structural longevity." },
  { icon: CalendarDays, title: "Private Site Experience", text: "Chauffeur-driven private site tours with VIP site clearance, physical model reviews, and on-ground engineering briefings." },
  { icon: ShieldCheck, title: "Transaction Stewardship", text: "Strategic escrow coordination, legal verification, developer compliance checks, and secure booking support." },
  { icon: TrendingUp, title: "Macro Economic Advisory", text: "Assessing infrastructural milestones, airport proximity capital vectors, and rental yields for portfolio growth." },
];

const categories = [
  { icon: Home, title: "Signature Residences", text: "Refined apartments and penthouses featuring elite architectural finishes, secure community barriers, and private views." },
  { icon: Landmark, title: "Commercial Hubs", text: "High-yield commercial spaces and corporate towers featuring high-street exposure and blue-chip anchor tenants." },
  { icon: Gem, title: "Private Landed Estates", text: "Premium plots and boutique properties situated in high-demand residential sectors with custom construction potential." },
  { icon: Building2, title: "Smart Luxury Communities", text: "Integrated wellness communities with fully managed premium clubhouses, health centers, and complete secure access." },
];

const developerAlliances = [
  "County Group", "Godrej Properties", "Prestige Group", "Sobha Ltd", "ACE Group", "Experion", "ATS Infrastructure", "Gaur", "DLF", "M3M", "Smartworld", "Signature Global", "Elan Group", "Adani Realty", "Tata Housing", "Birla Estates"
];

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="preloader-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="preloader-logo-wrap"
        >
          <img src={logo} alt="A&G logo" className="preloader-logo" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          AGARWAL &amp; GEHLOT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          PRIVATE WEALTH ADVISORY
        </motion.p>
      </div>
    </motion.div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const solid = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      <motion.header
        className="site-header"
        style={{
          backgroundColor: useTransform(solid, [0, 1], ["rgba(18,17,16,0)", "rgba(255,255,255,0.96)"]),
          borderBottom: useTransform(solid, [0, 1], ["1px solid rgba(255,255,255,0)", "1px solid rgba(185,154,95,0.18)"]),
          color: useTransform(solid, [0, 1], ["#ffffff", "#121110"]),
          boxShadow: useTransform(solid, [0, 1], ["0 0 0 rgba(0,0,0,0)", "0 10px 40px rgba(18,17,16,0.04)"]),
        }}
      >
        <a className="brand" href="#home">
          <img src={logo} alt="A&G logo" className="nav-logo" />
          <div className="brand-text">
            <span className="brand-name">Agarwal &amp; Gehlot</span>
            <span className="brand-sub">Private Real Estate Advisory</span>
          </div>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">The Advisory</a>
          <a href="#projects">Portfolio</a>
          <a href="#categories">Portfolios</a>
          <a href="#services">Client Services</a>
          <a href="#contact">Private Consultation</a>
        </nav>
        <a className="header-call" href="tel:+91 70424 77557">
          <Phone size={14} /> Request Private Callback
        </a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {["The Advisory", "Portfolio", "Portfolios", "Client Services", "Private Consultation"].map((item, i) => {
              const ids = ["about", "projects", "categories", "services", "contact"];
              return (
                <a key={item} href={`#${ids[i]}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              );
            })}
            <a className="mobile-call-btn" href="tel:+91 70424 77557" onClick={() => setOpen(false)}>
              <Phone size={14} /> Call Wealth Desk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  return (
    <section className="hero" id="home">
      <motion.div className="hero-media" style={{ y, scale }} aria-hidden="true">
        <video src={heroVideo} autoPlay muted loop playsInline preload="metadata" />
      </motion.div>
      <div className="hero-scrim" />
      <div className="hero-grid">
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            CONFIDENTIAL LUXURY REAL ESTATE DESK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Agarwal &amp; Gehlot
          </motion.h1>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Private advisory offering high-net-worth individuals priority access to pre-market inventories, capital security, and curated real estate portfolios in Noida.
          </motion.p>
        </div>
        
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <a className="primary-btn magnetic" href="#projects">
            Request Private Portfolio <ArrowRight size={15} />
          </a>
          <a className="ghost-btn magnetic" href="#contact">
            Schedule Confidential Consultation
          </a>
        </motion.div>
        
        <div className="hero-scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  return (
    <section className="developer-alliances" aria-label="Trusted Developer Alliances">
      <div className="marquee-label">
        <span>ESTABLISHED DEVELOPER ALLIANCES</span>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {developerAlliances.concat(developerAlliances).map((item, index) => (
            <span key={`${item}-${index}`} className="developer-alliances-name">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="intro-band" id="about">
      <div className="section-header-wrap">
        <Reveal className="section-heading">
          <p className="eyebrow">01 / The Advisory</p>
          <h2>We do not broker transactions. We build real estate wealth portfolios.</h2>
        </Reveal>
      </div>
      <div className="intro-layout">
        <Reveal className="intro-copy" delay={0.05}>
          <p>
            Agarwal &amp; Gehlot operates exclusively on behalf of discerning buyers. We bypass commercial broker agendas, evaluating properties purely for structural pedigree, localized capital velocity, and structural safety.
          </p>
          <a className="text-link magnetic" href="#contact">
            Request Partnership <ArrowRight size={14} />
          </a>
        </Reveal>
        <div className="process-grid">
          {[
            { title: "Portfolio Curation", text: "Custom mapping focused on wealth legacy, target ROI parameters, and estate structure fit." },
            { title: "Risk Mitigation", text: "Rigorous legal vetting, developer track-record inspection, and RERA filing integrity checking." },
            { title: "Private Representation", text: "Acting as secure negotiation shields, optimizing entry pricing and custom payment frames." },
            { title: "Secure Handover", text: "Stewardship of title clearance, allocation deeds, registry, and immediate luxury leasing services." }
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.article className="process-card" whileHover={{ y: -6 }}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="trust-metrics-section">
      <div className="trust-metrics-grid">
        {[
          { metric: "₹2,500 Cr+", label: "Capital Allocation Volume", sub: "Discreet advisory across major luxury corridors" },
          { metric: "1,200+", label: "Private Wealth Portfolios", sub: "Serving discerning corporate and family investors" },
          { metric: "15+ Years", label: "Advisory Heritage", sub: "Noida's premier specialized real estate counsel" },
          { metric: "100%", label: "Compliant & RERA Verified", sub: "Zero-risk portfolio placement assurance" },
        ].map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05} className="metric-card-wrapper">
            <div className="metric-card">
              <span className="metric-accent-bullet" />
              <strong className="metric-number">{item.metric}</strong>
              <h3 className="metric-label">{item.label}</h3>
              <p className="metric-desc">{item.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({ onSelectProject }) {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  return (
    <section className="projects-section" id="projects">
      <div className="section-split">
        <Reveal className="section-heading">
          <p className="eyebrow">02 / Selected Portfolio</p>
          <h2>Exclusive Noida Listings</h2>
        </Reveal>
        <Reveal className="filter-row">
          {filters.map((item) => (
            <button className={filter === item ? "active" : ""} key={item} type="button" onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="projects-editorial-grid">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.04}>
            <motion.article 
              className="premium-project-card" 
              whileHover={{ y: -8 }}
              onClick={() => onSelectProject(project)}
            >
              <div className="card-image-wrap">
                <img src={project.image} alt={project.name} className="card-image" />
                <div className="card-image-overlay" />
                <div className="card-badges">
                  {project.badge && <span className="luxury-badge">{project.badge}</span>}
                  <span className="status-badge">{project.status}</span>
                </div>
              </div>
              <div className="card-details">
                <div className="card-header-line">
                  <div className="logo-placeholder-mini">
                    <img src={project.logo} alt={`${project.name} logo`} />
                  </div>
                  <span className="project-type-tag">{project.type}</span>
                </div>
                <h3 className="project-title-label">{project.name}</h3>
                <p className="project-location-label"><MapPin size={12} /> {project.location}</p>
                <div className="project-financials">
                  <div className="fin-col">
                    <span>Investment Entry</span>
                    <strong>{project.price}</strong>
                  </div>
                  <div className="fin-col">
                    <span>Specification</span>
                    <strong>{project.config}</strong>
                  </div>
                </div>
                <div className="card-action-trigger">
                  <span>REQUEST ACCESS DETAILS</span>
                  <ArrowRight size={14} className="trigger-arrow" />
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="categories-section" id="categories">
      <Reveal className="section-heading centered">
        <p className="eyebrow">03 / Portfolios</p>
        <h2>Strategic Asset Classifications</h2>
      </Reveal>
      <div className="category-grid">
        {categories.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.05}>
            <motion.article className="category-card" whileHover={{ y: -8 }}>
              <div className="icon-wrap">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-editorial-layout">
        <Reveal className="services-visual">
          <img src={projectImages.cloveAerial} alt="Bespoke architectural layout drone view" />
          <div className="visual-inset-label">
            <strong>PORTFOLIO MANAGEMENT</strong>
            <span>Active Asset Placement</span>
          </div>
        </Reveal>
        <div className="services-copy">
          <Reveal>
            <p className="eyebrow">04 / Services</p>
            <h2>Private Client Wealth Operations</h2>
          </Reveal>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }) => (
              <Reveal key={title} className="service-item-wrapper">
                <motion.div className="service-item" whileHover={{ x: 8 }}>
                  <div className="service-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div className="service-text">
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <Reveal className="section-heading centered">
        <p className="eyebrow">05 / Testimonials</p>
        <h2>Endorsements from Private Wealth Clients</h2>
      </Reveal>
      <div className="testimonial-grid">
        {[
          {
            quote: "Agarwal & Gehlot restructured our corporate real estate allocation in NCR. Their data transparency was exceptional.",
            client: "Managing Director, Global Equity Desk"
          },
          {
            quote: "An elite experience from first callback to registry. Their advisor acted with absolute confidentiality and structural diligence.",
            client: "HNW Individual Family Trust"
          },
        ].map((item, index) => (
          <Reveal key={item.client} delay={index * 0.05}>
            <motion.blockquote className="testimonial-card" whileHover={{ y: -6 }}>
              <Sparkles size={20} className="quote-star" />
              <p>"{item.quote}"</p>
              <cite>{item.client}</cite>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState("");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-editorial-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">06 / Registry</p>
          <h2>Request Secure Consultation</h2>
          <p>Register below to coordinate a private phone session or scheduled office visit. All enquiries are protected under corporate confidentiality protocols.</p>
          <div className="quick-options-luxury">
            <span>Capital Preservation</span>
            <span>Secondary Yield Portfolio</span>
            <span>High-End Residences</span>
            <span>RERA Regulated</span>
          </div>
          <div className="private-desk-info">
            <strong>DIRECT WEALTH DESK:</strong>
            <a href="tel:+917042477557" className="private-phone-link"><Phone size={14} /> +91 70424 77557</a>
            <span className="secure-badge">Secure Channel Verified</span>
          </div>
        </Reveal>
        
        <Reveal className="contact-form-wrap">
          <form className="contact-form-luxury" onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            setSent(`Registry accepted. A private wealth advisor will coordinate a callback within 2 business hours.`);
            event.currentTarget.reset();
          }}>
            <h3 className="form-header">PRIVATE CLIENT ONBOARDING</h3>
            <div className="form-fields">
              <label className="field-group">
                <span>Name</span>
                <input type="text" name="name" placeholder="Full legal name" required />
              </label>
              
              <div className="field-row">
                <label className="field-group">
                  <span>Phone Link</span>
                  <input type="tel" name="phone" placeholder="+91" required />
                </label>
                <label className="field-group">
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="client@domain.com" required />
                </label>
              </div>

              <div className="field-row">
                <label className="field-group">
                  <span>Preferred Corridor</span>
                  <select name="location">
                    <option>Noida Expressway</option>
                    <option>Noida Sector 107 / 115</option>
                    <option>Greater Noida West</option>
                    <option>Any Noida Elite Sector</option>
                  </select>
                </label>
                <label className="field-group">
                  <span>Property Specification</span>
                  <select name="type">
                    <option>Signature Luxury Apartment</option>
                    <option>Commercial Portfolio Suite</option>
                    <option>Penthouses &amp; Sky Estates</option>
                    <option>Land / Plot Investment</option>
                  </select>
                </label>
              </div>

              <div className="field-row">
                <label className="field-group">
                  <span>Investment Purpose</span>
                  <select name="purpose">
                    <option>Self Use / Primary Estate</option>
                    <option>Wealth Preservation &amp; Yield</option>
                    <option>Speculative appreciation</option>
                  </select>
                </label>
                <label className="field-group">
                  <span>Capital Allocation</span>
                  <select name="budget">
                    <option>₹1.5 - ₹3.0 Cr</option>
                    <option>₹3.0 - ₹5.0 Cr</option>
                    <option>₹5.0 - ₹10.0 Cr</option>
                    <option>₹10.0 Cr+</option>
                  </select>
                </label>
              </div>

              <label className="field-group">
                <span>Timeline for Allocation</span>
                <select name="timeline">
                  <option>Immediate / Ready-to-move</option>
                  <option>Capital placement inside 6 Months</option>
                  <option>Strategic watch portfolio</option>
                </select>
              </label>

              <label className="field-group">
                <span>Strategic Portfolio Requirements</span>
                <textarea name="message" rows="3" placeholder="Please list layout configurations, floor level preferences, or specific developer parameters..." />
              </label>
            </div>
            
            <button className="primary-btn-submit magnetic" type="submit">
              REGISTER ENQUIRY <ArrowRight size={15} />
            </button>
            {sent && <p className="form-feedback-message"><BadgeCheck size={14} /> {sent}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectDetail({ project, onBack }) {
  const [activeImage, setActiveImage] = useState(project.gallery[0]);
  
  useEffect(() => {
    setActiveImage(project.gallery[0]);
  }, [project]);

  const detailEnquiryFormSubmit = (e) => {
    e.preventDefault();
    alert("Brochure access registry accepted. Files will be forwarded via secure mail.");
    e.currentTarget.reset();
  };

  return (
    <main className="project-detail-page">
      <section className="detail-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="detail-hero-scrim" />
        <div className="detail-hero-content">
          <button className="back-btn magnetic" type="button" onClick={onBack}>
            <ArrowLeft size={14} /> Back to Portfolio
          </button>
          <div className="detail-logo-wrap">
            <img src={project.logo} alt={`${project.name} developer logo`} />
          </div>
          <span className="detail-kicker">{project.badge || "EXCLUSIVE LISTING"}</span>
          <h1>{project.name}</h1>
          <p className="detail-tagline">{project.copy}</p>
          <div className="detail-spec-strip">
            <div className="spec-unit">
              <span>ESTATE PRICE</span>
              <strong>{project.price}</strong>
            </div>
            <div className="spec-unit">
              <span>UNITS CONFIGURATION</span>
              <strong>{project.config}</strong>
            </div>
            <div className="spec-unit">
              <span>ALLOCATION STATUS</span>
              <strong>{project.status}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-overview-luxury">
        <div className="detail-advisory-block">
          <p className="eyebrow">Advisory Overview</p>
          <h2>High-Precision Property Assets</h2>
          <p>
            Agarwal &amp; Gehlot presents {project.name} as a prioritized luxury allocation in NCR. We evaluate its capital safety, developer performance index, and strategic location triggers below.
          </p>
          
          <div className="detail-roi-box">
            <TrendingUp size={20} />
            <div>
              <h4>ESTIMATED PORTFOLIO METRIC</h4>
              <strong>{project.roi}</strong>
            </div>
          </div>

          <div className="connectivity-list">
            <h4>INFRASTRUCTURAL CONTEXT &amp; ACCESS</h4>
            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle size={14} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-sidebar-form">
          <form className="sidebar-advisory-form" onSubmit={detailEnquiryFormSubmit}>
            <h3>REQUEST PRIVATE CATALOG</h3>
            <p>Access construction milestones, floor layouts, master planning documents, and premium pricing tiers.</p>
            <label>
              <span>NAME</span>
              <input type="text" placeholder="Legal client name" required />
            </label>
            <label>
              <span>SECURE PHONE</span>
              <input type="tel" placeholder="+91" required />
            </label>
            <label>
              <span>SECURE EMAIL</span>
              <input type="email" placeholder="client@domain.com" required />
            </label>
            <button className="primary-btn-submit" type="submit">
              DOWNLOAD DISCLOSURES <FileDown size={14} />
            </button>
            <span className="disclosure-text">By clicking download, you authorize A&amp;G real estate advisors to transmit encrypted PDFs via digital channels.</span>
          </form>
        </div>
      </section>

      <section className="detail-gallery-luxury">
        <div className="gallery-section-heading">
          <p className="eyebrow">Visual Disclosures</p>
          <h2>High-Resolution Asset Gallery</h2>
        </div>
        <div className="luxury-gallery-viewer">
          <img src={activeImage} alt={`${project.name} selected view`} className="active-viewer-img" />
        </div>
        <div className="luxury-gallery-strip">
          {project.gallery.map((img, index) => (
            <button 
              key={img} 
              className={`strip-img-btn ${activeImage === img ? "active" : ""}`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`${project.name} asset view ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="detail-map-section">
        <div className="map-grid-card">
          <div className="map-copy">
            <p className="eyebrow">Location Context</p>
            <h2>Strategic Regional Access</h2>
            <p>
              Situated in Noida's premier high-value corridor, {project.name} offers direct links to corporate infrastructure, elite schools, healthcare facilities, and arterial expressways.
            </p>
            <div className="connectivity-bullets">
              <div className="bullet-item">
                <strong>05 Mins</strong>
                <span>Metro Station Link</span>
              </div>
              <div className="bullet-item">
                <strong>10 Mins</strong>
                <span>Noida-Greater Noida Expressway</span>
              </div>
              <div className="bullet-item">
                <strong>45 Mins</strong>
                <span>Jewar International Airport (Upcoming)</span>
              </div>
            </div>
          </div>
          <div className="map-visual-wrap">
            <img src={project.gallery[project.gallery.length - 1]} alt={`${project.name} location layout`} />
          </div>
        </div>
      </section>

      <section className="detail-action-footer">
        <div className="action-footer-content">
          <h2>Coordinate Private Virtual Tour</h2>
          <p>Let our advisors organize a secure digital walkthrough or arrange physical site access protocols.</p>
        </div>
        <div className="action-footer-btns">
          <a href="tel:+917042477557" className="primary-btn"><Phone size={14} /> CALL WEALTH DESK</a>
          <a href="#contact" className="ghost-btn" onClick={onBack}>REGISTER SECURE INTEREST</a>
        </div>
      </section>
    </main>
  );
}

function FloatingActions() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="floating-actions-container">
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="floating-menu-options"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <a href="https://wa.me/917042477557" target="_blank" rel="noopener noreferrer" className="menu-btn whatsapp-btn">
              <MessageSquare size={16} /> <span>Secure WhatsApp</span>
            </a>
            <a href="tel:+917042477557" className="menu-btn phone-btn">
              <Phone size={16} /> <span>Advisory Hotline</span>
            </a>
            <a href="mailto:hello@aandgrealty.com" className="menu-btn email-btn">
              <Mail size={16} /> <span>Email Desk</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        className={`floating-trigger-btn ${expanded ? "active" : ""}`} 
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle contact menu"
      >
        <span className="trigger-icon-wrap">
          {expanded ? <X size={20} /> : <Phone size={20} />}
        </span>
      </button>
    </div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const selectProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div className="scroll-progress" style={{ scaleX: progress }} />
          <Header />
          <AnimatePresence mode="wait">
            {selectedProject ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectDetail project={selectedProject} onBack={closeProject} />
              </motion.div>
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <main>
                  <Hero />
                  <LogoMarquee />
                  <About />
                  <TrustMetrics />
                  <ProjectShowcase onSelectProject={selectProject} />
                  <Categories />
                  <Services />
                  <Testimonials />
                  <Contact />
                </main>
              </motion.div>
            )}
          </AnimatePresence>
          <FloatingActions />
          
          <footer className="site-footer">
            <div className="footer-layout">
              <div className="footer-col-about">
                <img src={logo} alt="A&G logo" className="footer-logo" />
                <h3>AGARWAL &amp; GEHLOT</h3>
                <p className="footer-tag">Private Wealth &amp; Luxury Real Estate Desk</p>
                <p className="footer-desc">
                  Providing professional, conflict-free representation for buyers acquiring high-value real estate. Registered under UP RERA protocols.
                </p>
                <span className="rera-badge">RERA NO: UPRERAPRJ107293 (Corporate Office)</span>
              </div>
              
              <div className="footer-col-nav">
                <h4>THE ADVISORY</h4>
                <a href="#about">Our Credentials</a>
                <a href="#projects">Elite Portfolio</a>
                <a href="#services">Private Services</a>
                <a href="#contact">Consultation Desk</a>
              </div>

              <div className="footer-col-categories">
                <h4>PORTFOLIOS</h4>
                <a href="#projects">Noida Expressway</a>
                <a href="#projects">Sector 107 Premium</a>
                <a href="#projects">Sector 115 Signature</a>
                <a href="#projects">Greater Noida West</a>
              </div>

              <div className="footer-col-contact">
                <h4>OFFICE ADVISORY</h4>
                <p className="address-text">
                  Tower B, 14th Floor, Premium Business Hub,<br />
                  Sector 62, Noida, UP - 201301
                </p>
                <div className="footer-contact-links">
                  <a href="mailto:hello@aandgrealty.com"><Mail size={12} /> hello@aandgrealty.com</a>
                  <a href="tel:+917042477557"><Phone size={12} /> +91 70424 77557</a>
                </div>
                <div className="footer-map-embed">
                  <iframe 
                    title="A&G Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4278453472097!2d77.37126131508226!3d28.616942982424192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5668ca3e7fb%3A0xe543c7b653139366!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1625039239842!5m2!1sen!2sin" 
                    width="100%" 
                    height="90" 
                    style={{ border: 0, filter: "grayscale(1) invert(0.9)" }} 
                    allowFullScreen="" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="footer-bottom-line">
              <p>&copy; {new Date().getFullYear()} Agarwal &amp; Gehlot. All Rights Reserved. Private Real Estate Advisory.</p>
              <div className="footer-legal-links">
                <a href="#privacy">Privacy Disclosures</a>
                <a href="#terms">Advisory Terms</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
