module.exports = [
    {
        title: 'Guide',     // 必要的 GROUP1
        path: '/en/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: 'AI Blog',path:'/'},
            {title: 'Data set',path:'/'},
            {title: 'Platform / Framework',path:'/'},
            {title: 'Programming',path:'/'},
            {title: 'Map',path:'/'},
            {title: 'Analysis',path:'/'},
        ]
    }
]