<script setup lang="ts"></script>
<template>
  <div class="battery-data">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-chart-line" class="font-icon" />
      电池电芯特征数据
    </div>
    <div class="voltage-charact">
      <div class="valtage-header">
        <div class="header-left">
          <font-awesome-icon icon="fa-solid fa-bolt" class="icon" />
          电池电芯特征数据
        </div>
        <div class="header-right">4项指标</div>
      </div>
      666
    </div>
  </div>
</template>

<style scoped lang="scss">
.battery-data {
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
  .voltage-charact {
    .valtage-header {
      background: rgba(0, 212, 255, 0.05);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: var(--radius-medium);
      padding: var(--spacing-md);
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, #00d4ff, transparent);
        animation: inputGlow 3s ease-in-out infinite;
      }
      .header-left {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        .icon {
          color: var(--accent-blue);
        }
      }
      .header-right {
        color: var(--accent-blue);
        padding: 8px 10px;
        border: 1px solid var(--accent-blue);
        border-radius: 6px;
      }
    }
  }
}
</style>
