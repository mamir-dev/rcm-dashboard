import { useState } from 'react';
import { UserPlus, Search, Filter } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { patients } from '../data/mockData';

export default function Patients() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = patients.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.insurance.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div>
      <PageHeader
        title="Patient Registry"
        subtitle={`${patients.length} total patients`}
        action={<button className="btn-primary"><UserPlus size={14} /> New Patient</button>}
      />

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Patients', value: patients.length, color: 'var(--accent)' },
          { label: 'Active', value: patients.filter(p => p.status === 'Active').length, color: 'var(--success)' },
          { label: 'Pending', value: patients.filter(p => p.status === 'Pending').length, color: 'var(--warning)' },
          { label: 'Inactive', value: patients.filter(p => p.status === 'Inactive').length, color: 'var(--text-muted)' },
        ].map((s, i) => (
          <div key={i} className="card glass-card" style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            className="input-field"
            placeholder="Search by name, ID, or insurance..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', paddingLeft: 32, fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['All', 'Active', 'Pending', 'Inactive'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer',
                border: '1px solid var(--border)',
                background: filter === f ? 'var(--accent)' : 'var(--bg-hover)',
                color: filter === f ? 'white' : 'var(--text-secondary)',
                fontWeight: filter === f ? 600 : 400, transition: 'all 0.15s',
              }}
            >{f}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient ID</th><th>Name</th><th>DOB</th><th>Gender</th>
                <th>Insurance</th><th>Member ID</th><th>Provider</th>
                <th>Last Visit</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} style={{ cursor: 'pointer' }}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{p.id}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{p.name}</td>
                  <td>{p.dob}</td>
                  <td>{p.gender === 'M' ? '♂ Male' : '♀ Female'}</td>
                  <td>{p.insurance}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{p.memberId}</td>
                  <td style={{ color: 'var(--text-primary)' }}>{p.provider}</td>
                  <td>{p.lastVisit}</td>
                  <td><Badge label={p.status} variant={getBadgeVariant(p.status)} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>
                  No patients match your search.
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
