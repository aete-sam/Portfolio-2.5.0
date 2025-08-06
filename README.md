# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme with animated elements, interactive project carousels, and smooth scrolling navigation.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.4-blue?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Modern Design**: Clean, professional dark theme with code editor aesthetics
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Smooth Animations**: Framer Motion powered animations and transitions
- **🎯 Interactive Cursor**: Custom animated cursor for enhanced UX
- **🔄 Project Carousels**: Interactive carousel showcasing personal and academic projects
- **🌙 Theme Toggle**: Dark/light theme switching functionality
- **📧 Contact Form**: Functional contact form with EmailJS integration
- **🎮 Matrix Rain Effect**: Animated background with Matrix-style code rain
- **✨ Particle Background**: Dynamic particle system for visual appeal

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0, TypeScript 5.0
- **Styling**: Tailwind CSS 3.3, PostCSS
- **Build Tool**: Vite 4.4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Email Service**: EmailJS
- **Cursor**: React Animated Cursor
- **Deployment**: GitHub Pages / Vercel / Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aete-sam/Portfolio-2.5.0.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section with certifications
│   ├── Contact.tsx     # Contact form component
│   ├── Hero.tsx        # Hero section with introduction
│   ├── LoadingScreen.tsx # Initial loading animation
│   ├── MatrixRain.tsx  # Matrix rain background effect
│   ├── Navbar.tsx      # Navigation bar component
│   ├── ParticleBackground.tsx # Particle system background
│   ├── Projects.tsx    # Projects showcase with carousels
│   ├── ProjectCarousel.tsx # Interactive project carousel
│   ├── ScrollToTop.tsx # Scroll to top button
│   ├── Skills.tsx      # Skills and technologies section
│   └── ThemeToggle.tsx # Theme switching component
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### Navigation
- **Centered Navbar**: Rounded navigation with active section highlighting
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Design**: Adapts to all screen sizes

### Projects Showcase
- **Interactive Carousels**: Separate carousels for personal and academic projects
- **3D Rotation Effects**: Cards rotate in 3D space during transitions
- **Autoplay & Controls**: Automatic cycling with pause on hover
- **Project Details**: Technology tags, descriptions, and links

### Skills Section
- **Categorized Skills**: Languages, Frameworks, Databases, Tools, Web Technologies
- **Progress Bars**: Visual representation of skill proficiency
- **Animated Loading**: Skills animate in with progress indicators

### Contact Form
- **EmailJS Integration**: Functional contact form
- **Form Validation**: Input validation and error handling
- **Success Notifications**: Toast notifications for form submission

## 🎨 Customization

### Colors & Theme
The portfolio uses a custom color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  'editor-bg': '#1a1a1a',
  'editor-sidebar': '#252526',
  'editor-text': '#cccccc',
  'editor-accent': '#007ACC',
  'editor-line': '#3c3c3c',
  'editor-comment': '#6a9955',
}
```

### Adding Projects
Update the projects in `src/components/Projects.tsx`:

```typescript
const personalProjects: ProjectCarouselItem[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com',
    category: 'personal',
    icon: <YourIcon className="w-4 h-4 text-white" />
  }
];
```

### Modifying Skills
Update skills in `src/components/Skills.tsx`:

```typescript
const skills = [
  { name: 'Your Skill', level: 90, color: 'bg-[#color]', icon: '🎯' }
];
```

## 📧 Contact Form Setup

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Update the configuration** in `src/components/Contact.tsx`:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    to_email: 'your-email@example.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'
);
```

## 🚀 Deployment

### GitHub Pages
1. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Vercel
1. **Connect your GitHub repository** to Vercel
2. **Deploy automatically** on every push to main branch

### Netlify
1. **Connect your GitHub repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aetesam Asfar Ullah**
- GitHub: [@yourusername](https://github.com/aete-sam)
- LinkedIn: [Aetesam Asfar Ullah](https://linkedin.com/in/aetesamasfarullah)
- Email: aetesamasfarullah18@gmail.com

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Animated Cursor](https://github.com/brunob/react-animated-cursor) for the custom cursor
- [EmailJS](https://www.emailjs.com/) for contact form functionality

---

⭐ **Star this repository if you found it helpful!** 