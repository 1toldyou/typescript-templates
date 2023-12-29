import { defineConfig } from "tsup"

export default defineConfig({
    outDir: "build",
    entry: {
        "index": "src/index.ts",
    },
    splitting: false,
    sourcemap: false,
    clean: true,
    target: "es2022",
    platform: "node",
})
