import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    },
  })],
  build: {
    lib: {
      entry: './src/TodoList.svelte', // Ruta a tu componente Svelte
      formats: ['es'], // Puedes usar otros formatos como 'umd' o 'iife' si es necesario
      name: 'TodoListComponent', // Nombre del componente
      fileName: 'todo-list', // Nombre del archivo generado
    },
    outDir: 'dist', // Carpeta de salida
    cssCodeSplit: false, // Evita que se genere un archivo CSS separado
  },
});
