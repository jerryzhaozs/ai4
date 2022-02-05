---
title : research
---

## research page

<hehe/>
hi

<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>ECharts</title>
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.2.2/echarts.common.js"></script>
  </head>
  <body>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/html">
      // 基于准备好的dom，初始化echarts实例
      <code>
      var myChart = echarts.init(document.getElementById('main'));
      const xhr = new XMLHttpRequest()// 创建对象
      xhr.responseType="json"
      xhr.open('GET','http://ai4agr.com:8000/txt-server')
      xhr.send()
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
          if(xhr.status===200){
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
      </code>
    </script>
  </body>
</html>

okok