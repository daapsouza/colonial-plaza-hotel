# Design Guidelines: Colonial Plaza Hotel Website

## Design Approach

**Reference-Based Approach:** Drawing from premium hospitality leaders (Airbnb's visual storytelling + luxury hotel sites like Aman Resorts + boutique hotel aesthetics)

**Rationale:** This is an experience-focused, visual-rich marketing site where emotional connection and visual appeal drive bookings. The mountain location and natural setting demand stunning imagery and warm, inviting design.

## Core Design Elements

### Typography
- **Primary Font:** Playfair Display (serif, elegant headers)
- **Secondary Font:** Inter (sans-serif, body text)
- **Scale:**
  - Hero headline: text-5xl md:text-6xl lg:text-7xl
  - Section headers: text-3xl md:text-4xl
  - Subheadings: text-xl md:text-2xl
  - Body: text-base md:text-lg
  - Captions: text-sm
- **Hierarchy:** Light (300) for display text, Regular (400) for body, Semibold (600) for emphasis

### Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6 md:px-8
- Card spacing: gap-8 md:gap-12
- Component padding: p-6 md:p-8

**Grid Strategy:**
- Accommodations: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features/Amenities: grid-cols-1 md:grid-cols-2
- Testimonials: grid-cols-1 md:grid-cols-2
- Gallery: Masonry-style grid (3-4 columns desktop)

### Component Library

**Navigation**
- Fixed transparent header on hero, transitions to solid on scroll
- Logo left, navigation center (Accommodations, Gastronomy, Events, Experiences, Contact)
- "Book Now" CTA button right with blurred background treatment
- Mobile: Hamburger menu with full-screen overlay

**Hero Section (100vh)**
- Full-viewport hero with mountain/hotel imagery
- Centered headline + subheadline overlay
- Primary CTA button with backdrop-blur-md background
- Subtle scroll indicator at bottom

**Accommodation Cards**
- Large image (aspect-ratio 4:3)
- Room name, brief description, key features (icons)
- Starting price display
- "View Details" CTA
- Hover: Subtle image zoom (scale-105)

**Feature Sections**
- Alternating image-text layouts (50/50 split on desktop)
- Large supporting images
- Icon + headline + description pattern
- Generous whitespace between sections

**Gallery Component**
- Lightbox functionality
- 3-column masonry grid (desktop)
- 2-column (tablet), 1-column (mobile)
- Category filters (Rooms, Dining, Nature, Events)

**Booking Widget**
- Sticky footer on mobile
- Check-in/out date pickers
- Guest selector
- Prominent "Check Availability" button

**Testimonials**
- 2-column cards with guest photo
- Quote, name, location, star rating
- Subtle elevation/shadow

**Footer**
- 4-column layout (About, Quick Links, Contact, Newsletter)
- Social media icons
- Location map integration
- Newsletter signup with email input

### Page Structure

**Homepage Sections (in order):**
1. Hero - Mountain vista with hotel, headline: "Mountain Retreat Between Two Sierras"
2. Introduction - 2-column: welcome text + signature image
3. Accommodations Preview - 3-card grid showcasing room types
4. Gastronomy - Image-text split highlighting restaurant/cuisine
5. Natural Setting - Full-width image section with Campos do Jordão proximity
6. Amenities Grid - 4-column icons (Spa, Pool, Events, Hiking)
7. Testimonials - 2-column guest reviews
8. Gallery - 12-image masonry grid
9. Location - Embedded map + directions text
10. Final CTA - "Plan Your Mountain Escape" booking prompt
11. Footer - Comprehensive site navigation

**Interior Pages:**
- Accommodations: Filter bar, room cards, detailed room pages
- Gastronomy: Menu preview, chef story, dining spaces imagery
- Events: Event spaces with capacity/features, inquiry form
- Contact: Form + hotel details + map

### Images

**Hero Image:** Sweeping mountain landscape with hotel property in golden hour light, emphasizing Serra da Mantiqueira/Serra do Mar setting (1920x1080 minimum)

**Section Images:**
- Accommodations: Room interiors with natural light, mountain views through windows
- Gastronomy: Plated dishes, dining room ambiance, outdoor terrace dining
- Nature/Location: Mountain trails, sunrise/sunset vistas, Campos do Jordão proximity
- Leisure: Pool with mountain backdrop, spa facilities, event spaces
- Gallery: Mix of architecture, interiors, food, nature, guest experiences

**Image Treatment:** All images high-quality (1200px+ width), subtle vignette overlay on hero, optimized loading with blur-up placeholders

### Animations

**Strategic Use Only:**
- Hero: Ken Burns slow zoom on background (30s duration)
- Scroll: Fade-in sections on viewport entry (200ms)
- Image hovers: Subtle scale (1.05) on accommodation/gallery items
- Navigation: Smooth color transition on scroll (300ms)
- NO parallax effects
- NO scroll-jacking

### Accessibility
- Alt text for all images describing scenes
- Keyboard navigation for booking widget
- Focus indicators on all interactive elements
- ARIA labels for icon-only buttons
- Minimum 16px body text
- High contrast text overlays on images (backdrop-blur + semi-transparent backgrounds)