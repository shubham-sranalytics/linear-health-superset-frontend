<script setup lang="ts">
import { useSupersetEmbedStore } from '@/stores/supersetEmbed'
import { embedDashboard } from '@superset-ui/embedded-sdk'
const { SUPERSET_DOMAIN, fetchGuestToken, dashboardId } = useSupersetEmbedStore()
import { onMounted } from 'vue'

const CONTAINTER_ID: Readonly<string> = 'superset-embed-container'

onMounted(() => {
  return embedDashboard({
    id: dashboardId,
    supersetDomain: SUPERSET_DOMAIN,
    mountPoint: document.getElementById(CONTAINTER_ID) as HTMLElement,
    fetchGuestToken,
    dashboardUiConfig: {
      hideTitle: true,
      hideTab: true,
      urlParams: { standalone: 3 },
      hideChartControls: true,
    },
  })
})
</script>

<template>
  <div :id="CONTAINTER_ID" />
</template>
