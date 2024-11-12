/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                // port: '',
                // pathname: '/account123/**',
            }, {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'static.wikia.nocookie.net',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;