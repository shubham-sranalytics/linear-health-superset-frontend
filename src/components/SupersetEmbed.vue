<script setup lang="ts">
import { embedDashboard } from '@superset-ui/embedded-sdk'
import { onMounted, nextTick } from 'vue'

const CONTAINTER_ID: Readonly<string> = 'superset-embed-container'

onMounted(() => {
  return nextTick().then(() => {
    embedDashboard({
      id: 'ddfceaa6-c2a7-4e91-99d1-030c68107778',
      supersetDomain: 'http://localhost:8088',
      mountPoint: document.getElementById(CONTAINTER_ID) as HTMLElement,
      fetchGuestToken: async () =>
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZ3Vlc3QiLCJmaXJzdF9uYW1lIjoiR3Vlc3QiLCJsYXN0X25hbWUiOiJVc2VyIn0sInJlc291cmNlcyI6W3sidHlwZSI6ImRhc2hib2FyZCIsImlkIjoiZGRmY2VhYTYtYzJhNy00ZTkxLTk5ZDEtMDMwYzY4MTA3Nzc4In1dLCJybHNfcnVsZXMiOlt7ImNsYXVzZSI6ImNvdW50cnlfbmFtZSBJTiAoJ0luZGlhJywgJ1VuaXRlZCBTdGF0ZXMnLCAnVW5pdGVkIEtpbmdkb20nLCAnR2VybWFueScsICdGcmFuY2UnLCAnSXRhbHknLCAnU3BhaW4nLCAnTmV0aGVybGFuZHMnLCAnQmVsZ2l1bScsICdTd2VkZW4nLCAnTm9yd2F5JywgJ0ZpbmxhbmQnLCAnRGVubWFyaycsICdBdXN0cmlhJywgJ1N3aXR6ZXJsYW5kJywgJ0lyZWxhbmQnLCAnUG9ydHVnYWwnLCAnR3JlZWNlJywgJ0N6ZWNoIFJlcHVibGljJywgJ1BvbGFuZCcsICdIdW5nYXJ5JykifV0sImlhdCI6MTc0NjQ0OTIyMS42NDAwMDg0LCJleHAiOjE3NDY0NDk1MjEuNjQwMDA4NCwiYXVkIjoiaHR0cDovL3N1cGVyc2V0X2FwcC8vIiwidHlwZSI6Imd1ZXN0In0.7vY-Utinwttqh1ki4wZIpZAx3PRN3_ylVCpirLwyo98',
      dashboardUiConfig: {
        hideTitle: true,
        hideTab: true,
        urlParams: { standalone: 3 },
        hideChartControls: true,
      },
    })
  })
})
</script>

<template>
  <div :id="CONTAINTER_ID" />
</template>
