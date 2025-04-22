# NCI Team Portfolio

A responsive React-based portfolio website for our student team at National College of Ireland, showcasing our products and team members.

## Features

- Modern, responsive design using React and Tailwind CSS
- Team member profiles and information
- Products showcase with detailed pages
- About page with mission, vision, and values
- Contact form and information
- Animated UI elements with Framer Motion

## Current Products

- Celtify - Our flagship product celebrating Irish culture through technology

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/nci-team-portfolio.git
cd nci-team-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Deployment to Netlify

This project is configured for easy deployment on Netlify:

1. Push your code to a GitHub repository
2. Log in to Netlify and create a new site from the GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Deploy!

## Customization

### Modifying Team Members

Edit the `src/data/teamData.js` file to update team member information.

### Adding New Products

Add new products to the `src/data/productsData.js` file following the existing structure.

### Changing Colors and Styling

Modify the Tailwind configuration in `tailwind.config.js` to customize colors and other design elements.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.