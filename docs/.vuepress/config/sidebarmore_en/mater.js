module.exports = [
    {
        title: 'Material',   		 // 必要的 GROUP1
        path: '/en/mater/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: 'software resources',path:'/'},
            {title: 'development resources',path:'/'},
            {title: 'development language',path:'/'},
        ]
    }
]