import { useState, useEffect } from 'react';
// Importing UI icons from the 'lucide-react' icon library
import { 
  CheckCircle, 
  Send, 
  Menu, 
  X, 
  ExternalLink, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  HelpCircle,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------

  // Dark/Light Theme state (persisted in localStorage, defaults to system preference)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mobile navigation menu toggle state (open/closed)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active navigation section state for scroll highlighting
  const [activeSection, setActiveSection] = useState('hero');

  // Contact form input values state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Contact form submission status & feedback message
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // --------------------------------------------------------------------------
  // THEME TOGGLE HANDLER
  // --------------------------------------------------------------------------

  // Persist theme preference when toggled
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // --------------------------------------------------------------------------
  // SCROLL OBSERVER & NAVIGATION HANDLERS
  // --------------------------------------------------------------------------

  // Listen to window scroll position and automatically update active section link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll to target section when navigation link is clicked
  const scrollTo = (id) => {
    setIsMenuOpen(false); // Close mobile drawer menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --------------------------------------------------------------------------
  // FORM HANDLERS
  // --------------------------------------------------------------------------

  // Update input state as the user types in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form inputs and simulate message dispatch
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic required field validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }

    // Success state feedback
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });

    // Reset input fields
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // --------------------------------------------------------------------------
  // DATA STRUCTURES
  // --------------------------------------------------------------------------

  // Navigation Links
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience & Skills', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Technical Skills & Specialties Categorized
  const skillCategories = [
    {
      title: "Validation & Testing",
      skills: ["System Testing", "Integration Testing", "Web Application Validation", "Defect Investigation & Root Cause Analysis"]
    },
    {
      title: "Domain Expertise",
      skills: ["Air Traffic Control & Display Systems", "Retail & Enterprise Platforms", "Public Sector & Social Insurance Systems"]
    },
    {
      title: "Technical Attributes",
      skills: ["Quality Assurance (QA) Strategy", "System Reliability", "End-to-End Test Execution", "Cross-Platform Verification"]
    },
    {
      title: "Core Competencies",
      skills: ["Detail-Oriented Analysis", "Curiosity-Driven Problem Solving", "Operational Support", "Stakeholder Collaboration"]
    }
  ];

  // Portfolio Project Highlights
  const projectHighlights = [
    {
      title: "Luftfartsverket - Eurocat Project",
      subtitle: "Swedish Air Traffic Control System Upgrade",
      link: "https://www.lfv.se",
      description: "Validated display software and integration layers for the Swedish Airspace system in compliance with Eurocontrol standards, ensuring seamless operational continuity and air safety.",
      highlights: [
        "Tested next-gen display software for Swedish Airspace",
        "Aligned operations with Eurocontrol international standards",
        "Conducted root-cause defect investigations for live operational support"
      ],
      tag: "Aviation Safety"
    },
    {
      title: "IKEA - E-Commerce Integration Testing",
      subtitle: "Global Retail Platform Modernization",
      link: "https://www.ikea.com/se/sv/",
      description: "Executed comprehensive integration testing across backend services and frontend user journeys during IKEA's major transition into global modern e-commerce.",
      highlights: [
        "End-to-end testing of complex retail integration pipelines",
        "Validated web platform stability under multi-market operations",
        "Collaborated with cross-functional consultant teams"
      ],
      tag: "E-Commerce & Retail"
    }
  ];

  // --------------------------------------------------------------------------
  // DYNAMIC COLOR PALETTE UTILITIES (Theme dependent)
  // --------------------------------------------------------------------------
  const theme = {
    pageBg: isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800',
    navBg: isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm',
    cardBg: isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm',
    cardSubtleBg: isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/80 border-slate-200',
    sectionAltBg: isDarkMode ? 'bg-slate-900/50 border-slate-800/80' : 'bg-slate-100/60 border-slate-200',
    headingText: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-slate-400' : 'text-slate-600',
    border: isDarkMode ? 'border-slate-800' : 'border-slate-200',
    inputBg: isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900',
  };

  // --------------------------------------------------------------------------
  // RENDER APP
  // --------------------------------------------------------------------------
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-blue-500 selection:text-white ${theme.pageBg}`}>
      
      {/* ======================================================================
          NAVBAR COMPONENT
          ====================================================================== */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo / Name */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('hero')}>
              <div className="bg-blue-600 p-2 rounded-lg text-white shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className={`font-bold text-lg tracking-tight transition-colors ${theme.headingText}`}>
                John Young
              </span>
            </div>

            {/* Desktop Navigation Links & Dark Mode Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              <nav className="flex space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : isDarkMode
                          ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              {/* Theme Switcher Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
                aria-label="Toggle Dark/Light Mode"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Actions (Theme Switcher + Drawer Button) */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${
                  isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                aria-label="Toggle Dark/Light Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className={`md:hidden border-b px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ======================================================================
          HERO SECTION
          ====================================================================== */}
      <section id="hero" className={`relative py-24 lg:py-32 overflow-hidden border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-900 text-white border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* QA Experience Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-900/60 border border-blue-500/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>18+ Years Quality Assurance Experience</span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Software Validation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                & Integration Engineer
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Ensuring complex systems, web integrations, and mission-critical applications are thoroughly tested, compliant, and operational before going live.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Get in Touch <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-all"
              >
                View Key Highlights
              </button>
            </div>

            {/* Personal Interest / Fun Fact Badge */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex items-center justify-center space-x-3 text-slate-400 text-sm max-w-xl">
              <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                <strong>Fun Fact:</strong> Love local pub quizzes — asking system testing questions by day, answering general knowledge questions by night!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          ABOUT SECTION
          ====================================================================== */}
      <section id="about" className={`py-20 border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl font-bold tracking-tight ${theme.headingText}`}>Professional Bio</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto mt-3 mb-4"></div>
            <p className={`leading-relaxed text-base ${theme.subText}`}>
              A rigorous, detail-oriented perspective built over nearly two decades in high-stakes operational environments.
            </p>
          </div>

          {/* Bio Card */}
          <div className={`max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl border transition-colors duration-300 space-y-6 ${theme.cardBg}`}>
            <p className={`leading-relaxed text-base text-center sm:text-left ${theme.subText}`}>
              I am a dedicated Validation Engineer specializing in ensuring that complex systems, integrations, and web platforms are thoroughly tested and compliant prior to operational launch. With a strong foundation in high-stakes environments, I combine analytical rigor with a natural curiosity to identify defects and optimize system performance.
            </p>
            <p className={`leading-relaxed text-base text-center sm:text-left ${theme.subText}`}>
              My work bridges technical execution and operational reliability, helping organizations deploy seamless digital solutions with complete confidence. My multidisciplinary background enables me to adapt quickly to diverse domain structures and technical ecosystems.
            </p>

            {/* Key Contact Strip */}
            <div className={`pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t ${theme.border}`}>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:xxxxx@hotmail.com" className="hover:text-blue-600 font-medium text-sm">xxxxx@hotmail.com</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Sweden (Aviation & Enterprise QA)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          EXPERIENCE & SKILLS SECTION
          ====================================================================== */}
      <section id="experience" className={`py-20 border-b transition-colors duration-300 ${theme.sectionAltBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Experience Summary */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className={`text-3xl font-bold tracking-tight ${theme.headingText}`}>Background & Experience</h2>
              <div className="w-16 h-1 bg-blue-600 rounded mx-auto mt-3 mb-4"></div>
              <p className={`text-lg leading-relaxed ${theme.subText}`}>
                My career spans over 18 years across mission-critical aviation, retail, and public sector domains.
              </p>
            </div>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Aviation Experience Card */}
              <div className={`p-8 rounded-xl border relative overflow-hidden transition-colors duration-300 ${theme.cardBg}`}>
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg shrink-0 ${isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${theme.headingText}`}>Swedish Civil Aviation Authority</h3>
                    <p className={`text-sm ${theme.subText}`}>Luftfartsverket • 10 Years</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${theme.subText}`}>
                  Spent a decade as an Air Traffic System Engineer validating display software for Swedish airspace while actively supporting live operations through thorough defect investigations and system resolution.
                </p>
              </div>

              {/* Consultancy Experience Card */}
              <div className={`p-8 rounded-xl border relative overflow-hidden transition-colors duration-300 ${theme.cardBg}`}>
                <div className="absolute top-0 right-0 w-2 h-full bg-indigo-600"></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg shrink-0 ${isDarkMode ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${theme.headingText}`}>Test Consultancy</h3>
                    <p className={`text-sm ${theme.subText}`}>IKEA & Försäkringskassan • 8 Years</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${theme.subText}`}>
                  Delivered high-value testing solutions for major industry leaders, including retail giant IKEA (e-Commerce transformation) and Swedish Social Insurance company, Försäkringskassan.
                </p>
              </div>

            </div>
          </div>

          {/* Categorized Skills Grid */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className={`text-2xl font-bold tracking-tight ${theme.headingText}`}>Skills & Specialties</h3>
              <div className="w-12 h-1 bg-blue-600 rounded mx-auto mt-2 mb-3"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className={`p-6 rounded-xl border transition-colors duration-300 flex flex-col justify-between ${theme.cardBg}`}>
                  <div>
                    <h4 className={`text-base font-bold text-center border-b pb-3 mb-4 ${theme.headingText} ${theme.border}`}>
                      {cat.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className={`flex items-start text-xs ${theme.subText}`}>
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          PROJECTS SECTION
          ====================================================================== */}
      <section id="projects" className={`py-20 border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl font-bold tracking-tight ${theme.headingText}`}>Work Project Highlights</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto mt-3 mb-4"></div>
            <p className={`text-lg ${theme.subText}`}>
              Key initiatives where software validation directly safeguarded mission-critical operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projectHighlights.map((project, idx) => (
              <div key={idx} className={`rounded-2xl border p-8 flex flex-col justify-between hover:border-blue-500 transition-all shadow-sm ${theme.cardBg}`}>
                <div>
                  {/* Tag Pill */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded ${isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                      {project.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${theme.headingText}`}>{project.title}</h3>
                  <p className={`text-sm font-medium mb-4 ${theme.subText}`}>{project.subtitle}</p>
                  
                  <p className={`text-sm mb-6 leading-relaxed ${theme.subText}`}>
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className={`flex items-center text-xs ${theme.subText}`}>
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Visit Official Portal <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          CONTACT SECTION
          ====================================================================== */}
      <section id="contact" className={`py-20 border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in Touch</h2>
            <div className="w-16 h-1 bg-blue-500 rounded mx-auto mt-3 mb-4"></div>
            <p className="text-slate-400">
              Interested in consulting, system validation, or technical collaboration? Send a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            
            {/* Direct Contact Details Card */}
            <div className="space-y-6">
              <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg mb-4 text-white">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-slate-300">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                      <a href="mailto:xxxxx@hotmail.com" className="text-sm hover:text-blue-300 transition-colors">
                        xxxxx@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Specialty</p>
                      <p className="text-sm">Air Traffic, E-Commerce & Integration QA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-2 bg-slate-800/90 p-8 rounded-xl border border-slate-700">
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg text-sm ${formStatus.success ? 'bg-emerald-900/50 border border-emerald-500 text-emerald-200' : 'bg-red-900/50 border border-red-500 text-red-200'}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="e.g. jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    placeholder="System Validation Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    placeholder="Briefly describe your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md transition-all"
                >
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          FOOTER
          ====================================================================== */}
      <footer className={`border-t py-8 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© {new Date().getFullYear()} John Young. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}