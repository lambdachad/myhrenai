import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit(),
        Unfonts({
            fontsource: {
                families: [
                    {
                        name: "Inter Variable",
                        variable: true,
                    },
                    {
                        name: "Inter Tight Variable",
                        variable: true,
                    },
                    {
                        name: "JetBrains Mono Variable",
                        variable: true,
                    },
                ],
            },
        }),
    ],
});
