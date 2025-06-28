# 🔍 Mini Audit Tracker

A modern, responsive web application for tracking and managing audit observations with real-time data visualization and local storage persistence.

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 📝 **Create & Manage Observations** - Add new audit observations with title, description, severity, and status
- 📊 **Real-time Data Visualization** - Interactive charts showing observation status distribution
- 🔍 **Smart Filtering** - Filter observations by status (Open, In Progress, Closed)
- 💾 **Local Storage Persistence** - Data automatically saves to browser localStorage
- 🎨 **Modern Dark UI** - Beautiful, responsive design with dark theme
- 📱 **Mobile Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js 15 and React 19 for optimal performance
- 🔒 **Type Safety** - Full TypeScript implementation for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mini-audit-tracker.git
   cd mini-audit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Frontend**: [React 19](https://react.dev/) - UI library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **State Management**: React Hooks with custom localStorage hook
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
mini-audit-tracker/
├── 📁 app/                    # Next.js App Router
│   ├── 📄 page.tsx           # Main application page
│   ├── 📄 layout.tsx         # Root layout component
│   ├── 📄 globals.css        # Global styles
│   └── 📁 observations/      # Additional routes
├── 📁 components/            # React components
│   ├── 📄 ObservationForm.tsx    # Form for creating observations
│   ├── 📄 ObservationTable.tsx   # Table displaying observations
│   ├── 📄 Chart.tsx              # Data visualization component
│   ├── 📄 ObservationFilters.tsx # Status filtering component
│   ├── 📄 SeverityTag.tsx        # Severity indicator component
│   └── 📄 StatusBadge.tsx        # Status indicator component
├── 📁 hooks/                 # Custom React hooks
│   └── 📄 useLocalStorage.ts     # Local storage hook
├── 📁 types/                 # TypeScript type definitions
│   └── 📄 index.ts               # Observation interface
├── 📁 utils/                 # Utility functions
│   └── 📄 data.ts                # Initial data and utilities
└── 📁 public/               # Static assets
```

## 🎯 Usage

### Creating an Observation

1. **Fill out the form** with observation details:
   - **Title**: Brief description of the observation
   - **Description**: Detailed explanation
   - **Severity**: Choose from Low, Medium, or High
   - **Status**: Select Open, In Progress, or Closed

2. **Click "Add Observation"** to save

### Managing Observations

- **View all observations** in the responsive table
- **Filter by status** using the dropdown filter
- **Monitor progress** with the interactive chart
- **Data persists** automatically in your browser

### Data Structure

Each observation contains:
```typescript
interface Observation {
    id: string;           // Unique identifier
    title: string;        // Observation title
    description: string;  // Detailed description
    severity: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'In Progress' | 'Closed';
}
```

## 🎨 UI Components

### Severity Levels
- 🟢 **Low** - Green indicator
- 🟡 **Medium** - Yellow indicator  
- 🔴 **High** - Red indicator

### Status Badges
- 🟢 **Open** - Green badge
- 🟡 **In Progress** - Yellow badge
- 🔴 **Closed** - Red badge

## 📊 Features in Detail

### Data Visualization
- **Bar Chart**: Shows count of observations by status
- **Real-time Updates**: Chart updates automatically when data changes
- **Responsive Design**: Adapts to different screen sizes

### Data Persistence
- **Local Storage**: All data saved to browser localStorage
- **Automatic Sync**: Changes persist across browser sessions
- **No Server Required**: Works completely client-side

### Filtering System
- **Status-based Filtering**: Filter by Open, In Progress, or Closed
- **Real-time Filtering**: Results update instantly
- **Clear All Option**: Reset filters to show all observations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Recharts](https://recharts.org/) for the charting library
- [React](https://react.dev/) for the UI library

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Reach out to the maintainers

---

⭐ **Star this repository if you found it helpful!**
