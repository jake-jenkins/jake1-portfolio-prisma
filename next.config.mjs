/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.jake1.net"
            }
        ]
    }
};

export default nextConfig;
