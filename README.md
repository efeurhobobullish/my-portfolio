# my-portfolio

## Overview
my-portfolio is a personal portfolio website built to showcase projects, skills, and experience in a visually engaging and interactive manner. It is designed primarily for frontend developers, designers, and anyone interested in building or viewing modern web portfolios.

## Features
- Responsive and modern UI with smooth animations
- Typed text animation for dynamic introductions
- Client-side routing for seamless navigation
- Toast notifications for user feedback
- Easy integration with APIs using Axios
- Fully interactive and reactive React components

## Tech Stack
- **Frontend:** React 18, React Router DOM, React Typed, Framer Motion, React Hot Toast
- **Styling:** CSS
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Linting:** ESLint with React and hooks plugins

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/efeurhobobullish/my-portfolio.git
   cd my-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally
Start the development server with hot reload:
```bash
npm run dev
# or
yarn dev
```
Open your browser at `http://localhost:5173` (default Vite port) to see the site.

### Building for Production
To create a production-ready build, run:
```bash
npm run build
# or
yarn build
```
Preview the production build locally with:
```bash
npm run preview
# or
yarn preview
```

## Usage
After starting the development server, navigate through the portfolio to explore different sections such as About, Projects, and Contact. The interactive typed animation introduces the portfolio owner dynamically.

### Example: Using the Typed Text Animation
The homepage features a React Typed component that animates text to present your roles or skills:
```jsx
import ReactTyped from 'react-typed';

function Intro() {
  return (
    <ReactTyped
      strings={['Frontend Developer', 'UI/UX Enthusiast', 'Open Source Contributor']}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
}
```

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

Please ensure code follows the ESLint rules and passes linting before submitting.

## License
This project is private and currently does not have an open source license.