import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Insurance from './pages/Insurance';
import Appointments from './pages/Appointments';
import Charges from './pages/Charges';
import Coding from './pages/Coding';
import Claims from './pages/Claims';
import Payments from './pages/Payments';
import Denials from './pages/Denials';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/charges" element={<Charges />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/denials" element={<Denials />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
