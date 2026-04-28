if (!process.env.NITRO_HOST) {
  process.env.NITRO_HOST = '0.0.0.0';
}

if (!process.env.HOST) {
  process.env.HOST = process.env.NITRO_HOST;
}

await import('./.output/server/index.mjs');