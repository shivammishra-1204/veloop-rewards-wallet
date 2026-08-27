import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  )
}

function useCountUp(
  target,
  duration = 900,
  decimals = 0,
) {
  const [value, setValue] = useState(
    prefersReducedMotion() ? target : 0,
  )

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target)
      return undefined
    }

    let animationFrame

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed =
        currentTime - startTime

      const progress = Math.min(
        elapsed / duration,
        1,
      )

      const easedProgress =
        1 - Math.pow(1 - progress, 3)

      const nextValue =
        target * easedProgress

      setValue(
        Number(
          nextValue.toFixed(decimals),
        ),
      )

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate)
      }
    }

    animationFrame =
      requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [target, duration, decimals])

  return value
}

export default useCountUp