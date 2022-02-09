module.exports = [
  {
    title: 'Research',
    path: '/en/res/',
    collapsable: false,
    sidebarDepth: 1,
    displayAllHeaders: true,
    initialOpenGroupIndex: 1,
    children: [
      {
        title: 'Crop yield', path: '/en/res/crop/',
        children: [
          { title: 'Wheat', path: '/en/res/crop/wheat/' },
          { title: 'Rice', path: '/en/res/crop/rice/' },
          { title: 'Maize', path: '/en/res/crop/maize/' },
          { title: 'Oats', path: '/en/res/crop/oat/' },
          { title: 'Rye', path: '/en/res/crop/rye/' },
          { title: 'Sorghum', path: '/en/res/crop/sorghum/' },
          { title: 'Rapeseed', path: '/en/res/crop/rapeseed/' },
          { title: 'Sunflower seed', path: '/en/res/crop/sunflowerseed/' },
          { title: 'Soybean', path: '/en/res/crop/soybean/' },
          { title: 'Cotton', path: '/en/res/crop/cotton/' },
          { title: 'Sugarcane', path: '/en/res/crop/sugarcane/' },
          { title: 'Sugarbeet', path: '/en/res/crop/sugarbeet/' },
        ]
      },
      { title: 'Disaster prediction', path: '/en/res/dprediction/' },
      { title: 'Climate', path: '/en/res/climate/' },
      { title: 'Auto Report', path: '/en/res/report/' },
      { title: 'Methods', path: '/en/res/meth/' },
    ]
  }
]