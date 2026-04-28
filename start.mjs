if (!process.env.NITRO_HOST) {
  process.env.NITRO_HOST = '0.0.0.0';
}

if (!process.env.HOST) {
  process.env.HOST = process.env.NITRO_HOST;
}

// Ensure Nitro uses Render's provided PORT if present
if (process.env.PORT && !process.env.NITRO_PORT) {
  process.env.NITRO_PORT = process.env.PORT;
}

await import('./.output/server/index.mjs');