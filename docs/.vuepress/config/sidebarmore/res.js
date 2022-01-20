module.exports = [
    {
        title: 'AI4AGR',   		 // 必要的 GROUP1
        path: '/res/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: '按地区查看',path:'/'},
            {title: '风险预警',path:'/'},
            {title: '气候与干旱',path:'/'},
            {title: '自动报告',path:'/'},
            {title: '方法库',path:'/'},
        ]
    }
]