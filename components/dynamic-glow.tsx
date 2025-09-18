"use client"

import { useEffect, useState } from "react"

export function DynamicGlow() {
  const [glowPositions, setGlowPositions] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    // Generate random glow positions
    const generateGlows = () => {
      const glows = Array.from({ length: 8 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 400 + 200,
        opacity: Math.random() * 0.3 + 0.1,
      }))
      setGlowPositions(glows)
    }

    generateGlows()

    // Regenerate positions every 8 seconds for dynamic effect
    const interval = setInterval(generateGlows, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {glowPositions.map((glow, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl transition-all duration-[8000ms] ease-in-out"
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            width: `${glow.size}px`,
            height: `${glow.size}px`,
            background: `radial-gradient(circle, rgba(75, 85, 99, ${glow.opacity}) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Additional animated gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/20 to-transparent animate-pulse"
        style={{ animationDuration: "6s" }}
      />
    </div>
  )
}
