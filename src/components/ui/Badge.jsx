const variants = {
  success: { bg: 'var(--success-light)', color: 'var(--success)', dot: '#3FB950' },
  warning: { bg: 'var(--warning-light)', color: 'var(--warning)', dot: '#D29922' },
  danger:  { bg: 'var(--danger-light)',  color: 'var(--danger)',  dot: '#F85149' },
  info:    { bg: 'var(--info-light)',    color: 'var(--info)',    dot: '#58A6FF' },
  accent:  { bg: 'var(--accent-light)',  color: 'var(--accent)',  dot: '#6366f1' },
  muted:   { bg: 'var(--bg-hover)',      color: 'var(--text-muted)', dot: '#484F58' },
};

export function getBadgeVariant(status) {
  const s = status?.toLowerCase() || '';
  if (['paid', 'active', 'posted', 'confirmed', 'verified', 'billed'].some(k => s.includes(k))) return 'success';
  if (['denied', 'failed', 'no show', 'written off'].some(k => s.includes(k))) return 'danger';
  if (['pending', 'in process', 'submitted', 'scheduled', 'resubmit', 'open', 'unposted', 'in review', 'in coding', 'pending auth'].some(k => s.includes(k))) return 'warning';
  if (['appeal', 'corrected', 'voided', 'checked in', 'renegotiating'].some(k => s.includes(k))) return 'info';
  if (['inactive'].some(k => s.includes(k))) return 'muted';
  return 'accent';
}

export default function Badge({ label, variant }) {
  const v = variants[variant] || variants.muted;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 9px',
      borderRadius: 20,
      fontSize: 11, fontWeight: 600,
      background: v.bg, color: v.color,
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%', background: v.dot, flexShrink: 0,
      }} />
      {label}
    </span>
  );
}
