<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SupersetEmbed from '../components/SupersetEmbed.vue'

const loading = ref<boolean>(true)
const guestToken = ref<string>('')

const fetchDashboard = async () => {
  // https://linear-health-superset-backend.vercel.app
  const response = await fetch('https://linear-health-superset-backend.vercel.app/error', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  guestToken.value = ((await response.json()) as unknown as { token: string }).token
}

onMounted(() => {
  fetchDashboard().then(() => {
    loading.value = false
  })
})
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <SupersetEmbed
        v-if="!loading"
        :guest-token="guestToken"
        dashboard-id="6fab7c77-4dd7-4471-97ca-b62af012b3a4"
        superset-domain="https://dev-superset.linear.health"
      />
      <div v-else>Loading dashboard...</div>
    </div>
  </div>
</template>
