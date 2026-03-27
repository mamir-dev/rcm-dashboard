import { useState } from 'react';
import { CalendarPlus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { appointments } from '../data/mockData';

const statusColors = {
  'Confirmed': 'var(--success)',
  'Checked In': 'var(--accent)',
  'Scheduled': 'var(--info)',
  'No Show': 'var(--danger)',
};

export default function Appointments() {
  const [dateFilter, setDateFilter] = useState('All');

  const dates = ['All', '2025-03-26', '2025-03-27'];
  const filtered = dateFilter === 'All'
    ? appointments
    : appointments.filter(a => a.date === dateFilter);

  const statusCounts = {
    Confirmed: appointments.filter(a => a.status === 'Confirmed').length,
    'Checked In': appointments.filter(a => a.status === 'Checked In').length,
    Scheduled: appointments.filter(a => a.status === 'Scheduled').length,
    'No Show': appointments.filter(a => a.status === 'No Show').length,
  };

  return (
    <div>
      <PageHeader
        title="Appointments"
        subtitle="Schedule, eligibility, and copay tracking"
        action={<button className="btn-primary"><CalendarPlus size={14} /> Schedule Appointment</button>}
      />

      {/* Status summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {Object.entries(statusCounts).map(([status, count]) => (
          <div key={status} className="card glass-card" style={{ padding: 16, borderLeft: `3px solid ${statusColors[status] || 'var(--border)'}` }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: statusColors[status] || 'var(--text-primary)' }}>{count}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{status}</div>
          </div>
        ))}
      </div>

      {/* Date filter */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {dates.map(d => (
          <button
            key={d}
            onClick={() => setDateFilter(d)}
            style={{
              padding: '6px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer',
              border: '1px solid var(--border)',
              background: dateFilter === d ? 'var(--accent)' : 'var(--bg-hover)',
              color: dateFilter === d ? 'white' : 'var(--text-secondary)',
              fontWeight: dateFilter === d ? 600 : 400, transition: 'all 0.15s',
            }}
          >{d === 'All' ? 'All Dates' : d}</button>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Appt ID</th><th>Patient</th><th>Provider</th><th>Date</th>
                <th>Time</th><th>Type</th><th>Department</th>
                <th>Insurance</th><th>Eligibility</th><th>Copay</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => (
                <tr key={a.id}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{a.id}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{a.patient}</td>
                  <td>{a.provider}</td>
                  <td>{a.date}</td>
                  <td style={{ color: 'var(--text-primary)' }}>{a.time}</td>
                  <td>{a.type}</td>
                  <td>{a.department}</td>
                  <td>{a.insurance}</td>
                  <td><Badge label={a.eligibility} variant={getBadgeVariant(a.eligibility)} /></td>
                  <td style={{ color: 'var(--success)', fontWeight: 600 }}>{a.copay}</td>
                  <td><Badge label={a.status} variant={getBadgeVariant(a.status)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
