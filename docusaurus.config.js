// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luksoverse - Docs',
  tagline: 'The community place for docs',
  url: 'https://docs.luksoverse.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lv-logo.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Luksoverse', // Usually your GitHub org/user name.
  projectName: 'community-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/lv-docs-logo.png',
      navbar: {
        title: 'Luksoverse - docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/black-logo.png',
          srcDark: 'img/white-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'mainnet/complete-node-guide/hardware-build/start-here',
            position: 'left',
            label: 'Mainnet',
          },
          {
            type: 'doc',
            docId: 'testnet/testnet-info',
            position: 'left',
            label: 'Testnet',
          },
          {
            type: 'doc',
            docId: 'devnet/devnet-info',
            position: 'left',
            label: 'Devnet',
          },
          {
            type: 'doc',
            docId: 'l16-archive-docs/parameters',
            position: 'left',
            label: 'L16 Archive',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Your Mainnet Node',
                to: 'mainnet/complete-node-guide/hardware-build/start-here',
              },
              {
                label: 'Mainnet info',
                to: '/docs/mainnet/mainnet-info',
              },
              {
                label: 'Community archive',
                to: '/docs/Community-Archive/community-archive',
              },
              {
                label: 'Advanced Community Setup',
                to: '/docs/community-guides/vpn-setup',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/luksoverse',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/AE3KdFhpAQ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/luksoverse_io',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Luksoverse/docs.luksoverse.io',
              },
              {
                label: 'Luksoverse.io website',
                href: 'https://luksoverse.io/contributor/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Luksoverse`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {
    warningText:
      'Warning: Our manuals and instructions are guidelines only and should be used at your own risk.<br>A basic understanding of what you’re doing is strongly advised.<br><br>Luksoverse is not responsible for any harm or loss to your computer or digital assets.',
  },
};

module.exports = config;
