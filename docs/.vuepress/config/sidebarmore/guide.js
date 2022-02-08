module.exports = [
    {
        title: '导 航',     // 必要的 GROUP1
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: 'AI Blog',path:'/guide/aiblog/'},
            {title: '数据集',path:'/guide/dataset/'},
            {title: '平台/框架',path:'/guide/aiframe/'},
            {title: '地图类',path:'/guide/map/'},
            {title: '数据可视化',path:'/guide/datavue/'},
            {title: '开发资源',path:'/guide/devrsrc/'},
        ]
    }
]