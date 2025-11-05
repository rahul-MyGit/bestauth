# 🔐 BestAuth - Better Auth + Drizzle ORM Integration

A production-ready authentication system built with **Better Auth** and **Drizzle ORM**, featuring a clean architecture and comprehensive authentication features.

## ✨ Features

### 🔑 Authentication Features
- ✅ **Email & Password Authentication** - Secure sign-in and sign-up
- ✅ **Email Verification** - Required email verification with auto sign-in after verification
- ✅ **Password Reset** - Forgot password functionality with email notifications
- ✅ **Social Authentication** - OAuth providers (GitHub, Discord)
- ✅ **Session Management** - Cookie-based session with 5-minute cache
- ✅ **Protected Routes** - Automatic session checking and redirects

### 🎨 UI Features
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎭 **Modern UI Components** - Built with Radix UI and shadcn/ui
- 🔄 **Loading States** - Smooth loading indicators and button states
- 📧 **Email Templates** - Beautiful React email templates for verification and password reset
- 🎯 **Form Validation** - Zod schema validation with React Hook Form
- 🔔 **Toast Notifications** - User-friendly error and success messages

### 🏗️ Architecture
- 🗄️ **Drizzle ORM** - Type-safe PostgreSQL database operations
- 📦 **Clean Structure** - Well-organized component and utility structure
- 🔌 **Better Auth Integration** - Seamless Better Auth setup with Drizzle adapter
- 📧 **Email Service** - Resend integration for transactional emails
- 🐳 **Docker Support** - PostgreSQL database via Docker Compose

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Better Auth** - Modern authentication library
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **PostgreSQL** - Relational database

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Additional Libraries
- **Resend** - Email delivery service
- **Sonner** - Toast notifications
- **@zxcvbn-ts** - Password strength estimation

## 📁 Project Structure

```
bestauth/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts          # Better Auth API handler
│   ├── auth/
│   │   └── login/
│   │       ├── page.tsx               # Login page with tabs
│   │       └── _components/
│   │           ├── signin-tab.tsx    # Sign in form
│   │           ├── signup-tab.tsx    # Sign up form
│   │           ├── email-verification.tsx  # Email verification UI
│   │           └── social-auth-button.tsx  # OAuth buttons
│   ├── drizzle/
│   │   ├── db.ts                      # Drizzle database instance
│   │   ├── schema.ts                  # Schema exports
│   │   └── schemas/
│   │       └── auth-schema.ts         # Auth tables (user, session, account, verification)
│   └── page.tsx                       # Home page
├── components/
│   ├── auth/
│   │   ├── 0auth-icons.tsx            # OAuth provider icons
│   │   └── betterauth-action-button.tsx  # Better Auth action wrapper
│   ├── email-template/
│   │   ├── VerificationEmailTemplate.tsx
│   │   └── ResetPasswordTemplate.tsx
│   └── ui/                            # shadcn/ui components
├── lib/
│   ├── auth.ts                        # Better Auth configuration
│   ├── auth-client.ts                 # Client-side auth client
│   ├── 0auth-providers.ts             # OAuth provider configuration
│   └── emails/
│       ├── send-email.ts              # Email service (Resend)
│       ├── sendVerificationEmail.ts
│       └── sendResetPasswordEmail.ts
├── drizzle.config.ts                  # Drizzle configuration
├── docker-compose.yml                 # PostgreSQL container setup
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL (or Docker)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bestauth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   
   # Better Auth
   BETTER_AUTH_SECRET=your-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000
   
   # OAuth Providers
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   DISCORD_CLIENT_ID=your-discord-client-id
   DISCORD_CLIENT_SECRET=your-discord-client-secret
   
   # Email Service (Resend)
   RESEND_API_KEY=your-resend-api-key
   
   # Docker Database (if using docker-compose)
   DB_USER=postgres
   DB_PASSWORD=your-password
   DB_NAME=bestauth
   ```

4. **Set up the database**

   **Option A: Using Docker Compose**
   ```bash
   docker-compose up -d
   ```

   **Option B: Using existing PostgreSQL**
   - Ensure PostgreSQL is running
   - Update `DATABASE_URL` in `.env`

5. **Run database migrations**
   ```bash
   npm run db:push
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run database migrations |
| `npm run db:push` | Push schema changes to database |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |

## 🔧 Configuration

### Better Auth Configuration

The main Better Auth configuration is in `lib/auth.ts`. Key features:

- **Email & Password**: Enabled with required email verification
- **Social Providers**: GitHub and Discord OAuth
- **Session Management**: Cookie cache with 5-minute TTL
- **Email Templates**: Custom verification and password reset emails

### Database Schema

The database schema includes four main tables:

- **user** - User accounts with email verification status
- **session** - Active user sessions with IP and user agent tracking
- **account** - OAuth account connections
- **verification** - Email verification and password reset tokens

## 🎯 Usage Examples

### Sign Up
Users can sign up with email and password. After signup:
- Verification email is automatically sent
- User is redirected to email verification page
- Auto sign-in occurs after email verification

### Sign In
- Email and password authentication
- Automatic redirect if email not verified
- Session creation with cookie caching

### Social Authentication
- Click GitHub or Discord button
- OAuth flow completes
- User is automatically signed in

### Password Reset
- Password reset functionality is configured
- Email notifications sent via Resend
- Custom email templates for branded emails

## 🔐 Security Features

- ✅ Email verification required
- ✅ Secure password hashing (handled by Better Auth)
- ✅ Session management with cookie caching
- ✅ CSRF protection (Better Auth built-in)
- ✅ Type-safe database operations (Drizzle ORM)

## 📧 Email Templates

Custom React email templates are located in `components/email-template/`:
- **VerificationEmailTemplate** - Email verification links
- **ResetPasswordTemplate** - Password reset links

Both templates use your UI components for consistent branding.

## 🎨 UI Components

Built with shadcn/ui components:
- Forms with validation
- Buttons with loading states
- Cards and layouts
- Toast notifications
- Tabs for sign-in/sign-up
- Password input with strength indicator

## 🔄 Future Enhancements

- 🔜 **Forgot Password UI** - Complete forgot password flow (currently configured but UI pending)
- 🔜 **Role-based Access Control** - User roles and permissions
- 🔜 **Two-Factor Authentication** - Additional security layer
- 🔜 **Account Management** - Profile editing and settings

## 📚 Resources

- [Better Auth Documentation](https://better-auth.com)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Better Auth and Drizzle ORM**
