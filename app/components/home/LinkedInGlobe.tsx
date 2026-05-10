'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'

const TEX_DAY   = 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
const TEX_NORM  = 'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'
const TEX_SPEC  = 'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'

const MESSAGES = [
  'CDI décroché en 2 semaines',
  '3 ventes en 4 jours',
  '5 RDV qualifiés en 1 semaine',
  '+10 000 impressions',
  '+500 connexions qualifiées',
  'Profil vu ×10 en 30 jours',
  '7 leads entrants en 5 jours',
]

const SLOTS = [
  { style: { top: '6%', right: '4%' } as React.CSSProperties,    indices: [0, 3, 6] },
  { style: { bottom: '10%', right: '4%' } as React.CSSProperties, indices: [1, 4] },
  { style: { top: '42%', left: '2%' } as React.CSSProperties,    indices: [2, 5] },
]

function LinkedInIcon() {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 rounded-lg"
      style={{
        width: 30,
        height: 30,
        background: 'rgba(5,221,225,0.14)',
        border: '1px solid rgba(5,221,225,0.35)',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="9" width="4" height="13" fill="#05dde1" />
        <circle cx="4" cy="4" r="2.5" fill="#05dde1" />
        <path
          d="M13.5 9C11.6 9 10 10.6 10 12.5V22h4v-9a1.5 1.5 0 013 0v9h4v-9.5C21 10.6 19.4 9 17.5 9H13.5z"
          fill="#05dde1"
        />
      </svg>
    </div>
  )
}

export default function LinkedInGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [slotIdx, setSlotIdx] = useState([0, 0, 0])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000)
    const intervals = SLOTS.map((slot, si) => {
      let i = 0
      return setInterval(() => {
        i = (i + 1) % slot.indices.length
        setSlotIdx(prev => { const n = [...prev]; n[si] = slot.indices[i]; return n })
      }, 2800 + si * 950)
    })
    return () => { clearTimeout(t); intervals.forEach(clearInterval) }
  }, [])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const w = container.clientWidth
    const h = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 300)
    camera.position.z = 3.6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    container.appendChild(renderer.domElement)

    // --- Starfield ---
    const starPositions = new Float32Array(3000 * 3)
    for (let i = 0; i < starPositions.length; i++) starPositions[i] = (Math.random() - 0.5) * 180
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, transparent: true, opacity: 0.7 })))

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0x1a2244, 1.2))
    const sun = new THREE.DirectionalLight(0xfff4e8, 2.5)
    sun.position.set(5, 3, 5)
    scene.add(sun)

    // --- Earth ---
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'

    const earthGeo = new THREE.SphereGeometry(1, 80, 80)
    const earthMat = new THREE.MeshPhongMaterial({
      shininess: 35,
      specular: new THREE.Color(0x336688),
    })
    const earth = new THREE.Mesh(earthGeo, earthMat)
    scene.add(earth)

    // Load textures progressively
    loader.load(TEX_DAY, tex => { earthMat.map = tex; earthMat.needsUpdate = true })
    loader.load(TEX_NORM, tex => { earthMat.normalMap = tex; earthMat.normalScale.set(0.85, 0.85); earthMat.needsUpdate = true })
    loader.load(TEX_SPEC, tex => { earthMat.specularMap = tex; earthMat.needsUpdate = true })

    // --- Atmosphere (subtle edge glow, not a border ring) ---
    const atmosMat = new THREE.MeshPhongMaterial({
      color: 0x4499ff,
      emissive: 0x113355,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.10,
      side: THREE.BackSide,
    })
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.07, 32, 32), atmosMat))

    // --- Drag interaction ---
    let dragging = false
    let prev = { x: 0, y: 0 }
    let vel = { x: 0, y: 0 }

    const getXY = (e: MouseEvent | TouchEvent) =>
      'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }

    const onDown = (e: MouseEvent | TouchEvent) => { dragging = true; prev = getXY(e) }
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return
      const cur = getXY(e)
      vel.y = (cur.x - prev.x) * 0.006
      vel.x = (cur.y - prev.y) * 0.006
      earth.rotation.y += vel.y
      earth.rotation.x += vel.x
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
        earth.rotation.y += 0.014
        vel.x *= 0.92
        vel.y *= 0.92
        earth.rotation.x += vel.x
        earth.rotation.y += vel.y
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
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

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
              className="absolute flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs font-bold text-white"
              style={{
                ...slot.style,
                backgroundColor: 'rgba(10,4,28,0.90)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 28px rgba(5,221,225,0.20), 0 8px 32px rgba(0,0,0,0.5)',
                zIndex: 20,
                maxWidth: '200px',
                pointerEvents: 'none',
              }}
            >
              <LinkedInIcon />
              <span className="leading-tight">{msg}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0 ml-auto" />
            </motion.div>
          </AnimatePresence>
        )
      })}

      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/15 text-xs pointer-events-none select-none pb-1">
        Glissez pour faire tourner
      </p>
    </div>
  )
}
