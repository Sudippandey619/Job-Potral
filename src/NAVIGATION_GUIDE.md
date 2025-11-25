# Jobseeker App - Complete Navigation Guide

## 🏠 App Name
**Jobseeker** (displayed in the header with a gradient effect)

---

## 📍 How to Access the CV-Integrated Profile Section

### Quick Path:
```
1. Click "Login" or "Sign Up" (top right)
2. Select "Job Seeker" role
3. Click "Dashboard" in header
4. Click "Profile" tab
```

### Detailed Steps:

#### Step 1: Authentication
- Go to the homepage (Landing page)
- Click **"Login"** or **"Sign Up"** button in the header (top right corner)
- On the Auth page, select **"Job Seeker"** as your role
- Complete login/registration

#### Step 2: Access Dashboard
After logging in:
- The header will show **"Dashboard"** link (between "Find Jobs" and your profile icon)
- Click **"Dashboard"**

#### Step 3: Navigate to Profile Tab
In the Job Seeker Dashboard, you'll see 4 tabs:
1. **Overview** - Dashboard with stats and recommended jobs
2. **Applied (X)** - Jobs you've applied to
3. **Saved (X)** - Jobs you've bookmarked
4. **Profile** ← **CLICK HERE for CV Section**

---

## 📄 CV-Integrated Profile Features

Once you're on the **Profile** tab, you'll see these sections:

### 1. **Download CV Button** (Top Right)
   - Blue gradient button with download icon
   - Exports your complete CV as PDF

### 2. **Personal Information** 
   - Profile photo (click edit icon on photo to change)
   - Name, Email, Phone, Location
   - Edit button (top right) opens modal to update all info

### 3. **Professional Summary**
   - Text description of your professional background
   - Edit button to update

### 4. **Work Experience** (Timeline View)
   - Shows all your work history
   - Each entry has:
     - Job title, Company name
     - Location and dates
     - Description of responsibilities
   - Blue timeline indicator on the left
   - Edit button on each entry
   - "Add" button (top right) to add new experience

### 5. **Education**
   - Academic qualifications
   - Shows: Degree, Institution, Location, Year
   - Cards with light gray background
   - Edit button on each entry
   - "Add" button to add new education

### 6. **Skills** (with Animated Progress Bars)
   - Grid layout (2 columns on desktop)
   - Each skill shows:
     - Skill name (e.g., "React.js")
     - Proficiency percentage (e.g., "90%")
     - Animated progress bar
   - Blue progress bars fill on page load
   - "Add" button to add new skills

### 7. **Certifications & Achievements**
   - Cards with gradient blue/purple background
   - Each shows:
     - Achievement title
     - Issuer/Organization
     - Date earned
     - Check circle icon
   - Edit button on each entry
   - "Add" button to add new certifications

---

## 🗺️ Complete App Structure

### Public Pages (No Login Required):
1. **Landing Page** (`/`)
   - Hero section with 3D search bar
   - Trending job categories
   - Popular companies carousel
   - **Sponsored banner ad** (between companies and featured jobs)
   - Featured jobs grid
   - **Sponsored job cards** (at bottom)
   - CTA section

2. **Job Listings Page**
   - Sliding filter panel (left side)
   - Job cards grid with Apply/Save buttons
   - Pagination
   - AI assistant tooltips

3. **Job Details Page**
   - Full job information
   - 3D Apply button
   - Save/Share options
   - Similar jobs carousel
   - Company info

### Authenticated Pages (Login Required):

#### Job Seeker:
4. **Job Seeker Dashboard** - Has 4 Tabs:
   
   **a. Overview Tab** (Default)
   - 4 stat cards (Applications, Saved Jobs, Profile Views, Messages)
   - Profile completion card with progress circle
   - **AI Recommended Jobs** section (3 job cards)
   - Application activity chart (bar chart)
   - Skill match pie chart
   
   **b. Applied Tab**
   - List of all jobs you've applied to
   - Shows application date
   - Status indicators
   - View Details buttons
   
   **c. Saved Tab**
   - All bookmarked/saved jobs
   - Quick apply from here
   - Remove from saved option
   
   **d. Profile Tab** ← **THIS IS THE CV SECTION**
   - Complete CV-integrated profile (see details above)

#### Employer:
5. **Employer Dashboard**
   - Post new job button
   - Manage job listings
   - View applicants
   - Download resumes
   - Candidate analytics with 3D charts

### Authentication:
6. **Auth Page**
   - Login/Register forms
   - Role selection (Job Seeker / Employer)
   - Social login options
   - Animated transitions

---

## 🎨 Design Features Throughout App

### Visual Elements:
- ✨ Soft 3D shadows on all cards
- 🌈 Gradient accents (blue → purple → pink)
- 🎭 Smooth micro-animations
- 📱 Fully responsive (mobile: 375-414px, tablet: 768px, desktop: 1440px+)
- 🤖 Floating AI assistant avatar on all pages

### 3D Effects:
- Cards lift on hover
- Buttons with depth shadows
- Search bar with perspective transform
- Smooth transitions everywhere

### Color Scheme:
- Primary: Blue (#3B82F6) to Purple (#9333EA) gradients
- Accent: Pink (#EC4899)
- Background: Slate grays with subtle gradients
- Text: Slate-700 for body, gradient for headings

---

## 💡 Tips for Using the App

### To Test the CV Profile:
1. **Don't skip login** - You MUST be logged in as a Job Seeker
2. **Look for "Dashboard"** in the header after login
3. **Click the "Profile" tab** - It's the 4th tab in the dashboard
4. **All edit buttons work** - They open modal dialogs with forms
5. **Download CV button** - Currently shows an alert (in production, it would generate PDF)

### Navigation Flow:
```
Landing → Auth → Dashboard → Profile Tab = CV Section
```

### Alternative Access:
- You can also navigate: Landing → Listings → Job Details → Apply (requires login) → Dashboard → Profile

---

## 🎯 Common Questions

**Q: I don't see the Profile tab?**
- Make sure you're logged in as a "Job Seeker" (not Employer)
- Make sure you clicked "Dashboard" in the header
- Look for 4 tabs: Overview, Applied, Saved, Profile

**Q: Where is the Download CV button?**
- It's at the very top of the Profile tab
- Top right corner, blue gradient button with download icon

**Q: Can I edit my profile?**
- Yes! Every section has an "Edit" or "Add" button
- Click them to open modal dialogs with forms

**Q: Where are the sponsored ads?**
- Banner ad: Landing page (between companies and featured jobs sections)
- Sponsored job cards: Bottom of landing page
- Additional spots can be added to listings and dashboard

**Q: Do I need to be logged in?**
- Yes, for the CV Profile section, you MUST be logged in as a Job Seeker
- Public pages (Landing, Listings, Job Details) don't require login

---

## 📸 Visual Reference

```
Header
├── Logo: "Jobseeker"
├── Navigation: Home | Find Jobs | Dashboard (if logged in)
└── Auth: Login / Sign Up (or Profile + Logout if logged in)

Job Seeker Dashboard Layout
├── Header: "Job Seeker Dashboard"
├── Tabs: [Overview] [Applied (2)] [Saved (3)] [Profile]
└── Content Area:
    └── When Profile tab selected:
        ├── [Download CV Button] (top right)
        ├── Personal Information (with photo)
        ├── Professional Summary
        ├── Work Experience (timeline)
        ├── Education (cards)
        ├── Skills (progress bars)
        └── Certifications & Achievements (gradient cards)
```

---

## 🚀 Quick Test Path

Copy this exact sequence:
1. Click "Sign Up" (top right)
2. Select "Job Seeker"
3. Click "Dashboard" (top nav)
4. Click "Profile" (4th tab)
5. ✅ You're now viewing the CV-Integrated Profile Section!

---

*Last Updated: Current session*
*App Version: Jobseeker v1.0*
