import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  server: {
    port: 8081,
    strictPort: true,
  },

  plugins: [vue()],
}
