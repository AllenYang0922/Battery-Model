<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Chart from 'chart.js/auto';

const lossCanvasRef = ref<HTMLCanvasElement | null>(null);

// 生成Loss数据 - 优化为更真实的MAE训练曲线
function generateLossData(
  epochs: number,
  startLoss = 5.2,
  endLoss = 0.35,
  isValidation = false
): number[] {
  const data: number[] = [];
  // MAE模型的真实训练特征
  const baseStartLoss = startLoss; // MAE典型起始Loss
  const baseEndLoss = endLoss; // 最终收敛Loss

  for (let i = 0; i < epochs; i++) {
    const progress = i / (epochs - 1);
    let loss;

    if (progress < 0.2) {
      // 阶段1: 快速学习期 (0-20%)
      const decay = Math.exp(-progress * 12);
      loss = baseEndLoss * 6 + (baseStartLoss - baseEndLoss * 6) * decay;
    } else if (progress < 0.6) {
      // 阶段2: 稳定优化期 (20-60%)
      const logDecay = Math.log(1 + (progress - 0.2) * 25) / 5;
      const cyclicNoise = Math.sin(progress * 15) * 0.08;
      loss =
        baseEndLoss * 2.5 +
        (baseStartLoss * 0.4 - baseEndLoss * 2.5) * (1 - logDecay) +
        cyclicNoise;
    } else {
      // 阶段3: 精细收敛期 (60-100%)
      const fineDecay = Math.exp(-(progress - 0.6) * 4);
      const microNoise = Math.sin(progress * 35) * 0.03;
      loss =
        baseEndLoss +
        (baseStartLoss * 0.15 - baseEndLoss) * fineDecay +
        microNoise;
    }

    // 验证集特殊处理
    if (isValidation) {
      if (progress < 0.15) {
        loss *= 0.95; // 早期验证Loss可能略低于训练Loss
      } else {
        loss *= 1.08 + Math.random() * 0.07; // 后期高8-15%，更大波动
      }
      // 验证集额外噪声
      const validationNoise = (Math.random() - 0.5) * 0.06;
      loss += validationNoise;
    } else {
      // 训练集正常噪声
      const trainingNoise = (Math.random() - 0.5) * 0.04;
      loss += trainingNoise;
    }

    // 确保Loss在合理范围内
    data.push(Math.max(0.25, Math.min(6.0, loss)));
  }
  return data;
}

// 初始化Loss曲线图表
let lossChart: Chart | null = null;
function initLossChart() {
  const canvas = lossCanvasRef.value;
  if (!canvas) {
    console.warn('loss canvas ref not ready');
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.warn('loss canvas context unavailable');
    return;
  }

  // 生成模拟Loss数据
  const epochs = Array.from({ length: 30 }, (_, i) => i + 1);
  const trainingLoss = generateLossData(30, 5.2, 0.35, false); // 训练Loss
  const validationLoss = generateLossData(30, 5.2, 0.35, true); // 验证Loss

  lossChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: epochs,
      datasets: [
        {
          label: '训练Loss',
          data: trainingLoss,
          borderColor: '#00ff88',
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
        },
        {
          label: '验证Loss',
          data: validationLoss,
          borderColor: '#00d4ff',
          backgroundColor: 'rgba(0, 212, 255, 0.1)',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Epoch',
            color: '#8b949e',
          },
          ticks: {
            color: '#8b949e',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Loss',
            color: '#8b949e',
          },
          ticks: {
            color: '#8b949e',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      elements: {
        point: {
          radius: 3,
          hoverRadius: 6,
        },
      },
    },
  });
}

onMounted(() => {
  initLossChart();
});

onBeforeUnmount(() => {
  if (lossChart) {
    lossChart.destroy();
    lossChart = null;
  }
});
</script>
<template>
  <div class="train-wrap">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-brain" class="font-icon" />
      大模型训练信息
    </div>
    <div class="train-card">
      <!-- 训练数据信息 -->
      <div class="train-info">
        <div class="stat-item">
          <div class="stat-icon">
            <font-awesome-icon icon="fa-solid fa-database" class="font-icon" />
          </div>
          <div class="stat-content">
            <div class="stat-label">训练数据量</div>
            <div class="stat-value" id="dataAmount">0</div>
            <div class="stat-unit">GB</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <font-awesome-icon icon="fa-solid fa-clock" class="font-icon" />
          </div>
          <div class="stat-content">
            <div class="stat-label">训练时长</div>
            <div class="stat-value" id="trainingDays">0</div>
            <div class="stat-unit">天</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <font-awesome-icon icon="fa-solid fa-microchip" class="font-icon" />
          </div>
          <div class="stat-content">
            <div class="stat-label">计算资源</div>
            <div class="stat-value" id="computeUnits">8</div>
            <div class="stat-unit">GPU</div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <font-awesome-icon
              icon="fa-solid fa-chart-line"
              class="font-icon"
            />
          </div>
          <div class="stat-content">
            <div class="stat-label">训练状态</div>
            <div class="stat-value training-status" id="trainingStatus">
              进行中
            </div>
            <div class="stat-unit"></div>
          </div>
        </div>
      </div>
      <!-- Loss曲线图表 -->
      <div class="loss-curve">
        <div class="chart-header">
          <span class="chart-title">训练损失曲线</span>
          <div class="chart-legend">
            <span class="legend-item">
              <span class="legend-color training"></span>
              训练Loss
            </span>
            <span class="legend-item">
              <span class="legend-color validation"></span>
              验证Loss
            </span>
          </div>
        </div>
        <div class="chart-container">
          <canvas ref="lossCanvasRef"></canvas>
        </div>
      </div>
      <!-- 性能指标 -->
      <div class="performance-metrics">
        <div class="metric-card">
          <div class="metric-label">准确率</div>
          <div class="metric-value" id="accuracy">0.0%</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">精确率</div>
          <div class="metric-value" id="precision">0.0%</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">召回率</div>
          <div class="metric-value" id="recall">0.0%</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">F1分数</div>
          <div class="metric-value" id="f1Score">0.0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.train-wrap {
  .card-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
    .font-icon {
      color: var(--accent-green);
      filter: drop-shadow(0 0 4px var(--accent-green));
    }
  }
  .train-card {
    .train-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-lg);
      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-small);
        transition: var(--transition-normal);
        &:hover {
          border-color: var(--border-highlight);
          box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
        }
        .stat-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 136, 0.2);
          border-radius: 50%;
          color: var(--accent-green);
        }
        .stat-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .stat-label {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 4px;
          }
          .stat-value {
            font-weight: 700;
            color: var(--accent-green);
          }
          .stat-unit {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-top: 4px;
          }
        }
      }
    }
    .loss-curve {
      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-md);
        .chart-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .chart-legend {
          display: flex;
          gap: var(--spacing-md);
          .legend-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            font-size: 0.8rem;
            color: var(--text-secondary);
            .legend-color {
              width: 12px;
              height: 12px;
              border-radius: 2px;
            }
            .legend-color.training {
              background: var(--accent-green);
            }
            .legend-color.validation {
              background: var(--accent-blue);
            }
          }
        }
      }
      .chart-container {
        height: 200px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-small);
        padding: var(--spacing-sm);
      }
    }
    .performance-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-md);
      margin-top: 36px;
      .metric-card {
        padding: var(--spacing-md);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-small);
        text-align: center;
        transition: var(--transition-normal);
        &:hover {
          border-color: var(--border-highlight);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 255, 136, 0.1);
        }
        .metric-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
        }
        .metric-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-green);
          font-family: 'Courier New', monospace;
        }
      }
    }
  }
}
</style>
