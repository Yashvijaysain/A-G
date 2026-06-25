import { useMemo, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
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
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const logo = new URL("../A&G LOGO.png", import.meta.url).href;
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
  cherry: new URL("../projects image/cherry aminities.jpg", import.meta.url).href,
  cleoGarden: new URL("../projects image/cleo garden scenery.jpg", import.meta.url).href,
  cleoBuilding: new URL("../projects image/cleo building.jpg", import.meta.url).href,
  cleoInterior: new URL("../projects image/cleo interior.jpg", import.meta.url).href,
  cloveAerial: new URL("../projects image/clove ariel building.jpg", import.meta.url).href,
  cloveSitting: new URL("../projects image/clove outside sitting.jpg", import.meta.url).href,
  cocoClub: new URL("../projects image/coco club house.webp", import.meta.url).href,
  ivory: new URL("../projects image/IVORY BANNER.webp", import.meta.url).href,
  ivy: new URL("../projects image/ivy inside.webp", import.meta.url).href,
  jadeAerial: new URL("../projects image/jade ariel garden.jpg", import.meta.url).href,
  jadeSitting: new URL("../projects image/jade sitting.jpg", import.meta.url).href,
  olive: new URL("../projects image/olive building.jpg", import.meta.url).href,
};

const projects = [
  {
    name: "County 107",
    short: "107",
    location: "Sector 107, Noida",
    type: "Luxury Residential",
    category: "Residential",
    image: projectImages.county107,
    logo: projectLogos[0],
    copy: "High-rise residences with open balcony views, premium planning, and refined address value.",
  },
  {
    name: "Cherry County",
    short: "Cherry",
    location: "Greater Noida West",
    type: "Modern Apartments",
    category: "Residential",
    image: projectImages.cherry,
    logo: projectLogos[1],
    copy: "Amenity-led homes shaped around gardens, community life, and everyday convenience.",
  },
  {
    name: "Cleo County",
    short: "Cleo",
    location: "Sector 121, Noida",
    type: "Luxury Community",
    category: "Luxury",
    image: projectImages.cleoGarden,
    logo: projectLogos[2],
    copy: "Resort-style landscaping, elegant interiors, and a calm luxury residential environment.",
  },
  {
    name: "Clove County",
    short: "Clove",
    location: "Sector 151, Noida",
    type: "Expressway Residences",
    category: "Expressway",
    image: projectImages.cloveSitting,
    logo: projectLogos[3],
    copy: "Green-facing residences with leisure corners, elegant towers, and planned open spaces.",
  },
  {
    name: "Coco County",
    short: "Coco",
    location: "Greater Noida West",
    type: "Clubhouse Living",
    category: "Luxury Residences",
    image: projectImages.cocoClub,
    logo: projectLogos[4],
    copy: "Clubhouse-first living with social spaces, efficient homes, and composed residential planning.",
  },
  {
    name: "Ivory County",
    short: "Ivory",
    location: "Sector 115, Noida",
    type: "Premium Development",
    category: "Luxury Residences",
    image: projectImages.ivory,
    logo: projectLogos[5],
    copy: "A polished premium address with clean architecture, lifestyle greens, and strong city access.",
  },
  {
    name: "Ivy County",
    short: "Ivy",
    location: "Sector 75, Noida",
    type: "Urban Residences",
    category: "Residential",
    image: projectImages.ivy,
    logo: projectLogos[6],
    copy: "Elegant interiors and efficient spaces for buyers seeking a modern urban home.",
  },
  {
    name: "Jade County",
    short: "Jade",
    location: "Noida",
    type: "Garden Living",
    category: "Luxury",
    image: projectImages.jadeAerial,
    logo: projectLogos[7],
    copy: "Expansive landscaping, refined seating courts, and a resort-like residential rhythm.",
  },
  {
    name: "Olive County",
    short: "Olive",
    location: "Noida",
    type: "Value Address",
    category: "Investment",
    image: projectImages.olive,
    logo: projectLogos[8],
    copy: "A balanced address with practical amenities, garden views, and clean urban access.",
  },
];

const heroImages = [
  projectImages.cloveAerial,
  projectImages.jadeSitting,
  projectImages.cleoBuilding,
];

const filters = ["All", "Residential", "Luxury", "Expressway", "Investment"];

const services = [
  { icon: SearchCheck, title: "Project Discovery", text: "Requirement mapping, location analysis, pricing clarity, and curated project shortlists." },
  { icon: CalendarDays, title: "Site Visit Concierge", text: "Coordinated visits with route planning, inventory checks, and on-ground assistance." },
  { icon: ShieldCheck, title: "Booking Support", text: "Offer coordination, documentation guidance, and smooth developer communication." },
  { icon: TrendingUp, title: "Investment Advisory", text: "Projects assessed for demand, connectivity, rental potential, and appreciation logic." },
];

const categories = [
  { icon: Home, title: "Luxury Residences", text: "Signature apartments with crafted amenities, efficient plans, and secure communities." },
  { icon: Landmark, title: "Commercial Spaces", text: "Future-ready business addresses with frontage, access, and rental potential." },
  { icon: Gem, title: "Investment Homes", text: "Properties selected for location growth, liquidity, and long-term value." },
  { icon: Building2, title: "Smart Communities", text: "Modern developments with security, lifestyle amenities, and everyday comfort." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};


function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const solid = useTransform(scrollY, [0, 90], [0, 1]);

  return (
    <>
      <motion.header
        className="site-header"
        style={{
          backgroundColor: useTransform(solid, [0, 1], ["rgba(8,8,8,0)", "rgba(255,250,242,.94)"]),
          color: useTransform(solid, [0, 1], ["#ffffff", "#151414"]),
          boxShadow: useTransform(solid, [0, 1], ["0 0 0 rgba(0,0,0,0)", "0 18px 55px rgba(20,18,16,.12)"]),
        }}
      >
        <a className="brand" href="#home">
          <img src={logo} alt="A&G logo" />
          <span>Agarwal and Gehlot</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#categories">Categories</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+91 70424 77557">
          <Phone size={16} /> Enquire
        </a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>
      <motion.nav
        className="mobile-nav"
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -18, pointerEvents: "none" }}
      >
        {["About", "Projects", "Categories", "Services", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </motion.nav>
    </>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 170]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);

  return (
    <section className="hero" id="home">
      <motion.div className="hero-media" style={{ y, scale }} aria-hidden="true">
        {heroImages.map((image, index) => (
          <img key={image} src={image} alt="" style={{ animationDelay: `${index * 6}s` }} />
        ))}
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-grid">
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Premium Real Estate Channel Partner
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.1 }}>
            A&G
          </motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22 }}>
            A refined property advisory experience for buyers and investors seeking premium residential addresses, transparent comparisons, and guided booking support.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.34 }}>
            <a className="primary-btn magnetic" href="#projects">Explore Projects <ArrowRight size={17} /></a>
            <a className="ghost-btn magnetic" href="#contact">Book Consultation</a>
          </motion.div>
        </div>
        <motion.div className="hero-dashboard" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.42 }}>
          <div className="glass-card">
            <span>Portfolio Snapshot</span>
            <strong>9+</strong>
            <p>Featured residential and investment opportunities</p>
          </div>
          <div className="glass-row">
            <BadgeCheck size={18} />
            <span>Verified project guidance</span>
          </div>
          <div className="glass-row">
            <MapPin size={18} />
            <span>Noida and NCR focus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const logos = [...projectLogos, ...projectLogos];
  return (
    <section className="partner-strip" aria-label="Project logos">
      <div className="marquee-track">
        {logos.map((item, index) => (
          <img key={`${item}-${index}`} src={item} alt={index < 9 ? `Project logo ${index + 1}` : ""} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="intro-band" id="about">
      <Reveal className="section-heading">
        <p className="eyebrow">About A&G</p>
        <h2>Curating exceptional property opportunities with boardroom-level clarity.</h2>
      </Reveal>
      <div className="intro-layout">
        <Reveal className="intro-copy" delay={0.05}>
          <p>
            A&G brings premium developers, serious buyers, and investment-minded clients onto one transparent advisory path. Every shortlist is built around location, lifestyle fit, inventory availability, and value logic.
          </p>
          <a className="text-link magnetic" href="#contact">Start Consultation <ArrowRight size={16} /></a>
        </Reveal>
        <div className="process-grid">
          {["Requirement Mapping", "Project Intelligence", "Site Visit Planning", "Booking Assistance"].map((title, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <motion.article className="process-card" whileHover={{ y: -8, backgroundColor: "#fffaf2" }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{["Budget, unit type, timeline, and location preference are mapped before a shortlist is prepared.", "Developer profile, layout, amenities, pricing, access, and future value are compared clearly.", "Visits are coordinated around the right projects, inventory, and decision-making context.", "A&G helps with offers, paperwork, inventory checks, and developer coordination."][index]}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="locations-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Market Focus</p>
        <h2>Explore landmark projects by location and intent.</h2>
      </Reveal>
      <Reveal className="location-pills">
        {[
          ["5", "Noida"],
          ["2", "Greater Noida"],
          ["1", "Expressway"],
          ["4", "Investment Pick"],
        ].map(([count, label]) => (
          <motion.a href="#projects" key={label} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <strong>{count}</strong>
            <span>{label}</span>
          </motion.a>
        ))}
      </Reveal>
    </section>
  );
}

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => (filter === "All" ? projects : projects.filter((project) => project.category === filter)), [filter]);
  const showcaseProjects = filteredProjects.slice(0, 5);

  return (
    <section className="projects-section" id="projects">
      <div className="section-split">
        <Reveal className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Hover through a premium portfolio built for serious decisions.</h2>
        </Reveal>
        <Reveal className="filter-row">
          {filters.map((item) => (
            <button className={filter === item ? "active" : ""} key={item} type="button" onClick={() => { setFilter(item); setActive(0); }}>
              {item}
            </button>
          ))}
        </Reveal>
      </div>

      <Reveal>
        <div className="project-showcase">
          {showcaseProjects.map((project, index) => (
            <motion.article
              className={`project-panel ${active === index ? "active" : ""}`}
              key={project.name}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              tabIndex={0}
              layout
            >
              <div className="panel-kicker">{project.short}</div>
              <motion.div className="panel-content" animate={active === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}>
                <img src={project.logo} alt={`${project.name} logo`} />
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.copy}</p>
                <a href="#contact">Read More <ArrowRight size={15} /></a>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <div className="project-mini-grid">
        {projects.slice(5).map((project, index) => (
          <Reveal key={project.name} delay={index * 0.04}>
            <motion.article className="mini-project" whileHover={{ y: -8 }}>
              <img src={project.image} alt={project.name} />
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p><MapPin size={14} /> {project.location}</p>
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
        <p className="eyebrow">Property Categories</p>
        <h2>Every asset class, held to one premium standard.</h2>
      </Reveal>
      <div className="category-grid">
        {categories.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.05}>
            <motion.article className="category-card" whileHover={{ y: -10 }}>
              <Icon size={34} />
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
      <Reveal className="services-visual">
        <img src={projectImages.cloveAerial} alt="Luxury residential interior" />
      </Reveal>
      <Reveal className="services-copy">
        <p className="eyebrow">A&G Advantage</p>
        <h2>Luxury becomes easier to choose when the process is engineered well.</h2>
        <div className="service-list">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} whileHover={{ x: 10 }}>
              <Icon size={24} />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Client Confidence</p>
        <h2>Guidance designed for high-value property decisions.</h2>
      </Reveal>
      <div className="testimonial-grid">
        {[
          ["A&G helped us compare projects clearly and arranged the site visit without confusion.", "Homebuyer, Noida"],
          ["The team explained inventory, pricing, and location advantages before we moved ahead.", "Investor Client"],
        ].map(([quote, name], index) => (
          <Reveal key={name} delay={index * 0.08}>
            <motion.blockquote whileHover={{ y: -8 }}>
              <Sparkles size={24} />
              <p>"{quote}"</p>
              <cite>{name}</cite>
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
      <Reveal className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Begin a private consultation.</h2>
        <p>Share your budget, location preference, and possession timeline. A&G will help you shortlist relevant options and schedule your next site visit.</p>
        <div className="quick-options">
          <span>Luxury Residence</span>
          <span>Commercial Space</span>
          <span>Investment Opportunity</span>
          <span>Rent</span>
        </div>
        <a className="primary-btn magnetic" href="tel:+91 70424 77557"><Phone size={16} /> Call +917042477557</a>
      </Reveal>
      <Reveal>
        <form className="contact-form" onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          setSent(`Thank you, ${form.get("name") || "there"}. A&G will contact you shortly.`);
          event.currentTarget.reset();
        }}>
          <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Phone<input type="tel" name="phone" placeholder="+91" required /></label>
          <label>Requirement
            <select name="requirement">
              <option>Luxury Residence</option>
              <option>Investment Opportunity</option>
              <option>Commercial Space</option>
              <option>Site Visit</option>
              <option>Rent</option>
            </select>
          </label>
          <label>Interested Project
            <select name="project">
              {projects.map((project) => <option key={project.name}>{project.name}</option>)}
            </select>
          </label>
          <label>Message<textarea name="message" rows="4" placeholder="Budget, location preference, Visit Timing, Slot Booking" /></label>
          <button className="primary-btn" type="submit">Send Enquiry <ArrowRight size={16} /></button>
          <p className="form-note">{sent}</p>
        </form>
      </Reveal>
    </section>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a href="#home" aria-label="Back to top"><ChevronUp size={20} /></a>
      <a href="mailto:hello@aandgrealty.com" aria-label="Email A&G"><Mail size={19} /></a>
      <a className="chat" href="#contact" aria-label="Open enquiry form">Chat</a>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Locations />
        <ProjectShowcase />
        <Categories />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <FloatingActions />
      <footer className="site-footer">
        <div>
          <img src={logo} alt="A&G logo" />
          <p>A&G Realtors</p>
        </div>
        <p>Luxury Residences | Commercial Spaces | Investment Opportunities</p>
      </footer>
    </>
  );
}
