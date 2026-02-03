import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for tracking active section in legal pages
 * Uses Intersection Observer to highlight current section in TOC
 */
export function useLegalNavigation(sectionIds: string[]) {
  const activeSection = ref<string | null>(null)

  const observeSections = () => {
    // Only run on client side
    if (typeof window === 'undefined') return null

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersecting = entries.find(entry => entry.isIntersecting)

        if (intersecting) {
          activeSection.value = intersecting.target.id
        }
      },
      {
        // Trigger when 50% of element is visible
        threshold: 0.5,
        // Adjust root margin to account for fixed header
        rootMargin: '-100px 0px -50% 0px',
      }
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return observer
  }

  onMounted(() => {
    if (process.client) {
      const observer = observeSections()

      // Set initial active section
      if (sectionIds.length > 0) {
        activeSection.value = sectionIds[0]
      }

      // Cleanup on unmount
      onUnmounted(() => {
        if (observer) {
          observer.disconnect()
        }
      })
    }
  })

  return { activeSection }
}
