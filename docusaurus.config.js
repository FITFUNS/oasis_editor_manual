// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OasisW',
  tagline: '3D 웹 개발을 위한 강력한 도구',
  favicon: '/engine/assets/fitfuns-logo1.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manual.oasisserver.link',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FITFUNS', // Usually your GitHub org/user name.
  projectName: 'oasis_editor_manual', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/engine/assets/fitfuns-logo1.svg',
      navbar: {
        title: 'OasisW',
        logo: {
          alt: 'OasisW Logo',
          src: '/engine/assets/fitfuns-logo1.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'usageSidebar',
            position: 'left',
            label: '사용법',
            to: '/docs/usage-guide/dashboard',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'left',
            label: '메뉴얼',
            path: '/user-manual',
          },
          {
            label: 'API',
            href: 'https://manual.oasisserver.link/engine',
          },

          // {
          //   type: 'docSidebar',
          //   sidebarId: 'advancedSidebar',
          //   position: 'left',
          //   label: '한 단계 더 나아가기',
          //   to: '/docs/advanced/advanced-tutorial',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '사용법',
                to: '/docs/usage-guide/dashboard',
              },
              {
                label: '메뉴얼',
                to: '/docs/user-manual/',
              },
              {
                label: 'API',
                href: 'https://manual.oasisserver.link/engine',
              },
              // {
              //   label: '한 단계 더 나아가기',
              //   to: '/docs/advanced/advanced-tutorial',
              // },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} OasisW. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
