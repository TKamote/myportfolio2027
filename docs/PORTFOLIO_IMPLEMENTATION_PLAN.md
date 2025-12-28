# Next.js Portfolio Website - Implementation Plan

## 🎯 Project Overview

**Portfolio Website for David V Onquit**
- Modern, professional portfolio showcasing mobile app development work
- Highlight: Started coding at 52, now 57 with 2 apps live on App Store
- Focus: Mobile apps, Firebase expertise, AI-assisted development, livestreaming tech

---

## 🏗️ Technical Architecture

### Tech Stack:
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React or Heroicons
- **Deployment**: Vercel (recommended) or Netlify
- **Domain**: Custom domain (optional)

### Project Structure:
```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── projects/
│   │   └── page.tsx         # Projects listing
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills/technologies
│   ├── Content.tsx          # YouTube/Facebook section
│   ├── Contact.tsx          # Contact form/section
│   └── ProjectCard.tsx      # Individual project card
├── lib/
│   ├── data.ts              # Portfolio data/content
│   └── utils.ts             # Utility functions
├── public/
│   ├── images/              # Project screenshots, photos
│   └── favicon.ico
└── styles/
    └── globals.css          # Global styles
```

---

## 📋 Content Structure

### 1. Hero Section
- **Name**: David V Onquit
- **Title**: Mobile App Developer
- **Tagline**: "Building iOS & Android apps since 2020"
- **Location**: Singapore
- **Key Highlight**: "Started coding at 52, now 57 with 2 apps live on App Store"
- **CTA**: "View My Work" button

### 2. About Section
- **Story**: Started coding in 2020 at age 52
- **Journey**: Learning to code later in life
- **Approach**: AI-assisted development, modern tools
- **Achievements**: 
  - 2 apps live on Apple App Store
  - 75+ GitHub repositories
- **Location**: Singapore Permanent Resident

### 3. Featured Projects Section

#### Project 1: PDF Report Maker
- **Title**: PDF Report Maker
- **Description**: Professional field report generator with templates and photo integration
- **Features**: 
  - Multiple professional templates
  - Photo integration
  - Shareable PDFs
  - Ideal for inspections, audits, site documentation
- **Tech**: React Native, Expo, Firebase
- **Links**: 
  - Website: PDFReportMaker.com
  - App Store: [Link]
  - GitHub: [If public]

#### Project 2: TourTrack
- **Title**: TourTrack
- **Description**: Billiard tournament tracking and management app
- **Features**:
  - Tournament management
  - Live scoring
  - Player tracking
- **Tech**: React Native, Expo, Firebase
- **Links**:
  - Website: tournatracker.com
  - App Store: [Link]
  - GitHub: [If public]

#### Project 3: Live Streaming Overlay App
- **Title**: Live Streaming Overlay System
- **Description**: Custom overlay application for professional billiard livestreams
- **Features**:
  - Live scoring overlay with real-time scores
  - Turn indicators
  - Ball tracking (visual tracking of all 9 balls)
  - OBS Studio integration
  - 4K video support
- **Benefits**:
  - Makes livestreams unique and professional
  - Minimal editing required
  - Rich information display during streams
- **Use Case**: Used for Pinoy SG Billiards YouTube channel
- **Tech**: React, TypeScript, OBS integration
- **Links**:
  - YouTube Example: [Link to livestream]
  - GitHub: [If public]

#### Project 4: DailyVibe (Optional)
- **Title**: DailyVibe
- **Description**: AI-powered habit tracker
- **Status**: Recently built, in TestFlight
- **Tech**: React Native, Expo, TypeScript

### 4. Skills & Technologies Section
- **Mobile Development**: iOS & Android app development
- **Frontend**: React Native, Expo, TypeScript, JavaScript
- **Backend**: Firebase (Firestore, Auth, Functions, Storage)
- **Exploring**: Node.js
- **Tools**: 
  - Cursor IDE (AI-assisted development)
  - GitHub Copilot
  - GitHub
  - OBS Studio (for streaming)
- **Specializations**:
  - Mobile app development
  - Live streaming technology
  - Real-time data visualization
  - AI-assisted development workflow

### 5. Content Creation Section
- **YouTube**: Pinoy SG Billiards
  - Link: https://www.youtube.com/@PinoySGBilliards
  - Description: Livestreaming billiard tournaments
  - Features: Custom overlay app, live scoring, ball tracking
- **Facebook**: Pinoy SG Billiards
  - Link: https://www.facebook.com/share/1Ze8kWN3N8/?mibextid=wwXIfr
- **Content**: Billiard tournament livestreams with professional overlays

### 6. Contact Section
- **Email**: david@pdfreportmaker.com
- **GitHub**: https://github.com/TKamote
- **Location**: Singapore
- **Social Links**: YouTube, Facebook
- **Contact Form**: Optional (can use EmailJS or Formspree)

---

## 🎨 Design Approach

### Design Philosophy:
- **Modern & Clean**: Minimalist design, focus on content
- **Professional**: Showcase technical skills and achievements
- **Responsive**: Mobile-first, works on all devices
- **Accessible**: Good contrast, readable fonts
- **Performance**: Fast loading, optimized images

### Color Scheme:
- **Primary**: Professional blue or teal
- **Secondary**: Dark gray/black for text
- **Accent**: Highlight color for CTAs
- **Background**: White/light gray or dark mode option

### Typography:
- **Headings**: Bold, modern sans-serif (Inter, Poppins, or similar)
- **Body**: Clean, readable sans-serif
- **Code**: Monospace for technical content

### Layout:
- **Hero**: Full-width, centered content
- **Sections**: Max-width container, well-spaced
- **Projects**: Grid layout (2-3 columns on desktop)
- **Navigation**: Sticky header, smooth scroll

---

## 🚀 Implementation Phases

### Phase 1: Setup & Foundation (Day 1)
**Goal**: Get Next.js project running with basic structure

**Tasks**:
- [ ] Create Next.js 14 project with TypeScript
- [ ] Set up Tailwind CSS
- [ ] Configure project structure
- [ ] Set up basic routing (Home, About, Projects, Contact)
- [ ] Create layout with Header and Footer
- [ ] Set up global styles

**Deliverables**:
- Working Next.js app
- Basic navigation
- Responsive layout

---

### Phase 2: Content & Data (Day 1-2)
**Goal**: Organize all content and create data structure

**Tasks**:
- [ ] Create data file with all portfolio content
- [ ] Organize project information
- [ ] Write copy for all sections
- [ ] Collect/gather project screenshots
- [ ] Set up image optimization

**Deliverables**:
- Complete content data structure
- All text content ready
- Images organized

---

### Phase 3: Core Sections (Day 2-3)
**Goal**: Build all main sections

**Tasks**:
- [ ] Hero section with name, title, tagline
- [ ] About section with story and achievements
- [ ] Projects section with featured projects
- [ ] Skills section with technologies
- [ ] Content creation section (YouTube/Facebook)
- [ ] Contact section with links

**Deliverables**:
- All main sections built
- Content displayed properly
- Responsive design

---

### Phase 4: Enhancements (Day 3-4)
**Goal**: Add polish and interactivity

**Tasks**:
- [ ] Add animations (Framer Motion)
- [ ] Smooth scrolling
- [ ] Hover effects on project cards
- [ ] Image galleries for projects
- [ ] Dark mode toggle (optional)
- [ ] Loading states
- [ ] Error handling

**Deliverables**:
- Polished, interactive website
- Smooth animations
- Professional feel

---

### Phase 5: Optimization & Deployment (Day 4-5)
**Goal**: Optimize and deploy

**Tasks**:
- [ ] Image optimization
- [ ] SEO setup (meta tags, Open Graph)
- [ ] Performance optimization
- [ ] Accessibility checks
- [ ] Cross-browser testing
- [ ] Deploy to Vercel/Netlify
- [ ] Custom domain setup (if needed)

**Deliverables**:
- Live portfolio website
- Fast loading times
- SEO optimized
- Accessible

---

## 📝 Content Details

### Hero Section Copy:
```
David V Onquit
Mobile App Developer

Building iOS & Android apps since 2020
Started coding at 52, now 57 with 2 apps live on App Store
Based in Singapore
```

### About Section Copy:
```
About Me

I started my coding journey in 2020 at the age of 52, proving that it's never too late to learn something new. Now at 57, I've built and launched 2 mobile applications on the Apple App Store, with over 75 repositories on GitHub.

My approach to development combines modern tools with AI-assisted workflows, using Cursor IDE and GitHub Copilot to enhance productivity. I specialize in mobile app development for iOS and Android, with expertise in React Native, Expo, and Firebase.

As a Singapore Permanent Resident, I'm passionate about creating practical applications that solve real-world problems, from field report generation to tournament tracking systems.

Key Achievements:
• 2 apps live on Apple App Store
• 75+ GitHub repositories
• Active livestreamer with custom overlay technology
• Specialized in mobile app development
```

### Projects Section Copy:

**PDF Report Maker:**
```
PDF Report Maker

A professional field report generator that helps users create clean, shareable PDFs for inspections, audits, and site documentation.

Features:
• Multiple professional templates
• Photo integration
• Customizable input fields
• Shareable PDF generation

Technologies: React Native, Expo, Firebase
Status: Live on App Store
Website: PDFReportMaker.com
```

**TourTrack:**
```
TourTrack

A comprehensive tournament tracking and management system designed for billiard tournaments and competitions.

Features:
• Tournament management
• Live scoring
• Player tracking
• Match scheduling

Technologies: React Native, Expo, Firebase
Status: Live on App Store
Website: tournatracker.com
```

**Live Streaming Overlay:**
```
Live Streaming Overlay System

A custom overlay application that transforms billiard livestreams into professional broadcasts with real-time data visualization.

Features:
• Live scoring overlay with real-time updates
• Turn indicators
• Ball tracking (visual tracking of all 9 balls)
• OBS Studio integration
• 4K video support

Benefits:
• Makes livestreams unique and professional
• Minimal editing required
• Rich information display during streams

Technologies: React, TypeScript, OBS Studio
Use Case: Pinoy SG Billiards YouTube channel
```

---

## 🎯 Key Features

### Must-Have:
1. **Responsive Design** - Works on mobile, tablet, desktop
2. **Fast Loading** - Optimized images, lazy loading
3. **Smooth Navigation** - Easy to browse sections
4. **Project Showcase** - Clear display of featured apps
5. **Contact Information** - Easy to reach
6. **Social Links** - GitHub, YouTube, Facebook

### Nice-to-Have:
1. **Dark Mode** - Toggle between light/dark themes
2. **Animations** - Smooth scroll, fade-ins
3. **Project Filtering** - Filter by technology
4. **Blog Section** - For future articles
5. **Testimonials** - Client/user feedback
6. **Resume Download** - PDF resume download

---

## 🔧 Technical Details

### Next.js Configuration:
- **App Router**: Use Next.js 14+ App Router
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font optimization
- **Metadata**: SEO-friendly meta tags

### Styling:
- **Tailwind CSS**: Utility-first CSS
- **Responsive**: Mobile-first breakpoints
- **Custom Components**: Reusable styled components

### Performance:
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: Where possible
- **CDN**: Vercel Edge Network

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🚀 Deployment Strategy

### Recommended: Vercel
- **Why**: Built by Next.js creators, seamless integration
- **Steps**:
  1. Push code to GitHub
  2. Connect GitHub repo to Vercel
  3. Auto-deploy on push
  4. Add custom domain (optional)

### Alternative: Netlify
- Similar process
- Good for static sites

---

## 📊 Success Metrics

### Goals:
- **Load Time**: < 3 seconds
- **Mobile Score**: 90+ (Lighthouse)
- **Desktop Score**: 95+ (Lighthouse)
- **Accessibility**: WCAG AA compliant
- **SEO**: Proper meta tags, structured data

---

## 🎨 Design Inspiration

### Style References:
- Modern developer portfolios
- Clean, professional layouts
- Focus on content over decoration
- Good use of whitespace
- Clear typography hierarchy

---

## ✅ Pre-Launch Checklist

- [ ] All content written and proofread
- [ ] All images optimized
- [ ] All links working
- [ ] Mobile responsive tested
- [ ] Cross-browser tested
- [ ] SEO meta tags added
- [ ] Analytics set up (optional)
- [ ] Contact form tested (if included)
- [ ] Social links verified
- [ ] GitHub links working
- [ ] App Store links working
- [ ] Website links working
- [ ] Performance optimized
- [ ] Accessibility checked

---

## 🔄 Future Enhancements

### Phase 6 (Post-Launch):
- [ ] Blog section for articles
- [ ] Project case studies
- [ ] Client testimonials
- [ ] Newsletter signup
- [ ] Multi-language support (if needed)
- [ ] Advanced animations
- [ ] Interactive project demos

---

## 📝 Notes

- **Content Updates**: Easy to update via data file
- **Image Management**: Use Next.js Image component
- **SEO**: Important for discoverability
- **Performance**: Critical for user experience
- **Accessibility**: Should be a priority

---

## 🎯 Next Steps

1. **Review this plan** - Make any adjustments
2. **Gather assets** - Screenshots, logos, photos
3. **Finalize content** - All text ready
4. **Start building** - Begin Phase 1
5. **Iterate** - Test and refine

---

**Ready to build when you are!** 🚀

