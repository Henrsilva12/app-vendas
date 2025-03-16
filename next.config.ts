import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações do Next.js
  images: {
    domains: ['cdn.mindminers.com'], // Permite carregar imagens deste domínio
  },
  // Outras configurações podem ser adicionadas aqui
};

export default nextConfig;