<html style="height: 100%">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
      <h2>Research</h2>
      <br/>
        <div id="container2" style="width: 800px;height:200px;"></div>
        <br/><br/>
        <div id="container3" style="width: 800px;height:400px;"></div>
        <br/><br/>
        <div id="container4" style="width: 800px;height:400px;"></div>

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="echarts.min.js"></script>
<script type="text/javascript">
  
const myChart2 = echarts.init(document.getElementById('container2'));
const xhr2 = new XMLHttpRequest()// 创建对象
xhr2.responseType="json"
xhr2.open('GET','http://localhost:8000/fao/totcrop/pro/worldtop10')
xhr2.send()
xhr2.onreadystatechange=function(){
  if(xhr2.readyState===4){
    if(xhr2.status>=200&&xhr2.status<300){
      const noww=xhr2.response

      var seriesE=[]
      for(key in noww){
        var seriesN={
          name: key,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: noww[key]
        }
        seriesE.push(seriesN)
      }
      seriesE.sort((b,a)=>{return b.data[b.data.length-1]-a.data[a.data.length-1]})

      var option2 = {
        title: {
          text: 'Total Production',
          subtext:'AI4AGR.com\nData from www.fao.org',
          left:'right'
        },
        tooltip: {
          trigger: 'axis',
          order:'valueDesc',
          confine: true
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          left:'left'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
        },
        yAxis: {
          name:'tonnes',
          type: 'value'
        },
        series: seriesE
      };

      myChart2.setOption(option2);
    }
  }
}

const myChart3 = echarts.init(document.getElementById('container3'));
const xhr3 = new XMLHttpRequest()// 创建对象
xhr3.responseType="json"
xhr3.open('GET','http://localhost:8000/fao/totpop/worldtop6')
xhr3.send()
xhr3.onreadystatechange=function(){
  if(xhr3.readyState===4){
    if(xhr3.status>=200&&xhr3.status<300){
      const noww=xhr3.response

      var seriesE=[]
      for(key in noww){
        var seriesN={
          name: key,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: noww[key]
        }
        if(key!='World')
        seriesE.push(seriesN)
      }
      var seriesO={
        name: 'World',
        type: 'line',
        data: noww['World']
      }
      seriesE.sort((a,b)=>{return b.data[b.data.length-1]-a.data[a.data.length-1]})
      seriesE.push(seriesO)

      var option3 = {
        title: {
          text: 'World Population (FAO)',
          subtext:'AI4AGR.com\nData from www.fao.org',
          left:'right'
        },
        tooltip: {
          trigger: 'axis',
          order:'valueDesc',
          confine: true
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          left:'left'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018']
        },
        yAxis: {
          name:'persons',
          type: 'value'
        },
        series: seriesE
      };

      myChart3.setOption(option3);
    }
  }
}

const myChart4 = echarts.init(document.getElementById('container4'));
const xhr4 = new XMLHttpRequest()// 创建对象
xhr4.responseType="json"
xhr4.open('GET','http://localhost:8000/wcde/totpop/worldtop6')
xhr4.send()
xhr4.onreadystatechange=function(){
  if(xhr4.readyState===4){
    if(xhr4.status>=200&&xhr4.status<300){
      const noww=xhr4.response
      console.log(noww)

      var seriesE=[]
      for(key in noww){
        var seriesN={
          name: key,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: noww[key]
        }
        if(key!='World')
        seriesE.push(seriesN)
      }
      seriesE.sort((b,a)=>{return b.data[b.data.length-1]-a.data[a.data.length-1]})
      seriesO={
        name: 'World',
        type: 'line',
        data: noww['World']
      }
      seriesE.push(seriesO)

      var option4 = {
        title: {
          text: 'World Population ',
          subtext:'AI4AGR.com\nData from www.wittgensteincentre.org',
          left:'right'
        },
        tooltip: {
          trigger: 'axis',
          order:'valueDesc',
          confine: true
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          left:'left'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045','2050']
        },
        yAxis: {
          name:'1000 persons',
          type: 'value'
        },
        series: seriesE
      };

      myChart4.setOption(option4);
    }
  }
}

</script>
</body>
</html>