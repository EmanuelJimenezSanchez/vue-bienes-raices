import { ref } from 'vue'

export default function useLocationMap() {

  const zoom = ref(12)
  const center = ref([20.662295,-103.3377645])

  function pin(e) {
    const marker = e.target.getLatLng()
    center.value = [marker.lat, marker.lng]
  }

  return {
    zoom,
    center,
    pin
  }
}