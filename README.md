# Taskaway Malaysia - Support Site

iOS App Store support page for Taskaway Malaysia mobile app.

**Live URL:** https://support.taskawayasia.com

## 📋 Project Overview

This is a static support website built with Nuxt 4 and Tailwind CSS, designed specifically for iOS App Store submission requirements. The site provides comprehensive help documentation, FAQs, and contact information for Taskaway Malaysia users.

## 🛠 Tech Stack

- **Nuxt 4** - Vue.js framework with app/ directory structure
- **Vue 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 10.0.0

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

The generated static site will be in `.output/public/` directory.

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel will auto-detect Nuxt and configure build settings
4. Add custom domain: `support.taskawayasia.com`
5. Deploy

**Build Settings:**
- Build Command: `npm run generate`
- Output Directory: `.output/public`

### Option 2: Netlify

1. Connect GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
3. Add custom domain: `support.taskawayasia.com`
4. Deploy

### Option 3: GitHub Pages

```bash
# Build static site
npm run generate

# Navigate to output directory
cd .output/public

# Initialize git and push to gh-pages branch
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/Taskaway-Malaysia/support-site.git
git push -u origin gh-pages --force
```

Then configure custom domain in repository settings.

### Option 4: Traditional Hosting

1. Build the site: `npm run generate`
2. Upload contents of `.output/public/` to your web server
3. Point `support.taskawayasia.com` subdomain to the directory
4. Ensure SSL certificate is configured

## 🌐 Domain Setup

### DNS Configuration

Add a CNAME record for your subdomain:

```
Type: CNAME
Name: support
Value: <your-hosting-provider-url>
TTL: 3600
```

For Vercel/Netlify, they will provide the specific CNAME value.

### SSL Certificate

- Vercel: Automatic SSL
- Netlify: Automatic SSL
- GitHub Pages: Automatic SSL
- Traditional hosting: Configure Let's Encrypt or use hosting provider's SSL

## 📱 iOS App Store Submission

Use this URL when submitting to App Store Connect:

```
https://support.taskawayasia.com
```

**Required Fields in App Store Connect:**
- Support URL: `https://support.taskawayasia.com`
- Marketing URL: (optional)
- Privacy Policy URL: (if you have one)

## 📂 Project Structure

```
support-site/
├── app/
│   ├── pages/
│   │   └── index.vue              # Main support page
│   ├── components/
│   │   ├── Hero.vue               # Hero section with branding
│   │   ├── FAQ.vue                # FAQ section
│   │   ├── FAQItem.vue            # FAQ accordion component
│   │   └── Contact.vue            # Contact information
│   └── assets/
│       └── css/
│           └── main.css           # Tailwind CSS imports
├── public/
│   └── logo.png                   # Taskaway logo
├── app.vue                        # Root component
├── nuxt.config.ts                 # Nuxt configuration
├── tailwind.config.ts             # Tailwind configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🎨 Branding

**Colors:**
- Primary: `#FFC333` (Taskaway yellow/gold)
- Secondary: `#1D1A69` (Dark blue)
- Text: `#2D2D2D` (Dark gray)
- Background: `#F8F8F8` (Light gray)

**Fonts:**
- Sans-serif: Inter (loaded from Google Fonts via CDN or local)

## 📧 Support Contact

- **Email:** taskaway.my@gmail.com
- **Hours:** 9:00 AM - 6:00 PM (MYT), Monday - Friday
- **Response Time:** Within 24-48 hours

## 🔧 Maintenance

### Updating Content

#### To update FAQs:
1. Edit `app/components/FAQ.vue`
2. Modify questions/answers in the template
3. Run `npm run generate`
4. Deploy updated build

#### To update contact information:
1. Edit `app/components/Contact.vue`
2. Update email, hours, or response time
3. Rebuild and deploy

#### To update branding/description:
1. Edit `app/components/Hero.vue`
2. Modify text content
3. Rebuild and deploy

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Nuxt specifically
npm install nuxt@latest
```

## 📄 License

© 2025 Taskawayasia. All rights reserved.

## 🤝 Contributing

This is a private support site for Taskaway Malaysia. For issues or updates, contact the development team.

## 📞 Development Support

For technical issues with this support site, contact the Taskaway development team.
