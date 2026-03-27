import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { denials, denialReasonsData } from '../data/mockData';

const PRIORITIES = ['All', 'High', 'Medium', 'Low'];

export default function Denials() {
  const [priorityFilter, setPriorityFilter] = useState('All');

  const filtered = priorityFilter === 'All'
    ? denials
    : denials.filter(d => d.priority === priorityFilter);

  const totalAtRisk = denials.reduce((s, d) => s + parseFloat(d.amount.replace(/[$,]/g, '')), 0);

  return (
    <div>
      <PageHeader
        title="Denial Management"
        subtitle="Track, appeal, and resolve denied claims"
        action={
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-secondary">Export</button>
            <button className="btn-primary"><AlertTriangle size={14} /> Work Queue</button>
          </div>
        }
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Denials', value: denials.length, color: 'var(--danger)' },
          { label: 'Total At Risk', value: `$${(totalAtRisk/1000).toFixed(1)}K`, color: 'var(--warning)' },
          { label: 'Appeals Submitted', value: denials.filter(d => d.status.includes('Appeal')).length, color: 'var(--info)' },
          { label: 'Open / Unworked', value: denials.filter(d => d.status === 'Open').length, color: 'var(--danger)' },
        ].map((s, i) => (
          <div key={i} className="card glass-card" style={{ padding: 16, textAlign: 'center', borderTop: `3px solid ${s.color}` }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Denial reasons chart */}
      <div className="card glass-card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>Denial Reasons by Volume</h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Top denial categories this period</p>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={denialReasonsData} layout="vertical" margin={{ top: 0, right: 40, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
            <YAxis dataKey="reason" type="category" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} width={140} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="count" name="Denials" radius={[0, 4, 4, 0]}>
              {denialReasonsData.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#F85149' : i === 1 ? '#D29922' : '#6366f1'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Priority filters */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {PRIORITIES.map(p => (
          <button key={p} onClick={() => setPriorityFilter(p)} style={{
            padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
            border: '1px solid var(--border)',
            background: priorityFilter === p ? 'var(--accent)' : 'var(--bg-hover)',
            color: priorityFilter === p ? 'white' : 'var(--text-secondary)',
            fontWeight: priorityFilter === p ? 600 : 400, transition: 'all 0.15s',
          }}>{p === 'All' ? 'All Priorities' : p}</button>
        ))}
      </div>

      {/* Denials Table */}
      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Priority</th><th>Denial ID</th><th>Claim ID</th><th>Patient</th>
                <th>Payer</th><th>Amount</th><th>Category</th><th>Reason</th>
                <th>DOS</th><th>Denied On</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.id}>
                  <td>
                    <span style={{
                      display: 'inline-block', padding: '2px 8px',
                      borderRadius: 4, fontSize: 11, fontWeight: 700,
                      background: d.priority === 'High' ? 'var(--danger-light)' : d.priority === 'Medium' ? 'var(--warning-light)' : 'var(--bg-hover)',
                      color: d.priority === 'High' ? 'var(--danger)' : d.priority === 'Medium' ? 'var(--warning)' : 'var(--text-muted)',
                    }}>{d.priority}</span>
                  </td>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{d.id}</td>
                  <td style={{ color: 'var(--info)', fontFamily: 'monospace', fontSize: 12 }}>{d.claimId}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{d.patient}</td>
                  <td>{d.payer}</td>
                  <td style={{ color: 'var(--danger)', fontWeight: 600 }}>{d.amount}</td>
                  <td>{d.category}</td>
                  <td style={{ fontSize: 12, maxWidth: 200 }}>{d.reason}</td>
                  <td>{d.dos}</td>
                  <td>{d.deniedDate}</td>
                  <td><Badge label={d.status} variant={getBadgeVariant(d.status)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
