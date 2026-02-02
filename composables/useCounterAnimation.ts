import { ref, watch } from 'vue'
import { gsap } from 'gsap'

export const useCounterAnimation = (
  targetValue: number,
  duration: number = 2,
  shouldAnimate: Ref<boolean>
) => {
  const displayValue = ref(0)

  watch(shouldAnimate, (animate) => {
    if (animate) {
      gsap.to(displayValue, {
        value: targetValue,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          displayValue.value = Math.round(displayValue.value)
        },
      })
    }
  })

  return displayValue
}
