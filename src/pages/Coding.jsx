import PageHeader from '../components/ui/PageHeader';
import Badge, { getBadgeVariant } from '../components/ui/Badge';
import { coderQueue } from '../data/mockData';

const priorityColors = {
  Urgent: 'var(--danger)',
  High: 'var(--warning)',
  Normal: 'var(--text-muted)',
};

export default function Coding() {
  return (
    <div>
      <PageHeader
        title="Medical Coding"
        subtitle="ICD-10 / CPT coder queue and documentation review"
      />

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'In Queue', value: coderQueue.length, color: 'var(--accent)' },
          { label: 'Urgent', value: coderQueue.filter(c => c.priority === 'Urgent').length, color: 'var(--danger)' },
          { label: 'Doc Incomplete', value: coderQueue.filter(c => c.docStatus === 'Incomplete').length, color: 'var(--warning)' },
          { label: 'Query Sent', value: coderQueue.filter(c => c.docStatus === 'Query Sent').length, color: 'var(--info)' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>Coder Worklist</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>— sorted by priority & due date</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Priority</th><th>Encounter</th><th>Patient</th><th>Provider</th>
                <th>DOS</th><th>Department</th><th>Doc Status</th>
                <th>Diagnoses (ICD-10)</th><th>Procedures (CPT)</th>
                <th>Assigned To</th><th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {coderQueue.map(c => (
                <tr key={c.id}>
                  <td>
                    <span style={{
                      display: 'inline-block', padding: '2px 8px',
                      borderRadius: 4, fontSize: 11, fontWeight: 700,
                      background: priorityColors[c.priority] + '22',
                      color: priorityColors[c.priority],
                    }}>{c.priority}</span>
                  </td>
                  <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{c.id}</td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{c.patient}</td>
                  <td>{c.provider}</td>
                  <td>{c.dos}</td>
                  <td>{c.department}</td>
                  <td><Badge label={c.docStatus} variant={
                    c.docStatus === 'Complete' ? 'success' :
                    c.docStatus === 'Incomplete' ? 'danger' :
                    c.docStatus === 'Query Sent' ? 'warning' : 'muted'
                  } /></td>
                  <td>
                    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                      {c.diagnoses.map((d, i) => (
                        <span key={i} style={{
                          padding: '2px 6px', borderRadius: 4, fontSize: 11,
                          background: 'var(--info-light)', color: 'var(--info)',
                          fontFamily: 'monospace', fontWeight: 600,
                        }}>{d}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                      {c.procedures.map((p, i) => (
                        <span key={i} style={{
                          padding: '2px 6px', borderRadius: 4, fontSize: 11,
                          background: 'var(--accent-light)', color: 'var(--accent)',
                          fontFamily: 'monospace', fontWeight: 600,
                        }}>{p}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{c.assigned}</td>
                  <td style={{
                    color: new Date(c.dueDate) <= new Date('2025-03-27') ? 'var(--warning)' : 'var(--text-secondary)',
                    fontWeight: new Date(c.dueDate) <= new Date('2025-03-27') ? 600 : 400,
                  }}>{c.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
