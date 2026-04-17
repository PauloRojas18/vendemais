'use client';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> 
        <h1 style={{ fontSize: 32, marginBottom: 24 }}>Login</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
            <input type="text" placeholder="Email" style={{ padding: 12, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }} />
            <input type="password" placeholder="Password" style={{ padding: 12, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: 12, fontSize: 16, borderRadius: 4, border: 'none', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}>Login</button>
        </form>
    </div>
    )
}
