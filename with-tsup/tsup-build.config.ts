import { defineConfig } from "tsup"

export default defineConfig({
    outDir: "dist",
    entry: {
        "index": "src/index.ts",
    },
    splitting: true,
    sourcemap: false,
    clean: true,
    // noExternal: [/(.*)/],
    target: "es2022",
    platform: "node",
})
