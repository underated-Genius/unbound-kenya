# 🦁 Unbound Kenya - Discover the 95%

![Unbound Kenya](https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=400&fit=crop)

**A lightweight, production-ready web application showcasing Kenya's hidden tourism gems using modern web design, 3D interactions, and immersive storytelling.**

## 🌟 Project Overview

Unbound Kenya addresses a critical issue: Kenya loses billions annually because 95% of its tourism treasures remain hidden from travelers. This hackathon project creates an immersive, interactive platform to discover these gems through:

- **Interactive 3D Map** - Explore Kenya with clickable location markers
- **Parallax Storytelling** - Scroll through regions with stunning visual effects
- **Mood Matcher Quiz** - AI-powered recommendations based on travel preferences
- **Glassmorphism UI** - Modern, polished design that stands out
- **Mobile-First** - Works perfectly on any device

## 🎯 Key Features

### ✨ Hero Section
- Full-screen immersive background with Three.js floating orb
- Glassmorphism CTA button
- Live explorer counter (updates every 10 seconds)
- Smooth scroll indicator

### 🗺️ Interactive 3D Map
- Three.js powered 3D map of Kenya
- 25+ clickable gem markers with region color-coding
- Hover effects and smooth interactions
- Mobile fallback with 2D interactive map
- Filter by region (Coast, Rift Valley, Northern, Western)

### 🎭 Parallax Storytelling
- Three scroll-triggered sections for major regions
- GSAP ScrollTrigger animations
- Glass cards with region highlights
- Smooth parallax background effects

### 🎯 Mood Matcher Quiz
- 3-question interactive quiz
- Smart recommendation algorithm
- Beautiful glass card interface
- Direct link to recommended gem on map

### 📱 Mobile Experience
- Responsive design for all screen sizes
- Touch-friendly interactions
- Swipeable gallery for mobile users
- Optimized performance

### 💾 Favorites System
- Save gems to localStorage
- Dedicated "My Gems" page
- Export favorites as text file
- Share functionality

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+

### Libraries (CDN)
- **Three.js r128** - 3D graphics and animations
- **GSAP 3.12** - Smooth scroll animations
- **Google Fonts** - Playfair Display & Poppins

### Design
- **Glassmorphism** - Modern frosted glass effects
- **Parallax Scrolling** - Depth and immersion
- **Micro-interactions** - Hover effects, transitions
- **Responsive** - Mobile-first approach

## 📦 Project Structure

```
unbound-kenya/
├── index.html          # Main landing page
├── map.html            # Interactive 3D map page
├── my-gems.html        # Saved favorites page
├── style.css           # Complete stylesheet (5000+ lines)
├── script.js           # Main JavaScript logic
├── data.js             # Gems database (25+ locations)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x OR Node.js (for local server)

### Installation & Running

#### Option 1: Using Python (Recommended for Termux)
```bash
# Navigate to project directory
cd unbound-kenya

# Start HTTP server (Python 3)
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open browser
# Visit: http://localhost:8000
```

#### Option 2: Using Node.js
```bash
# Navigate to project directory
cd unbound-kenya

# If you have http-server installed
npx http-server -p 8000

# Or install globally
npm install -g http-server
http-server -p 8000

# Open browser
# Visit: http://localhost:8000
```

#### Option 3: Using PHP
```bash
# Navigate to project directory
cd unbound-kenya

# Start PHP server
php -S localhost:8000

# Open browser
# Visit: http://localhost:8000
```

#### For Termux (Android)
```bash
# Install Python if not already installed
pkg install python

# Navigate to project directory
cd /sdcard/unbound-kenya

# Start server
python -m http.server 8000

# Open browser app and go to:
# http://localhost:8000
```

### No Build Process Required! 🎉
This project runs directly in the browser without any compilation, bundling, or npm install steps.

## 🎨 Design Philosophy

### Color Palette (Earthy Kenyan Tones)
- **Primary**: `#d4a574` (Savannah Gold)
- **Secondary**: `#e8d5b7` (Desert Sand)
- **Accent**: `#ff6b6b` (Sunset Red)
- **Ocean**: `#00b4d8` (Coastal Blue)
- **Forest**: `#6bcf7f` (Tropical Green)

### Typography
- **Display**: Playfair Display (elegant serif for headings)
- **Body**: Poppins (clean sans-serif for readability)

### Glassmorphism Effects
```css
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(20px);
border-radius: 1.5rem;
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

## 📊 Performance

### Lighthouse Scores Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimizations
- Lazy loading for images
- CSS-only animations where possible
- Minimal JavaScript footprint
- CDN-hosted libraries
- Responsive images
- Efficient DOM manipulation

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimizations

- Touch-friendly interactions (min 44x44px tap targets)
- Swipeable galleries with scroll snap
- Mobile-specific layout adjustments
- Reduced motion preferences respected
- Fallback to 2D map on mobile for better performance

## 🗺️ Data Structure

Each gem includes:
```javascript
{
    id: 'unique-identifier',
    name: 'Location Name',
    region: 'coast|rift|north|west|central',
    description: 'Detailed description',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    image: 'Unsplash URL',
    mapX: 0.0-1.0,  // X coordinate (0=left, 1=right)
    mapY: 0.0-1.0,  // Y coordinate (0=top, 1=bottom)
    mood: ['cultural', 'active', 'relaxed']
}
```

## 🎮 Interactive Features

### Quiz Algorithm
The mood matcher uses a decision tree:
1. **Landscape** (coast, mountain, desert, forest)
2. **Activity** (active, relaxed, cultural, wildlife)
3. **Vibe** (offbeat, comfort, rugged, luxury)

Results in personalized recommendations from 25+ gems.

### LocalStorage Usage
```javascript
// Favorites stored as JSON array
localStorage.setItem('unboundFavorites', JSON.stringify(gems));

// Retrieve favorites
const favorites = JSON.parse(localStorage.getItem('unboundFavorites') || '[]');
```

## 🚀 Deployment

### Static Hosting Options
- **Netlify**: Drag & drop the folder
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push to gh-pages branch
- **Surge**: `surge`

### Quick Deploy Commands
```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
git push origin gh-pages

# Surge
surge .
```

## 🔧 Customization

### Adding New Gems
Edit `data.js`:
```javascript
{
    id: 'new-gem-id',
    name: 'New Location',
    region: 'coast',
    description: 'Description here',
    tags: ['Tag1', 'Tag2'],
    image: 'https://images.unsplash.com/...',
    mapX: 0.5,  // Center horizontally
    mapY: 0.5,  // Center vertically
    mood: ['relaxed', 'comfort']
}
```

### Changing Colors
Update CSS variables in `style.css`:
```css
:root {
    --color-primary: #your-color;
    --color-secondary: #your-color;
}
```

### Modifying Quiz Questions
Edit the `.quiz-question` sections in `index.html`.

## 📈 Future Enhancements

- [ ] Google Maps API integration
- [ ] User accounts and cloud sync
- [ ] Social sharing with preview cards
- [ ] Trip planning with routes
- [ ] User reviews and ratings
- [ ] Photo uploads
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Offline support with Service Workers
- [ ] Voice navigation

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - Feel free to use this project for learning, hackathons, or personal projects.

## 🏆 Hackathon Readiness

### Why This Wins
✅ **No Setup Friction** - Runs immediately on any device
✅ **Visual Impact** - Glassmorphism & 3D effects wow judges
✅ **Real Problem** - Addresses Kenya's $4B tourism gap
✅ **Complete Feature Set** - Quiz, map, favorites, mobile
✅ **Professional Polish** - Every detail considered
✅ **Performance** - Loads fast, runs smooth
✅ **Scalable** - Easy to add more gems/features

### Demo Script (2 minutes)
1. **Hook** (15s): "Kenya loses $4B annually because 95% of tourism gems are hidden"
2. **Hero** (20s): Show landing page, explain the mission
3. **Parallax** (20s): Scroll through regions, show storytelling
4. **Quiz** (30s): Take the mood matcher, get recommendation
5. **Map** (30s): Show 3D map, click gems, save favorites
6. **Close** (15s): "Works on any device, no setup needed"

### Judge Questions - Prepared Answers

**Q: How is this different from Google Maps?**
A: We focus on storytelling and discovery, not navigation. Our mood matcher and curated content help travelers find places they didn't know to search for.

**Q: Where does the data come from?**
A: Currently curated from Kenya Tourism Board, UNESCO sites, and conservation organizations. In production, we'd partner with local guides and communities.

**Q: What about monetization?**
A: Commission from booking platforms, premium features for trip planning, and partnerships with local tour operators.

**Q: Technical stack choices?**
A: Vanilla JS ensures it works anywhere - crucial for Termux demo and emerging markets where build tools aren't available.

## 👥 Team

- **Developer**: Your Name Here
- **Design**: Inspired by Kenya's natural beauty
- **Data**: Curated from tourism research

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: github.com/yourusername
- **Demo**: yourdemo.netlify.app

## 🙏 Acknowledgments

- Kenya Tourism Board for inspiration
- Unsplash for high-quality images
- Three.js & GSAP communities
- All the amazing hidden gems of Kenya

---

**Built with ❤️ for Kenya's hidden treasures**

*Unbound Kenya - Discover the 95%* 🦁🇰🇪
# unbound-kenya
