import * as esbuild from "esbuild";

const args = process.argv.filter((val, index, array) => val.includes("--"));

if (args.find((v) => v === "--watch")) {
  const ctx = await esbuild.context({
    entryPoints: ["src/main.ts"],
    outfile: "dist/index.min.js",
    bundle: true,
    // minifyWhitespace: true,
    // minifySyntax: true,
    platform: "node",
    logLevel: "info",
    legalComments: "none",
    treeShaking: false,
  });
  await ctx.watch();
} else {
  await esbuild.build({
    entryPoints: ["src/main.ts"],
    outfile: "dist/index.min.js",
    bundle: true,
    // minifyWhitespace: true,
    // minifySyntax: true,
    platform: "node",
    logLevel: "info",
    legalComments: "none",
    treeShaking: false,
  });
}
