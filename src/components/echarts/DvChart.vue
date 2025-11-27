<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

import downloadEchartsImg from '../../utils/downloadEchartsImg';

const chartRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = echarts.init(chartRef.value);

  const option = {
    //backgroundColor: '#0f1b2d',
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    grid: {
      top: 20,
      left: 40,
      right: 20,
      bottom: 40,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '2.50',
        '2.66',
        '2.82',
        '2.98',
        '3.14',
        '3.30',
        '3.46',
        '3.62',
        '3.78',
        '3.94',
        '2.50',
      ],
      axisLabel: {
        color: '#9aa7c2',
        rotate: 45,
        fontSize: 12,
      },
      axisLine: {
        lineStyle: {
          color: '#2A5263',
        },
      },
      splitLine: {
        show: true, 
        lineStyle: {
          color: '#324562', // 网格线颜色
          type: 'solid',   // 线型：'solid'(实线), 'dashed'(虚线), 'dotted'(点线)
        },
      },
    },  

    yAxis: {
      type: 'value',
      min: 0,
      axisLabel: {
        color: '#9aa7c2',
        fontSize: 12,
      },
      splitLine: {
        show: true, 
        lineStyle: {
          color: '#324562', // 网格线颜色
          type: 'solid',   // 线型：'solid'(实线), 'dashed'(虚线), 'dotted'(点线)
        },
      },
    },

    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 1,
          color: '#39f7a4',
          shadowColor: 'rgba(0, 255, 180, 0.6)',
          shadowBlur: 10,
        },
        areaStyle: {
          color: '#2A5263',
        },
        data: [0.015, 0, 0, 0.005, 0.01, 0.02, 0.045, 0.015, 0.095, 0.03, 0],
      },
    ],
  };

  chartInstance.setOption(option);
  // 自适应
  window.addEventListener('resize', resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);
  chartInstance && chartInstance.dispose();
});

function resizeChart() {
  chartInstance && chartInstance.resize();
}

function downloadImage() {
  downloadEchartsImg(chartInstance, 'chart');
}
defineExpose({
  downloadImage,
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
