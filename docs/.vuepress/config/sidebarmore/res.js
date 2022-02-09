module.exports = [
  {
    title: 'AI4AGR',   		 // 必要的 GROUP1
    path: '/res/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false,   // 可选的, 默认值是 true,
    sidebarDepth: 1,      // 可选的, 默认值是 1
    displayAllHeaders: true,
    initialOpenGroupIndex: 1,
    children: [
      {
        title: '作物产量', path: '/res/crop/',
        children: [
          { title: '小 麦', path: '/res/crop/wheat/' },
          { title: '水 稻', path: '/res/crop/rice/' },
          { title: '玉 米', path: '/res/crop/maize/' },
          { title: '燕 麦', path: '/res/crop/oat/' },
          { title: '黑 麦', path: '/res/crop/rye/' },
          { title: '高 粱', path: '/res/crop/sorghum/' },
          { title: '油菜籽', path: '/res/crop/rapeseed/' },
          { title: '葵花籽', path: '/res/crop/sunflowerseed/' },
          { title: '大 豆', path: '/res/crop/soybean/' },
          { title: ' 棉', path: '/res/crop/cotton/' },
          { title: '甘蔗', path: '/res/crop/sugarcane/' },
          { title: '甜菜', path: '/res/crop/sugarbeet/' },
        ]
      },
      { title: '风险预警', path: '/res/dprediction/' },
      { title: '气 候', path: '/res/climate/' },
      { title: '自动报告', path: '/res/report/' },
      { title: '方法库', path: '/res/meth/' },
    ]
  }
]