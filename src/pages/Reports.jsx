import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Download } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { revenueData, arAgingData, payerMixData, collectionTrendData, providerStats } from '../data/mockData';

export default function Reports() {
  return (
    <div>
      <PageHeader
        title="Reports & Analytics"
        subtitle="Financial performance, payer mix, and collection trends"
        action={<button className="btn-primary"><Download size={14} /> Export Report</button>}
      />

      {/* Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Revenue Trend */}
        <div className="card glass-card">
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Revenue Trend</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>6-month billed vs collected</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={revenueData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="col" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3FB950" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3FB950" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v/1000000).toFixed(1)}M`} />
              <Tooltip formatter={v => `$${(v/1000000).toFixed(2)}M`} contentStyle={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12
              }} />
              <Area type="monotone" dataKey="revenue" name="Billed" stroke="#6366f1" fill="url(#rev)" strokeWidth={2} />
              <Area type="monotone" dataKey="collected" name="Collected" stroke="#3FB950" fill="url(#col)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Collection Rate Trend */}
        <div className="card glass-card">
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Collection Rate</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Monthly % of billed collected</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={collectionTrendData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="rate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D29922" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#D29922" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis domain={[88, 97]} tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
                tickFormatter={v => `${v}%`} />
              <Tooltip formatter={v => `${v}%`} contentStyle={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12
              }} />
              <Area type="monotone" dataKey="rate" name="Collection Rate" stroke="#D29922" fill="url(#rate)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Payer Mix */}
        <div className="card glass-card">
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Payer Mix</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>Revenue distribution by payer</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <ResponsiveContainer width={140} height={140}>
              <PieChart>
                <Pie data={payerMixData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={3} dataKey="value">
                  {payerMixData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={v => `${v}%`} contentStyle={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12
                }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {payerMixData.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', flex: 1 }}>{d.name}</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AR Aging */}
        <div className="card glass-card">
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>AR Aging Report</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Outstanding balances by age bucket</p>
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
      </div>

      {/* Provider Performance */}
      <div className="card">
        <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Provider Performance Report</h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>MTD performance metrics by provider</p>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Provider</th><th>Specialty</th><th>Charges</th>
                <th>Collections</th><th>Encounters</th><th>Denial Rate</th>
                <th>Net Collection %</th>
              </tr>
            </thead>
            <tbody>
              {providerStats.map((p, i) => {
                const charges = parseFloat(p.charges.replace(/[$,]/g, ''));
                const collections = parseFloat(p.collections.replace(/[$,]/g, ''));
                const netPct = ((collections / charges) * 100).toFixed(1);
                return (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{p.name}</td>
                    <td>{p.specialty}</td>
                    <td style={{ color: 'var(--text-primary)' }}>{p.charges}</td>
                    <td style={{ color: 'var(--success)', fontWeight: 600 }}>{p.collections}</td>
                    <td>{p.encounters}</td>
                    <td>
                      <span style={{
                        padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                        background: parseFloat(p.denialRate) > 10 ? 'var(--danger-light)' : 'var(--warning-light)',
                        color: parseFloat(p.denialRate) > 10 ? 'var(--danger)' : 'var(--warning)',
                      }}>{p.denialRate}</span>
                    </td>
                    <td style={{ color: 'var(--info)', fontWeight: 600 }}>{netPct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
