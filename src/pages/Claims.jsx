import { useState } from 'react';
import { Send, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { claims } from '../data/mockData';

const STATUSES = ['All', 'Paid', 'Submitted', 'In Process', 'Denied', 'Pending Auth'];

export default function Claims() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = claims.filter(c => {
    const matchStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchSearch = c.patient.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalBilled = claims.reduce((s, c) => s + parseFloat(c.billed.replace(/[$,]/g, '')), 0);
  const totalPaid = claims.reduce((s, c) => s + parseFloat(c.paid.replace(/[$,]/g, '')), 0);
  const totalBalance = claims.reduce((s, c) => s + parseFloat(c.balance.replace(/[$,]/g, '')), 0);

  return (
    <div>
      <PageHeader
        title="Claims Management"
        subtitle="Full claims lifecycle — from submission to adjudication"
        action={<button className="btn-primary"><Send size={14} /> Submit Batch</button>}
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Claims', value: claims.length, color: 'var(--text-primary)' },
          { label: 'Total Billed', value: `$${(totalBilled/1000).toFixed(1)}K`, color: 'var(--accent)' },
          { label: 'Total Paid', value: `$${(totalPaid/1000).toFixed(1)}K`, color: 'var(--success)' },
          { label: 'Outstanding Balance', value: `$${(totalBalance/1000).toFixed(1)}K`, color: 'var(--warning)' },
        ].map((s, i) => (
          <div key={i} className="card glass-card" style={{ padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            className="input-field"
            placeholder="Search claim or patient..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', paddingLeft: 32, fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {STATUSES.map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
              border: '1px solid var(--border)',
              background: statusFilter === s ? 'var(--accent)' : 'var(--bg-hover)',
              color: statusFilter === s ? 'white' : 'var(--text-secondary)',
              fontWeight: statusFilter === s ? 600 : 400, transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
      </div>

      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Claim ID</th><th>Patient</th><th>DOS</th><th>Payer</th>
                <th>Codes</th><th>Billed</th><th>Allowed</th>
                <th>Paid</th><th>Balance</th><th>Submitted</th><th>Paid Date</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{c.id}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{c.patient}</td>
                  <td>{c.dos}</td>
                  <td>{c.payer}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--info)' }}>{c.codes}</td>
                  <td style={{ color: 'var(--text-primary)' }}>{c.billed}</td>
                  <td>{c.allowed}</td>
                  <td style={{ color: 'var(--success)', fontWeight: c.paid !== '$0.00' ? 600 : 400 }}>{c.paid}</td>
                  <td style={{ color: parseFloat(c.balance.replace(/[$,]/g, '')) > 0 ? 'var(--warning)' : 'var(--text-muted)' }}>{c.balance}</td>
                  <td style={{ fontSize: 12 }}>{c.submittedDate}</td>
                  <td style={{ fontSize: 12 }}>{c.paidDate}</td>
                  <td><Badge label={c.status} variant={getBadgeVariant(c.status)} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={12} style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>
                  No claims match your filters.
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
