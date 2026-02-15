# ⚡ Quick Start Guide - Unbound Kenya

**Get the app running in under 5 minutes!**

## Step 1: Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

## Step 2: Extract & Navigate

```bash
# Extract the zip file
# Navigate into the project directory
cd unbound-kenya
```

## Step 3: Install Dependencies

```bash
npm install
```

This will take 1-2 minutes. You'll see a progress bar as packages download.

## Step 4: Run the Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

## Step 5: Open in Browser

Navigate to: **http://localhost:3000**

🎉 **Success!** You should see the Unbound Kenya hero section with the 3D terrain.

---

## 🛠️ Common Issues & Fixes

### Issue: "npm: command not found"
**Solution**: Install Node.js from nodejs.org

### Issue: Port 3000 already in use
**Solution**: Either:
- Kill the process using port 3000
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Issue: Dependencies fail to install
**Solution**: Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Page loads but no 3D graphics
**Solution**: 
- Update your browser to the latest version
- Try a different browser (Chrome recommended)
- Check browser console for errors (F12)

---

## 🎨 What to Explore

1. **Hero Section**: Watch the 3D terrain and floating compass
2. **Scroll Down**: Experience parallax storytelling through 3 regions
3. **3D Map**: Click the glowing orbs to discover destinations
4. **Quiz**: Take the mood matcher to get a personalized recommendation
5. **Save Gems**: Click the heart icon to save destinations

---

## 📝 Making Changes

### To add a new destination:

1. Open `src/data/gems.js`
2. Copy an existing gem object
3. Update the properties (name, coordinates, description, etc.)
4. Save the file
5. The page will auto-reload with your changes!

### To change colors:

1. Open `tailwind.config.js`
2. Modify the `colors` section under `theme.extend`
3. Colors are referenced like: `text-kenya-orange`, `bg-kenya-blue`

---

## 🚀 Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

---

## 📚 Next Steps

- Read **README.md** for full documentation
- Check **DEMO.md** for presentation guide
- Explore **CONTRIBUTING.md** to add features
- Deploy to Vercel: `npm i -g vercel && vercel`

---

## 🆘 Need Help?

- Check the main README.md
- Open an issue on GitHub
- Review browser console for errors (F12 → Console tab)

---

**Happy exploring! 🗺️**
