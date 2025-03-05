const config = {
    siteUrl: 'https://rafaelcarmo.dev',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', disallow: '/private/' },
        { userAgent: '*', allow: '/' },
        { userAgent: '*', allow: '/pt-BR' },
        { userAgent: '*', allow: '/en' },
      ],
    },
  };
  
  module.exports = config;