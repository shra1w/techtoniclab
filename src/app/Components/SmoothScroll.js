"use client";

import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({children}) {
  return (
    <ReactLenis root options={{
        lerp: 0.02, // Extremely small lerp for tight response
        smoothTouch: true,
        syncTouch: true,
        touchMultiplier: 1.2,
        syncTouchLerp: 0.025, // Very small touch lerp
        wheelMultiplier: 0.6, // Reduced wheel speed for better control
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        normalizeWheel: true,
        infinite: false,
        smoothWheel: true,
        duration: 0.8, // Shorter duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        immediate: true // Respond immediately to scroll input
    }}>
      {children}
    </ReactLenis>
  )
}