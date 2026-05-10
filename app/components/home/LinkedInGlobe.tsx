'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'

const MESSAGES = [
  { text: 'CDI décroché en 2 semaines', emoji: '🎯' },
  { text: '3 ventes en 4 jours', emoji: '💰' },
  { text: '5 RDV qualifiés en 1 semaine', emoji: '📅' },
  { text: '+10 000 impressions', emoji: '📈' },
  { text: '+500 connexions qualifiées', emoji: '🤝' },
  { text: 'Profil vu ×10 en 30 jours', emoji: '🚀' },
  { text: '7 leads entrants en 5 jours', emoji: '⚡' },
]

const SLOTS = [
  { style: { top: '6%', right: '4%' } as React.CSSProperties, indices: [0, 3, 6] },
  { style: { bottom: '10%', right: '4%' } as React.CSSProperties, indices: [1, 4] },
  { style: { top: '40%', left: '2%' } as React.CSSProperties, indices: [2, 5] },
]

function buildTexture(): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = 1024
  c.height = 1024
  const ctx = c.getContext('2d')!

  // Teal gradient background
  const grad = ctx.createRadialGradient(512, 400, 100, 512, 512, 700)
  grad.addColorStop(0, '#06e8ec')
  grad.addColorStop(1, '#038a8d')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 1024, 1024)

  // Subtle latitude/longitude grid
  ctx.strokeStyle = 'rgba(255,255,255,0.1)'
  ctx.lineWidth = 1.2
  for (let i = 1; i < 8; i++) {
    ctx.beginPath(); ctx.moveTo(i * 128, 0); ctx.lineTo(i * 128, 1024); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i * 128); ctx.lineTo(1024, i * 128); ctx.stroke()
  }

  const badge = (x: number, y: number, size: number, alpha = 0.92) => {
    const r = size * 0.22
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    ctx.beginPath()
    ctx.moveTo(x - size / 2 + r, y - size / 2)
    ctx.lineTo(x + size / 2 - r, y - size / 2)
    ctx.quadraticCurveTo(x + size / 2, y - size / 2, x + size / 2, y - size / 2 + r)
    ctx.lineTo(x + size / 2, y + size / 2 - r)
    ctx.quadraticCurveTo(x + size / 2, y + size / 2, x + size / 2 - r, y + size / 2)
    ctx.lineTo(x - size / 2 + r, y + size / 2)
    ctx.quadraticCurveTo(x - size / 2, y + size / 2, x - size / 2, y + size / 2 - r)
    ctx.lineTo(x - size / 2, y - size / 2 + r)
    ctx.quadraticCurveTo(x - size / 2, y - size / 2, x - size / 2 + r, y - size / 2)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = '#038a8d'
    ctx.font = `bold ${Math.round(size * 0.56)}px Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('in', x, y + size * 0.04)
  }

  // 2 large badges only — front (longitude 0°) and back (longitude 180°)
  // Front: texture center
  badge(512, 512, 240)
  // Back: longitude 180° = texture edges (they wrap and join on the sphere)
  badge(0,    512, 220, 0.88)
  badge(1024, 512, 220, 0.88)

  return c
}

export default function LinkedInGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [slotIdx, setSlotIdx] = useState([0, 0, 0])
  const [visible, setVisible] = useState(false)

  // Show popups after globe mounts + cycle them
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 800)
    const intervals = SLOTS.map((slot, si) => {
      let i = 0
      return setInterval(() => {
        i = (i + 1) % slot.indices.length
        setSlotIdx(prev => { const n = [...prev]; n[si] = slot.indices[i]; return n })
      }, 2800 + si * 900)
    })
    return () => {
      clearTimeout(showTimer)
      intervals.forEach(clearInterval)
    }
  }, [])

  // Three.js globe
  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const w = container.clientWidth
    const h = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100)
    camera.position.z = 3.6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const sun = new THREE.DirectionalLight(0xffffff, 1.6)
    sun.position.set(3, 2, 4)
    scene.add(sun)
    const rim = new THREE.DirectionalLight(0x05fbe1, 0.5)
    rim.position.set(-3, -1, -3)
    scene.add(rim)

    // Globe mesh
    const texture = new THREE.CanvasTexture(buildTexture())
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1, 72, 72),
      new THREE.MeshPhongMaterial({ map: texture, shininess: 65, specular: new THREE.Color(0x0d1a1a) })
    )
    scene.add(globe)


    // Drag / touch interaction
    let dragging = false
    let prev = { x: 0, y: 0 }
    let vel = { x: 0, y: 0 }

    const getXY = (e: MouseEvent | TouchEvent) =>
      'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }

    const onDown = (e: MouseEvent | TouchEvent) => {
      dragging = true
      prev = getXY(e)
    }
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return
      const cur = getXY(e)
      vel.y = (cur.x - prev.x) * 0.006
      vel.x = (cur.y - prev.y) * 0.006
      globe.rotation.y += vel.y
      globe.rotation.x += vel.x
      prev = cur
    }
    const onUp = () => { dragging = false }

    renderer.domElement.addEventListener('mousedown', onDown)
    renderer.domElement.addEventListener('touchstart', onDown as EventListener, { passive: true })
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove as EventListener, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)

    let raf: number
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!dragging) {
        globe.rotation.y += 0.004
        vel.x *= 0.92
        vel.y *= 0.92
        globe.rotation.x += vel.x
        globe.rotation.y += vel.y
      }
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove as EventListener)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <div className="relative w-full" style={{ height: '480px' }}>
      {/* Three.js canvas mount */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Floating popup cards */}
      {visible && SLOTS.map((slot, si) => {
        const msg = MESSAGES[slotIdx[si]]
        return (
          <AnimatePresence key={si} mode="wait">
            <motion.div
              key={`${si}-${slotIdx[si]}`}
              initial={{ opacity: 0, scale: 0.75, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: -8 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 24 }}
              className="absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-white"
              style={{
                ...slot.style,
                backgroundColor: 'rgba(13,6,32,0.88)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 28px rgba(5,221,225,0.22), 0 8px 32px rgba(0,0,0,0.45)',
                zIndex: 20,
                maxWidth: '185px',
                pointerEvents: 'none',
              }}
            >
              <span className="text-sm flex-shrink-0">{msg.emoji}</span>
              <span className="leading-tight">{msg.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0 ml-auto" />
            </motion.div>
          </AnimatePresence>
        )
      })}

      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/20 text-xs pointer-events-none select-none pb-1">
        Glissez pour faire tourner
      </p>
    </div>
  )
}
