import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "miro.medium.com",
                protocol: "https",
                port: ""
            },
            {
                hostname: "lh3.googleusercontent.com",
                protocol: "https",
                port: ""
            },
            {
                hostname: "letsenhance.io",
                protocol: "https",
                port: ""
            }
        ]
    }
};

export default nextConfig;
