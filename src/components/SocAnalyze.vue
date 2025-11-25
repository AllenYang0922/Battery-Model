<script setup lang="ts"></script>
<template>
  <div class="soc-analyze">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-chart-line" class="font-icon" />
      SOC时间分析
    </div>
    <div class="soc-info">
      <div class="info-item">
        <div class="text">SOC范围</div>
        <div class="num">15-95%</div>
      </div>
      <div class="info-item">
        <div class="text">SOC范围</div>
        <div class="num">15-95%</div>
      </div>
      <div class="info-item">
        <div class="text">SOC范围</div>
        <div class="num">15-95%</div>
      </div>
    </div>
    <div class="soc-chart">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.soc-analyze {
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
  .soc-info {
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
  .soc-chart {
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
    }
  }
}
</style>
