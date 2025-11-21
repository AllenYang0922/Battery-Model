<script setup lang="ts">
import ArchitectureProcess from '@/components/ArchitectureProcess.vue';
import TrainInformation from '@/components/TrainInformation.vue';
import BatteryHealth from '@/components/BatteryHealth.vue';
import BatteryData from '@/components/BatteryData.vue';
</script>
<template>
  <div class="content-container">
    <ArchitectureProcess />
    <div class="info-grid">
      <TrainInformation />
      <BatteryHealth />
    </div>
    <BatteryData />
  </div>
</template>

<style scoped lang="scss">
.info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 16px;
  .health-wrap,
  .train-wrap {
    margin-top: 48px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-medium);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-medium);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    transition: var(--transition-normal);
  }
}
</style>
