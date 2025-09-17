"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.008 // Slower animation for more elegant movement

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Primary white gradient - moving slowly
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 150,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 100,
        0,
        canvas.width * 0.2 + Math.sin(time) * 150,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 100,
        400,
      )
      gradient1.addColorStop(0, "rgba(255, 255, 255, 0.15)")
      gradient1.addColorStop(0.5, "rgba(255, 255, 255, 0.08)")
      gradient1.addColorStop(1, "rgba(255, 255, 255, 0)")

      // Secondary gray gradient - counter movement
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 1.3) * 180,
        canvas.height * 0.7 + Math.sin(time * 0.9) * 120,
        0,
        canvas.width * 0.8 + Math.cos(time * 1.3) * 180,
        canvas.height * 0.7 + Math.sin(time * 0.9) * 120,
        350,
      )
      gradient2.addColorStop(0, "rgba(128, 128, 128, 0.12)")
      gradient2.addColorStop(0.6, "rgba(128, 128, 128, 0.06)")
      gradient2.addColorStop(1, "rgba(128, 128, 128, 0)")

      // Tertiary white accent - subtle movement
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.6 + Math.sin(time * 0.5) * 100,
        canvas.height * 0.1 + Math.cos(time * 1.4) * 80,
        0,
        canvas.width * 0.6 + Math.sin(time * 0.5) * 100,
        canvas.height * 0.1 + Math.cos(time * 1.4) * 80,
        250,
      )
      gradient3.addColorStop(0, "rgba(255, 255, 255, 0.1)")
      gradient3.addColorStop(0.7, "rgba(255, 255, 255, 0.04)")
      gradient3.addColorStop(1, "rgba(255, 255, 255, 0)")

      // Fourth gradient for more complexity - dark accent
      const gradient4 = ctx.createRadialGradient(
        canvas.width * 0.4 + Math.cos(time * 0.8) * 120,
        canvas.height * 0.9 + Math.sin(time * 1.1) * 90,
        0,
        canvas.width * 0.4 + Math.cos(time * 0.8) * 120,
        canvas.height * 0.9 + Math.sin(time * 1.1) * 90,
        300,
      )
      gradient4.addColorStop(0, "rgba(64, 64, 64, 0.08)")
      gradient4.addColorStop(0.5, "rgba(64, 64, 64, 0.04)")
      gradient4.addColorStop(1, "rgba(64, 64, 64, 0)")

      // Draw gradients with blend modes for better mixing
      ctx.globalCompositeOperation = "screen"
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "multiply"
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "overlay"
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "soft-light"
      ctx.fillStyle = gradient4
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Reset blend mode
      ctx.globalCompositeOperation = "source-over"

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "overlay" }} />
  )
}
