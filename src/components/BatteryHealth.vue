<script setup lang="ts">
import RingPieChart from '@/components/RingPieChart.vue';

interface HealthMetric {
  id: string;
  label: string;
  icon: string;
  percentage: number;
  color: string;
  shadow: string;
}

const metrics: HealthMetric[] = [
  {
    id: 'capacity',
    label: '容量型',
    icon: 'fa-solid fa-battery-full',
    percentage: 92,
    color: '#01FF88',
    shadow: 'rgba(17, 244, 151, 0.35)',
  },
  {
    id: 'voltage',
    label: '电压型',
    icon: 'fa-solid fa-bolt',
    percentage: 88,
    color: '#00B7FF',
    shadow: 'rgba(0, 183, 255, 0.35)',
  },
  {
    id: 'resistance',
    label: '电阻型',
    icon: 'fa-solid fa-gauge-high',
    percentage: 85,
    color: '#FF9C2D',
    shadow: 'rgba(255, 156, 45, 0.35)',
  },
  {
    id: 'dispersion',
    label: '离散型',
    icon: 'fa-solid fa-chart-pie',
    percentage: 91,
    color: '#FF6B7A',
    shadow: 'rgba(255, 107, 122, 0.35)',
  },
];
</script>
<template>
  <div class="health-wrap">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-brain" class="font-icon" />
      电池健康指数
    </div>
    <div class="health-ratio">
      <div class="proportion">
        <div class="proportion-num">89</div>
        <div class="proportion-text">良好</div>
      </div>
      <div class="circular">
        <RingPieChart
          width="150px"
          height="150px"
          :percentage="89"
          color="#00ff88"
          label-text=""
          :use-gradient="true"
        />
      </div>
    </div>
    <div class="health-info">
      <div v-for="metric in metrics" :key="metric.id" class="health-card">
        <div class="card-icon" :class="metric.id">
          <font-awesome-icon :icon="metric.icon" style="color: #01ff88" />
          <div class="card-label">{{ metric.label }}</div>
        </div>
        <div class="card-chart">
          <RingPieChart
            :percentage="metric.percentage"
            :color="metric.color"
            label-text=""
            width="110px"
            height="110px"
            :show-center-text="true"
          />
          <div class="card-percentage">{{ metric.percentage }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.health-wrap {
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
  .health-ratio {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border-color);
    padding: var(--spacing-md);
    border-radius: var(--radius-medium);
    display: flex;
    justify-content: space-between;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        var(--accent-green),
        var(--accent-blue)
      );
      opacity: 0.8;
    }
    .proportion {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .proportion-num {
        color: #00ff88;
        margin-bottom: 16px;
        font-size: 2.5rem;
        font-weight: 700;
        font-family: 'Arial', 'Helvetica', sans-serif;
        letter-spacing: 0.05em;
        text-shadow: 0 0 8px rgba(0, 255, 136, 0.5),
          0 0 15px rgba(0, 255, 136, 0.3);
      }
      .proportion-text {
        color: var(--accent-blue);
        padding: 0.5rem 1rem;
        border: 1px solid var(--accent-blue);
        border-radius: 0.5rem;
        font-weight: 700;
      }
    }
  }
  .health-info {
    margin-top: var(--spacing-xl);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    .health-card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-medium);
      padding: var(--spacing-md);
      text-align: center;
      overflow: hidden;
      &:hover {
        border-color: var(--border-highlight);
        box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
      }
      .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        color: var(--text-primary);
      }
      .card-label {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--text-primary);
      }
      .card-chart {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        z-index: 1;
        .card-percentage {
          position: absolute;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }
      }
    }
  }
}
</style>
