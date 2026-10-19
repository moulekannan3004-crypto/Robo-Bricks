# RoboBricks - Kids Robotics & LEGO® Building Club
### Multipurpose Service & Parent Dashboard HTML/CSS Template
**Designed for ThemeForest, TemplateMonster, and Modern Web Applications**

---

## 🌟 Overview
**RoboBricks** is a production-ready, highly polished multipurpose front-end website template paired with a fully functional parent & admin dashboard. Specifically designed for **Kids Robotics Clubs, LEGO® STEM Academies, Coding Schools, Maker Spaces, and After-School Enrichment Centers**.

It combines a playful, child-friendly aesthetic (tactile 3D LEGO brick buttons, stud patterns, vibrant colors) with a clean, professional parent portal for managing class bookings, skill badges, and tuition invoices.

---

## 🚀 Key Features

### 🎨 Single Color Constancy & Brand Harmony
- **Unified Brand Identity**: 100% color consistency across all 14 pages. Powered by primary **Robot Blue** (`#2563EB`) and interactive accent **Tactile LEGO Yellow** (`#FBBF24`).
- **Tactile 3D "Brick" Buttons**: Kid-friendly interactive press buttons with genuine depth (`.btn-brick-yellow`, `.btn-brick-blue`).
- **LEGO Stud Backgrounds**: Subtle repeating stud textures (`.bg-studs`, `.bg-studs-primary`) for an authentic brick-building look.
- **Tech Blueprint Overlays**: Subtle grid lines (`.bg-grid-tech`) styled in harmonious brand blue.

### 🧭 Clean & Standardized Navigation
- **Header Menu Headings**: Desktop navbar strictly contains only:
  1. **Home** (with *Home 2 - STEM Academy Variant* dropdown)
  2. **About Us**
  3. **Services** (`programs.html`)
  4. **Pricing**
  5. **Gallery**
  6. **Blog**
  7. **Contact**
  8. **Dashboard** (`dashboard/index.html`)
- **Action Buttons**: Positioned directly on the top right:
  - **RTL Toggle**: Built-in one-click LTR/RTL layout direction toggle.
  - **Theme Toggle**: Dark/Light mode switcher.
  - **Login Button**: Direct access to login portal.

### 🌗 Dark / Light Mode Toggle
- Full dark mode coverage across all public and dashboard pages.
- Automatically saves user choice to `localStorage` and respects system preferences.

### 🌐 LTR / RTL (Right-to-Left) Language Support
- Built-in one-click **LTR / RTL switcher** supporting Arabic, Hebrew, and Persian localizations.
- Mirrored icons and RTL typography classes configured across all components.

### 📱 100% Mobile-First Responsive
- Tested on smartphones, tablets, and high-DPI desktop screens.
- Smooth mobile drawer menu navigation with backdrop blur, child switcher, and instant signup trigger.

### 🔔 Interactive Toast & Modal Systems
- Universal **"Book Free Trial"** & **"Enroll Now"** multi-step modal accessible from all pages.
- Native dynamic toast notification engine (`window.showToast(message, type)`).

---

## 📁 Project Structure

```
Kids Robotics & LEGO Building Club/
├── index.html                   # Home Page 1 (Main Playful Kids Robotics Club)
├── index-2.html                 # Home Page 2 (Clean STEM Academy & General Service)
├── about.html                   # About Us (Mission, Timeline, Mentor Grid, Facility Tour)
├── instructors.html             # Instructors & Mentors (Certified Coaches, Bio, Trial Booking)
├── programs.html                # Programs Catalog (Grid/List Toggle, Real-Time Filters)
├── program-detail.html          # Program Details (8-Week Syllabus, Schedules, Sticky Box)
├── pricing.html                 # Pricing Plans (Monthly/Term Toggle, Comparison Matrix)
├── gallery.html                 # Student Builds & Competitions Gallery (Category Filters)
├── blog.html                    # STEM Blog (Search, Category Pills, Article Cards)
├── blog-detail.html             # Blog Post Layout (Sidebar Widgets, Interactive Comments)
├── contact.html                 # Contact Us (Inquiry Form, Hub Cards, Stylized Map)
├── login.html                   # Parent Portal Auth (Split-Screen Sign In / Register)
├── 404.html                     # 404 Error Page (Creative LEGO Robot Theme)
├── coming-soon.html             # Maintenance / Launch Page (Live Countdown Timer)
├── README.md                    # Developer & Customer Documentation
├── dashboard/
│   ├── index.html               # Dashboard Home & Analytics (Active Child Switcher)
│   ├── sessions.html            # Enrolled Children / Sessions & Booking Modal
│   ├── progress.html            # Progress Tracker (Project Milestones & Skill Badges)
│   └── settings.html            # Settings (Profile, Children, Notifications, Invoices)
└── assets/
    ├── css/
    │   └── custom.css           # Custom styles, 3D buttons, studs, animations, RTL
    ├── js/
    │   ├── main.js              # Theme manager, RTL switcher, Toasts, Modals, Counters
    │   └── dashboard.js         # Child switcher, Booking engine, Badge inspection
    └── images/                  # Image assets & SVG icons
```

---

## 🛠️ Tech Stack & Dependencies
- **CSS Framework**: TailwindCSS (CDN configured with custom palette extensions)
- **Icons**: Lucide Icons (`lucide.min.js`)
- **Interactivity**: Alpine.js v3 + Vanilla JavaScript
- **Fonts**: Fredoka (Headings), Plus Jakarta Sans (Body), Space Grotesk (Tech stats)

---

## 💻 How to Customize

### 1. Changing Primary Colors
Open `index.html` (or `assets/css/custom.css`) and update the Tailwind color configuration:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#2563eb', // Change to your preferred primary color
        }
      }
    }
  }
}
```

### 2. Modifying Student Profiles in Dashboard
Edit `assets/js/dashboard.js` to add or edit student profiles:
```javascript
const childData = {
  leo: {
    name: 'Leo Chen',
    age: 8,
    level: 'RoboExplorers (Level 2)',
    xp: 2450,
    // ...
  }
};
```

---

## 📦 Backend Integration Guidelines
- **Laravel / Blade**: Extract `navbar.blade.php`, `footer.blade.php`, and dashboard layout components into `resources/views/layouts/`.
- **React / Next.js**: Components can be translated into JSX/TSX; Alpine `x-data` translates directly to `useState` or `useReducer`.
- **WordPress**: Template sections easily map to Gutenberg blocks or ACF (Advanced Custom Fields) templates.

---

## 📄 License & Credits
- **Unsplash**: Educational and robotics stock photos for demonstration.
- **LEGO® Notice**: LEGO® is a registered trademark of the LEGO Group which does not sponsor, authorize, or endorse this template.
- **Created by**: Expert Front-End & UI/UX Designer for ThemeForest / TemplateMonster.
