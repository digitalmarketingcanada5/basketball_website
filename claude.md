# Claude.md - Exceed CAD Basketball Website Project

## Project Configuration

### Project Information
- **Project Name**: Exceed CAD Academic Basketball Prep Website
- **Technology Stack**: Next.js 15.5.2, React 19.1.0, TailwindCSS 4
- **Original Reference**: YM Athletics (ymathletics.com)
- **Content Source**: Exceed CAD Academic Basketball Prep Program

### Development Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Useful development commands
npm run dev -- --port 3001  # Run on different port
```

## Project Structure

```
basketball_website/
├── src/
│   ├── app/
│   │   ├── layout.js         # Root layout with metadata
│   │   ├── page.js          # Home page using new components
│   │   └── globals.css      # Global styles with Exceed CAD theme
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx   # Main navigation header
│   │   │   └── Footer.jsx   # Site footer with contacts
│   │   ├── home/
│   │   │   ├── HeroSection.jsx      # "Built Different" hero
│   │   │   ├── WhyChooseUs.jsx      # Program highlights (6 cards)
│   │   │   ├── StorySection.jsx     # About Exceed CAD
│   │   │   ├── StatsSection.jsx     # Key statistics
│   │   │   ├── ProgramsSection.jsx  # Program details
│   │   │   ├── CoachesSection.jsx   # Coach profiles
│   │   │   ├── CTASection.jsx       # Enrollment CTA
│   │   │   └── NewsSection.jsx      # Recent news
│   │   ├── ui/
│   │   │   ├── StatCard.jsx        # Statistics display
│   │   │   ├── ProgramCard.jsx     # Program highlight cards
│   │   │   ├── CoachCard.jsx       # Coach profile cards
│   │   │   └── NewsCard.jsx        # News article cards
│   │   └── icons/
│   │       └── index.jsx           # All SVG icons
│   └── lib/
│       └── siteData.js            # Centralized content data
├── design_files/
│   └── homepage.png               # Reference design
├── reference_website.html         # Original YM Athletics HTML
├── context.md                     # Exceed CAD program details
├── tasks.md                       # Development roadmap
└── generated.jsx                  # Original monolithic component (legacy)
```

## Key Features Implemented

### ✅ Component Architecture
- **Modular Design**: Separated concerns with layout, page sections, and UI components
- **Reusable Components**: StatCard, ProgramCard, CoachCard, NewsCard for consistency
- **Icon Library**: Organized SVG icons with consistent styling
- **Data Management**: Centralized content in siteData.js for easy updates

### ✅ Content Transformation
- **Brand Migration**: Complete transformation from YM Athletics to Exceed CAD
- **Program Details**: Academic basketball prep with grades 6-12 focus
- **Pricing Structure**: Local ($9.5K-$12.5K), International ($17.5K), Junior ($8K)
- **Scholarship Info**: Nike $5K fund, Division I pathways
- **Coach Contacts**: Direct phone numbers and experience details

### ✅ Design & Styling
- **Color Scheme**: Navy (#1a2847), Red (#e63946), Pink accent (#f4a3a8)
- **Typography**: Professional sports aesthetic with Geist fonts
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Animations**: Subtle hover effects and transitions

## Content Management

### Primary Content Source
- **File**: `src/lib/siteData.js`
- **Purpose**: Single source of truth for all website content
- **Sections**: Site info, navigation, programs, coaches, pricing, contact info

### Image Assets (To Be Updated)
- **Current**: Placeholder images and YM Athletics assets
- **Needed**: Custom Exceed CAD logo, coach photos, program images
- **Hero**: Custom "Built Different" text graphics for branding

### Contact Information
```javascript
// Coaching Staff
Coach Richardson: 437-286-1388
Coach B (Berri Curtis): 780-932-9922

// General Contact  
Email: infocadaexceed@yahoo.com
Admin: infoexceedprep@gmail.com
Phone: 780-938-8935

// Social Media
Instagram: @excee_d8
```

## Development Guidelines

### Code Style
- **Components**: Use functional components with hooks
- **Styling**: TailwindCSS classes, avoid inline styles
- **File Naming**: PascalCase for components, camelCase for utilities
- **Imports**: Absolute imports from src/ directory

### Content Updates
1. **Text Changes**: Update `src/lib/siteData.js`
2. **New Sections**: Add to appropriate home page component
3. **Styling**: Modify `src/app/globals.css` or component classes
4. **Images**: Add to public/images/ and update references

### Adding New Pages
1. Create new route in `src/app/[page]/page.js`
2. Build components in `src/components/[page]/`
3. Add navigation links in `src/lib/siteData.js`
4. Update Header.jsx and Footer.jsx as needed

## Important Dates & Deadlines

- **Enrollment Deadline**: July 25, 2025
- **Program Start**: September 2025
- **Nike Scholarship**: Annual $5,000 fund (2 recipients per age category)

## Known Issues & Limitations

### Current Limitations
1. **Images**: Using placeholder images, need real program photos
2. **Mobile Menu**: Header hamburger menu not yet functional
3. **Forms**: No contact/enrollment forms implemented yet
4. **Animation**: Basic hover effects, could add scroll-based animations

### Technical Debt
1. **Legacy File**: `generated.jsx` should be removed after testing
2. **Image Optimization**: Need Next.js Image component implementation
3. **TypeScript**: Consider migration for better type safety
4. **Testing**: No test suite implemented yet

## Performance Optimization

### Current Status
- **Next.js 15**: Latest version with App Router
- **TailwindCSS 4**: Modern CSS framework
- **Component Structure**: Optimized for code splitting
- **Metadata**: SEO-optimized with Open Graph tags

### Future Improvements
- Image optimization with Next.js Image component
- Route-based code splitting for additional pages
- Performance monitoring with Web Vitals
- Bundle analysis and optimization

## SEO Configuration

### Metadata (in layout.js)
- **Title**: "Exceed CAD - Academic Basketball Prep Program"
- **Description**: Comprehensive program description with keywords
- **Keywords**: Basketball prep, academic excellence, Division I scholarships
- **Open Graph**: Social media sharing optimization
- **Schema**: Ready for structured data implementation

## Backup & Recovery

### Version Control
- **Repository**: Git-based version control
- **Branches**: Main branch for production-ready code
- **Commits**: Descriptive commit messages for changes

### Content Backup
- **Data File**: `src/lib/siteData.js` contains all content
- **Reference Files**: Original `context.md` and `reference_website.html`
- **Documentation**: Comprehensive `tasks.md` roadmap

## Future Enhancements

### Phase 2 Priority
1. Replace placeholder images with real program assets
2. Implement mobile navigation functionality  
3. Add contact forms for enrollment inquiries
4. Build additional pages (academics, basketball, scholarships)

### Phase 3 Goals
- Alumni success stories section
- Interactive program comparison tools
- Virtual facility tours
- Student/parent testimonials

## Support & Maintenance

### Development Team
- **Primary Developer**: Available for updates and enhancements
- **Content Management**: Coaches and admin staff can update siteData.js
- **Technical Support**: Documented procedures for common changes

### Update Procedures
1. **Content Changes**: Edit siteData.js and test locally
2. **Design Updates**: Modify globals.css or component styling
3. **New Features**: Follow component architecture patterns
4. **Deployment**: Standard Next.js build and deployment process

---

*This configuration file serves as the central reference for all development decisions and project management for the Exceed CAD Basketball Website.*

*Last Updated: December 2024*