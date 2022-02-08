module.exports = [
    {
      title: '数 据',   		 // 必要的 GROUP1
      path: '/rsrc/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false,   // 可选的, 默认值是 true,
      sidebarDepth: 2,      // 可选的, 默认值是 1
      initialOpenGroupIndex: 1,
      children:[
          {title: '天气数据',path:'/rsrc/climate/'},
          {title: '农业数据',path:'/rsrc/agricultural/'},
          {title: '作物数据',path:'/rsrc/crop/'},
          {title: '地理数据',path:'/rsrc/geographic/'},
          {title: 'MODIS/NDVI',path:'/rsrc/MODISNDVI/'},
          {title: '地空环境',path:'/rsrc/earthspace/'},
          {title: '农产品贸易',path:'/rsrc/productstrade/'},
          {title: '宏观数据',path:'/rsrc/macrodata/'},
      ]
    }
]