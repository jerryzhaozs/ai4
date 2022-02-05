---
title : research
---

## research page

<html>
  <head>
    <meta charset="utf-8" />
    <title>ECharts</title>
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.2.2/echarts.common.js"></script>
  </head>
  <body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
      var myChart = echarts.init(document.getElementById('main'));
      const xhr = new XMLHttpRequest()
      xhr.responseType="json"
      xhr.open('GET','http://ai4agr.com:8000/txt-server')
      xhr.send()
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
          if(xhr.status>=200&&xhr.status<300){
            const noww=xhr.response
            var option = {
              title: {
                text: 'pdo.long.data'
              },
              tooltip: {},
              legend: {
                data: ['PDO']
              },
              xAxis: {
                data: noww.data2
              },
              yAxis: {},
              dataZoom: [
                {
                  type: 'inside',
                  start: 0,
                  end: 100
                },
                {
                  start: 0,
                  end: 20
                }
              ],
              series: [
                {
                  name: 'PDO',
                  type: 'line',
                  data: noww.data1
                }
              ]
            };
            myChart.setOption(option);
          }
        }
      }
    </script>
  </body>
</html>

okok