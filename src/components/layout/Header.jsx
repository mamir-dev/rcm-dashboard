import { Bell, Search, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Header({ pageTitle }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      height: 'var(--header-height)',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      {/* Search */}
      <div style={{
        flex: 1, maxWidth: 400,
        position: 'relative',
        display: 'flex', alignItems: 'center',
      }}>
        <Search size={15} style={{
          position: 'absolute', left: 10,
          color: 'var(--text-muted)', pointerEvents: 'none',
        }} />
        <input
          className="input-field"
          placeholder="Search patients, claims, codes..."
          style={{ width: '100%', paddingLeft: 34, fontSize: 13 }}
        />
      </div>

      <div style={{ flex: 1 }} />

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'var(--bg-hover)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'var(--text-secondary)',
          transition: 'all 0.2s',
        }}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {/* Notifications */}
      <button style={{
        width: 36, height: 36, borderRadius: 8,
        background: 'var(--bg-hover)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', position: 'relative', color: 'var(--text-secondary)',
      }}>
        <Bell size={16} />
        <span style={{
          position: 'absolute', top: 6, right: 6,
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--danger)',
          border: '1.5px solid var(--bg-secondary)',
        }} />
      </button>

      {/* User */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        cursor: 'pointer', padding: '6px 10px',
        borderRadius: 8, border: '1px solid var(--border)',
        background: 'var(--bg-hover)', transition: 'all 0.15s',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: 'white',
        }}>
          AM
        </div>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
            Alex Morgan
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            Billing Manager
          </div>
        </div>
        <ChevronDown size={14} color="var(--text-muted)" />
      </div>
    </header>
  );
}
