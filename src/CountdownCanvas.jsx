import { useEffect, useRef } from 'react'

export default function CountdownCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particles = []
    let fireworks = []

    const offCanvas = document.createElement('canvas')
    const offCtx = offCanvas.getContext('2d')

    offCanvas.width = canvas.width
    offCanvas.height = canvas.height

    let currentNumber = 5
    let lastSwitch = Date.now()
    let exploded = false

    function createTargetPoints(number) {
      offCtx.clearRect(0, 0, offCanvas.width, offCanvas.height)

      offCtx.fillStyle = 'white'
      offCtx.textAlign = 'center'
      offCtx.font = 'bold 320px sans-serif'

      offCtx.fillText(
        number,
        offCanvas.width / 2,
        offCanvas.height / 2 + 100
      )

      const imageData = offCtx.getImageData(
        0,
        0,
        offCanvas.width,
        offCanvas.height
      )

      const points = []

      for (let y = 0; y < imageData.height; y += 8) {
        for (let x = 0; x < imageData.width; x += 8) {
          const index = (y * imageData.width + x) * 4

          if (imageData.data[index + 3] > 128) {
            points.push({ x, y })
          }
        }
      }

      particles = points.map((p) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        tx: p.x,
        ty: p.y,
        size: 14,
        text: '520',
        color: Math.random() > 0.5
          ? '#ff4f87'
          : '#ffffff'
      }))
    }

    function createFireworks() {
      fireworks = []

      for (let i = 0; i < 260; i++) {
        fireworks.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.5) * 18,
          alpha: 1,
          text: Math.random() > 0.7 ? '❤️' : '520',
          size: 18 + Math.random() * 16,
          color: Math.random() > 0.5
            ? '#ff4f87'
            : '#ffffff'
        })
      }
    }

    createTargetPoints(currentNumber)

    function animate() {
      ctx.fillStyle = 'rgba(0,0,0,0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (!exploded) {
        particles.forEach((p) => {
          p.x += (p.tx - p.x) * 0.06
          p.y += (p.ty - p.y) * 0.06

          ctx.fillStyle = p.color
          ctx.font = `${p.size}px sans-serif`

          ctx.fillText(p.text, p.x, p.y)
        })

        if (Date.now() - lastSwitch > 1800) {
          currentNumber--

          if (currentNumber <= 0) {
            exploded = true
            createFireworks()
          } else {
            createTargetPoints(currentNumber)
          }

          lastSwitch = Date.now()
        }
      } else {
        fireworks.forEach((f) => {
          f.x += f.vx
          f.y += f.vy

          f.vy += 0.05
          f.alpha -= 0.008

          ctx.globalAlpha = f.alpha
          ctx.fillStyle = f.color
          ctx.font = `${f.size}px sans-serif`

          ctx.fillText(f.text, f.x, f.y)
        })

        ctx.globalAlpha = 1

        ctx.fillStyle = '#ffffff'
        ctx.textAlign = 'center'
        ctx.font = 'bold 54px sans-serif'

        ctx.fillText(
          '520快乐 ❤️',
          canvas.width / 2,
          canvas.height * 0.82
        )
      }

      requestAnimationFrame(animate)
    }

    animate()

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      offCanvas.width = canvas.width
      offCanvas.height = canvas.height

      if (!exploded) {
        createTargetPoints(currentNumber)
      }
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'block',
        background: 'black'
      }}
    />
  )
}
