/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['www.tejidocrochet.com', 'firebasestorage.googleapis.com'],
	},
};

module.exports = nextConfig;
