/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(mp3)$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[path][name].[hash][ext]",
        },
      }
    );

    return config;
  },
};

export default nextConfig;
