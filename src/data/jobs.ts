export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  employmentType: string;
  description: string;
  postedDate?: string;
  tags: string[];

  reportsTo: string;
  jobPurpose: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobs: Job[] = [
  {
    id: "AG-001",
    title: "Project Head – Transmission Line",
    department: "Project Management",
    location: "Ahmedabad, India",
    experience: "15–18 Years",
    employmentType: "On-roll",

    description:
      "Lead the complete project lifecycle and ensure safe, timely, cost-effective and quality-compliant execution of the Lakadia Part A Transmission Line Project.",

    tags: [
      "Project Execution",
      "EPC Coordination",
      "HSE & Quality",
    ],

    reportsTo: "COO / Project Director",

    jobPurpose:
      "Provide overall leadership for the project and ensure safe, timely, cost-effective and quality-compliant execution.",

    responsibilities: [
      "Lead the complete project lifecycle from mobilization through construction, testing, commissioning and handover.",
      "Establish the Project Execution Plan, organization structure, responsibility matrix and reporting system.",
      "Manage scope, schedule, budget, resources, procurement, construction, quality and HSE performance.",
      "Coordinate with EPC contractors, consultants, vendors, authorities and local stakeholders.",
      "Monitor milestones and direct recovery or acceleration plans where required.",
      "Oversee ROW, land, compensation, access, crossing and statutory-approval issues.",
      "Manage stakeholders of the project for Right of Way at top level.",
      "Review commercial matters, claims, variations, extension-of-time requests and payment recommendations.",
      "Lead monthly reviews covering progress, cost, risk, quality, HSE and ROW.",
      "Ensure completion of punch points, NCRs, as-built records, test documents and handover dossiers.",
    ],

    qualifications: [
      "Bachelor’s degree in Electrical, Civil or related Engineering; postgraduate project-management qualification is an advantage.",
      "15–18 years in transmission, substation, EPC or major infrastructure projects.",
      "Proven experience leading multidisciplinary teams and contractors.",
      "Strong knowledge of planning, contracts, commercial management, construction, quality and HSE.",
      "Strong leadership, decision-making, communication and stakeholder-management skills.",
    ],
  },

  {
    id: "AG-002",
    title: "Project Manager – Transmission Line",
    department: "Project Management",
    location: "Vadodara / Anand / Surendranagar",
    experience: "10–15 Years",
    employmentType: "On-roll",

    description:
      "Manage execution of the assigned transmission-line section and achieve construction, schedule, quality, safety, cost and handover targets.",

    tags: [
      "Transmission Line",
      "Construction",
      "Contractor Management",
    ],

    reportsTo: "Project Head",

    jobPurpose:
      "Manage execution of the assigned transmission-line section and achieve construction, schedule, quality, safety, cost and handover targets.",

    responsibilities: [
      "Prepare and implement section-wise execution plans, schedules and resource plans.",
      "Coordinate foundation, tower erection, stringing, testing and commissioning activities.",
      "Monitor contractor productivity, manpower, machinery, materials and work-front readiness.",
      "Conduct daily and weekly reviews and submit progress reports.",
      "Coordinate with engineering, procurement, quality, HSE, ROW, commercial and finance teams.",
      "Resolve constraints involving access, landowners, compensation, crossings, utilities, forests, roads and railways.",
      "Ensure compliance with approved drawings, method statements, ITPs and safety procedures.",
      "Track risks, delays, technical queries, material shortages, NCRs and pending decisions.",
      "Support testing, commissioning, energization readiness and final handover.",
    ],

    qualifications: [
      "Bachelor’s degree or diploma in Electrical, Civil or related Engineering.",
      "10–15 years in transmission-line construction or infrastructure execution.",
      "Experience in foundations, tower erection, stringing, crossings and contractor management.",
      "Working knowledge of schedules, progress measurement, quality and HSE.",
      "Willingness to travel and work across the assigned section.",
    ],
  },

  {
    id: "AG-003",
    title: "Site Commercial",
    department: "Commercial",
    location: "Ahmedabad, India",
    experience: "8–10 Years",
    employmentType: "On-roll",

    description:
      "Manage contract administration, measurements, billing, cost monitoring, variations and contractor commercial matters.",

    tags: [
      "Contract Management",
      "Billing & Cost",
      "Claims & Variations",
    ],

    reportsTo: "Project Head / Commercial Head",

    jobPurpose:
      "Manage contract administration, measurements, billing, cost monitoring, variations and contractor commercial matters.",

    responsibilities: [
      "Administer EPC, subcontractor, supply and service contracts.",
      "Review work orders, scope, rates, milestones, payment terms, retention, deductions and securities.",
      "Verify measurements, work-completion certificates, contractor bills and payment recommendations.",
      "Monitor project cost against budget and identify overruns, savings and commercial risks.",
      "Review variations, extra items, rate analysis, claims and extension-of-time submissions.",
      "Maintain purchase orders, amendments, correspondence, approvals, claims and commercial records.",
      "Prepare commercial MIS covering billing, collections, commitments, variations and claims.",
      "Support audits, negotiations, dispute resolution and project close-out.",
    ],

    qualifications: [
      "Degree in Civil Engineering, Quantity Surveying, Commerce, Finance or related discipline.",
      "8–10 years in commercial or contracts management in EPC, transmission or infrastructure.",
      "Knowledge of BOQ, rate analysis, measurements, billing, subcontract administration and claims.",
      "Strong Excel and ERP skills; SAP experience preferred.",
    ],
  },

  {
    id: "AG-004",
    title: "Finance",
    department: "Finance",
    location: "Ahmedabad, India",
    experience: "8–10 Years",
    employmentType: "On-roll",

    description:
      "Manage project accounting, budgeting, cash flow, statutory compliance, payments and financial reporting.",

    tags: [
      "Project Finance",
      "Budgeting",
      "Cash Flow",
    ],

    reportsTo: "Project Head / Finance Controller",

    jobPurpose:
      "Manage project accounting, budgeting, cash flow, statutory compliance, payments and financial reporting.",

    responsibilities: [
      "Manage project accounting, ledgers, provisions, accruals and reconciliations.",
      "Prepare budgets, cash-flow forecasts, fund requirements and periodic reports.",
      "Process vendor, subcontractor, employee and service-provider payments after approvals.",
      "Coordinate bill certification, retention, advances, recoveries and deductions.",
      "Monitor costs, commitments, liabilities, receivables and budget variances.",
      "Ensure timely GST, TDS and other applicable statutory compliance.",
      "Maintain records for internal, statutory and client audits.",
      "Support bank guarantees, insurance, advances, mobilization funds and financial close-out.",
    ],

    qualifications: [
      "Degree in Commerce, Finance or Accounting; CA/Inter, CMA, MBA Finance or equivalent is an advantage.",
      "8–10 years of project-finance experience in EPC, power or infrastructure.",
      "Strong knowledge of project accounting, GST, TDS, budgeting and cash flow.",
      "Experience with SAP/ERP and advanced Excel.",
    ],
  },

  {
    id: "AG-005",
    title: "ROW Head – Transmission Line",
    department: "Land & ROW",
    location: "Ahmedabad, India",
    experience: "10–15 Years",
    employmentType: "On-roll",

    description:
      "Lead end-to-end Right of Way, land access, compensation, liaison and stakeholder-management activities.",

    tags: [
      "Right of Way",
      "Land Management",
      "Stakeholder Management",
    ],

    reportsTo: "Project Head / Head – Land and ROW",

    jobPurpose:
      "Lead end-to-end Right of Way, land access, compensation, liaison and stakeholder-management activities.",

    responsibilities: [
      "Develop and implement the project ROW and land-access strategy.",
      "Coordinate with district administration, revenue, forest, municipal, police, road, railway and other departments.",
      "Manage landowner consultation, crop/tree compensation, tower-base access, stringing access and corridor issues.",
      "Monitor ownership records, route constraints, notices, agreements and payment status.",
      "Maintain a route-wise tracker for obstructions, compensation, disputes and work-front availability.",
      "Resolve landowner grievances, local objections, access issues and stakeholder concerns.",
      "Coordinate with legal, engineering, construction, commercial and finance teams.",
      "Review compensation proposals and supporting land, revenue and valuation documents.",
      "Manage notices, disputes, claims and escalations with the legal team.",
      "Provide weekly and monthly ROW dashboards, risks and recovery plans.",
    ],

    qualifications: [
      "Degree in Law, Civil Engineering, Rural Management, Land Management, Social Sciences or related discipline.",
      "10–15 years in ROW, land acquisition, liaison or stakeholder management for transmission or linear infrastructure.",
      "Knowledge of land records, compensation processes, revenue administration and government liaison.",
      "Gujarat-district experience and Gujarati language skills preferred.",
      "Strong negotiation, documentation, legal coordination and conflict-resolution skills.",
      "Willingness to travel frequently.",
    ],
  },

  {
    id: "AG-006",
    title: "Site PMO",
    department: "Project Controls",
    location: "Ahmedabad, India",
    experience: "8–10 Years",
    employmentType: "On-roll",

    description:
      "Establish project-control systems and provide reliable reporting on schedule, progress, risks, resources, documents and actions.",

    tags: [
      "Project Controls",
      "MIS & Reporting",
      "Schedule Management",
    ],

    reportsTo: "Project Head / PMO Head",

    jobPurpose:
      "Establish project-control systems and provide reliable reporting on schedule, progress, risks, resources, documents and actions.",

    responsibilities: [
      "Maintain the integrated master schedule and section-wise schedules.",
      "Collect, validate and consolidate progress data from sites and functional teams.",
      "Prepare daily, weekly and monthly reports, dashboards and presentations.",
      "Track milestones, critical-path activities, delays, dependencies and recovery actions.",
      "Maintain risk registers, issue logs, action trackers, decision logs and change registers.",
      "Coordinate review meetings and circulate minutes and action points.",
      "Track engineering deliverables, procurement, materials and work-front readiness.",
      "Monitor planned versus actual progress, productivity, manpower and contractor performance.",
      "Support look-ahead plans, catch-up schedules and management reports.",
    ],

    qualifications: [
      "Degree or diploma in Engineering, Project Management, Commerce or related field.",
      "8–10 years in PMO, planning, project controls or MIS for EPC, power or infrastructure.",
      "Proficiency in Excel, PowerPoint and Primavera P6 or MS Project.",
      "Experience with dashboards, progress measurement, risks and management reporting.",
    ],
  },
];