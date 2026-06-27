import { useMemo, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
    type: "Luxury Residential",
    category: "Residential",
    image: projectImages.county107,
    logo: projectLogos[0],
    copy: "High-rise residences with open balcony views, premium planning, and refined address value.",
    gallery: [projectImages.county107, projectImages.county107Building, projectImages.county107Bouilding, projectImages.county107Map],
    highlights: ["Open balcony views", "Premium residential planning", "Sector 107 address advantage", "Map and access image available"],
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
    gallery: [projectImages.cherry, projectImages.cherryBuilding, projectImages.cherryGarden, projectImages.cherryMap],
    highlights: ["Amenity-led community", "Garden-focused lifestyle", "Greater Noida West connectivity", "Location map included"],
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
    gallery: [projectImages.cleoGarden, projectImages.cleoBuilding, projectImages.cleoInterior, projectImages.cleo, projectImages.cleoMap],
    highlights: ["Resort-style landscaping", "Elegant interiors", "Luxury community planning", "Sector 121 location"],
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
    gallery: [projectImages.cloveSitting, projectImages.cloveAerial, projectImages.cloveBuilding, projectImages.cloveBuildingAlt, projectImages.cloveBuildings, projectImages.cloveGarden, projectImages.cloveLocation, projectImages.cloveMap, projectImages.clove],
    highlights: ["Expressway-side residence option", "Multiple tower views", "Garden and sitting spaces", "Location and map images included"],
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
    gallery: [projectImages.cocoClub, projectImages.cocoBuilding, projectImages.cocoMap, projectImages.cocoLocation],
    highlights: ["Clubhouse living", "Efficient apartment planning", "Social amenity spaces", "Greater Noida West focus"],
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
    gallery: [projectImages.ivory, projectImages.ivoryBuilding, projectImages.ivoryGardenPng, projectImages.ivoryGarden, projectImages.ivoryMap],
    highlights: ["Premium development", "Lifestyle greens", "Clean architectural presence", "Sector 115 access"],
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
    gallery: [projectImages.ivy, projectImages.ivyBuilding],
    highlights: ["Urban residential address", "Elegant interiors", "Efficient home layouts", "Sector 75 location"],
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
    gallery: [projectImages.jadeAerial, projectImages.jadeSitting, projectImages.jadeBuilding, projectImages.jadeGarden, projectImages.jadeLocation, projectImages.jadeMap],
    highlights: ["Expansive landscaping", "Refined seating courts", "Garden living appeal", "Location and map visuals"],
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
    gallery: [projectImages.olive, projectImages.oliveGarden, projectImages.oliveMap],
    highlights: ["Practical amenity mix", "Garden views", "Investment-friendly positioning", "Map image included"],
  },
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
        <video src={heroVideo} autoPlay muted loop playsInline preload="metadata" />
      </motion.div>

      <div className="hero-grid">
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Premium Real Estate Advisory
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            Agarwal<br />&amp; Gehlot
          </motion.h1>
         
         
          
         
        </div>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.46 }}
        >
          <a className="primary-btn magnetic" href="#projects">Explore Projects <ArrowRight size={17} /></a>
          <a className="ghost-btn magnetic" href="#contact">Book Consultation</a>
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
          { Icon: MapPin,     count: "5", label: "Projects in Noida",      desc: "Sectors 75, 107, 115, 121 & more" },
          { Icon: MapPin,     count: "2", label: "Greater Noida West",      desc: "Modern community living" },
          { Icon: MapPin,     count: "1", label: "Noida Expressway",        desc: "Sector 151 green corridor" },
          { Icon: TrendingUp, count: "4", label: "Investment-Rated Picks",  desc: "High-growth curated projects" },
        ].map(({ Icon, count, label, desc }) => (
          <motion.a href="#projects" key={label} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Icon size={18} className="pill-icon" />
            <strong>{count}</strong>
            <span>{label}</span>
            <em>{desc}</em>
          </motion.a>
        ))}
      </Reveal>
    </section>
  );
}

function ProjectShowcase({ onSelectProject }) {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => (filter === "All" ? projects : projects.filter((project) => project.category === filter)), [filter]);
  const showcaseProjects = filteredProjects.slice(0, 5);

  return (
    <section className="projects-section" id="projects">
      <div className="section-split">
        <Reveal className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Browse our curated portfolio of premium projects.</h2>
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
              onTouchStart={() => setActive(index)}
              onClick={() => onSelectProject(project)}
              onFocus={() => setActive(index)}
              onKeyDown={(event) => { if (event.key === "Enter") onSelectProject(project); }}
              tabIndex={0}
              role="button"
              layout
            >
              <div className="panel-kicker">{project.short}</div>
              <motion.div className="panel-content" animate={active === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}>
                <img src={project.logo} alt={`${project.name} logo`} />
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.copy}</p>
                <button className="panel-link" type="button">Read More <ArrowRight size={15} /></button>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <div className="project-mini-grid">
        {projects.slice(5).map((project, index) => (
          <Reveal key={project.name} delay={index * 0.04}>
            <motion.article className="mini-project" whileHover={{ y: -8 }} onClick={() => onSelectProject(project)} onKeyDown={(event) => { if (event.key === "Enter") onSelectProject(project); }} role="button" tabIndex={0}>
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

function ProjectDetail({ project, onBack }) {
  const [activeImage, setActiveImage] = useState(project.gallery[0]);
  const projectFacts = [
    ["Location", project.location],
    ["Project Type", project.type],
    ["Category", project.category],
    ["Gallery", project.gallery.length + " project images"],
  ];

  return (
    <main className="project-detail-page">
      <section className="detail-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <button className="back-btn" type="button" onClick={onBack}><ArrowLeft size={17} /> Back to Projects</button>
          <img src={project.logo} alt={project.name + " logo"} />
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.copy}</p>
          <a className="primary-btn magnetic" href="#detail-contact"><Phone size={16} /> Enquire Now</a>
        </div>
      </section>

      <section className="detail-overview">
        <div className="detail-copy">
          <p className="eyebrow">Project Details</p>
          <h2>{project.name} at a glance.</h2>
          <p>{project.copy} Review the location, project style, highlights, and the full set of images provided for this project.</p>
          <div className="detail-facts">
            {projectFacts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="highlight-list">
          {project.highlights.map((item) => (
            <div key={item}>
              <BadgeCheck size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-gallery" aria-label={project.name + " gallery"}>
        <div className="section-heading">
          <p className="eyebrow"><ImageIcon size={15} /> Project Images</p>
          <h2>All provided images for {project.name}.</h2>
        </div>
        <div className="gallery-viewer">
          <img src={activeImage} alt={project.name + " selected view"} />
        </div>
        <div className="gallery-grid">
          {project.gallery.map((image, index) => (
            <button className={activeImage === image ? "active" : ""} key={image} type="button" onClick={() => setActiveImage(image)}>
              <img src={image} alt={project.name + " view " + (index + 1)} />
            </button>
          ))}
        </div>
      </section>

      <section className="detail-contact" id="detail-contact">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>Book a visit or ask for current inventory.</h2>
          <p>A&G can help with pricing clarity, site visit scheduling, documentation guidance, and developer coordination for {project.name}.</p>
        </div>
        <a className="primary-btn magnetic" href="tel:+91 70424 77557"><Phone size={16} /> Call +917042477557</a>
      </section>
    </main>
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
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });

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
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header />
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={closeProject} />
      ) : (
        <main>
          <Hero />
          <LogoMarquee />
          <About />
          <Locations />
          <ProjectShowcase onSelectProject={selectProject} />
          <Categories />
          <Services />
          <Testimonials />
          <Contact />
        </main>
      )}
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
