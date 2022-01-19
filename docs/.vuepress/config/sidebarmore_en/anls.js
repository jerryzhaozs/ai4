module.exports = [
    {
        title: 'Method library',   		 // 必要的 GROUP1
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1
    },
    {
        title: 'Disaster prediction',   		 // 必要的 GROUP1
        path: '/guide/usedsites',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        // children: [
        //['', '快速了解'],
        // ['guide2', '快速入门']
        // ],
        initialOpenGroupIndex: 1
    }
]