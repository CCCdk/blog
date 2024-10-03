import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { getSidebar } from './utils/getSidebar'
export default defineConfig({
  title: "CCCdk's Blog",
  titleTemplate: 'ice_dk',
  // md 文件根目录
  srcDir: './src',
  lastUpdated: true,
  description:
    "ice_dk's tech blog: An undergraduate's journey through frontend development, sharing insights, tips, and experiences in web technologies.",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    // 顶部导航栏
    nav: [
      { text: '👋 About', link: 'AboutMe.md' },
      { text: '💭 Blogs', link: '/Notes/index' },
      { text: '🎈 Interviews', link: '/Notes/Guide/index' },
      { text: '🦄 Projects', link: 'Projects.md' },
      { text: '👫 Friends', link: 'Friends.md' }
    ],
    // 文章页面左侧导航
    sidebar: {
      '/Notes/': getSidebar('/docs/src', '/Notes/')
    },
    // 是否启动搜索功能
    search: {
      provider: 'local'
    },
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none"><script xmlns=""/><script xmlns=""/><script xmlns=""/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/><script xmlns=""/><script xmlns=""/></svg>'
        },
        link: 'https://juejin.cn/user/2881200123551565/posts'
      },
      { icon: 'github', link: 'https://github.com/CCCdk' }
    ],
    // 首页底部版权声明
    footer: {
      copyright: 'Created by ice_dk in 2024'
    },
    // 文章内导航栏标题
    outlineTitle: '导航栏'
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(new URL('./components/UpdateTime.vue', import.meta.url))
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./components/Footer.vue', import.meta.url))
        }
      ]
    }
  },
  markdown: {
    math: true
  }
})
