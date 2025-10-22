# EcoTrack Design Guidelines

## Design Approach
**Selected Approach**: Reference-Based with Material Design Foundation + Sustainability Aesthetic

Drawing inspiration from modern environmental apps and Google's Material Design for eco-conscious applications, creating a fresh, optimistic interface that makes sustainability tracking engaging and motivating.

## Core Design Elements

### Typography
- **Primary Font**: 'Inter' or 'DM Sans' (Google Fonts) - clean, modern sans-serif
- **Accent Font**: 'Poppins' - for headers and impactful statements
- **Hierarchy**:
  - H1: 48px/3xl font-bold (Homepage hero, main titles)
  - H2: 36px/2xl font-semibold (Section headers, dashboard titles)
  - H3: 24px/xl font-semibold (Card titles, feature headers)
  - Body: 16px/base font-normal (Main content)
  - Small: 14px/sm font-normal (Captions, labels)

### Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-20 (mobile), py-20 to py-32 (desktop)
- Card spacing: p-6
- Grid gaps: gap-6 to gap-8

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl
- Content areas: max-w-6xl mx-auto px-4
- Forms: max-w-md mx-auto

### Component Library

**Navigation**:
- Sticky header with subtle backdrop blur
- Logo left, navigation center/right
- Mobile: Hamburger menu with slide-in drawer
- Active state: Underline or pill background indicator

**Homepage Structure**:
1. **Hero Section** (80vh):
   - Large bold headline with animated floating leaf SVG overlay
   - Subtitle explaining EcoTrack's mission
   - Dual CTA buttons (Get Started, Learn More) with glassmorphism effect
   - Background: Gradient overlay on nature image
   - Leaf animation: Gentle floating motion using CSS keyframes

2. **Features Grid** (3 columns desktop, 1 mobile):
   - Icon-led cards with title and description
   - Icons from Heroicons (outline style)
   - Subtle hover lift effect (translateY(-4px))
   - Features: Track Usage, View Dashboard, Join Community, Compete on Leaderboard

3. **Impact Showcase** (2-column split):
   - Left: Large statistics (trees saved, CO2 reduced, users joined)
   - Right: Infographic or chart preview
   - Animated counter on scroll-into-view

4. **How It Works** (Stepped process):
   - 4-step visual flow with connecting lines
   - Icons representing each step
   - Short descriptions under each

5. **Community Highlights**:
   - Testimonial cards or recent achievements
   - Avatar images with user quotes
   - Grid layout: 3 cards

6. **Final CTA Section**:
   - Centered call-to-action with background pattern
   - Primary button with supporting text
   - Newsletter signup option

**Dashboard Page**:
- Sidebar navigation (collapsible on mobile)
- Main content area with metrics cards at top
- Chart.js integration for usage graphs (line, bar, donut charts)
- 4-column metric cards showing: Total Carbon Saved, Weekly Progress, Streak Days, Rank
- Recent activity feed
- Quick action buttons

**Track Usage Page**:
- Category cards (Transportation, Energy, Water, Waste)
- Input forms with icon prefixes
- Real-time calculation display
- Submit button with success animation
- History log below form

**Leaderboard Page**:
- Top 3 podium display with avatars
- Tabular list with alternating row backgrounds
- Current user row highlighted
- Filter tabs (Weekly, Monthly, All-time)
- Avatar placeholders with user initials

**Community Section**:
- Post feed with card-based layout
- User avatars, timestamps, like/comment counts
- Floating action button for creating posts
- Filter/sort options at top

**Forms (Login/Registration)**:
- Centered modal or dedicated page
- Single-column layout, max-width 400px
- Input fields with floating labels
- Social login options
- Toggle between login/register

**Card Components**:
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-md)
- Hover state with enhanced shadow (shadow-lg)
- Padding: p-6
- White background with slight transparency on colored sections

**Buttons**:
- Primary: Solid fill, rounded-lg, px-6 py-3
- Secondary: Outlined, same sizing
- Icon buttons: Circular, p-3
- All buttons: Smooth transition on hover (0.2s)
- On image backgrounds: Blurred background (backdrop-blur-md with bg-white/20)

**Charts & Visualizations**:
- Use Chart.js for interactive charts
- Consistent height: 300-400px
- Responsive sizing
- Tooltips on hover
- Legend positioning: top or bottom based on chart type

### Animations
Use sparingly and purposefully:
- **Leaf Float**: Gentle floating motion in hero (CSS keyframes, 3s duration, infinite)
- **Page Transitions**: Fade-in on load (0.3s)
- **Chart Animations**: Stagger data point reveals (Chart.js built-in)
- **Hover Effects**: Subtle lift on cards (transform: translateY(-4px), 0.2s)
- **Counter Animations**: Number increment on scroll-into-view for statistics
- NO complex scroll-triggered animations beyond counter reveals

## Images Section

**Hero Image**:
- Full-width background image
- Subject: Lush green forest, solar panels in nature, or wind turbines in landscape
- Treatment: Gradient overlay (dark to transparent, opacity 50-70%)
- Position: Cover, center
- Height: 80vh on desktop, 60vh on mobile

**Feature Icons**:
- Use Heroicons library (CDN)
- Outline style, 48px size in feature cards
- 24px in navigation and smaller contexts

**Dashboard Charts**:
- Placeholder: Chart.js canvas elements
- No static images needed

**User Avatars**:
- Circular, 40-48px diameter
- Default: Initials on solid background
- Real images when available

**Community Posts**:
- Optional image attachments in posts
- Max height: 300px, full-width of card
- Rounded corners matching card style

**Background Patterns**:
- Subtle geometric patterns in CTA sections
- Low opacity (10-15%)
- SVG-based, repeating pattern

## Accessibility & Standards
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states: Visible ring (ring-2 ring-offset-2)
- Form validation messages below inputs
- Alt text for all images
- Minimum contrast ratio: 4.5:1 for text

## Mobile Responsiveness
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Stack columns to single column on mobile
- Collapse sidebar navigation to hamburger
- Touch-friendly button sizing (min 44px height)
- Simplified charts for smaller screens