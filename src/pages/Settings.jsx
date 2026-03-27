import { User, Building2, Bell, Shield, CreditCard, Database } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

const users = [
  { name: 'Alex Morgan', role: 'Billing Manager', email: 'amorgan@rcmpro.com', status: 'Active', lastLogin: '2025-03-26 09:14 AM' },
  { name: 'Jessica Torres', role: 'Medical Coder', email: 'jtorres@rcmpro.com', status: 'Active', lastLogin: '2025-03-26 08:52 AM' },
  { name: 'Michael Nguyen', role: 'Medical Coder', email: 'mnguyen@rcmpro.com', status: 'Active', lastLogin: '2025-03-25 04:30 PM' },
  { name: 'Rachel Green', role: 'AR Specialist', email: 'rgreen@rcmpro.com', status: 'Inactive', lastLogin: '2025-03-20 11:00 AM' },
  { name: 'Chris Adams', role: 'Collections', email: 'cadams@rcmpro.com', status: 'Active', lastLogin: '2025-03-26 10:01 AM' },
];

const settingSections = [
  { icon: Building2, label: 'Practice Information', desc: 'NPI, Tax ID, address, and practice details' },
  { icon: CreditCard, label: 'Payer Configuration', desc: 'Clearinghouse settings, EDI enrollment, payer IDs' },
  { icon: Bell, label: 'Notifications', desc: 'Email and in-app alert preferences' },
  { icon: Shield, label: 'Security & Access', desc: 'Password policy, 2FA, session management' },
  { icon: Database, label: 'Data & Integrations', desc: 'EHR connections, API keys, export settings' },
];

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="System configuration and user management"
        action={<button className="btn-primary">Save Changes</button>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {settingSections.map((s, i) => (
          <div key={i} className="card card-hover" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, padding: 18 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: 'var(--accent-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <s.icon size={20} color="var(--accent)" />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 14 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* User Management */}
      <div className="card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '14px 20px', borderBottom: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>User Management</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Manage roles and access levels</div>
          </div>
          <button className="btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>
            <User size={13} /> Invite User
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th><th>Role</th><th>Email</th><th>Last Login</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: 'white', flexShrink: 0,
                      }}>
                        {u.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{u.name}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                      background: 'var(--accent-light)', color: 'var(--accent)',
                    }}>{u.role}</span>
                  </td>
                  <td style={{ fontSize: 12 }}>{u.email}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{u.lastLogin}</td>
                  <td>
                    <span style={{
                      padding: '3px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      background: u.status === 'Active' ? 'var(--success-light)' : 'var(--bg-hover)',
                      color: u.status === 'Active' ? 'var(--success)' : 'var(--text-muted)',
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn-secondary" style={{ fontSize: 11, padding: '4px 10px' }}>Edit</button>
                      <button style={{
                        fontSize: 11, padding: '4px 10px', borderRadius: 6, cursor: 'pointer',
                        background: 'var(--danger-light)', color: 'var(--danger)',
                        border: '1px solid var(--danger-light)', fontWeight: 600,
                      }}>Remove</button>
                    </div>
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
