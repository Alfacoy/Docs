/* const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula'); */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Brian Durand',
  tagline: 'Documentación de Brian Durand.',
  url: 'https://www.docs.durandbrian.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Alfacoy', 
  projectName: 'Docs', 
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Brian Durand',
        items: [
          {
            href: 'https://www.durandbrian.com/',
            label: 'Website',
            position: 'right',
          }
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Documentación',
                href: '/'
              }
            ]
          },
          {
            title: 'Redes',
            items: [
              {
                label: 'Trailblazer',
                href: 'https://trailblazer.me/id/briandurand',
              },
              {
                label: 'GitHub',
                href: 'https://www.linkedin.com/in/bdurand601/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/bdurand601/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Hecho con 💖 y <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer"><b>Docusaurus</b></a> por <a href="https://www.durandbrian.com/" target="_blank" rel="noopener noreferrer"><b>Brian Durand</b></a>.`,
      },
      /* prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, */
    }),
};

module.exports = config;
