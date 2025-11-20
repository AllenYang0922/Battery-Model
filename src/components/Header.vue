<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const time = ref(new Date().toLocaleTimeString('zh-CN', { hour12: false }));
let timer: number | undefined;
onMounted(() => {
  timer = window.setInterval(() => {
    time.value = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  }, 1000);
});
onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>
<template>
  <div class="header fade-in">
    <div class="header-left">
      <span class="header-title">电池大模型监控大屏</span>
    </div>
    <div class="header-right">
      <div class="status-item">
        <div class="status-indicator"></div>
        <span class="status-text">系统运行中</span>
      </div>
      <div class="status-item">
        <font-awesome-icon
          icon="fa-solid fa-clock"
          style="color: #fff"
          class="clock-icon"
        />
        <span class="status-text">{{ time }}</span>
      </div>
      <div class="status-item">
        <font-awesome-icon icon="fa-solid fa-wifi" style="color: #fff" />
        <span class="status-text">在线</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-medium);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-medium);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-green), var(--accent-blue));
  opacity: 0.8;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  .status-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-small);
    transition: var(--transition-normal);
    &:hover {
      border-color: var(--border-highlight);
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.2);
    }
    .status-text {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent-green);
      box-shadow: 0 0 8px var(--accent-green);
      animation: pulse 2s infinite;
    }
  }
}
</style>
