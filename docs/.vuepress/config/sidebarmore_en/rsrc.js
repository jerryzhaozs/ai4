module.exports = [
    {
      title: 'Resource',   		 // 必要的 GROUP1
      path: '/en/rsrc/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false,   // 可选的, 默认值是 true,
      sidebarDepth: 2,      // 可选的, 默认值是 1
      initialOpenGroupIndex: 1,
      children:[
          {title: 'Climate Data',path:'/en/rsrc/climate/'},
          {title: 'Sowing and Production',path:'/en/rsrc/agricultural/'},
          {title: 'Crop Calendar',path:'/en/rsrc/crop/'},
          {title: 'Gis Data',path:'/en/rsrc/geographic/'},
          {title: 'MODIS/NDVI',path:'/en/rsrc/MODISNDVI/'},
          {title: 'Environment',path:'/en/rsrc/earthspace/'},
          {title: 'Trade Markets',path:'/en/rsrc/productstrade/'},
          {title: 'Economic Data',path:'/en/rsrc/macrodata/'},
      ]
    }
]