import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ label, value, change, positive, icon: Icon, color = 'var(--accent)', delay = 0 }) {
  const isPositive = positive !== false && (positive || (change && !change.startsWith('-')));

  return (
    <div
      className="card glass-card fade-in-up"
      style={{ 
        animationDelay: `${delay}s`, 
        opacity: 0,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
            {label}
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
            {value}
          </div>
        </div>
        {Icon && (
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: color + '22',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={20} color={color} />
          </div>
        )}
      </div>
      {change && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 12, fontWeight: 600,
          color: isPositive ? 'var(--success)' : 'var(--danger)',
        }}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {change} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>vs last month</span>
        </div>
      )}
    </div>
  );
}
