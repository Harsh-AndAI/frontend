export interface BusinessCapability {
  number: string;
  title: string;
  description: string;
}

export interface BusinessCategory {
  id: string;
  navLabel: string;
  tagline: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  capabilities: BusinessCapability[];
}

export const businessCategories: BusinessCategory[] = [
  {
    id: "project-development",
    navLabel: "Project Development",
    tagline: "Origination & Structure",
    title: "Power Transmission Project Development",
    description:
      "Identifying, structuring, and advancing interstate and intrastate transmission corridors, pooling substations, and bulk high-voltage transmission infrastructure opportunities across India.",
    image:
      "/images/business-hvdc1.jpg",
    imageAlt:
      "High-voltage transmission tower and power lines",
    capabilities: [
      {
        number: "01",
        title: "Interstate & Intrastate Corridor Origination",
        description:
          "Targeting greenfield and brownfield high-voltage power transmission routes linking bulk generation centers to state utility networks.",
      },
      {
        number: "02",
        title: "Substation & Terminal Station Planning",
        description:
          "Structuring extra-high-voltage (765 kV / 400 kV) Gas Insulated Substations (GIS) and Air Insulated Substations (AIS) with advanced reactive compensation.",
      },
    ],
  },

  {
    id: "bid-management",
    navLabel: "Bid Management",
    tagline: "TBCB Framework",
    title: "Business Development & Bid Management",
    description:
      "Pursuing transmission opportunities and executing the commercial, regulatory, and strategic requirements associated with competitive bidding under the Tariff Based Competitive Bidding (TBCB) framework.",
    image:
      "/images/business_bid_section1.png",
    imageAlt:
      "Long-distance electricity transmission lines and power grid corridor",
    capabilities: [
      {
        number: "01",
        title: "Competitive Bidding Strategy",
        description:
          "Rigorous techno-commercial analysis and tariff optimization for central and state transmission utility concessions.",
      },
      {
        number: "02",
        title: "Regulatory & Concession Compliance",
        description:
          "Ensuring complete compliance with Central Electricity Regulatory Commission (CERC) regulations, standard bidding guidelines, and statutory mandates.",
      },
      {
        number: "03",
        title: "Financial Modeling & Debt Structuring",
        description:
          "Optimizing capital structures and long-term infrastructure debt to maximize return on equity while submitting competitive tariffs.",
      },
    ],
  },

  {
    id: "execution-oversight",
    navLabel: "Execution Oversight",
    tagline: "Delivery Rigor",
    title: "Project Management & Execution Oversight",
    description:
      "Providing structured, institutional oversight across project delivery schedules and coordinating with tier-1 EPC partners throughout the development, construction, and commissioning phases.",
    image:
      "https://solartodo.com/_next/image?q=75&url=https%3A%2F%2Fadmin.solartodo.com%2Fuploads%2Fpower_tower_25m_35kv_angle_tower_2026_04_14_gallery_2_c6cbaae493.png&w=1200",
    imageAlt:
      "Transmission tower construction and power infrastructure installation",
    capabilities: [
      {
        number: "01",
        title: "EPC Activities Coordination",
        description:
          "On-ground synchronization of engineering, procurement, and construction workstreams — sequencing tower erection, conductor stringing, and substation equipment installation to meet critical path timelines.",
      },
      {
        number: "02",
        title: "Quality, Safety & Environmental Compliance",
        description:
          "Institutional adherence to statutory safety frameworks, environmental mitigation norms, and international engineering quality standards.",
      },
      {
        number: "03",
        title: "Right of Way (RoW) & Forest Clearances",
        description:
          "Proactive, systematic engagement for route clearance, compensation structuring, and statutory permissions to mitigate schedule risk.",
      },
    ],
  },

  {
    id: "strategic-partnerships",
    navLabel: "Strategic Partnerships",
    tagline: "Consortia & Alliances",
    title: "Strategic Partnerships & Joint Development",
    description:  
      "Forging alliances with global institutional investors, sovereign-backed funds, and specialized transmission operators through co-bidding and joint development opportunities.",
    image:
      "/images/business_strategic_section2.png",
    imageAlt:
      "Power grid control center and electricity transmission network operations",
    capabilities: [
      {
        number: "01",
        title: "EPC Partner Management & Governance",
        description:
          "Contract administration, milestones tracking, and technical oversight across engineering, procurement, and construction partners.",
      },
      {
        number: "02",
        title: "Co-Bidding",
        description:
          "Structuring pre-bid agreements and joint venture SPVs for high-value interstate transmission schemes.",
      },
      {
        number: "03",
        title: "Technology & Equipment Alliances",
        description:
          "Partnering with leading high-voltage electrical equipment OEMs for advanced HVDC, STATCOM, and GIS substation deployments.",
      },{
        number: "04",
        title: "Trusted by leading EPC Partners",
        description:
          "Our agile execution approach is complemented by a strong partner ecosystem working with all leading Indian EPCs.",
      },
    ],
  },
];