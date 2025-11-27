<script setup lang="ts">
import DvChart from './echarts/DvChart.vue';
import { ref } from 'vue';

const chartRef = ref(null);

const handleDownload = () => {
  if (chartRef.value) {
    chartRef.value.downloadImage();
  }
};
</script>
<template>
  <div class="analysis-dashboard">
    <div class="dv-analysis">
      <div class="card-title">
        <font-awesome-icon icon="fa-solid fa-chart-line" class="font-icon" />
        dQ/dV分析
      </div>
      <div class="dv-info info-wrap">
        <div class="metric">
          <div class="label">峰值数量</div>
          <div class="value">
            <span class="digit">3</span>
          </div>
        </div>
        <div class="metric">
          <div class="label">主峰位置</div>
          <div class="value"><span class="digit">3.78</span>V</div>
        </div>
      </div>
      <div class="chart-wrap">
        <DvChart ref="chartRef"></DvChart>
      </div>
      <div class="operation">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-expand" style="color: #8b949e" />
        </div>
        <div class="icon" @click="handleDownload">
          <font-awesome-icon
            icon="fa-solid fa-download"
            style="color: #8b949e"
          />
        </div>
      </div>
    </div>
    <div class="peak-analysis">
      <div class="card-title">
        <font-awesome-icon icon="fa-solid fa-chart-bar" class="font-icon" />
        峰值分析
      </div>
      <div class="peak-info info-wrap">
        <div class="metric">
          <div class="label">当前峰值</div>
          <div class="value">
            <span class="digit">2.84</span>
          </div>
        </div>
        <div class="metric">
          <div class="label">峰值状态</div>
          <div class="value">
            <span class="digit">正常</span>
          </div>
        </div>
      </div>
      <div class="chart-wrap"></div>
      <div class="operation">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-expand" style="color: #8b949e" />
        </div>
        <div class="icon">
          <font-awesome-icon
            icon="fa-solid fa-download"
            style="color: #8b949e"
          />
        </div>
      </div>
    </div>
    <div class="entropy-analysis">
      <div class="card-title">
        <font-awesome-icon icon="fa-solid fa-chart-area" class="font-icon" />
        熵值分析
      </div>
      <div class="entropy-info info-wrap">
        <div class="metric">
          <div class="label">当前熵值</div>
          <div class="value">
            <span class="digit">3</span>
          </div>
        </div>
        <div class="metric">
          <div class="label">复杂度</div>
          <div class="value">
            <span class="digit">中等</span>
          </div>
        </div>
      </div>
      <div class="chart-wrap"></div>
      <div class="operation">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-expand" style="color: #8b949e" />
        </div>
        <div class="icon">
          <font-awesome-icon
            icon="fa-solid fa-download"
            style="color: #8b949e"
          />
        </div>
      </div>
    </div>
    <div class="frequency-domain-analysis">
      <div class="card-title">
        <font-awesome-icon icon="fa-solid fa-signal" class="font-icon" />
        频域分析
      </div>
      <div class="frequency-domain-info info-wrap">
        <div class="metric">
          <div class="label">主频率</div>
          <div class="value"><span class="digit">0.125</span>Hz</div>
        </div>
        <div class="metric">
          <div class="label">功率密度</div>
          <div class="value"><span class="digit">-12.5</span>dB</div>
        </div>
      </div>
      <div class="chart-wrap"></div>
      <div class="operation">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-expand" style="color: #8b949e" />
        </div>
        <div class="icon">
          <font-awesome-icon
            icon="fa-solid fa-download"
            style="color: #8b949e"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.analysis-dashboard {
  margin-top: var(--spacing-md);
  display: grid;
  column-gap: var(--spacing-md);
  grid-template-columns: repeat(4, 1fr);
  .dv-analysis,
  .peak-analysis,
  .entropy-analysis,
  .frequency-domain-analysis {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-medium);
    overflow: hidden;
    box-shadow: var(--shadow-medium);
    transition: var(--transition-normal);
    padding: 16px;
    margin-top: 16px;
    &:hover {
      border-color: var(--border-highlight);
      box-shadow: 0 1px 1px rgba(0, 255, 136, 0.15);
    }
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
    /* .dv-info{

    } */
    .info-wrap {
      margin-top: var(--spacing-md);
      padding: 18px 30px;
      border: 1px solid #2c6968;
      border-radius: var(--radius-medium);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
      .metric {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        .label {
          font-size: 0.95rem;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }
        .value {
          font-size: 1.6rem;
          color: var(--accent-green);
          display: flex;
          align-items: baseline;
          gap: 6px;
          .unit {
            font-size: 1.5rem;
          }
        }
      }
    }
    .peak-info {
      border: 1px solid #2a6081;
      .metric {
        .value {
          color: #00d4ff;
        }
      }
    }
    .entropy-info {
      border: 1px solid #433e7e;
      .metric {
        .value {
          color: #8b2be2;
        }
      }
    }
    .frequency-domain-info {
      border: 1px solid #57555a;
      .metric {
        .value {
          color: #ff9502;
        }
      }
    }
    .chart-wrap {
      height: 300px;
      margin-top: var(--spacing-md);
      padding: 18px 30px;
      border: 1px solid #2c6968;
      border-radius: var(--radius-medium);
    }
    .operation {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: var(--spacing-md);
      gap: 14px;
      .icon {
        border-radius: var(--radius-small);
        padding: 6px;
        border: 1px solid var(--border-color);
        cursor: pointer;
      }
    }
  }
  .peak-analysis {
    .chart-wrap {
      border-color: #2a6081;
    }
  }
  .entropy-analysis {
    .chart-wrap {
      border-color: #433e7e;
    }
  }
  .frequency-domain-analysis {
    .chart-wrap {
      border-color: #57555a;
    }
  }
}
</style>
