<script setup lang="ts">
import { embedDashboard } from '@superset-ui/embedded-sdk'
import { onMounted, nextTick, defineProps } from 'vue'

const { dashboardId, supersetDomain, supersetEmbedId, guestToken } = defineProps({
  dashboardId: {
    type: String,
    required: true,
  },
  supersetDomain: {
    type: String,
    default: 'http://localhost:8088',
  },
  supersetEmbedId: {
    type: String,
    default: 'superset-embed-id',
  },
  guestToken: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  return nextTick().then(() => {
    embedDashboard({
      id: dashboardId,
      supersetDomain: supersetDomain,
      mountPoint: document.getElementById(supersetEmbedId) as HTMLElement,
      fetchGuestToken: async () => guestToken,
      dashboardUiConfig: {
        hideTitle: true,
        hideTab: true,
        filters: {
          expanded: false,
          visible: false,
        },
        urlParams: { standalone: 3 },
        hideChartControls: true,
      },
    })
  })
})
</script>

<template>
  <div :id="supersetEmbedId" />
</template>
