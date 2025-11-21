<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import * as echarts from 'echarts';
import createRingPieOption from '@/utils/createRingPieOption.ts';

interface Props {
  percentage: number;
  color: string;
  labelText: string;
  width?: string;
  height?: string;
  showCenterText?: boolean;
  useGradient?: boolean;
}

const {
  percentage,
  color,
  labelText,
  width,
  height,
  showCenterText,
  useGradient,
} = defineProps<Props>();

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;
  if (!chartInstance) {
    chartInstance = echarts.init(chartRef.value);
  }
  const option = createRingPieOption(
    percentage,
    color,
    labelText,
    showCenterText ?? true,
    useGradient ?? false
  );
  chartInstance.setOption(option);
};

const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});

watch(
  () => [percentage, color, labelText, showCenterText, useGradient],
  () => {
    initChart();
  }
);
</script>

<template>
  <div
    :style="{
      width: width || '200px',
      height: height || '200px',
    }"
  >
    <div ref="chartRef" style="width: 100%; height: 100%"></div>
  </div>
</template>
