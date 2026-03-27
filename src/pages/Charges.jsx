import { Plus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { charges } from '../data/mockData';

export default function Charges() {
  return (
    <div>
      <PageHeader
        title="Charge Capture"
        subtitle="Encounter-level charge entry and billing status"
        action={<button className="btn-primary"><Plus size={14} /> New Encounter</button>}
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Charges', value: '$7,410', color: 'var(--text-primary)' },
          { label: 'Billed', value: charges.filter(c => c.status === 'Billed').length, color: 'var(--success)' },
          { label: 'In Coding', value: charges.filter(c => c.status === 'In Coding').length, color: 'var(--warning)' },
          { label: 'Pending Auth', value: charges.filter(c => c.status === 'Pending Auth').length, color: 'var(--danger)' },
        ].map((s, i) => (
          <div key={i} className="card glass-card" style={{ padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Encounter ID</th><th>Patient</th><th>Date of Service</th>
                <th>Provider</th><th>Department</th><th>CPT Codes</th>
                <th>Diagnosis</th><th>Total Charge</th><th>Coder</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {charges.map(c => (
                <tr key={c.id}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{c.id}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{c.patient}</td>
                  <td>{c.dos}</td>
                  <td>{c.provider}</td>
                  <td>{c.department}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {c.cptCodes.map((code, i) => (
                        <span key={i} style={{
                          padding: '2px 7px', borderRadius: 4, fontSize: 11,
                          background: 'var(--accent-light)', color: 'var(--accent)',
                          fontFamily: 'monospace', fontWeight: 600,
                        }}>{code}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--info)' }}>{c.diagnosis}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{c.totalCharge}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{c.coder}</td>
                  <td><Badge label={c.status} variant={getBadgeVariant(c.status)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
