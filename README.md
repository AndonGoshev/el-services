# ElectroPro - Electrical Services Website

A modern, responsive website for an electrical services company, built with React, TypeScript, and Tailwind CSS. The website features both English and Bulgarian language support.

## Features

- 🌐 Bilingual support (English/Bulgarian)
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 📝 Blog system with individual post pages
- 📞 Contact form
- 🏢 Services showcase
- 👥 Team section
- 📱 Mobile-friendly navigation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd electrical-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── i18n.ts        # Internationalization configuration
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
