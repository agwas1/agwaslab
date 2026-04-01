import { useState, useRef, useEffect } from 'react'
import { 
  Target, 
  Mail, 
  Smartphone, 
  Key, 
  Users, 
  FileText,
  ArrowRight,
  MessageSquare,
  Phone,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle,
  Send,
  Menu,
  X,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [formData, setFormData] = useState({ 
    fullName: '', 
    companyName: '', 
    email: '', 
    phone: '', 
    service: '',
    message: '' 
  })
  const [formStatus, setFormStatus] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  
  const servicesRef = useRef(null)
  const attackFlowRef = useRef(null)
  const pricingRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setLoaded(true)
    
    const handleScroll = () => {
      const sections = ['home', 'services', 'attack-flow', 'pricing', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.message) {
      return
    }
    setFormStatus('success')
    setFormData({ fullName: '', companyName: '', email: '', phone: '', service: '', message: '' })
  }

  const services = [
    { icon: Target, title: 'Social Engineering Assessments', desc: 'Comprehensive evaluations of your organization\'s resistance to social engineering attacks.' },
    { icon: Mail, title: 'Phishing Simulations', desc: 'Authorized email-based security testing to measure employee susceptibility to phishing attacks.' },
    { icon: Smartphone, title: 'Smishing & Vishing Tests', desc: 'SMS and voice-based threat assessments of your organization\'s vulnerability.' },
    { icon: Key, title: 'Credential Theft Assessments', desc: 'Testing of authentication systems and credential handling practices.' },
    { icon: Users, title: 'Security Awareness Training', desc: 'Tailored employee education programs based on assessment findings.' },
    { icon: FileText, title: 'Comprehensive Audit Reports', desc: 'Detailed findings with remediation recommendations and clear metrics.' }
  ]

  const attackFlow = [
    { num: '1', title: 'Initial Contact', methods: ['Email', 'SMS', 'Call'], icons: [Mail, MessageSquare, Phone], desc: 'Convincing message to victim' },
    { num: '2', title: 'Redirection', methods: ['Fake Portal'], icons: [Globe], desc: 'Victim directed to login page' },
    { num: '3', title: 'Credential Capture', methods: ['Login Details'], icons: [Lock], desc: 'Attacker captures credentials' },
    { num: '4', title: 'System Access', methods: ['Unauthorized Access'], icons: [AlertTriangle], desc: 'Attacker logs in with stolen creds' }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: 'KES 50,000',
      desc: 'Perfect for small organizations',
      features: [
        'Basic assessment',
        'Single service focus',
        '1 consultation session',
        'Detailed report',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 200,000',
      desc: 'Ideal for medium-sized organizations',
      features: [
        'Comprehensive assessment',
        'Multiple methodologies',
        '3 consultation sessions',
        'Executive summary',
        'Remediation roadmap',
        'Priority support'
      ],
      cta: 'Choose Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large organizations with unique needs',
      features: [
        'Fully customized plan',
        'Unlimited consultations',
        'Dedicated account manager',
        'Ongoing monitoring',
        '24/7 support',
        'Custom integrations'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ]

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="scroll-progress"></div>
      
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">
            <Shield className="logo-icon" />
            <span>AgwasLab</span>
          </a>
          <ul className="nav-links">
            {['Home', 'Services', 'How Attacks Work', 'Pricing', 'About', 'Contact'].map((item) => {
              const section = item.toLowerCase().replace(' ', '-').replace('how-attacks-work', 'attack-flow')
              return (
                <li key={item}>
                  <a 
                    href={`#${section}`} 
                    className={activeSection === section ? 'active' : ''}
                    onClick={(e) => { 
                      e.preventDefault()
                      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {['Home', 'Services', 'How Attacks Work', 'Pricing', 'About', 'Contact'].map((item, index) => {
            const section = item.toLowerCase().replace(' ', '-').replace('how-attacks-work', 'attack-flow')
            return (
              <a 
                key={item}
                href={`#${section}`}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
                  setMenuOpen(false)
                }}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {item}
                <ChevronRight size={18} />
              </a>
            )
          })}
        </div>
      </div>

      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-particles"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={14} />
            <span>Kenya's Leading Red Team Experts</span>
          </div>
          <h1 className="hero-title">
            Protecting Your Organization Through <span className="gradient-text">Human-Centric Security</span>
          </h1>
          <p className="hero-subtitle">
            Based in Kenya, AgwasLab specializes in red team operations including phishing, vishing, smishing, and credential theft testing. We identify weaknesses in your human capital and provide actionable recommendations.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef)}}>
              Get Started 
              <ArrowRight size={18} className="btn-icon" />
            </a>
            <a href="#services" className="cta-button-secondary" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef)}}>
              Explore Services
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section id="services" className="section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive security assessments tailored to your organization's needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card-new"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="service-card-icon">
                  <service.icon size={32} />
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <a href="#contact" className="service-card-link" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef)}}>
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="attack-flow" className="section section-dark" ref={attackFlowRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Attack Methodology</span>
            <h2 className="section-title">How Attacks Happen</h2>
            <p className="section-subtitle">
              Understanding the attack chain that threatens your organization
            </p>
          </div>
          
          <div className="attack-flow-timeline">
            {attackFlow.map((step, index) => (
              <div key={index} className="attack-flow-card" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="attack-flow-number">{step.num}</div>
                <div className="attack-flow-connector">
                  {index < attackFlow.length - 1 && <div className="connector-line"></div>}
                </div>
                <div className="attack-flow-content">
                  <div className="attack-icons">
                    {step.icons.map((Icon, i) => (
                      <div key={i} className="attack-icon-wrapper">
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>
                  <h3>{step.title}</h3>
                  <span className="attack-methods">{step.methods.join(' | ')}</span>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="solution-box">
            <div className="solution-icon">
              <Shield size={40} />
            </div>
            <h3>Our Solution: Proactive Defense</h3>
            <p>AgwasLab simulates this EXACT attack process to identify vulnerabilities BEFORE malicious actors exploit them. We test your employees, systems, and response procedures.</p>
            <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef)}}>
              Test Your Defenses Today
              <ArrowRight size={18} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="section" ref={pricingRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Pricing Plans</span>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your organization's needs
            </p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && <span className="popular-tag">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="price-wrapper">
                  <span className="price">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="price-period">/project</span>}
                </div>
                <p className="price-desc">{plan.desc}</p>
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} /> {feature}</li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={plan.popular ? 'cta-button' : 'cta-button-outline'} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(contactRef)}}
                >
                  {plan.cta}
                  <ArrowRight size={16} className="btn-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section-dark" ref={aboutRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Who We Are</span>
            <h2 className="section-title">About AgwasLab</h2>
            <p className="section-subtitle">
              A licensed penetration testing and security audit firm based in Kenya
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>To strengthen organizational security by identifying and addressing human vulnerabilities before malicious actors can exploit them.</p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>To be Kenya's most trusted partner in cybersecurity, setting the standard for ethical red team operations in Africa.</p>
            </div>
          </div>
          
          <div className="commitments">
            <h3>Our Commitment</h3>
            <div className="commitments-grid">
              {[
                { icon: Shield, title: 'Licensed Operations', desc: 'All testing with explicit authorization' },
                { icon: Award, title: 'Ethical Standards', desc: 'Professional conduct and best practices' },
                { icon: FileText, title: 'Detailed Documentation', desc: 'Comprehensive reporting' },
                { icon: Users, title: 'Client Confidentiality', desc: 'Strictly confidential findings' }
              ].map((item, index) => (
                <div key={index} className="commitment-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="commitment-icon">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section" ref={contactRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Ready to Strengthen Your Security?</h2>
            <p className="section-subtitle">
              Contact us today for a free consultation
            </p>
          </div>
          
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+254 781 917 121</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">agwasagwas@protonmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Kenya</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus === 'success' ? (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! Your message has been sent. We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleFormChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                    >
                      <option value="">Select a service</option>
                      <option value="social-engineering">Social Engineering Assessment</option>
                      <option value="phishing">Phishing Simulation</option>
                      <option value="smishing-vishing">Smishing & Vishing Tests</option>
                      <option value="credential-theft">Credential Theft Assessment</option>
                      <option value="training">Security Awareness Training</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your security assessment needs..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <Shield size={24} />
                <span>AgwasLab</span>
              </a>
              <p>Kenya's leading red team social engineering company.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              {['Services', 'Pricing', 'About', 'Contact'].map(item => {
                const section = item.toLowerCase().replace(' ', '-')
                return (
                  <a key={item} href={`#${section}`}>{item}</a>
                )
              })}
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              {['Phishing', 'Smishing & Vishing', 'Credential Theft', 'Training'].map(item => (
                <a key={item} href="#services">{item}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 AgwasLab. All rights reserved. | Licensed Penetration Testing & Security Audit Firm</p>
            <p className="footer-note">All testing conducted with explicit client authorization.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
