# SaaS Template

A modern, production-ready SaaS template built with Next.js, featuring authentication, payments, and a beautiful UI.

## 🚀 Features

- **Authentication**: Secure user authentication with NextAuth.js and AWS Cognito
- **Payments**: Integrated Stripe payment processing
- **Modern UI**: Built with Shadcn UI and Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Built-in dark mode support
- **Form Handling**: Advanced form validation with React Hook Form
- **API Routes**: Secure API endpoints with Next.js API routes

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) + AWS Cognito
- **Payments**: [Stripe](https://stripe.com/)
- **Database**: [Prisma](https://www.prisma.io/) (optional)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## 📦 Prerequisites

- Node.js 18.17 or later
- npm or yarn
- AWS Account (for Cognito)
- Stripe Account
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/saas-template.git
   cd saas-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret

   # AWS Cognito
   COGNITO_CLIENT_ID=your-cognito-client-id
   COGNITO_CLIENT_SECRET=your-cognito-client-secret
   COGNITO_ISSUER=your-cognito-issuer-url

   # Stripe
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
saas-template/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── public/                # Static assets
└── styles/                # Global styles
```

## 🔐 Authentication

This template uses NextAuth.js with AWS Cognito for authentication. The authentication flow includes:

- Email/password login
- Social login (configurable)
- Protected routes
- Session management
- Password reset functionality

## 💳 Payments

Stripe integration includes:

- Subscription management
- Payment processing
- Webhook handling
- Customer portal
- Usage-based billing (optional)

## 🎨 UI Components

The template uses Shadcn UI components with Tailwind CSS for styling. Key components include:

- Responsive navigation
- Dashboard layout
- Form components
- Modal dialogs
- Toast notifications
- Data tables
- Charts and graphs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Built with ❤️ by DevDash Labs
