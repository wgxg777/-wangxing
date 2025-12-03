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
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'BaseTable 基础表格', link: '/components/base-table' }
          ]
        }
      ]
    }
  }
})
