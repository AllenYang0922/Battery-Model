/**
 * 下载 ECharts 图表为图片
 * @param chartInstance ECharts 实例
 * @param fileName 下载的文件名（不带后缀）
 * @param backgroundColor 背景颜色
 */
export default function downloadEchartsImg(
  chartInstance: any,
  fileName: string = 'chart',
  // backgroundColor: string = '#00ff88'
) {
  if (!chartInstance) return;
  const url = chartInstance.getDataURL({
    type: 'png',
    pixelRatio: 2,
    // backgroundColor
  });
  const a = document.createElement('a');
  a.download = `${fileName}.png`;
  a.href = url;
  a.click();
}
