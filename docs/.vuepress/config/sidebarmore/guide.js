module.exports = [
    {
        title: '网站导航',     // 必要的 GROUP1
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: 'AI Blog',path:'/guide/aiblog'},
            {title: '数据集',path:'/guide/dataset'},
            {title: '平台/框架',path:'/'},
            {title: '编程',path:'/'},
            {title: '地图类',path:'/'},
            {title: '大数据分析',path:'/'},
        ]
    }
]