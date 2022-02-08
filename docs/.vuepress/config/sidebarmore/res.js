module.exports = [
    {
        title: 'AI4AGR',   		 // 必要的 GROUP1
        path: '/res/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: '按地区查看',path:'/res/region/'},
            {title: '风险预警',path:'/res/dprediction/'},
            {title: '气候',path:'/res/climate/'},
            {title: '自动报告',path:'/res/report/'},
            {title: '方法库',path:'/res/meth/'},
        ]
    }
]