import { useEffect, useRef } from 'react'

export default function CountdownCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for (let i = 0; i < 500; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 4,
        text: ['5', '2', '0'][Math.floor(Math.random() * 3)],
        size: 18 + Math.random() * 10,
        color: Math.random() > 0.5 ? '#ff4f87' : '#00ff99'
      })
    }

    let currentNumber = 5
    let timer = 0

    function drawBigNumber(num) {
      ctx.save()

      ctx.font = 'bold 300px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillStyle = 'rgba(255,255,255,0.08)'

      ctx.fillText(
        num,
        canvas.width / 2,
        canvas.height / 2 + 100
      )

      ctx.restore()
    }

    function animate() {
      ctx.fillStyle = 'rgba(0,0,0,0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawBigNumber(currentNumber)

      particles.forEach((p) => {
        ctx.fillStyle = p.color
        ctx.font = `${p.size}px sans-serif`

        ctx.fillText(p.text, p.x, p.y)

        p.y += p.speed

        if (p.y > canvas.height) {
          p.y = -20
          p.x = Math.random() * canvas.width
        }
      })

      timer++

      if (timer > 180) {
        currentNumber--

        if (currentNumber <= 0) {
          currentNumber = 5
        }

        timer = 0
      }

      requestAnimationFrame(animate)
    }

    animate()
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
