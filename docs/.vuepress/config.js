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
    repo: 'https://github.com/jerryzhaozs',
    repoLabel: 'Github',
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '领域数据', link: '/adata/' },
      {text: '数据分析', link: '/anls/'},
      {text: '软件资源', link: '/sres/'},
      {text: '网站导航', link: '/guide/'}
    ],
    // nav:{
    //   '/zh/':[
    //       {text: '首页', link: '/' },
    //       {text: '领域数据', link: '/adata/' },
    //       {text: '数据分析', link: '/anls/'},
    //       {text: '软件资源', link: '/sres/'},
    //       {text: '网站导航', link: '/guide/'},
    //   ], 
    //   '/':[
    //     {text: 'HOME', link: '/' },
    //     {text: 'Area Data', link: '/adata/' },
    //     {text: 'Analysis', link: '/anls/'},
    //     {text: 'Software Resource', link: '/sres/'},
    //     {text: 'Guide', link: '/guide/'},
    //   ]
    // },
    // sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 2, // 侧边栏显示2级
    //displayAllHeaders: true,
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
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'AI4AGR',
      description: 'aiforagriculture'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'AI4AGR',
      description: '农业人工智能'
    }
  }
};
