/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dogsapi.origamid.dev",
        port: "",
        pathname: "/**/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "place.dog",
        port: "",
        pathname: "/**/**",
        search: "",
      },
    ],
  },
  webpack(config) {
    // Encontra a regra existente que lida com imports de SVG no Next.js
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Re-aplica a regra existente apenas para arquivos que terminam em *.svg?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // ex: import logo from './logo.svg?url'
      },
      // Converte todos os outros imports de *.svg em componentes React
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: ["@svgr/webpack"],
      },
    );

    // Modifica a regra original para ignorar arquivos .svg,
    // já que agora temos nossas próprias regras acima
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
