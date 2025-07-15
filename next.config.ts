import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		// This will skip ESLint checks during `npm run build`
		ignoreDuringBuilds: true,
	},
  typescript: {
    // This will skip TypeScript checks during `npm run build`
    ignoreBuildErrors: true,
  },
	// other config options here...
};

export default nextConfig;
