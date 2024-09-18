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
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/sounds/",
            outputPath: "static/sounds/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      }
    );

    return config;
  },
};

export default nextConfig;
