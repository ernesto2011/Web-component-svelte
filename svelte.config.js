
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess({
    // Configuración del compilador para Web Components
    compilerOptions: {
      customElement: true,
      shadow: false // Habilitar la exportación como Web Component
    },
  }),
};