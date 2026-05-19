import { useState } from 'react'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom, #ffd6e7, #fff0f6, white)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.82)',
          padding: '40px',
          borderRadius: '30px',
          textAlign: 'center',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            fontSize: '60px',
            animation: 'heartbeat 1.5s infinite',
          }}
        >
          💖
        </div>

        <h1
          style={{
            color: '#ff4f87',
            fontSize: '46px',
            marginBottom: '10px',
          }}
        >
          Happy 520
        </h1>

        {!opened ? (
          <>
            <p
              style={{
                lineHeight: '2',
                color: '#555',
                fontSize: '18px',
              }}
            >
              有一封信，<br />
              小比熊想亲自送给你。
            </p>

            <div
              style={{
                animation: 'runIn 2.5s ease-out forwards',
                position: 'relative',
              }}
            >
              <img
                src="/bichon.png"
                alt="bichon"
                style={{
                  width: '260px',
                  marginTop: '30px',
                  animation: 'float 2s ease-in-out infinite',
                }}
              />
            </div>

            <button
              onClick={() => setOpened(true)}
              style={{
                marginTop: '30px',
                border: 'none',
                background: '#ff4f87',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '999px',
                fontSize: '18px',
                cursor: 'pointer',
                transition: '0.3s',
                boxShadow: '0 6px 20px rgba(255,79,135,0.35)',
              }}
            >
              拆开信封 ✨
            </button>
          </>
        ) : (
          <div
            style={{
              marginTop: '30px',
              animation: 'fadeIn 1.2s ease',
            }}
          >
            <div
              style={{
                fontSize: '80px',
                marginBottom: '20px',
              }}
            >
              💌
            </div>

            <p
              style={{
                lineHeight: '2.2',
                color: '#555',
                fontSize: '20px',
              }}
            >
              🐶 小比熊带着信跑来啦：
              <br />
              <br />
              检测到一只最近非常忙碌的 Mrs.
              <br />
              <br />
              虽然最近很忙很累，
              <br />
              但也别忘了照顾自己。
              <br />
              <br />
              还有——
              <br />
              <br />
              <span
                style={{
                  color: '#ff4f87',
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                有人一直在挂念你 ❤️
              </span>
              <br />
              <br />
              520快乐
            </p>
          </div>
        )}

        <div
          style={{
            marginTop: '22px',
            color: '#888',
            fontSize: '14px',
          }}
        >
          —— 来自一直等你的小比熊
        </div>
      </div>
    </div>
  )
}
