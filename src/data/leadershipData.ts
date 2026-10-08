export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  tier: "board" | "executive" | "domain";
  experience: string;
  image: string;
  education: string[];
  summary: string;
  careerHighlights: string[];
  previousOrganizations: string[];
}

/* ============================================================
   BOARD OF DIRECTORS
============================================================ */

export const boardOfDirectors: LeaderProfile[] = [
  {
    id: "vinod-giri",
    name: "Vinod Premchand Giri",
    role: "Director",
    tier: "board",
    experience: "20+ Years",
    image: "/images/vinod-giri2.jpg",

    education: [
      "Bachelor in Mechanical Engineering, Sardar Patel College of Engineering (SPCE), Mumbai",
      "PGDM, Narsee Monjee Institute of Management Studies (NMIMS), Mumbai",
    ],

    summary:
      "Over 20 years of experience across investments, strategy, management consulting, and project finance, with full investment cycle experience in the Indian private equity infrastructure landscape.",

    careerHighlights: [
      "Managing Partner for NIIF Master Fund, responsible for overall investment strategy, sectoral platforms, strategic operator relationships, portfolio management, and stakeholder management.",
      "Spent 13 years with IDFC Alternatives, evaluating and investing across sectors including oil and gas, transportation, logistics, real estate, education, consumption, and agriculture.",
      "Handled marquee transactions including Gujarat State Petronet Limited (GSPL), L&T Infrastructure Development Projects Limited (L&TIDPL), and Gujarat Pipavav Port Limited (GPPL).",
      "Served on boards of investee companies, contributing to strategic direction, management strengthening, regulatory access, and business development.",
      "Worked with CARE in its infrastructure advisory vertical on assignments for the Ministry of Power, Disinvestment Commission, GAIL, GSPC, PFC, and REC.",
      "Started his career in project finance with Small Industries Development Bank of India (SIDBI).",
    ],

    previousOrganizations: [
      "National Investment and Infrastructure Fund (NIIF)",
      "IDFC Alternatives",
      "CARE Ratings",
      "Small Industries Development Bank of India (SIDBI)",
    ],
  },

  {
    id: "parag-baduni",
    name: "Parag Baduni",
    role: "Director",
    tier: "board",
    experience: "30+ Years",
    image: "/images/parag-baduni2.jpg",

    education: [],

    summary:
      "Three decades of experience across private equity investing and fund management, along with operating experience in project finance, management audit, and commercial control.",

    careerHighlights: [
      "Led one of the earliest institutional investments into smart metering in the power distribution space at NIIF.",
      "Currently involved in establishing a power transmission platform at NIIF.",
      "Spent 15 years with IL&FS Investment Managers, leading private equity transactions across Power, Roads, Logistics, City Gas Distribution, Waste Management, and other sectors.",
      "Instrumental in crafting exits through IPOs, strategic sales, and sales to global private equity players.",
    ],

    previousOrganizations: [
      "National Investment and Infrastructure Fund (NIIF)",
      "IL&FS Investment Managers",
    ],
  },
];

/* ============================================================
   EXECUTIVE LEADERSHIP (CEO & COO)
============================================================ */

export const executiveLeaders: LeaderProfile[] = [
  {
    id: "bimal-dayal",
    name: "Bimal Dayal",
    role: "Chief Executive Officer",
    tier: "executive",
    experience: "38+ Years",
    image: "/images/CEO2.jpg",

    education: [
      "Engineering Degree in Electronics and Communication",
      "Management Program, Harvard Business School",
    ],

    summary:
      "A dynamic leader with over 38 years of leadership experience across Energy, Telecom, and Infrastructure, with a track record of steering organizations through scale, complexity, and transformation.",

    careerHighlights: [
      "Former CEO – Transmission Business at Adani Energy Solutions Limited, where he scaled order bookings and accelerated growth in the transmission vertical through completion of critical projects.",
      "Former MD & CEO of Indus Towers Limited, where he oversaw a successful merger and led cultural transformation.",
      "Recognized as Business World's Most Valuable CEO in 2022.",
      "Led the business excellence framework at Indus Towers, contributing to the company winning the Deming Prize awarded by JUSE.",
      "Held leadership roles at Qualcomm, Ericsson, and Tata Telecom, contributing to India's telecom evolution.",
      "Provided strategic advisory to global companies in Metal Air Batteries, Small Modular Reactors (SMRs), and sustainable next-generation energy technologies.",
    ],

    previousOrganizations: [
      "Adani Energy Solutions Limited",
      "Indus Towers Limited",
      "Qualcomm",
      "Ericsson",
      "Tata Telecom",
    ],
  },

  {
    id: "vivek-gautam",
    name: "Vivek Gautam",
    role: "COO & Head Projects",
    tier: "executive",
    experience: "38+ Years",
    image: "/images/COO2.jpg",

    education: [
      "Bachelor of Technology, GB Pant University of Agriculture and Technology, Uttarakhand",
      "Executive Leadership Development Program, Wharton",
      "Executive courses at TMTC",
    ],

    summary:
      "Brings over 38 years of diversified experience in the execution of mega infrastructure projects, with extensive leadership experience across power transmission, T&D, transportation, and hydro infrastructure.",

    careerHighlights: [
      "Led execution of mega infrastructure projects including power evacuation transmission lines for the largest solar park at Khavda.",
      "Worked on long cross-country ISTS power systems and challenging transmission line projects.",
      "Brings experience in hydro projects involving very steep mountain terrain.",
      "Started his career with ECC, L&T and subsequently held leadership roles at Tata Projects Limited.",
      "Held P&L responsibility for T&D and Transportation businesses at Tata Projects Limited.",
      "Most recently served as Chief Projects Officer and subsequently as Advisor at Adani Energy Solutions Limited.",
    ],

    previousOrganizations: [
      "Adani Energy Solutions Limited",
      "Tata Projects Limited",
      "ECC, L&T",
    ],
  },
];

/* ============================================================
   DOMAIN LEADERSHIP (PANKAJ KUMAR + 4 HEADS)
============================================================ */

export const domainLeaders: LeaderProfile[] = [
  {
    id: "pankaj-kumar",
    name: "Pankaj Kumar",
    role: "Head — Project Delivery",
    tier: "domain",
    experience: "14+ Years",
    image: "/images/Pankaj Kumar.jpg",

    education: [
      "B.Tech in Electrical Engineering, Kurukshetra University",
      "PGDM in Transmission & Distribution, NPTI Nagpur",
    ],

    summary:
      "Leads project delivery at AnantGrid with over 14 years of experience in executing large-scale power transmission infrastructure across India, specializing in integrated project management and controls.",

    careerHighlights: [
      "Leads end-to-end execution and monitoring of multi-state 765 kV and 400 kV transmission lines and substations.",
      "Brings expertise across bid-stage strategy, execution planning, commissioning, and handover of complex multi-state assignments.",
      "Consistently delivers transmission projects within schedule, budget, and regulatory frameworks.",
      "Previously served as Project Control Lead at Resonia Ltd, strengthening project delivery through robust project controls frameworks.",
      "Implemented digital MIS and dashboard systems and enabled cross-functional coordination across large and complex projects.",
    ],

    previousOrganizations: [
      "Resonia Ltd (Sterlite Power)",
    ],
  },

  {
    id: "lalit-barapatre",
    name: "Lalit Barapatre",
    role: "Head — Techno Commercial",
    tier: "domain",
    experience: "16+ Years",
    image: "/images/Lalit Barapatre.jpg",

    education: [
      "Bachelor of Engineering in Electronics",
      "MBA in Marketing & Finance",
    ],

    summary:
      "A seasoned procurement leader and strategic sourcing professional with over 16 years of experience across Power Transmission, Power Generation, and infrastructure projects.",

    careerHighlights: [
      "Former Chief Manager – Supply Chain Management at Resonia Ltd, leading strategic sourcing initiatives and EPC contract management.",
      "Strong expertise in strategic sourcing, EPC contract management, bid strategy, vendor development, and cost optimization.",
      "Led procurement excellence and supply chain efficiency initiatives through SAP Ariba and e-sourcing platforms.",
      "Experienced in complex commercial frameworks, negotiations, commodity and forex risk mitigation, and project execution.",
      "Previously worked with Abhijeet Group and KEPCO KPS on power and infrastructure developments.",
    ],

    previousOrganizations: [
      "Resonia Ltd (Sterlite Power)",
      "Abhijeet Group",
      "KEPCO KPS",
    ],
  },

  {
    id: "nikhil-sharma",
    name: "Nikhil Sharma",
    role: "Head — Business Development",
    tier: "domain",
    experience: "14+ Years",
    image: "/images/Nikhil Sharma.jpg",

    education: [
      "Electrical Engineering Degree",
      "MBA in Marketing & International Business",
    ],

    summary:
      "Brings over 14 years of experience across Business Development, Financial Modelling, and Regulatory & Corporate Affairs, with strong domain expertise in the power and transmission sector.",

    careerHighlights: [
      "Most recently spearheaded the PT&D and TBCB business at Jakson Limited, driving strategic growth in the power transmission domain.",
      "Brings extensive experience across Business Development, Financial Modelling, and Regulatory & Corporate Affairs.",
      "Worked with leading organizations including Tata Power, Sterlite, and Hyosung.",
    ],

    previousOrganizations: [
      "Jakson Limited",
      "Tata Power",
      "Sterlite",
      "Hyosung",
    ],
  },

  {
    id: "devesh-khattar",
    name: "Devesh Khattar",
    role: "Lead — Regulatory & Policy",
    tier: "domain",
    experience: "15+ Years",
    image: "/images/Devesh Khattar.jpg",

    education: [
      "B.Tech in Civil Engineering, IIT-BHU",
      "Post Graduate Program in Management, IIM Calcutta",
    ],

    summary:
      "Brings over 15 years of experience in Regulatory and Policy Advocacy, with a strong background in the infrastructure and energy sectors.",

    careerHighlights: [
      "Most recently served as Chief Manager – Policy and Regulatory at Resonia Ltd, leading strategic regulatory engagements and policy initiatives.",
      "Extensive experience engaging with the Ministry of Power, Central Electricity Authority (CEA), and Central and State Electricity Regulators.",
      "Worked with organizations including Sapient Corporation, Reliance Power Transmission, Delhi International Airport, Mercados Energy, and RTI International.",
      "Has held advisory and regulatory roles involving key stakeholders across the energy and infrastructure sectors.",
    ],

    previousOrganizations: [
      "Resonia Ltd",
      "Reliance Power Transmission",
      "Delhi International Airport",
      "Mercados Energy",
      "Sapient Corporation",
      "RTI International",
    ],
  },

  {
    id: "dhirendra-sinha",
    name: "Dhirendra K Sinha",
    role: "Lead — Human Resources",
    tier: "domain",
    experience: "22+ Years",
    image: "/images/Dhirendra Sinha.jpg",

    education: [
      "MBA in HR",
      "Post Graduate Program, XLRI Jamshedpur",
      "SHRM-SCP Certified",
      "Lean Six Sigma Green Belt Certified",
    ],

    summary:
      "A people-centric HR leader with over 22 years of cross-industry experience, driving organization-wide transformation, workforce excellence, and alignment of HR frameworks with business goals.",

    careerHighlights: [
      "Led HR strategy, operations, and business partnership functions across Education, Manufacturing, Telecom, and Energy sectors.",
      "Specializes in HR transformation, talent acquisition, and operational excellence.",
      "Spearheaded large-scale initiatives including operations centralization, advanced HRMS implementation, and digitization of HR processes.",
      "Led large workforce onboarding initiatives while improving cost, efficiency, and compliance.",
      "Recognized for building high-performance cultures and impactful employee engagement programs.",
    ],

    previousOrganizations: [],
  },
];

/* ============================================================
   COMBINED LEADERSHIP PROFILES
============================================================ */

export const leadershipProfiles: LeaderProfile[] = [
  ...boardOfDirectors,
  ...executiveLeaders,
  ...domainLeaders,
];