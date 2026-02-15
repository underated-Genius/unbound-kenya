# Contributing to Unbound Kenya

Thank you for your interest in contributing to Unbound Kenya! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**: `git clone <your-fork-url>`
3. **Install dependencies**: `npm install`
4. **Create a branch**: `git checkout -b feature/your-feature-name`
5. **Make your changes**
6. **Test thoroughly**: `npm run dev`
7. **Commit**: `git commit -m "feat: add amazing feature"`
8. **Push**: `git push origin feature/your-feature-name`
9. **Open a Pull Request**

## 📝 Code Style

- **Components**: Use functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Comments**: Add JSDoc comments for complex functions
- **Formatting**: Follow existing code patterns
- **Imports**: Group by: React, Third-party, Local components, Utils, Styles

## 🎨 Adding New Destinations

To add a new hidden gem:

1. Open `src/data/gems.js`
2. Add a new object to the `hiddenGems` array:

```javascript
{
  id: 10, // Next available ID
  name: "Your Destination Name",
  region: "Coast", // or "Rift Valley" or "Northern Kenya"
  coordinates: { lat: -1.2921, lng: 36.8219 }, // Real GPS coords
  description: "Engaging 2-sentence description...",
  image: "https://images.unsplash.com/...", // Unsplash URL
  activities: ["Activity 1", "Activity 2"],
  landscape: "Desert", // or "Forest" or "Coast"
  travelStyle: ["Solo", "Couple", "Family"],
  bestFor: "Short descriptive text"
}
```

## 🐛 Reporting Bugs

- Use GitHub Issues
- Include: Browser version, OS, steps to reproduce
- Provide screenshots if applicable
- Check if issue already exists

## ✨ Feature Requests

- Use GitHub Issues with "enhancement" label
- Describe: Problem, proposed solution, alternatives considered
- Include mockups if design-related

## 🧪 Testing

Before submitting:
- Test on desktop (Chrome, Firefox, Safari)
- Test on mobile (iOS Safari, Android Chrome)
- Verify Lighthouse scores remain >85
- Check console for errors

## 📚 Documentation

- Update README.md if adding major features
- Update DEMO.md if changing demo flow
- Add JSDoc comments for complex functions
- Update package.json if adding dependencies

## 🎯 Priority Areas

We especially welcome contributions in:
- **More Destinations**: Add hidden gems with proper data
- **Performance**: Optimize 3D rendering, reduce bundle size
- **Accessibility**: ARIA labels, keyboard navigation, screen readers
- **Mobile UX**: Touch gestures, better mobile map experience
- **Internationalization**: Multi-language support
- **Backend Integration**: API for bookings, user accounts

## 💬 Communication

- GitHub Issues for bugs and features
- Pull Requests for code contributions
- Be respectful and constructive
- Ask questions if unclear

## 📄 License

By contributing, you agree your contributions will be licensed under the MIT License.

---

Thank you for helping unlock Kenya's tourism potential! 🇰🇪
