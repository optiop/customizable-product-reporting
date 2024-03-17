/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mehrshad.io',
  generateRobotsTxt: true, 
  include: [
    '/index.html',
    '/contact/index.html',
    '/projects/index.html',
    '/projects/kugelblitz/index.html',
    '/projects/metasys/index.html',
    '/projects/ssd/index.html',
  ]
}