/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages :[
      "@next-auth/firebase-adapter"
    ]
  },
  env: {
    secret_key: Math.random().toString(36).substring(1,36).replace(/^0+/, ''),
    auth_url: process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "http://localhost:3000"
  }
}

module.exports = nextConfig
