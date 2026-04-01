# AGWASLAB - Red Team Social Engineering Website

## 1. Project Overview
- **Project Name:** AGWASLAB Website
- **Type:** Single-page marketing website (React SPA)
- **Core Functionality:** Red team social engineering company showcasing phishing, smishing, vishing, and credential theft simulation services
- **Target Users:** Organizations and individuals seeking security awareness training

## 2. UI/UX Specification

### Layout Structure
- **Header:** Fixed navigation with logo and menu links
- **Hero:** Full-viewport section with tagline and CTA
- **Services:** Grid of 4 main services
- **About:** Company info and mission
- **Process:** How the simulations work
- **Contact:** Contact form
- **Footer:** Links, social, copyright

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary:** #0a0a0a (Deep black)
- **Secondary:** #1a1a2e (Dark navy)
- **Accent:** #00ff88 (Neon green - hacker/cyber aesthetic)
- **Accent 2:** #ff3366 (Crimson red - for danger/warning elements)
- **Text Primary:** #ffffff
- **Text Secondary:** #888888
- **Surface:** #111111

#### Typography
- **Headings:** "Orbitron", sans-serif (futuristic/tech)
- **Body:** "Rajdhani", sans-serif (clean tech font)
- **Monospace accents:** "JetBrains Mono" (for code/tech elements)

#### Visual Effects
- Glowing neon borders on hover
- Matrix-style falling characters background (subtle)
- Smooth scroll behavior
- Fade-in animations on scroll
- Glitch effect on logo hover
- Card hover lift with glow

### Components

#### Navigation
- Logo with glitch effect on hover
- Menu items: Home, Services, About, Process, Contact
- Mobile hamburger menu

#### Hero Section
- Animated headline with typing effect
- Subtitle describing services
- CTA button with glow effect
- Background: subtle matrix rain animation

#### Services Cards
- Icon for each service
- Service name
- Brief description
- Hover: lift + border glow

#### Services:
1. **Phishing Simulations** - Email-based attack simulation
2. **Smishing Simulations** - SMS/WhatsApp attack simulation  
3. **Vishing Simulations** - Voice call attack simulation
4. **Credential Theft** - Assessment and protection services

#### About Section
- Company story
- Why choose us
- Stats counters (projects, clients, years)

#### Process Section
- 4-step process visualization
- Each step: number, icon, title, description

#### Contact Form
- Name, Email, Company, Message fields
- Submit button with loading state
- Success/error feedback

## 3. Functionality Specification

### Core Features
- Smooth scrolling navigation
- Animated stats counter on scroll
- Form validation
- Matrix background animation (canvas)
- Intersection Observer for scroll animations

### User Interactions
- Nav links scroll to sections
- Cards have hover effects
- Form shows validation errors
- Mobile menu toggle

## 4. Acceptance Criteria
- [ ] Page loads without errors
- [ ] All sections render correctly
- [ ] Navigation scrolls to correct sections
- [ ] Form validates required fields
- [ ] Animations play smoothly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Matrix background animates
