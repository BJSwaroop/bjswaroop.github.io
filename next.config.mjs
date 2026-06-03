/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — outputs a fully static site to ./out, ready for Vercel / any static host.
  output: 'export',

  // next/image optimization runs on a server, which a static export does not have.
  // Disabling it lets <Image> work in an exported build. (On Vercel you may remove this
  // line and drop `output: 'export'` to get full image optimization instead.)
  images: {
    unoptimized: true,
  },

  // Emit /about/index.html style paths so deep links work on static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
