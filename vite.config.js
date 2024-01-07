import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [vue()],
    // resolve: {
    //     alias: {
    //         "@": fileURLToPath(new URL("./src", import.meta.url))
    //     }
    // },
    server: {
        host: true,
        port: 5173
    },
    // define: {
    //     __VUE_I18N_FULL_INSTALL__: true,
    //     __VUE_I18N_LEGACY_API__: false,
    //     __INTLIFY_PROD_DEVTOOLS__: false
    // }
});
