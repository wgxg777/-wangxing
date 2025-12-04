import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'

export default defineConfig({
  lang: 'zh-CN',
  title: '王兴组件库',
  description: '基于 Vue 的组件库 Monorepo',
  base: '/-wangxing/',
  appearance: 'dark', // 支持深色模式
  lastUpdated: true, // 显示最后更新时间
  vite: {
    plugins: [
      whyframe({
        defaultSrc: '/frames/default'
      }),
      whyframeVue({
        include: /\.(?:vue|md)$/
      })
    ],
    ssr: {
      noExternal: ['@wangxing777/business', 'element-plus']
    }
  },
  themeConfig: {
    logo: '/logo.svg', // 可以添加 logo
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
      {
        text: 'v0.1.0',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/@wangxing777/business' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'BaseTable 基础表格', link: '/components/base-table' },
            { text: 'Tooltip 提示', link: '/components/tooltip' },
            { text: 'Dialog 弹窗', link: '/components/dialog' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wgxg777/-wangxing' }
    ],
    footer: {
      message: '基于 Vue 3 + Element Plus 的业务组件库',
      copyright: 'Copyright © 2025'
    },
    editLink: {
      pattern: 'https://github.com/wgxg777/-wangxing/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新'
  }
})
