module.exports = {
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
    repo: 'https://github.com/jerryzhaozs/ai4',
    repoLabel: 'Github',
    //nav:require("./config/nav.js"),
    // sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 2, // 侧边栏显示2级
    //displayAllHeaders: true,
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/en/': {
        lang: 'en-US',
        title: 'AI4AGR',
        description: 'ai4agr',
        nav:require("./config/nav_en.js"),
      },
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        title: 'AI4AGR',
        description: '农业人工智能',
        nav:require("./config/nav.js"),
      },
    },
    sidebar: {
      '/guide/': [
        {
          title: '导航',   		 // 必要的 GROUP1
          path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
          //['', '快速了解'],      	/* /guide/ */
          ['guide2', '快速入门']
          ],
          initialOpenGroupIndex: 1
        }
      ],
      '/adata/': [
        {
          title: '数据',   		 // 必要的 GROUP1
          path: '/adata/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
          //['', '快速了解'],      	/* /guide/ */
          //['guide2', '快速入门']
          ],
          initialOpenGroupIndex: 1
        }
      ],
      '/_post/': [
        {
          title: '介绍',   		 // 必要的 GROUP1
          path: '/_post/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
          //['', '_post'],      	/* /guide/ */
          ['haha', 'haha'], /* /guide/fastIn.html */
          ['jumpwa', 'jumpwa']
          ],
          initialOpenGroupIndex: 1
        }
      ],
      // fallback
      '/': [
      '',   /* / */
      ]
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'AI4AGR',
      description: 'ai for agriculture'
    },
    '/': {
      lang: 'zh-CN',
      title: 'AI4AGR',
      description: '农业人工智能'
    }
  }
};
