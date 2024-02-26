/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/socio/:id',
            destination: '/socio',
          },
        ];
      },
};

export default nextConfig;
