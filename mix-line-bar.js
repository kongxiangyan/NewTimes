var mixChart1 = echarts.init(document.getElementById("mix-line-bar"));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
    },
    legend: {
        data:['在线短租市场规模','环比增长率（%）']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2012','2013','2014','2015','2016','2017','2018'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '规模',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 亿元'
            }
        }
        // ,
        // {
        //     type: 'value',
        //     name: '比率',
        //     min: 0,
        //     max: 25,
        //     interval: 5,
        //     axisLabel: {
        //         formatter: '{value} %'
        //     }
        // }
    ],
    series: [
        {
            name:'在线短租市场规模',
            type:'bar',
            data:[5.5, 9.7, 19.2, 42.6, 87.8, 125.2, 169.6]
        },
        {
            name:'环比增长率（%）',
            type:'line',
            // yAxisIndex: 1,
            data:[undefined, 76.4, 97.9, 121.9, 106.1, 42.6, 35.5]
        }
    ]
};
mixChart1.setOption(option);
