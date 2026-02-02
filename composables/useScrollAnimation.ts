import { useIntersectionObserver } from '@vueuse/core'
import { ref, type Ref } from 'vue'

export const useScrollAnimation = (
  target: Ref<HTMLElement | null>,
  options: IntersectionObserverInit = {}
) => {
  const isVisible = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
        // Optionally stop observing after first intersection
        // stop()
      }
    },
    {
      threshold: 0.1,
      ...options,
    }
  )

  return { isVisible, stop }
}
