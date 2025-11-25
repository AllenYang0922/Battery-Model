<script setup lang="ts"></script>
<template>
  <div class="battery-current">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-chart-line" class="font-icon" />
      电池包电流
    </div>
    <div class="battery-info">
      <div class="info-item">
        <div class="text">当前电流</div>
        <div class="num">8.7A</div>
      </div>
      <div class="info-item">
        <div class="text">峰值电流</div>
        <div class="num">12.5A</div>
      </div>
      <div class="info-item">
        <div class="text">平均电流</div>
        <div class="num">8.3A</div>
      </div>
    </div>
    <div class="battery-chart">
      <div class="chart-header">
        <div class="title">SOC上升时间分析(ΔT per 0.3% SOC)</div>
        <div class="operation">
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-maximize"
              style="color: #8b949e"
            />
          </div>
          <div class="icon">
            <font-awesome-icon
              icon="fa-solid fa-download"
              style="color: #8b949e"
            />
          </div>
        </div>
      </div>
      <div class="chart-table">
        <img src="@/assets/test2.png" alt="" style="width: 100%" />
      </div>
      <div class="chart-data">
        <div class="data-wrap">
          <div class="text">监测时长</div>
          <div class="num">24小时</div>
        </div>
        <div class="data-wrap">
          <div class="text">采样频率</div>
          <div class="num">1Hz</div>
        </div>
        <div class="data-wrap">
          <div class="text">状态</div>
          <div class="num">正常</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.battery-current {
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
  .battery-info {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-small);
    padding: var(--spacing-md);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--spacing-sm);
    &:hover {
      border-color: var(--border-highlight);
      box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
    }
    .info-item {
      background: #2c3f59;
      text-align: center;
      padding: var(--spacing-md);
      .text {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-md);
      }
      .num {
        color: var(--accent-green);
        font-family: 'Courier New', monospace;
        font-weight: 700;
        font-size: 1.4rem;
      }
    }
  }
  .battery-chart {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-small);
    margin-top: var(--spacing-lg);
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px;
      .title {
        color: #ff6b6b;
      }
      .operation {
        display: flex;
        gap: 14px;
        cursor: pointer;
        .icon {
          border-radius: var(--radius-small);
          padding: 6px;
          border: 1px solid var(--border-color);
        }
      }
    }
    .chart-table {
      padding: 8px 16px;
      border: 1px solid #3e8690;
      border-radius: var(--spacing-sm);
      background: #324866;
    }
    .chart-data {
      padding: 16px 0px;
      display: flex;
      justify-content: space-around;
      .data-wrap {
        border-radius: var(--radius-small);
        border: 1px solid var(--border-color);
        padding: var(--spacing-sm);
        text-align: center;
        .text {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }
        .num {
          color: var(--accent-green);
          font-family: 'Courier New', monospace;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
