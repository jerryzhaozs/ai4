module.exports = [
    {
        title: 'Guide',   		 // 必要的 GROUP1
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1
    },
    {
        title: 'Common websites',   		 // 必要的 GROUP1
        path: '/guide/usedsites',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        // children: [
        //['', '快速了解'],
        // ['guide2', '快速入门']
        // ],
        initialOpenGroupIndex: 1
    },
    {
        title: 'Content classification',   		 // 必要的 GROUP1
        path: '/guide/catelist',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        // children: [
        //['', '快速了解'],
        // ['guide2', '快速入门']
        // ],
        initialOpenGroupIndex: 1
    },
    {
        title: 'Timeline',   		 // 必要的 GROUP1
        path: '/guide/timeline',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1
    },
    {
        title: 'About this site',   		 // 必要的 GROUP1
        path: '/guide/about',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        // children: [
        // //['', '快速了解'],      	/* /guide/ */
        // ['导航2的guide2', '快速入门']
        // ],
        initialOpenGroupIndex: 1
    }
]