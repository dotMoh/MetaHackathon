// next.config.mjs
export default {
  experimental: {
    ppr: true,  // Partial Rendering (or whatever the specific feature is)
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',  // Define remote image sources
      },
    ],
  },
};