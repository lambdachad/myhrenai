import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
    plugins: [
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
