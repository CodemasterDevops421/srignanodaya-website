# Sri Gnanodaya Schools - Premium Website

A world-class, high-performance website for Sri Gnanodaya Schools, featuring a "Modern Minimalist" design, 3D parallax effects, and smooth animations.

## 🌟 Key Features
-   **Premium Design**: Custom "Golden Prestige" aesthetic with glassmorphism and magnetic interactions.
-   **Performance**: Built on Next.js 14 with Server Components for lightning-fast load times.
-   **Animations**: Powered by Framer Motion and Lenis for buttery smooth scrolling.
-   **Responsive**: Fully optimized for all devices (Mobile, Tablet, Desktop).

## 🛠️ Tech Stack
-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.studiofreight.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: Docker + Hetzner VPS

## 🚀 Getting Started

### Local Development
1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/srignanodaya-website.git
    cd srignanodaya-website/website
    ```
2.  Install dependencies (automatically handled by Docker, but for local dev):
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment
We use a fully automated CI/CD pipeline with GitHub Actions and Docker.

👉 **[READ THE DEPLOYMENT GUIDE (DEPLOY.md)](../DEPLOY.md)**

**Summary:**
1.  Get a Hetzner VPS.
2.  Run the `setup_vps.sh` script on the server.
3.  Add `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY` to GitHub Secrets.
4.  Push to `main` branch.

## 📁 Project Structure
```
website/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components (Header, Hero, etc.)
│   └── lib/              # Utility functions
├── public/               # Static assets (images, fonts)
├── Dockerfile            # Production Docker setup
└── next.config.ts        # Next.js configuration
```

## 📄 License
© 2025 Sri Gnanodaya Educational Society. All rights reserved.
