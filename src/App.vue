<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import AnalyticsManager from '@/system/analytics/AnalyticsManager';

  onMounted(() => {
    const analyticsManager = new AnalyticsManager();
    analyticsManager.logApplicationStart();
  });
</script>
