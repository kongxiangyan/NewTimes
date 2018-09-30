// https://docs.itt.space/echarts3/download-map.html
// $.get("lib/china.json", function(chinaJson) {

//   echarts.registerMap("china", chinaJson); // 注册地图

// 初始化echarts示例mapChart
var mapChart = echarts.init(document.getElementById("mix-line-bar"));

var myData = [
  { name: "海门", value: [121.15, 31.89, 90] },
  { name: "鄂尔多斯", value: [109.781327, 39.608266, 120] },
  { name: "招远", value: [120.38, 37.35, 142] },
  { name: "舟山", value: [122.207216, 29.985295, 123] }
];
var myData2 = [
    {name: "北京", value: [116.46,39.92, 0.083]}
];

// mapChart的配置
var option = {
  geo: {
    map: "china"
  },
  itemStyle: {
    // 定义样式
    normal: {
      // 普通状态下的样式
      areaColor: "#323c48",
      borderColor: "#111"
    },
    emphasis: {
      // 高亮状态下的样式
      areaColor: "#419d78"
    }
  },
  backgroundColor: "#404a59", // 图表背景色
  series: [
    {
      name: "销量", // series名称
      type: "scatter", // series图表类型
      coordinateSystem: "geo", // series坐标系类型
      data: myData
    },
    {
        name: '房东占比前十',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: myData2,
        symbolSize: function (val) {
            return val[2] / 10;
        },
        showEffectOn: 'emphasis',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }
  ]
};
mapChart.setOption(option);
// });
