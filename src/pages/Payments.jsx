import { Upload } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { payments } from '../data/mockData';

export default function Payments() {
  const totalPosted = payments.filter(p => p.status === 'Posted').reduce((s, p) => s + parseFloat(p.amount.replace(/[$,]/g, '')), 0);
  const totalUnposted = payments.filter(p => p.status !== 'Posted').reduce((s, p) => s + parseFloat(p.amount.replace(/[$,]/g, '')), 0);

  return (
    <div>
      <PageHeader
        title="Payment Posting"
        subtitle="ERA / EOB processing, reconciliation, and posting"
        action={<button className="btn-primary"><Upload size={14} /> Upload ERA/EOB</button>}
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Payments This Week', value: payments.length, color: 'var(--text-primary)' },
          { label: 'Total Posted', value: `$${(totalPosted/1000).toFixed(1)}K`, color: 'var(--success)' },
          { label: 'Pending Review', value: `$${(totalUnposted/1000).toFixed(1)}K`, color: 'var(--warning)' },
          { label: 'Total Claims', value: payments.reduce((s, p) => s + p.claims, 0), color: 'var(--accent)' },
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
                <th>Pay ID</th><th>ERA / Ref #</th><th>Payer</th>
                <th>Received Date</th><th>Method</th>
                <th>Claims</th><th>Amount</th><th>Memo</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.id}>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{p.id}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{p.eraNum}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{p.payer}</td>
                  <td>{p.receivedDate}</td>
                  <td>
                    <span style={{
                      padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                      background: p.method === 'EFT' ? 'var(--info-light)' : 'var(--warning-light)',
                      color: p.method === 'EFT' ? 'var(--info)' : 'var(--warning)',
                    }}>{p.method}</span>
                  </td>
                  <td style={{ color: 'var(--text-primary)' }}>{p.claims}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 600 }}>{p.amount}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.memo}</td>
                  <td><Badge label={p.status} variant={getBadgeVariant(p.status)} /></td>
                  <td>
                    {p.status !== 'Posted' && (
                      <button style={{
                        fontSize: 11, padding: '4px 10px', borderRadius: 6,
                        background: 'var(--accent)', color: 'white',
                        border: 'none', cursor: 'pointer', fontWeight: 600,
                      }}>Post</button>
                    )}
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
