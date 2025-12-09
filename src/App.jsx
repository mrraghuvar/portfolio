import React, { useState } from "react";
import { motion } from "framer-motion";
import ExpressIcon from "./assets/Express.png";
import MongoIcon from "./assets/Mongo.png";
import NodeIcon from "./assets/Node.png";
import jsIcon from "./assets/js.png";
import reactIcon from "./assets/react.svg";
import reduxIcon from "./assets/Redux.png";
import gitIcon from "./assets/Git.png";
import tailwindIcon from "./assets/Tailwind.png";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  ];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* Base background */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-slate-950" />

      {/* Big soft radial glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-80">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-10 right-[-120px] h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/3 h-96 w-96 rounded-full bg-indigo-500/25 blur-[90px]" />
      </div>

      {/* Diagonal gradient layer (gives anime/hero feel) */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background-image:linear-gradient(135deg,rgba(56,189,248,0.18),transparent_45%,rgba(79,70,229,0.18))]" />

      {/* Soft grid/noise effect */}
      <div className="pointer-events-none fixed inset-0 -z-5 opacity-[0.06] [background-image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] [background-size:80px_80px]" />

      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrustedBy /> 
        <Services />
        <Work />
       </main>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 shadow-[0_0_32px_rgba(56,189,248,0.65)] flex items-center justify-center text-xs font-black tracking-widest text-slate-950"
          >
            RJ
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Raghuvar Jha
            </span>
            <span className="font-outfit text-[11px] text-slate-400">
              Freelance MERN Developer
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className=" font-bold relative  text-slate-300/80 hover:text-slate-50 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="tel:+91-9319436943"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_10px_35px_rgba(56,120,148,0.75)] hover:brightness-105 transition"
          >
            Book a Free call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-100 transition ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-100 transition ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-sm text-slate-300 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#pricing"
                className="text-[12px] font-medium text-slate-300 hover:text-slate-100"
                onClick={() => setOpen(false)}
              >
                View packages
              </a>
              <a
                href="tel:+91-9319436943"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950"
                onClick={() => setOpen(false)}
              >
                Book a free call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <motion.section
      id="hero"
      className="py-16 sm:py-24 flex flex-col md:flex-row items-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariant}
    >
      {/* Left */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-outfit text-sm">Open For Freelance Projects  3–5 Day Delivery</span>
        </div>

        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
          Freelance MERN Stack Developer
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          WEB THAT{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-400">
            LOOK PREMIUM
          </span>{" "}
          AND BRING REAL{" "}
          <span className="underline decoration-cyan-400/70 decoration-2 underline-offset-4">
            CUSTOMERS
          </span>
          .
        </h1>
        <p className="font-outfit text-lg mt-4  sm:text-base text-slate-300/90 max-w-xl">
          I build conversion-focused websites for restaurants, gyms, coaching
          centres and local businesses.
        </p>

        {/* Primary CTAs */}
        <div className="mt-7 flex flex-wrap gap-3 items-center">
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="tel:91-9319436943"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_35px_rgba(56,120,148,0.75)]"
          >
            Book a Free 20-min Call
          </motion.a>
         
          <p className="text-[11px] text-slate-400 w-full sm:w-auto">
            <span className="text-emerald-400">No obligation.</span> Just ideas
            for your business.
          </p>
        </div>

        {/* Mini benefits */}
        <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-400">
          {[
            "⚡ 3–5 day delivery",
            "🧭 Clear navigation",
            "📈 SEO-ready structure",
          ].map((item) => (
            <div
              key={item}
              className=" font-outfit text-sm inline-flex items-center rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: profile card */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: 48, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.95)] overflow-hidden">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-32 right-[-60px] h-52 w-52 rounded-full bg-cyan-400/25 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 left-[-60px] h-52 w-52 rounded-full bg-indigo-500/25 blur-[80px]" />

          {/* Top row: "browser" */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 hover:bg-black" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-outfit text-[14px] text-slate-400">Tech Stacks</span>
          </div>

          {/* Avatar + summary */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.75)]">
              RJ
            </div>
            <div className="text-xs text-slate-300">
              <p className="font-semibold text-slate-50">Raghuvar Jha</p>
              <p className="text-[11px] text-slate-400">
               
              </p>
            </div>
          </div>

          {/* "Code" style info */}
      <div className="grid grid-cols-4 md:gap-6 bg-white/5 border border-slate-800/50 md:p-6 rounded-2xl backdrop-blur-lg">
  <TechStack stackImage={reactIcon} stackName="ReactJS"/>  
  <TechStack stackImage={NodeIcon} stackName="NodeJS"/>
  <TechStack stackImage={ExpressIcon} stackName="ExpressJS"/>
  <TechStack stackImage={MongoIcon} stackName="MongoDB"/>
  <TechStack stackImage={jsIcon}stackName="JavaScript"/>
  <TechStack stackImage={gitIcon} stackName="Git"/>
  <TechStack stackImage={tailwindIcon}stackName="Tailwind"/>
  <TechStack stackImage={reduxIcon} stackName="Redux"/>
</div>




          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px]">
            <StatCard value="3–5 Days" label="Typical Delivery" />
            <StatCard value="100%" label="Responsive Layouts" />
            <StatCard value="SEO-Ready" label="On-page basics" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function TrustedBy() {
  const tags = ["Restaurants", "Gyms & Fitness", "Coaching & Institutes", "Local Shops", "Service Providers"];
  return (
    <section className="pb-4">
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
        <span className="text-slate-500">Avaliable Service For: </span>
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}




function TechStack({stackImage,stackName}){

  return (

<div className="flex flex-col items-center justify-center border border-cyan-700 rounded-xl gap-2 p-4 shadow-lg">
      <img src={stackImage} alt={stackName} className="h-10 w-10 object-contain"/>
      <span className="font-outfit text-slate-400 text-sm">{stackName}</span>
</div> 

  )

}



function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="rounded-xl border border-slate-800/80 bg-slate-900/90 px-3 py-2 shadow-sm"
    >
      <div className="text-sm font-semibold text-slate-50">{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </motion.div>
  );
}

function Services() {
  const services = [
    {
      title: "Business Website",
      badge: "Most popular",
      desc: "A modern website that presents your business clearly and builds trust instantly.",
      bullets: [
        "Home, About, Services, Contact pages",
        "Whatsapp / Call to action buttons",
        "Mobile-first layouts with clean typography",
      ],
    },
    {
      title: "Landing Page",
      badge: "For campaigns",
      desc: "High-converting single page for one offer, event, or service.",
      bullets: [
        "Focused copy & sections",
        "Lead / enquiry form integration",
        "Conversion-oriented layout",
      ],
    },
    {
      title: "Website Redesign",
      badge: "Level up",
      desc: "Turn your old, cluttered website into a clean, modern experience.",
      bullets: [
        "New layout and structure",
        "Speed & UX improvements",
        "Content re-organisation",
      ],
    },
    {
      title: "Dashboard / Admin",
      badge: "Custom",
      desc: "Internal tools to manage bookings, products or data in one place.",
      bullets: [
        "Custom dashboard UI",
        "Secure login & routing",
        "Data visualisation basics",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Services"
        title="How I can help your business"
        desc="Practical, focused services designed for small & growing businesses — not complicated enterprise stuff."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 hover:border-cyan-400/80 hover:bg-slate-900/90 transition-colors shadow-sm hover:shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
          >
            {service.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-cyan-500/10 border border-cyan-400/50 px-2.5 py-0.5 text-[10px] font-medium text-cyan-200">
                {service.badge}
              </span>
            )}
            <h3 className="text-base font-semibold text-slate-50 group-hover:text-cyan-300">
              {service.title}
            </h3>
            <p className="mt-2 text-[13px] text-slate-300/90">{service.desc}</p>
            <ul className="mt-3 space-y-1.5 text-[12px] text-slate-400">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-cyan-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center text-[11px]">
              <button className="text-cyan-300 inline-flex items-center gap-1 hover:text-cyan-200">
                Add this to my project →
              </button>
              <a
                href="#contact"
                className="text-slate-400 hover:text-slate-200"
              >
                Discuss this service
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Work() {
  const projects = [
    {
      name: "Restaurant Website Demo",
      type: "Landing + Menu",
      desc: "Hero with offer, live menu preview, gallery and direct WhatsApp booking.",
      tag: "Restaurants",
      comingSoon: false,
    },
    {
      name: "Gym Website Demo",
      type: "Multi-section",
      desc: "Membership plans, trainer profiles and enquiry form in a clean layout.",
      tag: "Gyms & Fitness",
      comingSoon: true,
    },
    {
      name: "Coaching Centre Website Demo",
      type: "Results-focused",
      desc: "Course list, results, FAQs and parent enquiry funnel.",
      tag: "Education",
      comingSoon: true,
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Portfolios"
        title={""}
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/70 overflow-hidden hover:border-cyan-400/80 transition-all hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(15,23,42,0.95)]"
          >
            <div className="h-32 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center text-xs text-slate-400">
              <div className="w-10/12 h-5/6 rounded-xl border border-dashed border-slate-700/80 flex flex-col justify-center items-center gap-1 bg-slate-950/60">
                <span className="text-[11px] uppercase tracking-wide text-slate-500">
                  Demo preview
                </span>
                <span className="text-[10px] text-slate-500/90">
                  Replace with real screenshots later
                </span>
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[11px] text-cyan-300 font-medium uppercase tracking-wide">
                  {project.tag}
                </div>
                <div className="text-[10px] text-slate-500">{project.type}</div>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mt-2 text-[12px] text-slate-300/90 flex-1">
                {project.desc}
              </p>
              <button className="mt-3 inline-flex items-center justify-start text-[11px] font-medium text-cyan-300 hover:text-cyan-200">
                {project.comingSoon ? "View demo (coming soon)" : "View live demo"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter One-page",
      tag: "For trials & campaigns",
      price: "₹",
      desc: "Perfect for testing one offer, event, or service quickly.",
      features: [
        "Single landing page",
        "Mobile-first layout",
        "Enquiry / lead form",
        "WhatsApp / call buttons",
      ],
      ideal: "Great if you’re just starting and want something live quickly.",
    },
    {
      name: "Business Website",
      tag: "Best for local businesses",
      price: "Custom quote",
      highlight: true,
      desc: "A complete, professional website with all the essential pages.",
      features: [
        "Up to 5 main pages",
        "Copy & section guidance",
        "Basic SEO setup",
        "Integration of your tools (WhatsApp, forms, etc.)",
      ],
      ideal: "Perfect if you want your website to be the main trust builder.",
    },
    {
      name: "Custom + Dashboard",
      tag: "For serious systems",
      price: "Custom",
      desc: "For businesses that need both a website and a simple admin area.",
      features: [
        "Custom pages & flows",
        "Admin panel / dashboard",
        "Auth & protected routes",
        "Priority support during setup",
      ],
      ideal: "Ideal if you want to manage data or bookings internally.",
    },
  ];

  return (
    <motion.section
      id="pricing"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, transparent packages"
        desc="Every project starts with a quick conversation to understand what you need. Then I’ll suggest one of these or a custom plan."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`relative flex flex-col rounded-2xl border bg-slate-900/80 p-5 shadow-sm ${
              plan.highlight
                ? "border-cyan-400/80 shadow-[0_20px_55px_rgba(56,189,248,0.3)]"
                : "border-slate-800/80"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-5 rounded-full bg-cyan-500 text-[11px] px-3 py-0.5 font-semibold text-slate-950 shadow-md">
                Recommended
              </span>
            )}
            <div className="mb-2 text-[11px] text-slate-400 uppercase tracking-wide">
              {plan.tag}
            </div>
            <h3 className="text-base font-semibold text-slate-50">
              {plan.name}
            </h3>
            <p className="mt-1 text-[12px] text-slate-300/90">{plan.desc}</p>
            <ul className="mt-3 space-y-1.5 text-[12px] text-slate-300">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-slate-400">{plan.ideal}</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-[12px] font-semibold ${
                  plan.highlight
                    ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950"
                    : "border border-slate-700/80 text-slate-200 hover:border-cyan-400/80 hover:text-cyan-200"
                }`}
              >
                Get exact quote for this
              </a>
              <a
                href="#contact"
                className="text-[11px] text-slate-400 hover:text-slate-200 text-center"
              >
                Not sure? Ask me which plan fits you →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="About"
        title="Who I am behind the code"
        desc="I’m a developer who cares about how the website feels for your customers — not just how the code looks."
      />
      <div className="mt-6 grid gap-8 md:grid-cols-[3fr,2fr] items-start">
        <motion.div
          className="text-sm text-slate-300 space-y-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I&apos;m a MERN stack developer who loves building useful, clean
            interfaces for real businesses. I focus on projects where a better
            website can directly impact enquiries, bookings, or sales.
          </p>
          <p>
            My process is simple: understand your business, map the key actions
            for your visitors, then design the website around those actions.
          </p>
          <p>
            I keep communication clear and simple. You don&apos;t need to know
            React, Next.js or MongoDB — that&apos;s my job. Your job is to tell
            me about your customers and your goals.
          </p>
        </motion.div>
        <motion.div
          className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 text-sm text-slate-300 shadow-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-slate-50 mb-3">
            Quick profile
          </h3>
          <ul className="space-y-2 text-[12px]">
            <li>
              <span className="text-slate-500">Stack:</span> React, Next.js,
              Node.js, Express, MongoDB
            </li>
            <li>
              <span className="text-slate-500">Focus:</span> Business websites,
              dashboards & landing pages
            </li>
            <li>
              <span className="text-slate-500">Location:</span> India (working
              with clients worldwide)
            </li>
            <li>
              <span className="text-slate-500">Style:</span> Clean, minimal,
              business-first design
            </li>
            <li>
              <span className="text-slate-500">Communication:</span> Clear,
              simple and responsive
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

function WhyMe() {
  const points = [
    {
      title: "Business-first approach",
      desc: "I ask about your customers and goals first, then design around that — not the other way round.",
    },
    {
      title: "Fast & responsive",
      desc: "Every layout is optimised for mobile and built to load quickly on real-world networks.",
    },
    {
      title: "Simple process",
      desc: "Understand your business → decide structure → design → build → launch. You see the progress clearly.",
    },
    {
      title: "Clear communication",
      desc: "Regular updates, simple language, and realistic timelines. No ghosting, no hidden costs.",
    },
  ];

  return (
    <motion.section
      id="why-me"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Why work with me"
        title="What makes it different to work with me"
        desc="You’re not just getting a developer; you’re getting someone thinking about your conversions and customer journey."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {points.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 hover:border-cyan-400/70 hover:bg-slate-900/95 transition-colors"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="mt-2 text-[13px] text-slate-300/90">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Future Restaurant Client",
      role: "Local restaurant owner",
      text: "“The new website made it much easier for customers to see our menu and contact us. Simple, clean, and effective.”",
    },
    {
      name: "Future Coaching Client",
      role: "Coaching centre owner",
      text: "“Parents now check our website before even calling us. It gives a strong first impression of our institute.”",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Social proof"
        title="Client words (coming soon)"
        desc="These are example testimonials, but this is the standard I aim for in every project."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 text-sm text-slate-300 shadow-sm"
          >
            <p className="text-xs text-slate-200 italic">{t.text}</p>
            <div className="mt-4">
              <div className="text-sm font-semibold text-slate-50">
                {t.name}
              </div>
              <div className="text-[11px] text-slate-400">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 border-t border-slate-900/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      custom={0.1}
    >
      <SectionHeader
        eyebrow="Contact"
        title="Tell me about your business"
        desc="Share a few details and I’ll reply with 1–2 clear options, rough pricing and next steps. No pressure to say yes."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-[3fr,2fr]">
        <motion.form
          className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/80"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Name">
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/70"
                placeholder="Your name"
              />
            </FormField>
            <FormField label="Email">
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/70"
                placeholder="you@example.com"
              />
            </FormField>
          </div>
          <FormField label="Business type">
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/70"
              placeholder="Restaurant, gym, coaching, etc."
            />
          </FormField>
          <FormField label="What do you need?">
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/70 resize-none"
              placeholder="Example: I run a gym and need a simple website with plans, trainer list and WhatsApp enquiries."
            />
          </FormField>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-105 transition-colors shadow-[0_16px_45px_rgba(56,189,248,0.8)]"
          >
            Send message
          </motion.button>
          <p className="text-[11px] text-slate-400">
            Or just send: <span className="text-slate-200 italic">
              “Hi, I run a [business], and I think I need a website.”
            </span>{" "}
            I’ll guide you from there.
          </p>
        </motion.form>

        <motion.div
          className="space-y-4 text-sm text-slate-300"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
            <h3 className="text-sm font-semibold text-slate-50 mb-2">
              Direct contact
            </h3>
            <p className="text-xs text-slate-300">
              WhatsApp: <span className="text-cyan-300">+91-XXXXXXXXXX</span>
            </p>
            <p className="text-xs text-slate-300">
              Email:{" "}
              <span className="text-cyan-300">your-email@gmail.com</span>
            </p>
          </div>
          <p className="text-[11px] text-slate-400">
            I usually reply within 24 hours. If we&apos;re a good fit, we&apos;ll
            lock a simple plan, timeline and quote. If not, I’ll still share
            suggestions you can use.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-slate-300 uppercase tracking-[0.16em]">
        {label}
      </label>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl sm:text-2xl md:text-[26px] font-semibold text-slate-50 tracking-tight">
        {title}
      </h2>
      {desc && (
        <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-900/80 py-6 text-center text-[11px] text-slate-500/90">
      © {new Date().getFullYear()} Raghuvar Jha · Freelance Web Developer ·
      Built with React & Tailwind
    </footer>
  );
}

/** Mobile floating CTA **/
function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
      <div className="max-w-md mx-auto rounded-full border border-slate-800/80 bg-slate-950/90 backdrop-blur flex items-center justify-between px-4 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
        <div className="flex flex-col">
          <span className="text-[11px] text-slate-300">
            Need a website for your business?
          </span>
          <span className="text-[10px] text-slate-500">
            Tap & tell me what you do.
          </span>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default App;
