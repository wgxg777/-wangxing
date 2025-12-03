import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'

export default defineConfig({
  lang: 'zh-CN',
  title: '王兴组件库',
  description: '基于 Vue 的组件库 Monorepo',
  base: '/-wangxing/',
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
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' }
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
            { text: 'BaseTable 基础表格', link: '/components/base-table' }
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
    }
  }
})
