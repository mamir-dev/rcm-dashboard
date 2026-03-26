// Mock data for all RCM modules

export const kpiData = {
  totalRevenue: { value: '$4,287,350', change: '+12.4%', positive: true, label: 'Total Revenue MTD' },
  claimsSubmitted: { value: '3,841', change: '+8.1%', positive: true, label: 'Claims Submitted' },
  denialRate: { value: '9.3%', change: '-1.2%', positive: true, label: 'Denial Rate' },
  avgDaysToPayment: { value: '18.4', change: '-2.1', positive: true, label: 'Avg Days to Payment' },
  collectionRate: { value: '94.7%', change: '+0.8%', positive: true, label: 'Collection Rate' },
  arOver90: { value: '$312,580', change: '+3.2%', positive: false, label: 'AR > 90 Days' },
};

export const revenueData = [
  { month: 'Oct', revenue: 3100000, collected: 2900000, adjustments: 180000 },
  { month: 'Nov', revenue: 3450000, collected: 3200000, adjustments: 210000 },
  { month: 'Dec', revenue: 2980000, collected: 2750000, adjustments: 195000 },
  { month: 'Jan', revenue: 3620000, collected: 3380000, adjustments: 220000 },
  { month: 'Feb', revenue: 3890000, collected: 3640000, adjustments: 240000 },
  { month: 'Mar', revenue: 4287350, collected: 3960000, adjustments: 270000 },
];

export const claimsStatusData = [
  { name: 'Paid', value: 62, color: '#3FB950' },
  { name: 'Pending', value: 18, color: '#D29922' },
  { name: 'Denied', value: 9, color: '#F85149' },
  { name: 'In Process', value: 11, color: '#6366f1' },
];

export const denialReasonsData = [
  { reason: 'Missing Information', count: 248, amount: '$42,160' },
  { reason: 'Authorization Required', count: 195, amount: '$78,340' },
  { reason: 'Duplicate Claim', count: 134, amount: '$23,910' },
  { reason: 'Non-Covered Service', count: 112, amount: '$31,500' },
  { reason: 'Patient Eligibility', count: 98, amount: '$19,820' },
  { reason: 'Timely Filing', count: 76, amount: '$15,680' },
];

export const arAgingData = [
  { bucket: '0-30', amount: 480000 },
  { bucket: '31-60', amount: 298000 },
  { bucket: '61-90', amount: 187000 },
  { bucket: '91-120', amount: 134000 },
  { bucket: '120+', amount: 178580 },
];

export const patients = [
  { id: 'P-10042', name: 'Margaret Chen', dob: '1968-04-12', gender: 'F', insurance: 'BlueCross PPO', memberId: 'BCB44829102', phone: '(312) 555-0182', status: 'Active', provider: 'Dr. Sarah Mitchell', lastVisit: '2025-03-18' },
  { id: 'P-10043', name: 'James Rodriguez', dob: '1975-09-28', gender: 'M', insurance: 'Aetna HMO', memberId: 'AET77612084', phone: '(312) 555-0291', status: 'Active', provider: 'Dr. Marcus Hayes', lastVisit: '2025-03-15' },
  { id: 'P-10044', name: 'Linda Patel', dob: '1990-02-03', gender: 'F', insurance: 'United Healthcare', memberId: 'UHC90034712', phone: '(773) 555-0145', status: 'Active', provider: 'Dr. Sarah Mitchell', lastVisit: '2025-03-20' },
  { id: 'P-10045', name: 'Robert Thompson', dob: '1952-11-17', gender: 'M', insurance: 'Medicare', memberId: 'MED112837495', phone: '(630) 555-0378', status: 'Inactive', provider: 'Dr. James Kwon', lastVisit: '2025-02-28' },
  { id: 'P-10046', name: 'Ashley Williams', dob: '1983-07-30', gender: 'F', insurance: 'Cigna EPO', memberId: 'CGN56082913', phone: '(847) 555-0224', status: 'Active', provider: 'Dr. Marcus Hayes', lastVisit: '2025-03-22' },
  { id: 'P-10047', name: 'David Kim', dob: '1971-05-11', gender: 'M', insurance: 'Humana PPO', memberId: 'HUM30041892', phone: '(708) 555-0319', status: 'Active', provider: 'Dr. Sarah Mitchell', lastVisit: '2025-03-19' },
  { id: 'P-10048', name: 'Susan Brown', dob: '1965-08-22', gender: 'F', insurance: 'Medicaid', memberId: 'MCD990128437', phone: '(312) 555-0447', status: 'Active', provider: 'Dr. James Kwon', lastVisit: '2025-03-12' },
  { id: 'P-10049', name: 'Michael Davis', dob: '1988-01-14', gender: 'M', insurance: 'BlueCross PPO', memberId: 'BCB55920381', phone: '(773) 555-0562', status: 'Pending', provider: 'Dr. Marcus Hayes', lastVisit: '2025-03-21' },
  { id: 'P-10050', name: 'Nancy Garcia', dob: '1979-12-05', gender: 'F', insurance: 'Aetna HMO', memberId: 'AET88203614', phone: '(630) 555-0683', status: 'Active', provider: 'Dr. Sarah Mitchell', lastVisit: '2025-03-17' },
  { id: 'P-10051', name: 'Thomas Lee', dob: '1956-03-19', gender: 'M', insurance: 'Medicare', memberId: 'MED228364810', phone: '(847) 555-0791', status: 'Active', provider: 'Dr. James Kwon', lastVisit: '2025-03-14' },
];

export const insurancePayers = [
  { id: 'INS-01', name: 'BlueCross BlueShield', payerId: 'BCBS001', type: 'Commercial', patients: 1842, claimsVolume: '$1.2M', avgProcessing: '14 days', status: 'Active', contractExpiry: '2026-01-31' },
  { id: 'INS-02', name: 'Aetna', payerId: 'AET002', type: 'Commercial', patients: 1124, claimsVolume: '$890K', avgProcessing: '17 days', status: 'Active', contractExpiry: '2025-12-31' },
  { id: 'INS-03', name: 'United Healthcare', payerId: 'UHC003', type: 'Commercial', patients: 2013, claimsVolume: '$1.5M', avgProcessing: '12 days', status: 'Active', contractExpiry: '2025-09-30' },
  { id: 'INS-04', name: 'Medicare', payerId: 'MCD004', type: 'Government', patients: 3241, claimsVolume: '$2.1M', avgProcessing: '21 days', status: 'Active', contractExpiry: 'N/A' },
  { id: 'INS-05', name: 'Medicaid', payerId: 'MDC005', type: 'Government', patients: 2187, claimsVolume: '$1.3M', avgProcessing: '28 days', status: 'Active', contractExpiry: 'N/A' },
  { id: 'INS-06', name: 'Cigna', payerId: 'CGN006', type: 'Commercial', patients: 876, claimsVolume: '$640K', avgProcessing: '15 days', status: 'Active', contractExpiry: '2026-03-31' },
  { id: 'INS-07', name: 'Humana', payerId: 'HUM007', type: 'Commercial', patients: 621, claimsVolume: '$480K', avgProcessing: '16 days', status: 'Renegotiating', contractExpiry: '2025-06-30' },
];

export const appointments = [
  { id: 'APT-2301', patient: 'Margaret Chen', patientId: 'P-10042', provider: 'Dr. Sarah Mitchell', date: '2025-03-26', time: '09:00 AM', type: 'Follow-up', department: 'Cardiology', status: 'Confirmed', insurance: 'BlueCross PPO', eligibility: 'Verified', copay: '$30' },
  { id: 'APT-2302', patient: 'James Rodriguez', patientId: 'P-10043', provider: 'Dr. Marcus Hayes', date: '2025-03-26', time: '10:30 AM', type: 'New Patient', department: 'Orthopedics', status: 'Confirmed', insurance: 'Aetna HMO', eligibility: 'Verified', copay: '$45' },
  { id: 'APT-2303', patient: 'Linda Patel', patientId: 'P-10044', provider: 'Dr. Sarah Mitchell', date: '2025-03-26', time: '11:00 AM', type: 'Annual Exam', department: 'Primary Care', status: 'Checked In', insurance: 'United Healthcare', eligibility: 'Verified', copay: '$25' },
  { id: 'APT-2304', patient: 'Robert Thompson', patientId: 'P-10045', provider: 'Dr. James Kwon', date: '2025-03-26', time: '01:00 PM', type: 'Follow-up', department: 'Neurology', status: 'No Show', insurance: 'Medicare', eligibility: 'Verified', copay: '$0' },
  { id: 'APT-2305', patient: 'Ashley Williams', patientId: 'P-10046', provider: 'Dr. Marcus Hayes', date: '2025-03-26', time: '02:30 PM', type: 'Consultation', department: 'Orthopedics', status: 'Confirmed', insurance: 'Cigna EPO', eligibility: 'Pending', copay: '$50' },
  { id: 'APT-2306', patient: 'David Kim', patientId: 'P-10047', provider: 'Dr. Sarah Mitchell', date: '2025-03-27', time: '09:30 AM', type: 'Lab Review', department: 'Primary Care', status: 'Scheduled', insurance: 'Humana PPO', eligibility: 'Verified', copay: '$30' },
  { id: 'APT-2307', patient: 'Susan Brown', patientId: 'P-10048', provider: 'Dr. James Kwon', date: '2025-03-27', time: '11:30 AM', type: 'Follow-up', department: 'Neurology', status: 'Scheduled', insurance: 'Medicaid', eligibility: 'Failed', copay: '$0' },
  { id: 'APT-2308', patient: 'Michael Davis', patientId: 'P-10049', provider: 'Dr. Marcus Hayes', date: '2025-03-27', time: '02:00 PM', type: 'New Patient', department: 'Orthopedics', status: 'Confirmed', insurance: 'BlueCross PPO', eligibility: 'Verified', copay: '$30' },
];

export const claims = [
  { id: 'CLM-98421', patient: 'Margaret Chen', dos: '2025-03-18', billed: '$1,240.00', allowed: '$980.00', paid: '$950.00', balance: '$290.00', payer: 'BlueCross PPO', status: 'Paid', submittedDate: '2025-03-19', paidDate: '2025-03-26', codes: 'E11.9, 99213' },
  { id: 'CLM-98422', patient: 'James Rodriguez', dos: '2025-03-15', billed: '$3,800.00', allowed: '$2,900.00', paid: '$0.00', balance: '$3,800.00', payer: 'Aetna HMO', status: 'Denied', submittedDate: '2025-03-16', paidDate: '-', codes: '27447, M17.11' },
  { id: 'CLM-98423', patient: 'Linda Patel', dos: '2025-03-20', billed: '$420.00', allowed: '$380.00', paid: '$355.00', balance: '$65.00', payer: 'United Healthcare', status: 'Paid', submittedDate: '2025-03-21', paidDate: '2025-03-25', codes: 'Z00.00, 99396' },
  { id: 'CLM-98424', patient: 'Robert Thompson', dos: '2025-02-28', billed: '$1,850.00', allowed: '$1,500.00', paid: '$0.00', balance: '$1,850.00', payer: 'Medicare', status: 'In Process', submittedDate: '2025-03-01', paidDate: '-', codes: 'G35, 99244' },
  { id: 'CLM-98425', patient: 'Ashley Williams', dos: '2025-03-22', billed: '$680.00', allowed: '$540.00', paid: '$490.00', balance: '$190.00', payer: 'Cigna EPO', status: 'Paid', submittedDate: '2025-03-23', paidDate: '2025-03-26', codes: 'M25.511, 99213' },
  { id: 'CLM-98426', patient: 'David Kim', dos: '2025-03-19', billed: '$2,100.00', allowed: '$0.00', paid: '$0.00', balance: '$2,100.00', payer: 'Humana PPO', status: 'Pending Auth', submittedDate: '-', paidDate: '-', codes: '29827, M75.101' },
  { id: 'CLM-98427', patient: 'Susan Brown', dos: '2025-03-12', billed: '$1,120.00', allowed: '$890.00', paid: '$890.00', balance: '$230.00', payer: 'Medicaid', status: 'Paid', submittedDate: '2025-03-13', paidDate: '2025-03-24', codes: 'G43.909, 99242' },
  { id: 'CLM-98428', patient: 'Michael Davis', dos: '2025-03-21', billed: '$450.00', allowed: '$410.00', paid: '$0.00', balance: '$450.00', payer: 'BlueCross PPO', status: 'Submitted', submittedDate: '2025-03-22', paidDate: '-', codes: 'M54.5, 99213' },
];

export const payments = [
  { id: 'PAY-4421', eraNum: 'ERA-28041', payer: 'BlueCross PPO', receivedDate: '2025-03-26', amount: '$14,280.00', claims: 18, status: 'Posted', method: 'EFT', memo: 'Batch 03/26/2025' },
  { id: 'PAY-4422', eraNum: 'ERA-28039', payer: 'Aetna HMO', receivedDate: '2025-03-25', amount: '$8,940.00', claims: 12, status: 'Posted', method: 'EFT', memo: 'Batch 03/25/2025' },
  { id: 'PAY-4423', eraNum: 'ERA-28038', payer: 'Medicare', receivedDate: '2025-03-25', amount: '$22,100.00', claims: 31, status: 'Posted', method: 'EFT', memo: 'Batch 03/25/2025' },
  { id: 'PAY-4424', eraNum: 'ERA-28035', payer: 'United Healthcare', receivedDate: '2025-03-24', amount: '$16,450.00', claims: 22, status: 'In Review', method: 'EFT', memo: 'Variance detected' },
  { id: 'PAY-4425', eraNum: 'CHK-7821', payer: 'Humana PPO', receivedDate: '2025-03-24', amount: '$3,200.00', claims: 5, status: 'Unposted', method: 'Check', memo: '#0044821' },
  { id: 'PAY-4426', eraNum: 'ERA-28030', payer: 'Cigna EPO', receivedDate: '2025-03-22', amount: '$6,780.00', claims: 9, status: 'Posted', method: 'EFT', memo: 'Batch 03/22/2025' },
  { id: 'PAY-4427', eraNum: 'ERA-28029', payer: 'Medicaid', receivedDate: '2025-03-22', amount: '$11,320.00', claims: 16, status: 'Posted', method: 'EFT', memo: 'Batch 03/22/2025' },
];

export const denials = [
  { id: 'DEN-7201', claimId: 'CLM-98422', patient: 'James Rodriguez', payer: 'Aetna HMO', amount: '$3,800.00', reason: 'CO-4: Service not authorized', category: 'Authorization', dos: '2025-03-15', deniedDate: '2025-03-22', status: 'Appeal Submitted', priority: 'High' },
  { id: 'DEN-7202', claimId: 'CLM-97890', patient: 'Patricia Moore', payer: 'Medicare', amount: '$1,240.00', reason: 'CO-97: Benefit for service not covered', category: 'Non-Covered', dos: '2025-03-10', deniedDate: '2025-03-21', status: 'Open', priority: 'Medium' },
  { id: 'DEN-7203', claimId: 'CLM-97754', patient: 'Kevin Johnson', payer: 'United Healthcare', amount: '$680.00', reason: 'CO-18: Duplicate Claim', category: 'Duplicate', dos: '2025-03-05', deniedDate: '2025-03-20', status: 'Voided', priority: 'Low' },
  { id: 'DEN-7204', claimId: 'CLM-97612', patient: 'Sarah Williams', payer: 'BlueCross PPO', amount: '$2,100.00', reason: 'CO-11: Diagnosis inconsistent', category: 'Coding', dos: '2025-03-01', deniedDate: '2025-03-18', status: 'Corrected & Resubmitted', priority: 'High' },
  { id: 'DEN-7205', claimId: 'CLM-97480', patient: 'Brian Lewis', payer: 'Cigna EPO', amount: '$890.00', reason: 'CO-29: Timely Filing', category: 'Timely Filing', dos: '2024-12-18', deniedDate: '2025-03-16', status: 'Written Off', priority: 'Medium' },
  { id: 'DEN-7206', claimId: 'CLM-97210', patient: 'Angela Scott', payer: 'Humana PPO', amount: '$4,500.00', reason: 'CO-4: Referral not on file', category: 'Authorization', dos: '2025-02-28', deniedDate: '2025-03-14', status: 'Open', priority: 'High' },
  { id: 'DEN-7207', claimId: 'CLM-96988', patient: 'Mark Robinson', payer: 'Medicaid', amount: '$320.00', reason: 'CO-16: Missing info', category: 'Missing Info', dos: '2025-02-20', deniedDate: '2025-03-10', status: 'Resubmitted', priority: 'Low' },
];

export const charges = [
  { id: 'ENC-5501', patient: 'Linda Patel', dos: '2025-03-20', provider: 'Dr. Sarah Mitchell', department: 'Primary Care', cptCodes: ['99396', '85025', '80053'], diagnosis: 'Z00.00', totalCharge: '$420.00', status: 'Billed', coder: 'J. Torres' },
  { id: 'ENC-5502', patient: 'Margaret Chen', dos: '2025-03-18', provider: 'Dr. Sarah Mitchell', department: 'Cardiology', cptCodes: ['99213', '93000'], diagnosis: 'E11.9, I10', totalCharge: '$1,240.00', status: 'Billed', coder: 'M. Nguyen' },
  { id: 'ENC-5503', patient: 'Ashley Williams', dos: '2025-03-22', provider: 'Dr. Marcus Hayes', department: 'Orthopedics', cptCodes: ['99213', '73030'], diagnosis: 'M25.511', totalCharge: '$680.00', status: 'Billed', coder: 'J. Torres' },
  { id: 'ENC-5504', patient: 'David Kim', dos: '2025-03-19', provider: 'Dr. Marcus Hayes', department: 'Orthopedics', cptCodes: ['99244', '29827'], diagnosis: 'M75.101', totalCharge: '$2,100.00', status: 'Pending Auth', coder: '-' },
  { id: 'ENC-5505', patient: 'Robert Thompson', dos: '2025-02-28', provider: 'Dr. James Kwon', department: 'Neurology', cptCodes: ['99244', '95819'], diagnosis: 'G35', totalCharge: '$1,850.00', status: 'In Coding', coder: 'M. Nguyen' },
  { id: 'ENC-5506', patient: 'Susan Brown', dos: '2025-03-12', provider: 'Dr. James Kwon', department: 'Neurology', cptCodes: ['99242'], diagnosis: 'G43.909', totalCharge: '$1,120.00', status: 'Billed', coder: 'J. Torres' },
];

export const coderQueue = [
  { id: 'ENC-5504', patient: 'David Kim', provider: 'Dr. Marcus Hayes', dos: '2025-03-19', department: 'Orthopedics', docStatus: 'Complete', priority: 'Urgent', diagnoses: ['M75.101', 'M54.5'], procedures: ['99244', '29827'], assigned: 'M. Nguyen', dueDate: '2025-03-27' },
  { id: 'ENC-5505', patient: 'Robert Thompson', provider: 'Dr. James Kwon', dos: '2025-02-28', department: 'Neurology', docStatus: 'Incomplete', priority: 'High', diagnoses: ['G35'], procedures: ['99244'], assigned: 'J. Torres', dueDate: '2025-03-26' },
  { id: 'ENC-5508', patient: 'Brenda White', provider: 'Dr. Sarah Mitchell', dos: '2025-03-21', department: 'Primary Care', docStatus: 'Complete', priority: 'Normal', diagnoses: ['J06.9'], procedures: ['99213'], assigned: 'M. Nguyen', dueDate: '2025-03-28' },
  { id: 'ENC-5511', patient: 'Carlos Martinez', provider: 'Dr. Marcus Hayes', dos: '2025-03-22', department: 'Orthopedics', docStatus: 'Query Sent', priority: 'High', diagnoses: ['M79.3'], procedures: ['27130'], assigned: 'J. Torres', dueDate: '2025-03-27' },
  { id: 'ENC-5515', patient: 'Dorothy Hall', provider: 'Dr. James Kwon', dos: '2025-03-23', department: 'Neurology', docStatus: 'Complete', priority: 'Normal', diagnoses: ['G43.909', 'R51'], procedures: ['99215', '95920'], assigned: 'M. Nguyen', dueDate: '2025-03-29' },
];

export const payerMixData = [
  { name: 'Medicare', value: 28, color: '#6366f1' },
  { name: 'Medicaid', value: 18, color: '#3FB950' },
  { name: 'BlueCross', value: 22, color: '#58A6FF' },
  { name: 'Aetna', value: 12, color: '#D29922' },
  { name: 'United', value: 14, color: '#F85149' },
  { name: 'Other', value: 6, color: '#8B949E' },
];

export const collectionTrendData = [
  { month: 'Oct', rate: 91.2 },
  { month: 'Nov', rate: 92.4 },
  { month: 'Dec', rate: 90.8 },
  { month: 'Jan', rate: 93.1 },
  { month: 'Feb', rate: 93.9 },
  { month: 'Mar', rate: 94.7 },
];

export const providerStats = [
  { name: 'Dr. Sarah Mitchell', specialty: 'Primary Care / Cardiology', charges: '$1,240,000', collections: '$1,147,200', encounters: 842, denialRate: '7.2%' },
  { name: 'Dr. Marcus Hayes', specialty: 'Orthopedics', charges: '$1,890,000', collections: '$1,739,000', encounters: 631, denialRate: '10.4%' },
  { name: 'Dr. James Kwon', specialty: 'Neurology', charges: '$1,157,350', collections: '$1,073,800', encounters: 524, denialRate: '8.9%' },
];
