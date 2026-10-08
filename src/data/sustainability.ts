export interface PillarPoint {
  title: string;
  desc: string;
}

export interface ESGPillar {
  id: string;
  number: string;
  label: string;
  headline: string;
  description: string;
  points: PillarPoint[];
}

export interface GovernanceTier {
  level: string;
  title: string;
  responsibility: string;
}

export const sustainabilityData = {
  hero: {
    label: "Sustainability / ESG",
    title: "Responsible Infrastructure.",
    subtitleAccent: "Long-term impact.",
  },

  philosophy: {
    label: "ESG Integration",
    heading: "Sustainability is embedded",
    subheading: "across the project lifecycle.",
    paragraph1:
      "AnantGrid integrates Environmental, Social and Governance responsibilities into its core business operations and decision-making processes.",
    paragraph2:
      "The ESG Policy applies to all AGPL operations, projects, employees, contractors, suppliers, and business partners throughout the transmission project lifecycle, including bidding, project planning, land procurement, construction, operation and maintenance, and decommissioning.",
    image: "/images/transmission-infrastructure.jpg",
  },

  pillars: [
    {
      id: "environment",
      number: "01",
      label: "Environment",
      headline: "Environmental Responsibility",
      description:
        "Protecting the environment and biodiversity while identifying and managing environmental risks across transmission projects.",
      points: [
        {
          title: "Regulatory Compliance",
          desc:
            "Compliance with applicable local and national environmental laws, regulations, and standards.",
        },
        {
          title: "Risk Assessment",
          desc:
            "Environmental and social screening and required studies to identify, assess, and mitigate environmental risks.",
        },
        {
          title: "Biodiversity Protection",
          desc:
            "Safeguarding biodiversity and natural habitats through the mitigation hierarchy of avoid, minimize, and restore.",
        },
        {
          title: "Climate Integration",
          desc:
            "Integrating climate considerations into the overall business strategy to address long-term sustainability goals.",
        },
        
        {
          title: "Workplace Safety",
          desc:
            "Maintain safe working conditions, equipment, and practices to prevent accidents, injuries, and occupational hazards.",
        },
      ],
    },

    {
      id: "social",
      number: "02",
      label: "Social",
      headline: "Social Responsibility",
      description:
        "Promoting societal well-being, fair labour practices, meaningful consultation, and responsible engagement with affected communities and stakeholders.",
      points: [
        {
          title: "Fair Labour Practices",
          desc:
            "Ensuring non-discrimination, equal opportunity, and safe working conditions for employees, contractors, and business partners.",
        },
        {
          title: "Grievance Redressal and Consultation",
          desc:
            "Establishing effective grievance redressal mechanisms and meaningful stakeholder consultations.",
        },
        {
          title: "Responsible Land Procurement / Right of Way",
          desc:
            "Managing land procurement and Right of Way responsibly while providing fair compensation.",
        },
        {
          title: "Employee Well-being",
          desc:
            "Promoting physical and mental well-being through a culture of safety, respect, and care.",
        },
        {
          title: "Respect for Indigenous Rights",
          desc:
            "Safeguarding the rights and cultural heritage of Indigenous Peoples.",
        },
        {
          title: "Community Health & Safety",
          desc:
            "Adopting applicable design and construction standards to minimize environmental and safety risks.",
        },
      ],
    },

    {
      id: "governance",
      number: "03",
      label: "Governance",
      headline: "Governance & Accountability",
      description:
        "Embedding ESG considerations into governance and risk management while maintaining transparency, ethical conduct, and continuous improvement.",
      points: [
        {
          title: "ESG Integration",
          desc:
            "Incorporate Environmental, Social, and Governance considerations into corporate governance structures and risk management frameworks to strengthen long-term sustainability.",
        },
        {
          title: "Audits and Monitoring",
          desc:
            "Conducting necessary audits and monitoring for compliance with IFC Performance Standards and investor requirements.",
        },
        {
          title: "Transparency & Accountability",
          desc:
            "Maintaining transparent reporting and disclosure practices for stakeholders.",
        },
        {
          title: "Ethical Oversight",
          desc:
            "Upholding ethical conduct and integrity with zero tolerance for corruption, bribery, or malpractice.",
        },
        {
          title: "Continuous Improvement",
          desc:
            "Monitor practices at each stage of the project lifecycle to drive continual improvement and ensure environmental protection remains central to decision-making.",
        },
      ],
    },
  ] as ESGPillar[],

  policy: {
    title: "Environmental, Social and Governance (ESG) Policy",
    description:
      "Official ESG Policy of AnantGrid Private Limited.",
    downloadUrl: "/documents/ESG-Policy-AnantGrid.pdf",
  },

  governance: [
    {
      level: "Tier 01",
      title: "Board / ESG Committee",
      responsibility:
        "Provides oversight and approves and reviews the ESG Policy.",
    },
    {
      level: "Tier 02",
      title: "AGPL Corporate",
      responsibility:
        "Integrates ESG requirements into corporate processes, planning, approvals, procurement, and risk management.",
    },
    {
      level: "Tier 03",
      title: "Project SPV / Project Management",
      responsibility:
        "Implements ESG requirements across project planning, construction, operations, maintenance, and decommissioning.",
    },
    {
      level: "Tier 04",
      title: "Contractors",
      responsibility:
        "Implements applicable ESG requirements through project and contractual activities.",
    },
  ] as GovernanceTier[],
};