import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSupersetEmbedStore = defineStore('supersetEmbed', () => {
  const SUPERSET_DOMAIN: Readonly<string> = '<domain>'

  const dashboardId = ref<string>('<dashboard_id>')
  const setDashboardId = (id: string) => (dashboardId.value = id)

  return {
    dashboardId,
    setDashboardId,
    SUPERSET_DOMAIN,
    fetchGuestToken,
  }
})

async function fetchGuestToken(): Promise<string> {
  return '<guest_token>'
}
