import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Wisp CSS",
  description: "Wisp is a spirited, modern, semantic CSS framework.",
  themeConfig: {
    outline: [2, 3],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/objects/container' }
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [

        ]
      },
      {
        text: "Core",
        items: [
          { text: 'Preflight',   link: '/core/preflight' },
          { text: 'Foundation',  link: '/core/foundation' }
        ]
      },
      {
        text: 'Objects',
        items: [
          { text: 'Box',         link: '/objects/objects.box' },
          { text: 'Cluster',     link: '/objects/objects.cluster' },
          { text: 'Container',   link: '/objects/objects.container' },
          { text: 'Grid',        link: '/objects/objects.grid' },
          { text: 'Link Block',  link: '/objects/objects.link-block' },
          { text: 'Link Inline', link: '/objects/objects.link-inline' },
          { text: 'Media',       link: '/objects/objects.media' },
          { text: 'Pair',        link: '/objects/objects.pair' },
          { text: 'Ratio',       link: '/objects/objects.ratio' },
          { text: 'Stack',       link: '/objects/objects.stack' }
        ]
      },
      {
        text: "Behaviors",
        items: [
          { text: 'Press',      link: '/behaviors/behaviors.press' },
          { text: 'Scroll',     link: '/behaviors/behaviors.scroll' },
          { text: 'Transition', link: '/behaviors/behaviors.transition' }
        ]
      },
      {
        text: "Components",
        items: [
          { text: 'Badge',  link: '/components/components.badge' },
          { text: 'Button', link: '/components/components.button' },
          { text: 'Card',   link: '/components/components.card' },
          { text: 'Input',  link: '/components/components.input' },
          { text: 'Table',  link: '/components/components.table' }
        ]
      },
      {
        text: "Utilities",
        items: [
          
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})