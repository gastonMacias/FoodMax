import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: mode === 'production' ? 'https://gastonMacias.github.io/FoodMax' : '/',
})


// mode === 'production': Este código se asegura de que la propiedad base solo se aplique cuando ejecutes 
// npm run build, que es el comando que se usa para desplegar en producción (como GitHub Pages). 
// En desarrollo (npm run dev), base será '/', que es lo correcto para el entorno local.