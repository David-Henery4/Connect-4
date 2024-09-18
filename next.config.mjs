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
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash].[ext]",
            },
          },
        ],
      }
    );

    return config;
  },
};

export default nextConfig;
