'use client'

import { useEffect, useRef } from 'react'

export default function Background() {
  const vantaRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const loadVanta = async () => {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.waves.min.js')

      if (window.VANTA && window.VANTA.WAVES) {
        window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 13.0,
          waveHeight: 40.0,
          waveSpeed: 0.75,
          zoom: 1.8,
        })
      }
    }

    loadVanta()

    return () => {
      if (window.VANTA?.currentEffect) {
        try {
          window.VANTA.currentEffect?.destroy()
        } catch (e) {}
      }
    }
  }, [])

  return (
    <div
      id="vanta-waves"
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></div>
  )
}

// Dynamically load script from CDN
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}
