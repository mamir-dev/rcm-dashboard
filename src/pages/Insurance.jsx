import { useState } from 'react';
import { RefreshCw, Plus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { insurancePayers } from '../data/mockData';

const verificationQueue = [
  { patient: 'Ashley Williams', appt: 'APT-2305', payer: 'Cigna EPO', memberId: 'CGN56082913', dos: '2025-03-26', status: 'Pending' },
  { patient: 'Susan Brown', appt: 'APT-2307', payer: 'Medicaid', memberId: 'MCD990128437', dos: '2025-03-27', status: 'Failed' },
  { patient: 'Michael Davis', appt: 'APT-2308', payer: 'BlueCross PPO', memberId: 'BCB55920381', dos: '2025-03-27', status: 'Verified' },
  { patient: 'Thomas Lee', appt: 'APT-2310', payer: 'Medicare', memberId: 'MED228364810', dos: '2025-03-28', status: 'Verified' },
  { patient: 'Nancy Garcia', appt: 'APT-2311', payer: 'Aetna HMO', memberId: 'AET88203614', dos: '2025-03-28', status: 'Pending' },
];

export default function Insurance() {
  const [activeTab, setActiveTab] = useState('payers');

  return (
    <div>
      <PageHeader
        title="Insurance Management"
        subtitle="Payer contracts and eligibility verification"
        action={<button className="btn-primary"><Plus size={14} /> Add Payer</button>}
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Active Contracts', value: '6', color: 'var(--success)' },
          { label: 'Pending Renegotiation', value: '1', color: 'var(--warning)' },
          { label: 'Verifications Today', value: '14', color: 'var(--accent)' },
          { label: 'Failed Eligibility', value: '2', color: 'var(--danger)' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
        {['payers', 'verification'].map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            style={{
              padding: '8px 16px', border: 'none', cursor: 'pointer',
              background: 'transparent', fontSize: 13, fontWeight: 500,
              color: activeTab === t ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom: activeTab === t ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: -1, transition: 'all 0.15s',
              textTransform: 'capitalize',
            }}
          >{t === 'payers' ? 'Payer Contracts' : 'Eligibility Verification'}</button>
        ))}
      </div>

      {activeTab === 'payers' ? (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Payer Name</th><th>Payer ID</th><th>Type</th><th>Active Patients</th>
                  <th>Claims Volume</th><th>Avg Processing</th><th>Contract Expiry</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {insurancePayers.map(p => (
                  <tr key={p.id}>
                    <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{p.name}</td>
                    <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--accent)' }}>{p.payerId}</td>
                    <td>
                      <Badge label={p.type} variant={p.type === 'Government' ? 'info' : 'accent'} />
                    </td>
                    <td style={{ color: 'var(--text-primary)' }}>{p.patients.toLocaleString()}</td>
                    <td style={{ color: 'var(--success)' }}>{p.claimsVolume}</td>
                    <td>{p.avgProcessing}</td>
                    <td style={{ color: p.contractExpiry !== 'N/A' && new Date(p.contractExpiry) < new Date('2025-12-31') ? 'var(--warning)' : 'var(--text-secondary)' }}>
                      {p.contractExpiry}
                    </td>
                    <td><Badge label={p.status} variant={getBadgeVariant(p.status)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Upcoming appointments — eligibility status</span>
            <button className="btn-secondary" style={{ fontSize: 12, padding: '5px 12px' }}>
              <RefreshCw size={13} /> Run All Verifications
            </button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th><th>Appt ID</th><th>Payer</th><th>Member ID</th>
                  <th>Date of Service</th><th>Eligibility Status</th>
                </tr>
              </thead>
              <tbody>
                {verificationQueue.map((v, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{v.patient}</td>
                    <td style={{ color: 'var(--accent)' }}>{v.appt}</td>
                    <td>{v.payer}</td>
                    <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{v.memberId}</td>
                    <td>{v.dos}</td>
                    <td><Badge label={v.status} variant={getBadgeVariant(v.status)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
