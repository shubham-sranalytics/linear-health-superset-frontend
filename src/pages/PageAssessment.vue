<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SupersetEmbed from '../components/SupersetEmbed.vue'

const loading = ref<boolean>(true)
const guestToken = ref<string>('')

const fetchDashboard = async () => {
  // https://linear-health-superset-backend.vercel.app
  const response = await fetch('https://linear-health-superset-backend.vercel.app/assessment', {
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
        dashboard-id="1449667a-8a39-4862-a79c-bb40117bcd6d"
        superset-domain="https://dev-superset.linear.health"
      />
      <div v-else>Loading dashboard...</div>
    </div>
  </div>
</template>
