// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 사용법 사이드바
  usageSidebar: [
    'usage-guide/create-a-project',
    {
      type: 'category',
      label: '인터페이스',
      link: {
        type: 'doc',
        id: 'usage-guide/interface',
      },
      items: [
        'usage-guide/toolbar',
        'usage-guide/project-toolbar',
        'usage-guide/hierarchy',
        'usage-guide/viewport',
        'usage-guide/inspector',
        'usage-guide/assets',
      ],
    },
    {
      type: 'category',
      label: 'AI',
      link: {
        type: 'doc',
        id: 'usage-guide/ai-generation',
      },
      items: [
        'usage-guide/image-generation',
        'usage-guide/code-generation',
      ],
    },
    {
      type: 'category',
      label: '서버',
      link: {
        type: 'doc',
        id: 'usage-guide/server',
      },
      items: [
        'usage-guide/authentication',
        // 'usage-guide/chat',
        'usage-guide/leaderboard',
      ],
    },
  ],
  
  // 튜토리얼 사이드바
  tutorialSidebar: [
    'tutorial/basic-tutorial',
    'tutorial/ground-writing',
    'tutorial/material',
    'tutorial/physics-movement',
    'tutorial/template',
    'tutorial/script'
  ],
  
  // 한 단계 더 나아가기 사이드바
  advancedSidebar: [
    'advanced/advanced-tutorial',
  ],
};

export default sidebars;
