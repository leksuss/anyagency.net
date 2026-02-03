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
        // Filter only intersecting entries
        const intersectingEntries = entries.filter(entry => entry.isIntersecting)

        if (intersectingEntries.length > 0) {
          // Find the entry closest to the top of viewport
          const topEntry = intersectingEntries.reduce((closest, entry) => {
            const entryTop = entry.boundingClientRect.top
            const closestTop = closest.boundingClientRect.top
            return Math.abs(entryTop) < Math.abs(closestTop) ? entry : closest
          })

          activeSection.value = topEntry.target.id
        }
      },
      {
        // Lower threshold to detect sections earlier
        threshold: [0, 0.25, 0.5, 0.75, 1],
        // Adjust root margin to account for fixed header
        rootMargin: '-120px 0px -40% 0px',
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
