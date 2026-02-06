# Lamamia - Modern Web Application

A modern, full-stack web application built with Next.js 15, featuring authentication, blog functionality, portfolio showcase, and dynamic theming.

🔗 **Live Demo**: [https://lamamia-wvty.vercel.app](https://lamamia-wvty.vercel.app)

## 📋 Features

- **Authentication System**
  - Email/Password authentication
  - Google OAuth integration
  - Protected routes and dashboard
  - Session management with NextAuth.js

- **Dynamic Blog**
  - Server-side rendered blog posts
  - Individual post pages with SEO optimization
  - MongoDB integration for content management
  - Image optimization with Next.js Image component

- **Portfolio Showcase**
  - Dynamic category-based portfolio ([`src/app/portfolio/[category]`](src/app/portfolio/[category]))
  - Smooth animations with Framer Motion
  - Responsive grid layouts
  - Categories: Illustration, Websites, and Apps

- **Theme System**
  - Dark/Light mode toggle ([`src/context/ThemeContext.tsx`](src/context/ThemeContext.tsx))
  - CSS custom properties for theme colors
  - Smooth transitions between themes
  - Theme-aware text and background colors

- **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS for styling
  - Adaptive layouts across all screen sizes

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: MongoDB with Mongoose
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📂 Project Structure

```
lamamia/
├── src/
│   ├── app/                  # App Router pages
│   │   ├── about/           # About page
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # NextAuth configuration
│   │   │   ├── posts/       # Blog API endpoints
│   │   │   └── register/    # Registration endpoint
│   │   ├── blog/            # Blog pages
│   │   │   └── [id]/        # Dynamic blog post pages
│   │   ├── contact/         # Contact page
│   │   ├── dashboard/       # Protected dashboard
│   │   ├── login/           # Login page
│   │   ├── portfolio/       # Portfolio pages
│   │   │   └── [category]/  # Dynamic portfolio categories
│   │   └── register/        # Registration page
│   ├── components/          # Reusable components
│   │   ├── AuthProvider.tsx # Auth context wrapper
│   │   ├── darkMode/        # Theme toggle component
│   │   ├── footer/          # Footer component
│   │   └── navber/          # Navigation bar
│   ├── context/             # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── models/              # MongoDB models
│   │   ├── Post.ts          # Blog post schema
│   │   └── User.ts          # User schema
│   ├── types/               # TypeScript type definitions
│   │   └── next-auth.d.ts   # NextAuth type extensions
│   └── utils/               # Utility functions
│       └── db.ts            # Database connection
├── public/                   # Static assets
├── .env                      # Environment variables
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- MongoDB database (local or Atlas)
- Google OAuth credentials (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lamamia
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO` | MongoDB connection string |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js session encryption |
| `NEXTAUTH_URL` | Base URL of your application |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

## 📝 Key Features Implementation

### Authentication
- Authentication is handled by [`src/app/api/auth/[...nextauth]/route.ts`](src/app/api/auth/[...nextauth]/route.ts)
- User model: [`src/models/User.ts`](src/models/User.ts)
- Login page: [`src/app/login/page.tsx`](src/app/login/page.tsx)
- Register page: [`src/app/register/page.tsx`](src/app/register/page.tsx)

### Blog System
- Blog listing: [`src/app/blog/page.tsx`](src/app/blog/page.tsx)
- Individual posts: [`src/app/blog/[id]/page.tsx`](src/app/blog/[id]/page.tsx)
- API routes: [`src/app/api/posts/route.ts`](src/app/api/posts/route.ts)
- Post model: [`src/models/Post.ts`](src/models/Post.ts)

### Theme Management
- Theme context: [`src/context/ThemeContext.tsx`](src/context/ThemeContext.tsx)
- Theme toggle: [`src/components/darkMode/DarkMode.tsx`](src/components/darkMode/DarkMode.tsx)
- Global styles: [`src/app/globals.css`](src/app/globals.css)

### Portfolio
- Portfolio categories: [`src/app/portfolio/[category]/page.tsx`](src/app/portfolio/[category]/page.tsx)
- Category content: [`src/app/portfolio/[category]/CategoryContent.tsx`](src/app/portfolio/[category]/CategoryContent.tsx)
- Portfolio data: [`src/app/portfolio/[category]/data.ts`](src/app/portfolio/[category]/data.ts)

## 🎨 Styling

The project uses Tailwind CSS v4 with custom theme colors and utilities:

- Theme-aware text colors: `.text-theme-primary`, `.text-theme-secondary`, `.text-theme-muted`
- Theme-aware backgrounds: `.bg-theme-section`
- Custom animations: `.animate-float`
- Gradient text effects using `bg-clip-text`

Configuration: [`postcss.config.mjs`](postcss.config.mjs)

## 🚢 Deployment

The application is deployed on Vercel:

**Live URL**: [https://lamamia-wvty.vercel.app](https://lamamia-wvty.vercel.app)

To deploy your own instance:

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

Learn more: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## 📚 API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | GET, POST | Authentication endpoints |
| `/api/posts` | GET, POST | Blog posts CRUD |
| `/api/register` | POST | User registration |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**DARK_SHADOW**

## 🔗 Links

- **Live Demo**: [https://lamamia-wvty.vercel.app](https://lamamia-wvty.vercel.app)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **MongoDB**: [https://www.mongodb.com](https://www.mongodb.com)
- **NextAuth.js**: [https://next-auth.js.org](https://next-auth.js.org)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

Built with ❤️ using Next.js
