import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
  DollarSign, FileText, AlertCircle, Clock,
  TrendingUp, Users, Activity, CheckCircle
} from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import {
  kpiData, revenueData, claimsStatusData, denialReasonsData,
  arAgingData, claims, providerStats
} from '../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 8, padding: '10px 14px', fontSize: 12,
      }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 6 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, fontWeight: 600 }}>
            {p.name}: ${(p.value / 1000000).toFixed(2)}M
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Revenue Cycle overview for March 2025"
        action={
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-secondary">Export</button>
            <button className="btn-primary"><Activity size={14} /> Live View</button>
          </div>
        }
      />

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        <StatCard label="Total Revenue MTD" value="$4.29M" change="+12.4%" positive={true} icon={DollarSign} color="var(--accent)" delay={0.05} />
        <StatCard label="Claims Submitted" value="3,841" change="+8.1%" positive={true} icon={FileText} color="var(--info)" delay={0.1} />
        <StatCard label="Denial Rate" value="9.3%" change="-1.2%" positive={true} icon={AlertCircle} color="var(--danger)" delay={0.15} />
        <StatCard label="Avg Days to Pay" value="18.4 days" change="-2.1 days" positive={true} icon={Clock} color="var(--warning)" delay={0.2} />
        <StatCard label="Collection Rate" value="94.7%" change="+0.8%" positive={true} icon={CheckCircle} color="var(--success)" delay={0.25} />
        <StatCard label="AR > 90 Days" value="$312K" change="+3.2%" positive={false} icon={TrendingUp} color="var(--danger)" delay={0.3} />
      </div>

      {/* Charts Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Revenue Chart */}
        <div className="card glass-card fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Revenue vs Collections</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Last 6 months</p>
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#6366f1' }} />
                <span style={{ color: 'var(--text-muted)' }}>Billed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#3FB950' }} />
                <span style={{ color: 'var(--text-muted)' }}>Collected</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3FB950" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3FB950" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v/1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" name="Billed" stroke="#6366f1" fill="url(#colorRevenue)" strokeWidth={2} />
              <Area type="monotone" dataKey="collected" name="Collected" stroke="#3FB950" fill="url(#colorCollected)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Claims Status Pie */}
        <div className="card glass-card fade-in-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Claims Status</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Current period breakdown</p>
          <ResponsiveContainer width="100%" height={130}>
            <PieChart>
              <Pie data={claimsStatusData} cx="50%" cy="50%" innerRadius={40} outerRadius={60}
                paddingAngle={3} dataKey="value">
                {claimsStatusData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12
              }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {claimsStatusData.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)' }}>{d.name}</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, marginLeft: 'auto' }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {/* AR Aging */}
        <div className="card glass-card fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>AR Aging</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Outstanding balances by age</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={arAgingData} margin={{ top: 0, right: 4, bottom: 0, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="bucket" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
              <Tooltip formatter={v => `$${v.toLocaleString()}`} contentStyle={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12
              }} />
              <Bar dataKey="amount" name="Balance" radius={[4, 4, 0, 0]}>
                {arAgingData.map((_, i) => (
                  <Cell key={i} fill={i >= 3 ? '#F85149' : i === 2 ? '#D29922' : '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Denial Reasons */}
        <div className="card glass-card fade-in-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Top Denial Reasons</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>By volume this month</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {denialReasonsData.slice(0, 5).map((d, i) => {
              const pct = Math.round((d.count / denialReasonsData[0].count) * 100);
              return (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3, fontSize: 12 }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{d.reason}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.count}</span>
                  </div>
                  <div style={{ background: 'var(--bg-hover)', borderRadius: 4, height: 4 }}>
                    <div style={{
                      width: `${pct}%`, height: '100%', borderRadius: 4,
                      background: i === 0 ? 'var(--danger)' : i === 1 ? 'var(--warning)' : 'var(--accent)',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Claims */}
      <div className="card glass-card fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Recent Claims</h2>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Latest activity</p>
          </div>
          <a href="/claims" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
            View All →
          </a>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Claim ID</th><th>Patient</th><th>Payer</th>
                <th>Billed</th><th>Paid</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {claims.slice(0, 5).map(c => (
                <tr key={c.id}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{c.id}</td>
                  <td style={{ color: 'var(--text-primary)' }}>{c.patient}</td>
                  <td>{c.payer}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{c.billed}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 500 }}>{c.paid}</td>
                  <td><Badge label={c.status} variant={getBadgeVariant(c.status)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Provider Stats */}
      <div className="card glass-card fade-in-up" style={{ animationDelay: '0.55s', opacity: 0, marginTop: 16 }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Provider Performance</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>MTD summary by provider</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Provider</th><th>Specialty</th><th>Charges</th>
                <th>Collections</th><th>Encounters</th><th>Denial Rate</th>
              </tr>
            </thead>
            <tbody>
              {providerStats.map((p, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{p.name}</td>
                  <td>{p.specialty}</td>
                  <td style={{ color: 'var(--text-primary)' }}>{p.charges}</td>
                  <td style={{ color: 'var(--success)' }}>{p.collections}</td>
                  <td>{p.encounters}</td>
                  <td>
                    <Badge
                      label={p.denialRate}
                      variant={parseFloat(p.denialRate) > 10 ? 'danger' : parseFloat(p.denialRate) > 8 ? 'warning' : 'success'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
