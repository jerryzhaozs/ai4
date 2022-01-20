module.exports = [
    {
        title: 'Resource',   		 // 必要的 GROUP1
        path: '/en/rsrc/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,   // 可选的, 默认值是 true,
        sidebarDepth: 2,      // 可选的, 默认值是 1
        initialOpenGroupIndex: 1,
        children:[
            {title: 'Climate Data',path:'/'},
            {title: 'Sowing and Production',path:'/'},
            {title: 'Crop Calendar',path:'/'},
            {title: 'Gis Data',path:'/'},
            {title: 'MODIS/NDVI',path:'/'},
            {title: 'Environment',path:'/'},
            {title: 'Trade Markets',path:'/'},
            {title: 'Economic Data',path:'/'},
        ]
    }
]