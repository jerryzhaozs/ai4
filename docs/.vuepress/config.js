
module.exports = {
  //theme: 'antdocs',
  //theme: path.resolve(__dirname, './theme'),
  title: 'AI4AGR',
  description: 'AI4AGR',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    search: false,
    repo: 'https://github.com/jerryzhaozs/ai4',
    repoLabel: 'Github',
    //nav:require("./config/nav.js"),
    // sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 2, // 侧边栏显示2级
    //displayAllHeaders: true,
    locales: {
      '/en/': {
        lang: 'en-US',
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: require("./config/nav_en.js"),
      },
      '/': {
        lang: 'zh-CN',
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: require("./config/nav.js"),
      }
    },
    sidebar:require("./config/sidebar.js"),
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      selectLanguageName: 'English',
      lang: 'en-US',
      title: 'AI4AGR',
      description: 'AI for Agriculture'
    },
    '/': {
      selectLanguageName: '简体中文',
      lang: 'zh-CN',
      title: 'AI4AGR',
      description: '农业人工智能'
    }
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'jerryzhaozs',
      repo: 'ai4',
      clientId: '45531d5ed2dd99f56095',
      clientSecret: '99338c5c339cb7c7ba891e181e02b61878d1e1ee',
      autoCreateIssue: true,
    },
  },
};
