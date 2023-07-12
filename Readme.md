# Creación Front VITE React 
npm create vite

## Instalación de TailWind CSS en Vite React
- npm install -D tailwindcss

- npx tailwindcss init

- /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

- En Css: 
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

## Rutas para React:
npm install react-router-dom

## Usando React Hook Form (permite poder decir a React que tengo un Form (cambio de estado))
npm install react-hook-form

## Axios (engloba Fetch)
npm i axios

## Leer las Cookies del front
npm i js-cookie