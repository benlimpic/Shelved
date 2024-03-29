import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      define: {
          'process.env.Book_API': JSON.stringify(env.Book_API),
      },
      plugins: [react()]
  };
  
});
