module.exports = [
    {
        title: '关 于',   		 // 必要的 GROUP1
        path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: '网站介绍',path:'/about/info'},
            {title: '网站声明',path:'/about/statement'},
            {title: '时间线',path:'/about/timeline/'},
            {title: '开发资源',path:'/about/devrsrc/'},
        ]
    }
]