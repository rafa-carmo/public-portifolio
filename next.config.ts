import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV ? undefined : "standalone",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
