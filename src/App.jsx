export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffd6e7, #fff0f6, white)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.8)',
        padding: '40px',
        borderRadius: '30px',
        textAlign: 'center',
        maxWidth: '420px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
      }}>
        <div style={{fontSize:'60px'}}>💖</div>

        <h1 style={{
          color:'#ff4f87',
          fontSize:'46px'
        }}>
          Happy 520
        </h1>

        <p style={{
          lineHeight:'2',
          color:'#555',
          fontSize:'18px'
        }}>
          遇见你之后，<br/>
          日子开始变得闪闪发光。<br/>
          谢谢你出现在我的世界里。<br/><br/>
          <span style={{
            color:'#ff4f87',
            fontWeight:'bold',
            fontSize:'22px'
          }}>
            我喜欢你，很久很久。
          </span>
        </p>

        <img
          src=\"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
          alt=\"love\"
          style={{
            width:'220px',
            height:'220px',
            objectFit:'cover',
            borderRadius:'50%',
            marginTop:'30px'
          }}
        />
      </div>
    </div>
  )
}
