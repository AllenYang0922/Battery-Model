<script setup lang="ts">
import Header from '@/components/Header.vue';


</script>

<template>
  <div class="main-container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
}
</style>
<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  .content-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
