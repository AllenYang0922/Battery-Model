import * as echarts from 'echarts';

function createRingPieOption(
  percentage: number,
  color: string,
  labelText = '完成度',
  showCenterText = true,
  useGradient = false
) {
  return {
    series: [
      {
        type: 'pie',
        radius: ['70%', '80%'],
        data: [
          {
            value: percentage,
            name: '完成',
            itemStyle: {
              color: useGradient
                ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#00d8ff' },
                    { offset: 1, color: '#00ff88' },
                  ])
                : color,
            },
          },
          {
            value: 100 - percentage,
            name: '剩余',
            itemStyle: { color: '#3E5162' },
          },
        ],
        label: { show: false },
        emphasis: {
          scale: false,
        },
      },
    ],
    title: showCenterText
      ? {
          text: `${percentage}%`,
          subtext: labelText,
          x: 'center',
          y: 'center',
        }
      : undefined,
  };
}
export default createRingPieOption;
