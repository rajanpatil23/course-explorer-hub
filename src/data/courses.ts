export type BadgeType = "Popular" | "Trending" | "Advance";

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface CourseHighlight {
  text: string;
  bold?: string;
}

export interface SecretSauceItem {
  title: string;
  icon: string;
}

export interface DemandData {
  jobOpenings: string;
  roles: { title: string; salaryMin: string; salaryAvg: string; salaryMax: string }[];
  hiringCompanies: string[];
  growthPercent: string;
  growthDescription: string;
}

export interface Course {
  name: string;
  code: string;
  slug: string;
  duration: string;
  level: string;
  skills: string[];
  learners: string;
  badge: BadgeType;
  category: string;
  description: string;
  subtitle: string;
  heroHighlights: string[];
  secretSauce: SecretSauceItem[];
  courseHighlights: CourseHighlight[];
  aboutCourse: string;
  benefits: string[];
  demand: DemandData;
  curriculum: CurriculumModule[];
  price: number;
  originalPrice: number;
  certification: string;
  prerequisites: string[];
  includes: string[];
  contactHours: string;
  rating: string;
  reviewCount: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  courses: Course[];
}

function generateSlug(code: string): string {
  return code.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Course-specific data for all 34 courses
const courseDetails: Record<string, Partial<Course>> = {
  "PMI-PMP": {
    subtitle: "Ace the PMP Certification Exam in the First Attempt in Just 5 Weeks",
    heroHighlights: [
      "Boost your career with 36 hours of live PMP certification training",
      "Prepare with a 5-week study plan and 2000+ practice questions",
      "Experience real exams with PMI replica questions and a free simulator",
      "Practice with 12 full-length simulation tests of 180 questions each",
      "Ace the PMP exam with mock tests and hands-on training",
    ],
    secretSauce: [
      { title: "100% Money-Back Guarantee", icon: "shield-check" },
      { title: "Premium 2000+ Question Bank", icon: "book-open" },
      { title: "Exam Simulator & Free Mock Tests", icon: "monitor" },
      { title: "Mentor-Led 5-Week Study Plan", icon: "calendar-check" },
      { title: "Complimentary Self-Paced Course", icon: "play-circle" },
      { title: "Exam Application Assistance", icon: "file-text" },
    ],
    courseHighlights: [
      { text: "36 Contact Hours with Live, Instructor-Led Sessions", bold: "36 Contact Hours" },
      { text: "Complimentary On-Demand Course with 35 Contact Hours", bold: "On-Demand Course" },
      { text: "Mentor-Led 5-Week Exam Pass Study Plan", bold: "5-Week Study Plan" },
      { text: "2000+ Question Bank for Hands-On Practice", bold: "2000+ Question Bank" },
      { text: "Free PMP Exam Simulator for Real Exam Experience", bold: "Exam Simulator" },
      { text: "12 Full-Length Simulation Tests (180 Qs Each)", bold: "12 Simulation Tests" },
    ],
    aboutCourse: "The PMP® Certification is a globally recognized credential for project managers. Our PMP program is led by expert trainers with 20+ years of project management experience across industries. You'll gain practical skills, access comprehensive study materials, and receive mentorship throughout your preparation journey.",
    benefits: [
      "Globally Recognized Credential — PMP is the gold standard in project management",
      "Increased Employability — Major advantage in the job market",
      "Higher Earning Potential — 33% higher median salary than non-certified professionals",
      "Professional Credibility — Undeniable proof of PM competence",
      "Practical Learning — Real-world project scenarios and hands-on exercises",
      "Continuous Learning — Earn 60 PDUs every 3 years to maintain certification",
    ],
    demand: {
      jobOpenings: "10M+ Job Openings in Project Management By 2030",
      roles: [
        { title: "Project Manager", salaryMin: "$86K", salaryAvg: "$114K", salaryMax: "$177K" },
        { title: "Project Lead", salaryMin: "$78K", salaryAvg: "$95K", salaryMax: "$112K" },
        { title: "PMO Lead", salaryMin: "$88K", salaryAvg: "$100K", salaryMax: "$112K" },
        { title: "Project Director", salaryMin: "$144K", salaryAvg: "$178K", salaryMax: "$213K" },
      ],
      hiringCompanies: ["Oracle", "Accenture", "Bank of America", "Bosch", "Abbott", "Allianz"],
      growthPercent: "33%",
      growthDescription: "anticipated in Project Management-oriented roles globally by 2027",
    },
    curriculum: [
      { title: "Agile Fundamentals and Traditional PM Foundations", topics: ["Agile/Scrum Framework", "Project Management Fundamentals", "PMP Process Groups", "Business Environment", "Organizational Culture & Change Management", "Project Governance & Compliance"] },
      { title: "Start the Project", topics: ["Identify and Engage Stakeholders", "Form the Team", "Build a Shared Understanding", "Project Approach", "Predictive & Adaptive Life Cycles"] },
      { title: "Do the Work", topics: ["Manage Knowledge & Resources", "Monitor and Measure", "Manage Procurement & Quality", "Handle Issues, Risks, and Impediments", "Lead the Team"] },
      { title: "Keep the Team on Track", topics: ["Team Performance & Dynamics", "Conflict Management", "Servant Leadership", "Coaching & Mentoring"] },
      { title: "Keep the Business in Mind", topics: ["Benefits Management", "Business Value Delivery", "Organizational Change & Transformation", "Compliance & Governance"] },
    ],
    prerequisites: [
      "No prior experience required to attend our PMP Certification Training",
      "4-year degree, high-school Diploma or associate degree required for exam",
      "36–60 months of experience leading projects within the past 8 years",
      "35 contact hours of project management education mandatory for exam",
    ],
    contactHours: "36",
    rating: "4.8",
    reviewCount: "4,850",
  },
  "PMI-CAPM": {
    subtitle: "Launch Your Project Management Career with the Globally Recognized CAPM Credential",
    heroHighlights: [
      "23 contact hours of live instructor-led CAPM training",
      "Comprehensive study materials aligned with PMI standards",
      "Practice exams and exam simulation for first-attempt success",
      "Expert guidance on CAPM application process",
    ],
    secretSauce: [
      { title: "100% Money-Back Guarantee", icon: "shield-check" },
      { title: "Full-Length Practice Exams", icon: "book-open" },
      { title: "PMI Application Assistance", icon: "file-text" },
      { title: "Exam Day Strategy Sessions", icon: "target" },
    ],
    courseHighlights: [
      { text: "23 Contact Hours of Live Instructor-Led Training", bold: "23 Contact Hours" },
      { text: "Complete CAPM Study Guide & Materials", bold: "Study Guide" },
      { text: "Practice Exams Aligned with PMI Standards", bold: "Practice Exams" },
      { text: "PMI Application Support & Guidance", bold: "Application Support" },
    ],
    aboutCourse: "The CAPM® certification is the ideal entry-level credential for aspiring project managers. It validates your understanding of fundamental project management processes, terminology, and best practices as defined by PMI.",
    benefits: [
      "Perfect Entry Point — Ideal for those new to project management",
      "PMI Recognized — Globally valued certification",
      "Career Foundation — Stepping stone to PMP certification",
      "Practical Knowledge — PMBOK Guide-aligned learning",
    ],
    demand: {
      jobOpenings: "10M+ Job Openings in Project Management By 2030",
      roles: [
        { title: "Junior Project Manager", salaryMin: "$55K", salaryAvg: "$68K", salaryMax: "$85K" },
        { title: "Project Coordinator", salaryMin: "$45K", salaryAvg: "$58K", salaryMax: "$72K" },
      ],
      hiringCompanies: ["Deloitte", "TCS", "Accenture", "Capgemini"],
      growthPercent: "33%",
      growthDescription: "anticipated growth in Project Management roles by 2027",
    },
    curriculum: [
      { title: "Project Management Fundamentals", topics: ["Introduction to Project Management", "Project Life Cycles", "Project Management Processes", "Key Terminology & Concepts"] },
      { title: "Predictive Planning", topics: ["Scope Management", "Schedule Management", "Cost Management", "Quality Planning"] },
      { title: "Agile Frameworks", topics: ["Agile Principles & Values", "Scrum Basics", "Kanban Overview", "Hybrid Approaches"] },
      { title: "Exam Preparation", topics: ["Exam Content Outline Review", "Practice Questions", "Exam Strategy & Tips"] },
    ],
    prerequisites: [
      "No prior project management experience required",
      "High school diploma or associate degree",
      "23 hours of project management education",
    ],
    contactHours: "23",
    rating: "4.7",
    reviewCount: "2,340",
  },
  "PMI-ACP": {
    subtitle: "Become a PMI-Certified Agile Practitioner and Lead Agile Teams with Confidence",
    heroHighlights: [
      "21 contact hours of live agile training",
      "Covers Scrum, Kanban, Lean, XP, and more",
      "Real-world agile case studies and exercises",
      "Full exam preparation with practice tests",
    ],
    secretSauce: [
      { title: "Multi-Framework Coverage", icon: "layers" },
      { title: "Hands-On Agile Exercises", icon: "code" },
      { title: "Exam Simulation Tests", icon: "monitor" },
      { title: "Post-Training Support", icon: "headphones" },
    ],
    courseHighlights: [
      { text: "21 Contact Hours of Live Agile Training", bold: "21 Contact Hours" },
      { text: "Coverage of All Major Agile Frameworks", bold: "All Major Frameworks" },
      { text: "Interactive Case Studies & Workshops", bold: "Case Studies" },
      { text: "Complete Exam Preparation Package", bold: "Exam Preparation" },
    ],
    aboutCourse: "The PMI-ACP® certification validates your expertise in agile principles and practices. This training covers multiple agile methodologies including Scrum, Kanban, Lean, XP, and Test-Driven Development.",
    benefits: [
      "Multi-Framework Expertise — Master Scrum, Kanban, Lean, XP and more",
      "PMI Recognized — Globally valued agile certification",
      "Career Advancement — 28% higher salaries for PMI-ACP holders",
      "Versatile Skills — Apply agile across any industry",
    ],
    demand: {
      jobOpenings: "Agile roles growing 25% year-over-year",
      roles: [
        { title: "Agile Coach", salaryMin: "$95K", salaryAvg: "$125K", salaryMax: "$160K" },
        { title: "Scrum Master", salaryMin: "$85K", salaryAvg: "$110K", salaryMax: "$140K" },
      ],
      hiringCompanies: ["Deloitte", "IBM", "Cognizant", "Infosys"],
      growthPercent: "25%",
      growthDescription: "year-over-year growth in agile roles globally",
    },
    curriculum: [
      { title: "Agile Principles & Mindset", topics: ["Agile Manifesto & Principles", "Lean Thinking", "Value-Driven Delivery"] },
      { title: "Agile Frameworks & Methodologies", topics: ["Scrum Framework", "Kanban Method", "Extreme Programming (XP)", "Lean Software Development"] },
      { title: "Stakeholder Engagement", topics: ["Agile Contracts", "Stakeholder Management", "Communication Strategies"] },
      { title: "Adaptive Planning & Continuous Improvement", topics: ["Release Planning", "Retrospectives", "Metrics & Reporting", "Exam Preparation"] },
    ],
    prerequisites: [
      "2,000 hours of general project experience",
      "1,500 hours working on agile project teams",
      "21 contact hours of agile education",
    ],
    contactHours: "21",
    rating: "4.7",
    reviewCount: "1,890",
  },
  "PMI-RMP": {
    subtitle: "Master Risk Management and Become a PMI-Certified Risk Professional",
    heroHighlights: [
      "24 contact hours of expert risk management training",
      "Quantitative & qualitative risk analysis techniques",
      "Real-world risk response strategies",
      "Complete exam preparation with practice tests",
    ],
    secretSauce: [
      { title: "Risk Analysis Tools", icon: "bar-chart" },
      { title: "Case-Based Learning", icon: "book-open" },
      { title: "Exam Practice Tests", icon: "monitor" },
      { title: "Expert Mentorship", icon: "users" },
    ],
    courseHighlights: [
      { text: "24 Contact Hours of Live Risk Management Training", bold: "24 Contact Hours" },
      { text: "Quantitative & Qualitative Analysis Techniques", bold: "Analysis Techniques" },
      { text: "Real-World Risk Case Studies", bold: "Case Studies" },
      { text: "Complete PMI-RMP Exam Prep Package", bold: "Exam Prep" },
    ],
    aboutCourse: "The PMI-RMP® certification validates your expertise in identifying, assessing, and managing project risks. This specialized credential is ideal for professionals focused on risk management in projects.",
    benefits: [
      "Specialized Credential — Stand out as a risk management expert",
      "Higher Earnings — Risk specialists command premium salaries",
      "Global Recognition — PMI-backed certification",
      "Career Growth — Essential skill for senior PM roles",
    ],
    demand: {
      jobOpenings: "Risk management roles growing steadily across industries",
      roles: [
        { title: "Risk Manager", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$155K" },
        { title: "Risk Analyst", salaryMin: "$70K", salaryAvg: "$92K", salaryMax: "$118K" },
      ],
      hiringCompanies: ["JPMorgan", "Goldman Sachs", "PwC", "KPMG"],
      growthPercent: "18%",
      growthDescription: "growth in risk management roles by 2028",
    },
    curriculum: [
      { title: "Risk Strategy & Planning", topics: ["Risk Management Framework", "Risk Strategy Alignment", "Stakeholder Risk Appetite"] },
      { title: "Risk Identification", topics: ["Risk Identification Techniques", "Risk Register Development", "Risk Categories"] },
      { title: "Risk Analysis", topics: ["Qualitative Risk Analysis", "Quantitative Risk Analysis", "Monte Carlo Simulation", "Decision Trees"] },
      { title: "Risk Response & Monitoring", topics: ["Risk Response Strategies", "Contingency Planning", "Risk Monitoring & Control", "Exam Preparation"] },
    ],
    prerequisites: [
      "3+ years of project risk management experience",
      "30 hours of project risk management education",
    ],
    contactHours: "24",
    rating: "4.6",
    reviewCount: "980",
  },
  "PMI-PBA": {
    subtitle: "Validate Your Business Analysis Expertise with PMI's Professional Credential",
    heroHighlights: [
      "24 contact hours of business analysis training",
      "Needs assessment and requirements management",
      "Stakeholder engagement and elicitation techniques",
      "Full PMI-PBA exam preparation",
    ],
    secretSauce: [
      { title: "Requirements Workshops", icon: "clipboard" },
      { title: "Elicitation Techniques", icon: "search" },
      { title: "Practice Exams", icon: "monitor" },
      { title: "Application Guidance", icon: "file-text" },
    ],
    courseHighlights: [
      { text: "24 Contact Hours of Business Analysis Training", bold: "24 Contact Hours" },
      { text: "Requirements Lifecycle Management", bold: "Requirements Lifecycle" },
      { text: "Stakeholder Engagement Techniques", bold: "Stakeholder Engagement" },
      { text: "PMI-PBA Exam Preparation Package", bold: "Exam Preparation" },
    ],
    aboutCourse: "The PMI-PBA® certification validates your competency in business analysis. This training covers the entire requirements lifecycle from needs assessment through solution evaluation.",
    benefits: [
      "Business Analysis Expertise — PMI-validated credential",
      "Career Versatility — BA skills needed in every industry",
      "Salary Premium — Certified BAs earn 15-20% more",
      "Project Success — Better requirements = better outcomes",
    ],
    demand: {
      jobOpenings: "Business analysis roles expanding across sectors",
      roles: [
        { title: "Business Analyst", salaryMin: "$70K", salaryAvg: "$92K", salaryMax: "$120K" },
        { title: "Senior BA", salaryMin: "$95K", salaryAvg: "$115K", salaryMax: "$140K" },
      ],
      hiringCompanies: ["Accenture", "Deloitte", "Wipro", "TCS"],
      growthPercent: "14%",
      growthDescription: "growth in business analysis roles by 2028",
    },
    curriculum: [
      { title: "Needs Assessment", topics: ["Business Problem Definition", "Situation & Desired Outcome", "Gap Analysis"] },
      { title: "Planning", topics: ["BA Planning & Monitoring", "Stakeholder Analysis", "Requirements Management Plan"] },
      { title: "Analysis & Elicitation", topics: ["Elicitation Techniques", "Requirements Documentation", "Requirements Validation"] },
      { title: "Traceability & Evaluation", topics: ["Requirements Traceability", "Solution Evaluation", "Exam Preparation"] },
    ],
    prerequisites: [
      "Secondary degree with 7,500 hours of BA experience",
      "Or 4-year degree with 4,500 hours of BA experience",
      "35 contact hours of BA education",
    ],
    contactHours: "24",
    rating: "4.6",
    reviewCount: "1,120",
  },
  "PMI-PgMP": {
    subtitle: "Lead Complex Programs with the Elite Program Management Professional Certification",
    heroHighlights: [
      "32 contact hours of program management training",
      "Strategic alignment and benefits realization",
      "Governance and stakeholder management",
      "Expert guidance on PgMP application process",
    ],
    secretSauce: [
      { title: "Elite PM Credential", icon: "award" },
      { title: "Strategic Alignment Focus", icon: "target" },
      { title: "Panel Review Preparation", icon: "users" },
      { title: "Expert Mentorship", icon: "shield-check" },
    ],
    courseHighlights: [
      { text: "32 Contact Hours of Program Management Training", bold: "32 Contact Hours" },
      { text: "Strategic Program Alignment & Governance", bold: "Strategic Alignment" },
      { text: "Benefits Realization Management", bold: "Benefits Realization" },
      { text: "PgMP Application & Panel Review Prep", bold: "Panel Review Prep" },
    ],
    aboutCourse: "The PgMP® certification is among the most prestigious PMI credentials. It validates your competency in managing multiple related projects aligned with organizational strategy.",
    benefits: [
      "Elite Credential — Top 1% of project management professionals",
      "Executive Recognition — Validates strategic program leadership",
      "Salary Premium — PgMP holders earn significantly more",
      "Career Acceleration — Fast-track to senior leadership roles",
    ],
    demand: {
      jobOpenings: "Program management roles in high demand",
      roles: [
        { title: "Program Manager", salaryMin: "$120K", salaryAvg: "$155K", salaryMax: "$200K" },
        { title: "Program Director", salaryMin: "$150K", salaryAvg: "$185K", salaryMax: "$240K" },
      ],
      hiringCompanies: ["Amazon", "Microsoft", "Google", "Deloitte"],
      growthPercent: "20%",
      growthDescription: "growth in program management roles by 2028",
    },
    curriculum: [
      { title: "Program Strategy Alignment", topics: ["Strategic Planning", "Program Roadmap", "Benefits Identification"] },
      { title: "Program Benefits Management", topics: ["Benefits Analysis", "Benefits Delivery", "Benefits Transition & Sustainment"] },
      { title: "Program Stakeholder Engagement", topics: ["Stakeholder Identification", "Stakeholder Engagement Planning", "Communication Management"] },
      { title: "Program Governance & Lifecycle", topics: ["Governance Framework", "Program Lifecycle Management", "Panel Review Preparation"] },
    ],
    prerequisites: [
      "4-year degree with 6,000 hours of project management experience",
      "Plus 6,000 hours of program management experience",
      "PMP or PfMP certification recommended",
    ],
    contactHours: "32",
    rating: "4.8",
    reviewCount: "650",
  },
};

// CompTIA course details
const comptiaDefaults = {
  secretSauce: [
    { title: "Hands-On Virtual Labs", icon: "monitor" },
    { title: "CompTIA Approved Materials", icon: "book-open" },
    { title: "Performance-Based Questions", icon: "code" },
    { title: "Exam Voucher Available", icon: "ticket" },
  ],
};

const comptiaDetails: Record<string, Partial<Course>> = {
  "COMP-SEC+": {
    subtitle: "Master Cybersecurity Fundamentals and Earn the Industry's Most Trusted Security Credential",
    heroHighlights: [
      "40 hours of live instructor-led cybersecurity training",
      "Hands-on virtual labs for real-world experience",
      "Performance-based question (PBQ) preparation",
      "CompTIA-approved courseware and practice exams",
    ],
    courseHighlights: [
      { text: "40 Hours of Live, Instructor-Led Training", bold: "40 Hours" },
      { text: "Hands-On Virtual Labs & Simulations", bold: "Virtual Labs" },
      { text: "Performance-Based Question Practice", bold: "PBQ Practice" },
      { text: "CompTIA Approved Study Materials", bold: "Approved Materials" },
    ],
    aboutCourse: "CompTIA Security+ is the foundational cybersecurity certification for IT professionals. SY0-701 covers the latest in threat management, cryptography, identity management, and security infrastructure.",
    benefits: [
      "DoD 8570 Compliant — Required for many government IT positions",
      "Industry Standard — Most widely held cybersecurity certification",
      "Career Launcher — Gateway to cybersecurity career path",
      "Vendor Neutral — Skills applicable across all platforms",
    ],
    demand: {
      jobOpenings: "3.5M+ Cybersecurity job openings globally",
      roles: [
        { title: "Security Analyst", salaryMin: "$65K", salaryAvg: "$85K", salaryMax: "$110K" },
        { title: "Security Engineer", salaryMin: "$85K", salaryAvg: "$110K", salaryMax: "$145K" },
      ],
      hiringCompanies: ["Cisco", "IBM", "Lockheed Martin", "Booz Allen"],
      growthPercent: "35%",
      growthDescription: "growth in cybersecurity roles by 2031",
    },
    curriculum: [
      { title: "Threats, Attacks & Vulnerabilities", topics: ["Social Engineering Attacks", "Application Attacks", "Network Attacks", "Threat Intelligence"] },
      { title: "Architecture & Design", topics: ["Enterprise Security Concepts", "Virtualization & Cloud Security", "Secure Application Development", "Authentication & Authorization"] },
      { title: "Implementation", topics: ["Secure Protocols", "Host & Application Security", "Network Security", "Mobile Security"] },
      { title: "Operations & Incident Response", topics: ["Security Tools & Techniques", "Incident Response Procedures", "Digital Forensics", "Mitigation Techniques"] },
      { title: "Governance, Risk & Compliance", topics: ["Security Policies", "Risk Management", "Data Privacy", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA Network+ recommended (not required)", "2+ years in IT with security focus", "Basic understanding of networking concepts"],
    contactHours: "40",
    rating: "4.8",
    reviewCount: "5,200",
  },
  "COMP-NET+": {
    subtitle: "Build Your Networking Foundation with CompTIA's Vendor-Neutral Network Certification",
    heroHighlights: [
      "40 hours of comprehensive networking training",
      "Hands-on labs covering real network scenarios",
      "Troubleshooting and network security skills",
      "Full exam preparation with practice tests",
    ],
    courseHighlights: [
      { text: "40 Hours of Live Networking Training", bold: "40 Hours" },
      { text: "Hands-On Network Configuration Labs", bold: "Network Labs" },
      { text: "Troubleshooting & Diagnostics Practice", bold: "Troubleshooting" },
      { text: "Complete N10-009 Exam Prep", bold: "Exam Prep" },
    ],
    aboutCourse: "CompTIA Network+ validates the essential networking skills needed to design, configure, manage, and troubleshoot any wired and wireless network.",
    benefits: [
      "Essential Foundation — Core networking credential for IT professionals",
      "Vendor Neutral — Skills applicable to any network environment",
      "Career Pathway — Gateway to advanced networking & security certs",
      "Industry Demand — Networking skills needed in every organization",
    ],
    demand: {
      jobOpenings: "Network-related job openings continue to grow",
      roles: [
        { title: "Network Administrator", salaryMin: "$55K", salaryAvg: "$72K", salaryMax: "$95K" },
        { title: "Network Engineer", salaryMin: "$70K", salaryAvg: "$90K", salaryMax: "$120K" },
      ],
      hiringCompanies: ["Cisco", "AT&T", "Verizon", "Comcast"],
      growthPercent: "6%",
      growthDescription: "steady growth in networking roles",
    },
    curriculum: [
      { title: "Networking Concepts", topics: ["OSI Model", "Network Topologies", "Cloud & Virtualization Concepts"] },
      { title: "Network Implementation", topics: ["Routing & Switching", "Wireless Networks", "Network Configuration"] },
      { title: "Network Operations", topics: ["Monitoring Tools", "Network Documentation", "Performance Optimization"] },
      { title: "Network Security & Troubleshooting", topics: ["Security Concepts", "Network Hardening", "Troubleshooting Methodology", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA A+ recommended", "Basic understanding of computer hardware", "9-12 months networking experience recommended"],
    contactHours: "40",
    rating: "4.7",
    reviewCount: "3,400",
  },
  "COMP-A+": {
    subtitle: "Start Your IT Career with the Industry's Most Recognized Entry-Level Certification",
    heroHighlights: [
      "40 hours covering both Core 1 (220-1101) and Core 2 (220-1102)",
      "Hands-on hardware and software troubleshooting labs",
      "Mobile device, virtualization, and cloud fundamentals",
      "Complete exam preparation for both exams",
    ],
    courseHighlights: [
      { text: "40 Hours Covering Both Core 1 & Core 2 Exams", bold: "Both Exams" },
      { text: "Hardware & Software Troubleshooting Labs", bold: "Troubleshooting Labs" },
      { text: "Mobile, Cloud & Virtualization Coverage", bold: "Modern Technologies" },
      { text: "Dual Exam Preparation Package", bold: "Dual Exam Prep" },
    ],
    aboutCourse: "CompTIA A+ is the industry standard for launching IT careers. It covers essential IT skills for support roles including hardware, networking, mobile devices, operating systems, and security.",
    benefits: [
      "#1 IT Entry Certification — Most requested by employers",
      "Two-Exam Credential — Comprehensive IT skill validation",
      "Career Launcher — Gateway to all IT career paths",
      "Vendor Neutral — Work with any technology stack",
    ],
    demand: {
      jobOpenings: "IT support roles consistently in demand",
      roles: [
        { title: "Help Desk Technician", salaryMin: "$35K", salaryAvg: "$48K", salaryMax: "$62K" },
        { title: "IT Support Specialist", salaryMin: "$42K", salaryAvg: "$55K", salaryMax: "$72K" },
      ],
      hiringCompanies: ["Dell", "HP", "Apple", "Best Buy"],
      growthPercent: "6%",
      growthDescription: "steady growth in IT support roles",
    },
    curriculum: [
      { title: "Core 1: Mobile Devices & Networking", topics: ["Laptop Hardware", "Mobile Devices", "Networking Fundamentals", "Network Configuration"] },
      { title: "Core 1: Hardware & Virtualization", topics: ["Computer Components", "Printers", "Cloud Computing", "Virtualization"] },
      { title: "Core 2: Operating Systems", topics: ["Windows", "macOS", "Linux", "Mobile OS"] },
      { title: "Core 2: Security & Troubleshooting", topics: ["Security Best Practices", "Malware Removal", "Operational Procedures", "Exam Preparation"] },
    ],
    prerequisites: ["No prior experience required", "Basic computer literacy helpful", "Interest in IT career"],
    contactHours: "40",
    rating: "4.7",
    reviewCount: "2,890",
  },
  "COMP-CYSA+": {
    subtitle: "Advance Your Cybersecurity Career with Threat Detection and Incident Response Skills",
    heroHighlights: [
      "40 hours of advanced cybersecurity analyst training",
      "SIEM tools and threat detection techniques",
      "Incident response and vulnerability management",
      "Performance-based exam preparation",
    ],
    courseHighlights: [
      { text: "40 Hours of Advanced Security Analysis Training", bold: "40 Hours" },
      { text: "SIEM Tools & Threat Intelligence", bold: "SIEM Tools" },
      { text: "Incident Response Procedures", bold: "Incident Response" },
      { text: "Vulnerability Management & Assessment", bold: "Vulnerability Management" },
    ],
    aboutCourse: "CompTIA CySA+ validates intermediate-level cybersecurity analysts' ability to detect, prevent, and respond to cybersecurity threats through continuous security monitoring.",
    benefits: [
      "Advanced Security Skills — Beyond foundational Security+",
      "SOC Ready — Prepared for Security Operations Center roles",
      "DoD Approved — Meets DoD 8570 requirements",
      "Career Advancement — Path to senior security roles",
    ],
    demand: {
      jobOpenings: "3.5M+ Cybersecurity job openings globally",
      roles: [
        { title: "SOC Analyst", salaryMin: "$65K", salaryAvg: "$82K", salaryMax: "$105K" },
        { title: "Threat Analyst", salaryMin: "$80K", salaryAvg: "$100K", salaryMax: "$130K" },
      ],
      hiringCompanies: ["CrowdStrike", "Palo Alto Networks", "Mandiant", "FireEye"],
      growthPercent: "35%",
      growthDescription: "growth in cybersecurity analyst roles by 2031",
    },
    curriculum: [
      { title: "Security Operations", topics: ["Security Monitoring", "Log Analysis", "SIEM Configuration", "Threat Intelligence"] },
      { title: "Vulnerability Management", topics: ["Vulnerability Scanning", "Assessment Tools", "Remediation Planning"] },
      { title: "Incident Response", topics: ["IR Process", "Forensic Concepts", "Containment & Eradication"] },
      { title: "Compliance & Assessment", topics: ["Security Frameworks", "Data Privacy", "Risk Assessment", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA Security+ or equivalent knowledge", "3-4 years of hands-on security experience", "Understanding of networking concepts"],
    contactHours: "40",
    rating: "4.7",
    reviewCount: "1,650",
  },
  "COMP-PEN+": {
    subtitle: "Master Penetration Testing and Vulnerability Assessment with CompTIA PenTest+",
    heroHighlights: [
      "40 hours of hands-on penetration testing training",
      "Real-world pen testing tools and techniques",
      "Vulnerability assessment and management",
      "Report writing and communication skills",
    ],
    courseHighlights: [
      { text: "40 Hours of Hands-On Pen Testing Training", bold: "40 Hours" },
      { text: "Real-World Penetration Testing Tools", bold: "Testing Tools" },
      { text: "Vulnerability Assessment Methodology", bold: "Assessment Methodology" },
      { text: "Professional Report Writing", bold: "Report Writing" },
    ],
    aboutCourse: "CompTIA PenTest+ validates intermediate penetration testing skills including vulnerability assessment, planning, scoping, managing weaknesses, and communicating results.",
    benefits: [
      "Offensive Security Skills — Learn to think like an attacker",
      "In-Demand Role — Pen testers are highly sought after",
      "Compliance Required — Many organizations mandate pen testing",
      "Premium Salary — Pen testers command top cybersecurity salaries",
    ],
    demand: {
      jobOpenings: "Penetration testing demand growing rapidly",
      roles: [
        { title: "Penetration Tester", salaryMin: "$80K", salaryAvg: "$105K", salaryMax: "$140K" },
        { title: "Security Consultant", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$160K" },
      ],
      hiringCompanies: ["NCC Group", "Rapid7", "Synack", "HackerOne"],
      growthPercent: "35%",
      growthDescription: "growth in offensive security roles by 2031",
    },
    curriculum: [
      { title: "Planning & Scoping", topics: ["Engagement Planning", "Rules of Engagement", "Scoping & Authorization"] },
      { title: "Information Gathering", topics: ["Passive Reconnaissance", "Active Reconnaissance", "Vulnerability Scanning"] },
      { title: "Attacks & Exploits", topics: ["Network Attacks", "Application Attacks", "Social Engineering", "Post-Exploitation"] },
      { title: "Reporting & Communication", topics: ["Report Writing", "Remediation Recommendations", "Communication Skills", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA Security+ or equivalent", "3-4 years of security experience", "Familiarity with pen testing concepts"],
    contactHours: "40",
    rating: "4.6",
    reviewCount: "1,340",
  },
  "COMP-CLD+": {
    subtitle: "Validate Your Cloud Infrastructure Skills with CompTIA Cloud+",
    heroHighlights: [
      "40 hours of cloud infrastructure training",
      "Multi-cloud deployment and management",
      "Cloud security and high availability",
      "Hands-on labs with real cloud scenarios",
    ],
    courseHighlights: [
      { text: "40 Hours of Cloud Infrastructure Training", bold: "40 Hours" },
      { text: "Multi-Cloud Deployment Strategies", bold: "Multi-Cloud" },
      { text: "Cloud Security & Compliance", bold: "Cloud Security" },
      { text: "High Availability & Disaster Recovery", bold: "HA & DR" },
    ],
    aboutCourse: "CompTIA Cloud+ validates the skills needed to maintain and optimize cloud infrastructure services. It covers deployment, security, troubleshooting, and cloud operations.",
    benefits: [
      "Vendor Neutral Cloud Skills — Apply to AWS, Azure, GCP",
      "Infrastructure Focus — Deep cloud operations knowledge",
      "Career Growth — Cloud skills in high demand",
      "Complement Other Certs — Pairs well with vendor-specific certs",
    ],
    demand: {
      jobOpenings: "Cloud computing roles growing 22% annually",
      roles: [
        { title: "Cloud Administrator", salaryMin: "$70K", salaryAvg: "$90K", salaryMax: "$115K" },
        { title: "Cloud Engineer", salaryMin: "$90K", salaryAvg: "$115K", salaryMax: "$145K" },
      ],
      hiringCompanies: ["Rackspace", "VMware", "IBM", "Oracle"],
      growthPercent: "22%",
      growthDescription: "annual growth in cloud computing roles",
    },
    curriculum: [
      { title: "Cloud Architecture & Design", topics: ["Cloud Concepts", "Deployment Models", "Service Models"] },
      { title: "Cloud Security", topics: ["Access Controls", "Data Security", "Compliance Requirements"] },
      { title: "Cloud Deployment & Migration", topics: ["Migration Strategies", "Deployment Techniques", "Testing"] },
      { title: "Operations & Troubleshooting", topics: ["Monitoring", "Performance Optimization", "Troubleshooting", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA Network+ or equivalent", "2-3 years IT experience", "Cloud fundamentals knowledge"],
    contactHours: "40",
    rating: "4.6",
    reviewCount: "1,080",
  },
  "COMP-SECX": {
    subtitle: "Achieve the Pinnacle of CompTIA Security Certifications with SecurityX",
    heroHighlights: [
      "40 hours of expert-level security training",
      "Enterprise security architecture",
      "Advanced threat management and risk analysis",
      "Governance, compliance, and security operations",
    ],
    courseHighlights: [
      { text: "40 Hours of Expert Security Training", bold: "40 Hours" },
      { text: "Enterprise Security Architecture", bold: "Enterprise Architecture" },
      { text: "Advanced Threat Management", bold: "Threat Management" },
      { text: "Governance & Risk Architecture", bold: "Governance & Risk" },
    ],
    aboutCourse: "CompTIA SecurityX (formerly CASP+) is the pinnacle of CompTIA security certifications. It validates advanced-level security architecture and engineering skills for enterprise environments.",
    benefits: [
      "Expert-Level Credential — CompTIA's highest security certification",
      "Enterprise Focus — Complex security solution design",
      "DoD Approved — Meets IAM/IAT Level III requirements",
      "Career Peak — Validates senior security expertise",
    ],
    demand: {
      jobOpenings: "Senior security architect roles in high demand",
      roles: [
        { title: "Security Architect", salaryMin: "$120K", salaryAvg: "$155K", salaryMax: "$200K" },
        { title: "CISO", salaryMin: "$170K", salaryAvg: "$220K", salaryMax: "$300K" },
      ],
      hiringCompanies: ["Deloitte", "KPMG", "PwC", "EY"],
      growthPercent: "35%",
      growthDescription: "growth in senior security roles by 2031",
    },
    curriculum: [
      { title: "Security Architecture", topics: ["Enterprise Security Requirements", "Security Technology Integration", "Research & Analysis"] },
      { title: "Security Operations", topics: ["Security Control Assessment", "Incident Management", "Digital Forensics"] },
      { title: "Governance, Risk & Compliance", topics: ["Risk Management Frameworks", "Security Policies", "Compliance Controls"] },
      { title: "Security Engineering", topics: ["Cryptographic Techniques", "Security Solutions Integration", "Enterprise Resilience", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA Security+ or CySA+", "10+ years of IT experience including 5 in security", "Experience with enterprise security architecture"],
    contactHours: "40",
    rating: "4.7",
    reviewCount: "720",
  },
  "COMP-SRV+": {
    subtitle: "Master Server Administration and Infrastructure Management with CompTIA Server+",
    heroHighlights: [
      "40 hours of server administration training",
      "Hardware and software troubleshooting",
      "Server security and disaster recovery",
      "Virtualization and storage technologies",
    ],
    courseHighlights: [
      { text: "40 Hours of Server Administration Training", bold: "40 Hours" },
      { text: "Hardware & Software Management", bold: "Hardware & Software" },
      { text: "Virtualization & Storage", bold: "Virtualization" },
      { text: "Server Security & DR", bold: "Security & DR" },
    ],
    aboutCourse: "CompTIA Server+ validates the skills required to manage server hardware and software technologies in data center environments.",
    benefits: [
      "Data Center Ready — Validated server management skills",
      "Vendor Neutral — Works with any server platform",
      "Career Foundation — Essential for infrastructure roles",
      "DoD Recognized — Meets compliance requirements",
    ],
    demand: {
      jobOpenings: "Server administration roles remain essential",
      roles: [
        { title: "Server Administrator", salaryMin: "$55K", salaryAvg: "$72K", salaryMax: "$95K" },
        { title: "Systems Administrator", salaryMin: "$60K", salaryAvg: "$80K", salaryMax: "$105K" },
      ],
      hiringCompanies: ["Dell", "HPE", "IBM", "Lenovo"],
      growthPercent: "4%",
      growthDescription: "steady demand for server administration professionals",
    },
    curriculum: [
      { title: "Server Architecture", topics: ["Server Hardware", "Server Form Factors", "Server Components"] },
      { title: "Server Administration", topics: ["OS Installation", "Server Configuration", "Asset Management"] },
      { title: "Security & Networking", topics: ["Physical Security", "Data Security", "Network Configuration"] },
      { title: "Storage & Troubleshooting", topics: ["Storage Technologies", "Disaster Recovery", "Troubleshooting Methodology", "Exam Preparation"] },
    ],
    prerequisites: ["CompTIA A+ recommended", "18-24 months server administration experience", "Basic understanding of IT concepts"],
    contactHours: "40",
    rating: "4.5",
    reviewCount: "850",
  },
};

// Azure course details
const azureDetails: Record<string, Partial<Course>> = {
  "AZ-900": {
    subtitle: "Start Your Cloud Journey with Microsoft Azure Fundamentals Certification",
    heroHighlights: [
      "8 hours of focused Azure fundamentals training",
      "Cloud concepts, Azure services, and pricing models",
      "Hands-on demos and interactive exercises",
      "Complete AZ-900 exam preparation",
    ],
    secretSauce: [
      { title: "Microsoft Official Courseware", icon: "book-open" },
      { title: "Hands-On Azure Portal Labs", icon: "monitor" },
      { title: "Free Practice Exams", icon: "check-circle" },
      { title: "Exam Voucher Available", icon: "ticket" },
    ],
    courseHighlights: [
      { text: "8 Hours of Azure Fundamentals Training", bold: "8 Hours" },
      { text: "Cloud Concepts & Azure Service Overview", bold: "Cloud Concepts" },
      { text: "Azure Portal Hands-On Demos", bold: "Hands-On Demos" },
      { text: "AZ-900 Exam Preparation Package", bold: "Exam Prep" },
    ],
    aboutCourse: "Microsoft Azure Fundamentals AZ-900 is the entry point for Azure cloud certifications. It covers cloud concepts, Azure services, security, privacy, pricing, and support.",
    benefits: [
      "Cloud Foundation — Understand core cloud concepts",
      "Azure Ecosystem — Explore 200+ Azure services",
      "Career Entry — Gateway to Azure certification path",
      "Free Tier Access — Practice with Azure free account",
    ],
    demand: {
      jobOpenings: "Cloud computing market growing 15% annually",
      roles: [
        { title: "Cloud Support Engineer", salaryMin: "$55K", salaryAvg: "$72K", salaryMax: "$92K" },
        { title: "Junior Cloud Engineer", salaryMin: "$65K", salaryAvg: "$82K", salaryMax: "$100K" },
      ],
      hiringCompanies: ["Microsoft", "Accenture", "Infosys", "TCS"],
      growthPercent: "15%",
      growthDescription: "annual growth in cloud computing market",
    },
    curriculum: [
      { title: "Cloud Concepts", topics: ["Cloud Computing Overview", "IaaS, PaaS, SaaS", "Public, Private & Hybrid Cloud"] },
      { title: "Azure Architecture", topics: ["Azure Regions & Availability Zones", "Resource Groups", "Azure Resource Manager"] },
      { title: "Azure Services", topics: ["Compute Services", "Networking", "Storage Solutions", "Databases"] },
      { title: "Security, Privacy & Pricing", topics: ["Azure Security Center", "Identity & Governance", "Azure Pricing", "Exam Preparation"] },
    ],
    prerequisites: ["No prior cloud or Azure experience required", "Basic IT knowledge helpful", "Interest in cloud computing"],
    contactHours: "8",
    rating: "4.8",
    reviewCount: "6,200",
  },
  "AZ-104": {
    subtitle: "Become a Certified Azure Administrator and Manage Cloud Infrastructure at Scale",
    heroHighlights: [
      "32 hours of Azure administration training",
      "Identity, governance, storage, and compute management",
      "Virtual networking and monitoring",
      "Hands-on labs and exam preparation",
    ],
    secretSauce: [
      { title: "Microsoft Official Courseware", icon: "book-open" },
      { title: "Azure Sandbox Labs", icon: "monitor" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Exam Voucher Available", icon: "ticket" },
    ],
    courseHighlights: [
      { text: "32 Hours of Azure Administration Training", bold: "32 Hours" },
      { text: "Identity & Governance Management", bold: "Identity & Governance" },
      { text: "Azure Virtual Networking", bold: "Virtual Networking" },
      { text: "Storage & Compute Management", bold: "Storage & Compute" },
    ],
    aboutCourse: "AZ-104 validates your skills in implementing, managing, and monitoring an organization's Azure environment. Covers identity, governance, storage, compute, and virtual networking.",
    benefits: [
      "In-Demand Skill — Azure admins needed in every Azure organization",
      "Hands-On Expertise — Practical cloud management skills",
      "Career Growth — Path to Solutions Architect",
      "Salary Boost — Azure certified admins earn 20% more",
    ],
    demand: {
      jobOpenings: "Azure administrator roles growing rapidly",
      roles: [
        { title: "Azure Administrator", salaryMin: "$80K", salaryAvg: "$105K", salaryMax: "$135K" },
        { title: "Cloud Engineer", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$155K" },
      ],
      hiringCompanies: ["Microsoft", "Deloitte", "Wipro", "HCL"],
      growthPercent: "22%",
      growthDescription: "growth in Azure administration roles",
    },
    curriculum: [
      { title: "Azure Identity & Governance", topics: ["Azure AD", "RBAC", "Subscriptions & Governance", "Azure Policy"] },
      { title: "Storage & Compute", topics: ["Azure Storage", "Azure VMs", "App Services", "Container Instances"] },
      { title: "Virtual Networking", topics: ["Virtual Networks", "NSGs", "Azure DNS", "VPN & ExpressRoute"] },
      { title: "Monitoring & Backup", topics: ["Azure Monitor", "Log Analytics", "Azure Backup", "Exam Preparation"] },
    ],
    prerequisites: ["AZ-900 or equivalent Azure knowledge", "6+ months Azure administration experience", "Understanding of networking and virtualization"],
    contactHours: "32",
    rating: "4.8",
    reviewCount: "4,500",
  },
  "AZ-305": {
    subtitle: "Design Enterprise Azure Solutions as a Certified Solutions Architect Expert",
    heroHighlights: [
      "32 hours of Azure architecture training",
      "Design identity, governance, and monitoring solutions",
      "Data storage and business continuity patterns",
      "Migration and infrastructure design",
    ],
    secretSauce: [
      { title: "Architecture Design Labs", icon: "layout" },
      { title: "Real-World Case Studies", icon: "book-open" },
      { title: "Expert Architect Mentors", icon: "users" },
      { title: "Practice Exams", icon: "check-circle" },
    ],
    courseHighlights: [
      { text: "32 Hours of Architecture Design Training", bold: "32 Hours" },
      { text: "Enterprise Solution Design Patterns", bold: "Solution Design" },
      { text: "Migration & Governance Architecture", bold: "Migration Planning" },
      { text: "Business Continuity & Data Solutions", bold: "Business Continuity" },
    ],
    aboutCourse: "AZ-305 validates expert-level Azure solution design skills. This certification is for experienced cloud professionals who design infrastructure solutions for Azure.",
    benefits: [
      "Expert-Level Credential — Azure's top architecture certification",
      "Strategic Role — Design enterprise cloud solutions",
      "Premium Salary — Architects earn top cloud salaries",
      "Career Peak — CTO/CIO pathway",
    ],
    demand: {
      jobOpenings: "Solutions architect roles in high demand",
      roles: [
        { title: "Solutions Architect", salaryMin: "$130K", salaryAvg: "$165K", salaryMax: "$210K" },
        { title: "Cloud Architect", salaryMin: "$140K", salaryAvg: "$175K", salaryMax: "$225K" },
      ],
      hiringCompanies: ["Microsoft", "Amazon", "Google", "Accenture"],
      growthPercent: "25%",
      growthDescription: "growth in cloud architecture roles",
    },
    curriculum: [
      { title: "Identity, Governance & Monitoring", topics: ["Azure AD Design", "Governance Strategy", "Monitoring Solutions"] },
      { title: "Data Storage Solutions", topics: ["Relational Data Solutions", "Non-Relational Data", "Data Integration"] },
      { title: "Business Continuity", topics: ["Backup Solutions", "High Availability", "Disaster Recovery"] },
      { title: "Infrastructure Solutions", topics: ["Compute Solutions", "Application Architecture", "Migration Strategy", "Exam Preparation"] },
    ],
    prerequisites: ["AZ-104 certification", "Experience with Azure administration", "Knowledge of networking and virtualization"],
    contactHours: "32",
    rating: "4.7",
    reviewCount: "2,300",
  },
  "AZ-500": {
    subtitle: "Secure Azure Environments with Microsoft Azure Security Technologies Certification",
    heroHighlights: [
      "32 hours of Azure security training",
      "Identity protection and platform security",
      "Data and application security",
      "Security operations management",
    ],
    secretSauce: [
      { title: "Security Labs", icon: "shield-check" },
      { title: "Threat Simulation", icon: "alert-triangle" },
      { title: "Microsoft Courseware", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
    ],
    courseHighlights: [
      { text: "32 Hours of Azure Security Training", bold: "32 Hours" },
      { text: "Identity Protection & Access Management", bold: "Identity Protection" },
      { text: "Network & Platform Security", bold: "Platform Security" },
      { text: "Security Operations & Monitoring", bold: "Security Operations" },
    ],
    aboutCourse: "AZ-500 validates your ability to implement security controls, maintain security posture, manage identity and access, and protect data, applications, and networks in Azure.",
    benefits: [
      "Cloud Security Expert — Specialized Azure security skills",
      "High Demand — Cloud security professionals desperately needed",
      "Premium Salary — Security roles command top pay",
      "Compliance Ready — Meet regulatory requirements",
    ],
    demand: {
      jobOpenings: "Cloud security roles growing 30%+ annually",
      roles: [
        { title: "Cloud Security Engineer", salaryMin: "$100K", salaryAvg: "$130K", salaryMax: "$170K" },
        { title: "Azure Security Architect", salaryMin: "$130K", salaryAvg: "$165K", salaryMax: "$210K" },
      ],
      hiringCompanies: ["Microsoft", "Palo Alto Networks", "CrowdStrike", "Deloitte"],
      growthPercent: "30%",
      growthDescription: "growth in cloud security roles annually",
    },
    curriculum: [
      { title: "Identity & Access", topics: ["Azure AD Security", "Conditional Access", "Identity Protection", "PIM"] },
      { title: "Platform Protection", topics: ["Network Security", "Host Security", "Container Security"] },
      { title: "Data & Application Security", topics: ["Key Vault", "App Security", "Storage Security"] },
      { title: "Security Operations", topics: ["Azure Sentinel", "Security Center", "Threat Protection", "Exam Preparation"] },
    ],
    prerequisites: ["AZ-104 or equivalent Azure experience", "Understanding of security concepts", "Experience with Azure networking"],
    contactHours: "32",
    rating: "4.7",
    reviewCount: "1,800",
  },
  "AZ-204": {
    subtitle: "Build Cloud Applications as a Microsoft Certified Azure Developer Associate",
    heroHighlights: [
      "40 hours of Azure development training",
      "Azure Functions, App Services, and Cosmos DB",
      "Containerization and API management",
      "Complete AZ-204 exam preparation",
    ],
    secretSauce: [
      { title: "Coding Labs", icon: "code" },
      { title: "Azure SDK Practice", icon: "terminal" },
      { title: "Microsoft Courseware", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
    ],
    courseHighlights: [
      { text: "40 Hours of Azure Development Training", bold: "40 Hours" },
      { text: "Azure Functions & App Services", bold: "Serverless Development" },
      { text: "Cosmos DB & Storage Solutions", bold: "Data Solutions" },
      { text: "Containerization & CI/CD", bold: "DevOps Integration" },
    ],
    aboutCourse: "AZ-204 validates your skills in designing, building, testing, and maintaining Azure cloud applications and services.",
    benefits: [
      "Developer Credential — Validate Azure development skills",
      "Cloud-Native Skills — Build scalable cloud applications",
      "Career Growth — Azure developers in high demand",
      "Modern Stack — Serverless, containers, microservices",
    ],
    demand: {
      jobOpenings: "Cloud developer roles growing 20%+ annually",
      roles: [
        { title: "Azure Developer", salaryMin: "$85K", salaryAvg: "$110K", salaryMax: "$145K" },
        { title: "Cloud Developer", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$155K" },
      ],
      hiringCompanies: ["Microsoft", "Infosys", "TCS", "Cognizant"],
      growthPercent: "20%",
      growthDescription: "growth in cloud developer roles",
    },
    curriculum: [
      { title: "Azure Compute Solutions", topics: ["Azure App Service", "Azure Functions", "Container Instances", "Container Apps"] },
      { title: "Azure Storage & Cosmos DB", topics: ["Blob Storage", "Cosmos DB", "Azure SQL", "Caching Solutions"] },
      { title: "Azure Security & Monitoring", topics: ["Azure AD Authentication", "Key Vault", "Application Insights"] },
      { title: "Integration & Messaging", topics: ["API Management", "Event Grid", "Service Bus", "Exam Preparation"] },
    ],
    prerequisites: ["1-2 years Azure development experience", "Proficiency in Azure SDKs", "Experience with C# or Python"],
    contactHours: "40",
    rating: "4.6",
    reviewCount: "1,500",
  },
  "AI-900": {
    subtitle: "Explore AI and Machine Learning Concepts with Azure AI Fundamentals",
    heroHighlights: [
      "8 hours of AI fundamentals training",
      "Machine learning, computer vision, and NLP",
      "Azure AI services overview",
      "Complete AI-900 exam preparation",
    ],
    secretSauce: [
      { title: "AI Demos & Labs", icon: "brain" },
      { title: "Microsoft Courseware", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "AI Ethics Coverage", icon: "shield-check" },
    ],
    courseHighlights: [
      { text: "8 Hours of AI Fundamentals Training", bold: "8 Hours" },
      { text: "Machine Learning Concepts & Workloads", bold: "Machine Learning" },
      { text: "Computer Vision & NLP Services", bold: "CV & NLP" },
      { text: "Generative AI on Azure", bold: "Generative AI" },
    ],
    aboutCourse: "AI-900 covers foundational AI and machine learning concepts and their implementation in Azure. Ideal for technical and non-technical professionals wanting to understand AI capabilities.",
    benefits: [
      "AI Literacy — Understand AI and ML fundamentals",
      "Azure AI Services — Explore Cognitive Services and more",
      "Career Relevance — AI skills increasingly essential",
      "No Coding Required — Conceptual understanding focus",
    ],
    demand: {
      jobOpenings: "AI/ML roles growing 40%+ annually",
      roles: [
        { title: "AI Specialist", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$160K" },
        { title: "ML Engineer", salaryMin: "$110K", salaryAvg: "$145K", salaryMax: "$190K" },
      ],
      hiringCompanies: ["Microsoft", "Google", "Amazon", "Meta"],
      growthPercent: "40%",
      growthDescription: "annual growth in AI/ML roles",
    },
    curriculum: [
      { title: "AI Fundamentals", topics: ["AI Workloads", "Machine Learning Principles", "Responsible AI"] },
      { title: "Machine Learning on Azure", topics: ["Azure Machine Learning", "Automated ML", "Designer"] },
      { title: "Computer Vision & NLP", topics: ["Computer Vision Service", "Custom Vision", "Language Understanding", "Text Analytics"] },
      { title: "Generative AI", topics: ["Azure OpenAI Service", "Generative AI Concepts", "Responsible Generative AI", "Exam Preparation"] },
    ],
    prerequisites: ["No prior AI or programming experience required", "Basic understanding of cloud concepts helpful"],
    contactHours: "8",
    rating: "4.7",
    reviewCount: "2,100",
  },
  "DP-900": {
    subtitle: "Understand Core Data Concepts and Azure Data Services with DP-900",
    heroHighlights: [
      "8 hours of data fundamentals training",
      "Relational and non-relational data concepts",
      "Azure data services overview",
      "Complete DP-900 exam preparation",
    ],
    secretSauce: [
      { title: "Data Labs", icon: "database" },
      { title: "Microsoft Courseware", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Hands-On Demos", icon: "monitor" },
    ],
    courseHighlights: [
      { text: "8 Hours of Data Fundamentals Training", bold: "8 Hours" },
      { text: "Relational & Non-Relational Data", bold: "Data Models" },
      { text: "Azure SQL & Cosmos DB Overview", bold: "Azure Databases" },
      { text: "Analytics & Data Visualization", bold: "Analytics" },
    ],
    aboutCourse: "DP-900 covers core data concepts and Azure data services. It's designed for technical and non-technical professionals looking to understand data fundamentals in the cloud.",
    benefits: [
      "Data Literacy — Core data concepts for everyone",
      "Azure Data Platform — Explore Azure data services",
      "Career Foundation — Gateway to data certifications",
      "Vendor Insight — Understand Microsoft's data ecosystem",
    ],
    demand: {
      jobOpenings: "Data roles growing 25%+ annually",
      roles: [
        { title: "Data Analyst", salaryMin: "$60K", salaryAvg: "$78K", salaryMax: "$100K" },
        { title: "Database Administrator", salaryMin: "$70K", salaryAvg: "$92K", salaryMax: "$120K" },
      ],
      hiringCompanies: ["Microsoft", "Oracle", "Snowflake", "Databricks"],
      growthPercent: "25%",
      growthDescription: "annual growth in data-related roles",
    },
    curriculum: [
      { title: "Core Data Concepts", topics: ["Data Types", "Data Storage", "Data Processing"] },
      { title: "Relational Data on Azure", topics: ["Relational Concepts", "Azure SQL", "Azure Database Services"] },
      { title: "Non-Relational Data", topics: ["NoSQL Concepts", "Azure Cosmos DB", "Azure Storage"] },
      { title: "Data Analytics", topics: ["Azure Synapse", "Power BI", "Real-Time Analytics", "Exam Preparation"] },
    ],
    prerequisites: ["No prior data or Azure experience required", "Basic IT knowledge helpful"],
    contactHours: "8",
    rating: "4.7",
    reviewCount: "1,800",
  },
  "MS-900": {
    subtitle: "Master Microsoft 365 Cloud Services with the MS-900 Fundamentals Certification",
    heroHighlights: [
      "8 hours of Microsoft 365 fundamentals training",
      "Cloud productivity, security, and compliance",
      "Microsoft 365 services and pricing models",
      "Complete MS-900 exam preparation",
    ],
    secretSauce: [
      { title: "M365 Admin Center Labs", icon: "settings" },
      { title: "Microsoft Courseware", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Licensing Deep Dive", icon: "file-text" },
    ],
    courseHighlights: [
      { text: "8 Hours of M365 Fundamentals Training", bold: "8 Hours" },
      { text: "Cloud Productivity & Collaboration", bold: "Productivity Tools" },
      { text: "Security, Compliance & Privacy", bold: "Security & Compliance" },
      { text: "Microsoft 365 Pricing & Support", bold: "Pricing & Licensing" },
    ],
    aboutCourse: "MS-900 validates your understanding of cloud concepts, core Microsoft 365 services, security, compliance, privacy, and Microsoft 365 pricing and support.",
    benefits: [
      "M365 Foundation — Understand the full Microsoft 365 ecosystem",
      "Business Context — Cloud productivity for organizations",
      "Career Entry — Gateway to M365 admin certifications",
      "Widely Used — M365 deployed in millions of organizations",
    ],
    demand: {
      jobOpenings: "Microsoft 365 admin roles consistently in demand",
      roles: [
        { title: "M365 Administrator", salaryMin: "$65K", salaryAvg: "$85K", salaryMax: "$110K" },
        { title: "IT Administrator", salaryMin: "$55K", salaryAvg: "$72K", salaryMax: "$95K" },
      ],
      hiringCompanies: ["Microsoft", "Avanade", "DXC Technology", "Capgemini"],
      growthPercent: "10%",
      growthDescription: "growth in Microsoft 365 administration roles",
    },
    curriculum: [
      { title: "Cloud Concepts", topics: ["Cloud Computing Models", "Public vs Private Cloud", "Microsoft Cloud Services"] },
      { title: "Core Microsoft 365 Services", topics: ["Productivity Solutions", "Collaboration Tools", "Endpoint Management"] },
      { title: "Security & Compliance", topics: ["Identity & Access Management", "Threat Protection", "Information Protection"] },
      { title: "Pricing & Support", topics: ["Licensing Models", "Microsoft 365 Plans", "Support Options", "Exam Preparation"] },
    ],
    prerequisites: ["No prior Microsoft 365 experience required", "Basic IT knowledge helpful"],
    contactHours: "8",
    rating: "4.6",
    reviewCount: "1,400",
  },
};

// AWS course details
const awsDetails: Record<string, Partial<Course>> = {
  "AWS-CCP": {
    subtitle: "Begin Your Cloud Journey with AWS Certified Cloud Practitioner",
    heroHighlights: [
      "8 hours of AWS cloud fundamentals training",
      "Core AWS services, architecture, and pricing",
      "Cloud value proposition and billing concepts",
      "Complete CLF-C02 exam preparation",
    ],
    secretSauce: [
      { title: "AWS Console Labs", icon: "monitor" },
      { title: "Official AWS Materials", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Free Tier Guidance", icon: "gift" },
    ],
    courseHighlights: [
      { text: "8 Hours of AWS Cloud Fundamentals Training", bold: "8 Hours" },
      { text: "Core AWS Services Overview", bold: "Core Services" },
      { text: "Architecture & Security Principles", bold: "Architecture" },
      { text: "Billing & Pricing Models", bold: "Billing & Pricing" },
    ],
    aboutCourse: "AWS Certified Cloud Practitioner is the entry-level AWS certification that validates foundational understanding of AWS Cloud concepts, services, pricing, and security.",
    benefits: [
      "AWS Foundation — Understand core AWS cloud concepts",
      "Most Popular — #1 entry-level cloud certification",
      "Career Gateway — Entry to AWS certification path",
      "Industry Standard — AWS is the leading cloud platform",
    ],
    demand: {
      jobOpenings: "AWS roles growing 22% annually",
      roles: [
        { title: "Cloud Support Associate", salaryMin: "$50K", salaryAvg: "$65K", salaryMax: "$85K" },
        { title: "Junior Cloud Engineer", salaryMin: "$65K", salaryAvg: "$82K", salaryMax: "$100K" },
      ],
      hiringCompanies: ["Amazon", "Netflix", "Airbnb", "Capital One"],
      growthPercent: "22%",
      growthDescription: "annual growth in AWS cloud roles",
    },
    curriculum: [
      { title: "Cloud Concepts", topics: ["Cloud Computing Overview", "AWS Global Infrastructure", "Cloud Architecture Principles"] },
      { title: "AWS Core Services", topics: ["EC2 & Compute", "S3 & Storage", "VPC & Networking", "RDS & Databases"] },
      { title: "Security & Compliance", topics: ["Shared Responsibility Model", "IAM", "AWS Security Services"] },
      { title: "Billing & Pricing", topics: ["Pricing Models", "AWS Free Tier", "Cost Management Tools", "Exam Preparation"] },
    ],
    prerequisites: ["No prior AWS or cloud experience required", "Basic IT knowledge helpful", "Interest in cloud computing"],
    contactHours: "8",
    rating: "4.8",
    reviewCount: "4,800",
  },
  "AWS-SAA": {
    subtitle: "Design Resilient Cloud Architectures as an AWS Certified Solutions Architect",
    heroHighlights: [
      "32 hours of AWS architecture training",
      "Design highly available, fault-tolerant systems",
      "Cost-optimized and secure architecture patterns",
      "Hands-on labs with real AWS services",
    ],
    secretSauce: [
      { title: "Architecture Labs", icon: "layout" },
      { title: "AWS Official Materials", icon: "book-open" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Well-Architected Review", icon: "shield-check" },
    ],
    courseHighlights: [
      { text: "32 Hours of AWS Architecture Training", bold: "32 Hours" },
      { text: "High Availability & Fault Tolerance Design", bold: "HA Design" },
      { text: "Cost Optimization Strategies", bold: "Cost Optimization" },
      { text: "Security & Compliance Architecture", bold: "Security Architecture" },
    ],
    aboutCourse: "AWS Solutions Architect Associate is the most sought-after cloud certification. It validates your ability to design distributed systems and applications on AWS.",
    benefits: [
      "Most In-Demand — #1 requested cloud certification by employers",
      "Architecture Skills — Design scalable cloud solutions",
      "High Salary — SA-certified professionals earn premium salaries",
      "AWS Leadership — Design on the world's largest cloud platform",
    ],
    demand: {
      jobOpenings: "Solutions architect roles growing 25%+ annually",
      roles: [
        { title: "Solutions Architect", salaryMin: "$110K", salaryAvg: "$142K", salaryMax: "$185K" },
        { title: "Cloud Architect", salaryMin: "$125K", salaryAvg: "$160K", salaryMax: "$210K" },
      ],
      hiringCompanies: ["Amazon", "Netflix", "Capital One", "Goldman Sachs"],
      growthPercent: "25%",
      growthDescription: "annual growth in solutions architect roles",
    },
    curriculum: [
      { title: "Design Resilient Architectures", topics: ["Multi-Tier Architecture", "High Availability", "Decoupling Mechanisms", "Fault Tolerance"] },
      { title: "Design High-Performing Architectures", topics: ["Elastic Compute", "Storage Solutions", "Database Solutions", "Caching Strategies"] },
      { title: "Design Secure Applications", topics: ["IAM & Federation", "Encryption", "VPC Design", "Security Best Practices"] },
      { title: "Design Cost-Optimized Architectures", topics: ["Cost Optimization", "Pricing Models", "Resource Right-Sizing", "Exam Preparation"] },
    ],
    prerequisites: ["AWS Cloud Practitioner or equivalent knowledge", "1+ year hands-on AWS experience", "Understanding of distributed systems"],
    contactHours: "32",
    rating: "4.8",
    reviewCount: "5,100",
  },
  "AWS-DVA": {
    subtitle: "Build Cloud-Native Applications as an AWS Certified Developer Associate",
    heroHighlights: [
      "24 hours of AWS development training",
      "Lambda, API Gateway, DynamoDB, and S3",
      "CI/CD and deployment automation",
      "Complete DVA-C02 exam preparation",
    ],
    secretSauce: [
      { title: "AWS SDK Labs", icon: "code" },
      { title: "Serverless Workshops", icon: "zap" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "CI/CD Pipeline Setup", icon: "git-branch" },
    ],
    courseHighlights: [
      { text: "24 Hours of AWS Development Training", bold: "24 Hours" },
      { text: "Serverless Application Development", bold: "Serverless" },
      { text: "AWS SDKs & CLI Mastery", bold: "AWS SDKs" },
      { text: "CI/CD & Deployment Automation", bold: "CI/CD" },
    ],
    aboutCourse: "AWS Developer Associate validates your expertise in developing, deploying, and debugging cloud-native applications on AWS using AWS SDKs and CI/CD tools.",
    benefits: [
      "Developer Credential — Validate AWS development skills",
      "Serverless Expertise — Master Lambda, API Gateway, DynamoDB",
      "Modern Stack — Cloud-native application development",
      "Career Growth — AWS developers in high demand",
    ],
    demand: {
      jobOpenings: "Cloud developer roles growing 20%+ annually",
      roles: [
        { title: "AWS Developer", salaryMin: "$85K", salaryAvg: "$115K", salaryMax: "$150K" },
        { title: "Cloud Developer", salaryMin: "$90K", salaryAvg: "$120K", salaryMax: "$160K" },
      ],
      hiringCompanies: ["Amazon", "Twilio", "Stripe", "Slack"],
      growthPercent: "20%",
      growthDescription: "annual growth in cloud developer roles",
    },
    curriculum: [
      { title: "AWS Fundamentals for Developers", topics: ["IAM for Developers", "AWS CLI & SDK", "Cloud9 IDE"] },
      { title: "Serverless Development", topics: ["AWS Lambda", "API Gateway", "DynamoDB", "S3 & Event-Driven Architecture"] },
      { title: "Deployment & CI/CD", topics: ["Elastic Beanstalk", "CodeCommit, CodeBuild, CodeDeploy", "CodePipeline", "CloudFormation"] },
      { title: "Monitoring & Security", topics: ["CloudWatch", "X-Ray", "Cognito", "Exam Preparation"] },
    ],
    prerequisites: ["1+ year AWS experience", "Proficiency in a programming language", "Understanding of cloud concepts"],
    contactHours: "24",
    rating: "4.7",
    reviewCount: "2,100",
  },
  "AWS-SOA": {
    subtitle: "Master AWS Operations and Earn the SysOps Administrator Associate Certification",
    heroHighlights: [
      "24 hours of AWS operations training",
      "Monitoring, deployment, and security management",
      "Automation and cost optimization",
      "Complete SOA-C02 exam preparation",
    ],
    secretSauce: [
      { title: "Operations Labs", icon: "settings" },
      { title: "CloudWatch Deep Dive", icon: "activity" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Automation Scripts", icon: "terminal" },
    ],
    courseHighlights: [
      { text: "24 Hours of AWS Operations Training", bold: "24 Hours" },
      { text: "Monitoring & Observability", bold: "Monitoring" },
      { text: "Deployment & Automation", bold: "Automation" },
      { text: "Security & Networking Operations", bold: "Security Operations" },
    ],
    aboutCourse: "AWS SysOps Administrator Associate validates your expertise in deploying, managing, and operating workloads on AWS with focus on automation and monitoring.",
    benefits: [
      "Operations Expertise — Master AWS operational best practices",
      "Automation Skills — Infrastructure as code and automation",
      "Monitoring Mastery — CloudWatch, CloudTrail, and more",
      "Career Path — Lead to DevOps Engineer certification",
    ],
    demand: {
      jobOpenings: "SysOps and DevOps roles growing 18%+ annually",
      roles: [
        { title: "AWS SysOps Administrator", salaryMin: "$75K", salaryAvg: "$100K", salaryMax: "$130K" },
        { title: "Cloud Operations Engineer", salaryMin: "$85K", salaryAvg: "$110K", salaryMax: "$140K" },
      ],
      hiringCompanies: ["Amazon", "Datadog", "Splunk", "HashiCorp"],
      growthPercent: "18%",
      growthDescription: "annual growth in cloud operations roles",
    },
    curriculum: [
      { title: "Monitoring & Reporting", topics: ["CloudWatch Metrics & Alarms", "CloudTrail", "AWS Config", "Cost Explorer"] },
      { title: "High Availability", topics: ["Auto Scaling", "Load Balancing", "RDS Multi-AZ", "Route 53 Routing"] },
      { title: "Deployment & Provisioning", topics: ["CloudFormation", "Elastic Beanstalk", "Systems Manager", "OpsWorks"] },
      { title: "Security & Networking", topics: ["IAM Policies", "VPC Security", "Encryption", "Exam Preparation"] },
    ],
    prerequisites: ["1+ year AWS experience", "AWS Cloud Practitioner recommended", "Understanding of Linux/Windows administration"],
    contactHours: "24",
    rating: "4.6",
    reviewCount: "1,500",
  },
  "AWS-SAP": {
    subtitle: "Design Complex Enterprise Solutions as an AWS Certified Solutions Architect Professional",
    heroHighlights: [
      "32 hours of advanced AWS architecture training",
      "Complex multi-account strategies and migrations",
      "Enterprise-grade high availability design",
      "Complete SAP-C02 exam preparation",
    ],
    secretSauce: [
      { title: "Enterprise Architecture Labs", icon: "building" },
      { title: "Migration Workshops", icon: "arrow-right-left" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Well-Architected Reviews", icon: "shield-check" },
    ],
    courseHighlights: [
      { text: "32 Hours of Advanced Architecture Training", bold: "32 Hours" },
      { text: "Multi-Account & Organization Strategies", bold: "Multi-Account" },
      { text: "Complex Migration Patterns", bold: "Migration" },
      { text: "Enterprise Cost Optimization", bold: "Cost Optimization" },
    ],
    aboutCourse: "AWS Solutions Architect Professional validates advanced technical skills in designing complex AWS applications. It is one of the most challenging and valued AWS certifications.",
    benefits: [
      "Elite Credential — AWS's most prestigious architecture cert",
      "Enterprise Scale — Design for the largest organizations",
      "Premium Salary — Top 10% of cloud professional salaries",
      "Leadership Path — CTO/VP of Engineering trajectory",
    ],
    demand: {
      jobOpenings: "Senior architect roles command premium salaries",
      roles: [
        { title: "Senior Solutions Architect", salaryMin: "$150K", salaryAvg: "$185K", salaryMax: "$240K" },
        { title: "Principal Architect", salaryMin: "$180K", salaryAvg: "$220K", salaryMax: "$280K" },
      ],
      hiringCompanies: ["Amazon", "Netflix", "Stripe", "Snowflake"],
      growthPercent: "28%",
      growthDescription: "growth in senior cloud architecture roles",
    },
    curriculum: [
      { title: "Organizational Complexity", topics: ["Multi-Account Strategies", "AWS Organizations", "Cross-Account Access"] },
      { title: "New Solutions Design", topics: ["Compute & Networking", "Storage & Database", "Application Integration"] },
      { title: "Migration Planning", topics: ["Migration Strategies (6 Rs)", "Data Migration", "Application Migration"] },
      { title: "Cost Control & Continuous Improvement", topics: ["Cost Optimization", "Performance Optimization", "Operational Excellence", "Exam Preparation"] },
    ],
    prerequisites: ["AWS Solutions Architect Associate", "2+ years hands-on AWS experience", "Deep understanding of AWS services"],
    contactHours: "32",
    rating: "4.8",
    reviewCount: "1,200",
  },
  "AWS-DOP": {
    subtitle: "Master CI/CD and Infrastructure as Code with AWS DevOps Engineer Professional",
    heroHighlights: [
      "32 hours of AWS DevOps training",
      "CI/CD pipelines and deployment automation",
      "Infrastructure as Code with CloudFormation & CDK",
      "Monitoring, logging, and incident response",
    ],
    secretSauce: [
      { title: "Pipeline Labs", icon: "git-branch" },
      { title: "IaC Workshops", icon: "code" },
      { title: "Practice Exams", icon: "check-circle" },
      { title: "Monitoring Deep Dive", icon: "activity" },
    ],
    courseHighlights: [
      { text: "32 Hours of AWS DevOps Training", bold: "32 Hours" },
      { text: "CI/CD Pipeline Design & Automation", bold: "CI/CD Pipelines" },
      { text: "Infrastructure as Code (CloudFormation, CDK)", bold: "IaC" },
      { text: "Monitoring & Incident Response", bold: "Monitoring" },
    ],
    aboutCourse: "AWS DevOps Engineer Professional validates your expertise in provisioning, operating, and managing distributed application systems on the AWS platform using CI/CD and automation.",
    benefits: [
      "DevOps Mastery — Advanced CI/CD and automation skills",
      "IaC Expertise — CloudFormation, CDK, and Terraform",
      "Premium Salary — DevOps engineers earn top salaries",
      "Career Growth — Lead to platform engineering roles",
    ],
    demand: {
      jobOpenings: "DevOps roles growing 20%+ annually",
      roles: [
        { title: "DevOps Engineer", salaryMin: "$100K", salaryAvg: "$135K", salaryMax: "$175K" },
        { title: "Platform Engineer", salaryMin: "$120K", salaryAvg: "$155K", salaryMax: "$200K" },
      ],
      hiringCompanies: ["Amazon", "Google", "Spotify", "Uber"],
      growthPercent: "20%",
      growthDescription: "annual growth in DevOps engineering roles",
    },
    curriculum: [
      { title: "SDLC Automation", topics: ["CI/CD Concepts", "CodePipeline", "CodeBuild & CodeDeploy", "Testing Strategies"] },
      { title: "Configuration Management & IaC", topics: ["CloudFormation", "AWS CDK", "Systems Manager", "OpsWorks"] },
      { title: "Monitoring & Logging", topics: ["CloudWatch", "CloudTrail", "X-Ray", "EventBridge"] },
      { title: "Policies & Standards", topics: ["IAM Best Practices", "AWS Config", "Service Catalog", "Exam Preparation"] },
    ],
    prerequisites: ["AWS Developer or SysOps Associate", "2+ years DevOps experience on AWS", "Strong scripting/programming skills"],
    contactHours: "32",
    rating: "4.7",
    reviewCount: "900",
  },
};

// SAFe course details
const safeDetails: Record<string, Partial<Course>> = {
  "SAFE-LSA": {
    subtitle: "Lead Enterprise Agile Transformation with SAFe® 6.0 Agilist Certification",
    heroHighlights: [
      "16 hours of Leading SAFe training",
      "SAFe Lean-Agile principles and mindset",
      "PI Planning facilitation and execution",
      "SAFe Agilist (SA) certification exam included",
    ],
    secretSauce: [
      { title: "SAFe Practice Consultant", icon: "users" },
      { title: "PI Planning Simulation", icon: "calendar" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "1-Year SAFe Community Access", icon: "globe" },
    ],
    courseHighlights: [
      { text: "16 Hours of Leading SAFe® 6.0 Training", bold: "16 Hours" },
      { text: "Lean-Agile Mindset & SAFe Principles", bold: "Lean-Agile Mindset" },
      { text: "PI Planning Facilitation & Execution", bold: "PI Planning" },
      { text: "SAFe Agilist (SA) Certification Exam", bold: "SA Certification" },
    ],
    aboutCourse: "Leading SAFe® 6.0 is the foundational SAFe course for enterprise agility. Learn to lead Lean-Agile transformation, develop a Lean-Agile mindset, and drive PI Planning.",
    benefits: [
      "Enterprise Agility — Lead agile transformation at scale",
      "SAFe Certified — Globally recognized agile credential",
      "Leadership Skills — Drive organizational change",
      "Exam Included — Certification exam fee included",
    ],
    demand: {
      jobOpenings: "SAFe-certified roles growing 30%+ annually",
      roles: [
        { title: "SAFe Agilist", salaryMin: "$110K", salaryAvg: "$140K", salaryMax: "$175K" },
        { title: "Agile Transformation Lead", salaryMin: "$130K", salaryAvg: "$160K", salaryMax: "$200K" },
      ],
      hiringCompanies: ["Deloitte", "Accenture", "IBM", "Capgemini"],
      growthPercent: "30%",
      growthDescription: "growth in SAFe-certified roles annually",
    },
    curriculum: [
      { title: "Thriving in the Digital Age", topics: ["Business Agility", "SAFe as an Operating System", "Lean-Agile Mindset"] },
      { title: "Becoming a Lean-Agile Leader", topics: ["Lean-Agile Leadership", "Mindset Shift", "Leading by Example"] },
      { title: "Establishing Team & Technical Agility", topics: ["Agile Teams", "Built-In Quality", "Team Topologies"] },
      { title: "Building Solutions with Agile Product Delivery", topics: ["Customer Centricity", "PI Planning", "DevOps & Release on Demand"] },
    ],
    prerequisites: ["5+ years experience in software/systems development", "Experience in product or project management", "Understanding of Agile concepts"],
    contactHours: "16",
    rating: "4.8",
    reviewCount: "3,200",
  },
  "SAFE-SSM": {
    subtitle: "Master Scrum in SAFe and Become a Certified SAFe® Scrum Master",
    heroHighlights: [
      "16 hours of SAFe Scrum Master training",
      "Scrum in the context of the SAFe enterprise",
      "Facilitate Agile team events effectively",
      "SSM certification exam included",
    ],
    secretSauce: [
      { title: "Scrum Simulation", icon: "refresh-cw" },
      { title: "Team Event Facilitation", icon: "users" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "SAFe Community Access", icon: "globe" },
    ],
    courseHighlights: [
      { text: "16 Hours of SAFe Scrum Master Training", bold: "16 Hours" },
      { text: "Scrum in SAFe Enterprise Context", bold: "Scrum in SAFe" },
      { text: "Team Event Facilitation Skills", bold: "Facilitation" },
      { text: "SSM Certification Exam Included", bold: "SSM Exam" },
    ],
    aboutCourse: "SAFe® Scrum Master explores the role of the Scrum Master in a SAFe enterprise. Learn to facilitate team events, coach teams, and support PI Planning execution.",
    benefits: [
      "SAFe Context — Scrum at enterprise scale",
      "Facilitation Skills — Lead team events effectively",
      "Certification Included — Exam fee covered",
      "Career Growth — Path to Advanced Scrum Master",
    ],
    demand: {
      jobOpenings: "Scrum Master roles in high demand across industries",
      roles: [
        { title: "Scrum Master", salaryMin: "$85K", salaryAvg: "$110K", salaryMax: "$140K" },
        { title: "Agile Coach", salaryMin: "$110K", salaryAvg: "$140K", salaryMax: "$175K" },
      ],
      hiringCompanies: ["Spotify", "ING", "Ericsson", "Bosch"],
      growthPercent: "24%",
      growthDescription: "growth in Scrum Master roles annually",
    },
    curriculum: [
      { title: "Exploring the Scrum Master Role", topics: ["Scrum Master Responsibilities", "Servant Leadership", "Team Coaching"] },
      { title: "Experiencing PI Planning", topics: ["PI Planning Preparation", "PI Execution", "Iteration Planning"] },
      { title: "Supporting Team Execution", topics: ["Daily Stand-up", "Iteration Review", "Backlog Refinement"] },
      { title: "Improving Flow & Removing Impediments", topics: ["Kanban for Teams", "Impediment Removal", "Continuous Improvement"] },
    ],
    prerequisites: ["Understanding of Scrum fundamentals", "Experience working on Agile teams", "Leading SAFe recommended"],
    contactHours: "16",
    rating: "4.7",
    reviewCount: "2,500",
  },
  "SAFE-POPM": {
    subtitle: "Drive Product Value in SAFe as a Certified Product Owner/Product Manager",
    heroHighlights: [
      "16 hours of SAFe POPM training",
      "Product backlog and PI objectives management",
      "Customer-centric product development",
      "POPM certification exam included",
    ],
    secretSauce: [
      { title: "Product Vision Workshop", icon: "eye" },
      { title: "Backlog Management", icon: "list" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "SAFe Community Access", icon: "globe" },
    ],
    courseHighlights: [
      { text: "16 Hours of SAFe POPM Training", bold: "16 Hours" },
      { text: "Product Backlog & Roadmap Management", bold: "Backlog Management" },
      { text: "Customer-Centric Product Development", bold: "Customer Centricity" },
      { text: "POPM Certification Exam Included", bold: "POPM Exam" },
    ],
    aboutCourse: "SAFe® POPM teaches Product Owners and Product Managers how to drive product value in a SAFe enterprise. Learn to manage backlogs, define PI objectives, and deliver customer value.",
    benefits: [
      "Product Focus — Drive product value at scale",
      "Customer Centricity — Build what customers need",
      "Certification Included — Exam fee covered",
      "Career Growth — Path to product leadership roles",
    ],
    demand: {
      jobOpenings: "Product management roles growing rapidly",
      roles: [
        { title: "Product Owner", salaryMin: "$90K", salaryAvg: "$115K", salaryMax: "$145K" },
        { title: "Product Manager", salaryMin: "$100K", salaryAvg: "$135K", salaryMax: "$175K" },
      ],
      hiringCompanies: ["Spotify", "Atlassian", "SAP", "Salesforce"],
      growthPercent: "22%",
      growthDescription: "growth in product management roles",
    },
    curriculum: [
      { title: "SAFe Product Owner/Manager Roles", topics: ["PO vs PM Responsibilities", "Collaboration Models", "SAFe Context"] },
      { title: "Preparing for PI Planning", topics: ["Vision & Roadmap", "Feature Writing", "PI Objectives"] },
      { title: "Executing PI & Iterations", topics: ["Iteration Execution", "Backlog Refinement", "Accepting Stories"] },
      { title: "Driving Value Delivery", topics: ["Customer Feedback", "Value Metrics", "Continuous Exploration"] },
    ],
    prerequisites: ["Understanding of Agile/Scrum basics", "Experience in product or project management", "Leading SAFe recommended"],
    contactHours: "16",
    rating: "4.7",
    reviewCount: "1,800",
  },
  "SAFE-SPC": {
    subtitle: "Become a SAFe Practice Consultant and Lead Enterprise Agile Transformations",
    heroHighlights: [
      "32 hours of intensive SPC training",
      "Lead SAFe implementations and transformations",
      "Teach SAFe courses as a certified trainer",
      "SPC certification exam included",
    ],
    secretSauce: [
      { title: "Implementation Roadmap", icon: "map" },
      { title: "Train-the-Trainer Skills", icon: "presentation" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "Teach SAFe Courses", icon: "book-open" },
    ],
    courseHighlights: [
      { text: "32 Hours of Intensive SPC Training", bold: "32 Hours" },
      { text: "SAFe Implementation Roadmap", bold: "Implementation Roadmap" },
      { text: "Train-the-Trainer Certification", bold: "Train-the-Trainer" },
      { text: "SPC Certification Exam Included", bold: "SPC Exam" },
    ],
    aboutCourse: "Implementing SAFe® with SPC is the most comprehensive SAFe training. SPCs are change agents who lead SAFe transformations and can teach SAFe courses.",
    benefits: [
      "Change Agent — Lead enterprise agile transformations",
      "Teach SAFe — Authorized to deliver SAFe courses",
      "Premium Credential — Most valued SAFe certification",
      "Consulting Skills — Drive organizational change",
    ],
    demand: {
      jobOpenings: "SPC roles in high demand for transformations",
      roles: [
        { title: "SAFe Practice Consultant", salaryMin: "$140K", salaryAvg: "$175K", salaryMax: "$220K" },
        { title: "Agile Transformation Lead", salaryMin: "$150K", salaryAvg: "$190K", salaryMax: "$250K" },
      ],
      hiringCompanies: ["McKinsey", "Deloitte", "Accenture", "BCG"],
      growthPercent: "30%",
      growthDescription: "growth in enterprise agile transformation roles",
    },
    curriculum: [
      { title: "Reaching the Tipping Point", topics: ["SAFe Overview", "Leading Change", "Implementation Roadmap"] },
      { title: "Launching an ART", topics: ["ART Design", "PI Planning Preparation", "Executing PI Planning"] },
      { title: "Coaching ART Execution", topics: ["Iteration Execution", "System Demo", "Inspect & Adapt"] },
      { title: "Extending to Portfolio", topics: ["Lean Portfolio Management", "Value Stream Mapping", "Continuous Improvement"] },
    ],
    prerequisites: ["5+ years in software/systems development", "Agile experience required", "Leading SAFe recommended"],
    contactHours: "32",
    rating: "4.8",
    reviewCount: "1,100",
  },
  "SAFE-RTE": {
    subtitle: "Coordinate Agile Release Trains as a Certified SAFe® Release Train Engineer",
    heroHighlights: [
      "24 hours of RTE training",
      "ART coordination and program execution",
      "PI Planning facilitation and Inspect & Adapt",
      "RTE certification exam included",
    ],
    secretSauce: [
      { title: "ART Simulation", icon: "train" },
      { title: "PI Planning Facilitation", icon: "calendar" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "Coaching Skills", icon: "users" },
    ],
    courseHighlights: [
      { text: "24 Hours of RTE Training", bold: "24 Hours" },
      { text: "ART Coordination & Execution", bold: "ART Coordination" },
      { text: "PI Planning Facilitation", bold: "PI Facilitation" },
      { text: "RTE Certification Exam Included", bold: "RTE Exam" },
    ],
    aboutCourse: "SAFe® RTE prepares you to coordinate Agile Release Trains, facilitate PI Planning, and enable continuous value delivery across multiple agile teams.",
    benefits: [
      "ART Leadership — Coordinate multiple agile teams",
      "Facilitation Skills — Master PI Planning execution",
      "Certification Included — Exam fee covered",
      "Career Growth — Senior agile leadership role",
    ],
    demand: {
      jobOpenings: "RTE roles growing as SAFe adoption increases",
      roles: [
        { title: "Release Train Engineer", salaryMin: "$120K", salaryAvg: "$150K", salaryMax: "$185K" },
        { title: "Program Manager (Agile)", salaryMin: "$110K", salaryAvg: "$140K", salaryMax: "$175K" },
      ],
      hiringCompanies: ["BMW", "Siemens", "SAP", "Philips"],
      growthPercent: "28%",
      growthDescription: "growth in RTE and agile program roles",
    },
    curriculum: [
      { title: "RTE Role & Responsibilities", topics: ["RTE in SAFe", "Servant Leadership", "ART Organization"] },
      { title: "Planning & Executing PI", topics: ["PI Planning Readiness", "PI Planning Facilitation", "PI Execution"] },
      { title: "Improving Flow", topics: ["Value Stream Mapping", "Bottleneck Identification", "Kanban for ARTs"] },
      { title: "Building High-Performing ARTs", topics: ["Inspect & Adapt", "Metrics & Reporting", "Continuous Improvement"] },
    ],
    prerequisites: ["Leading SAFe or SAFe Scrum Master", "Experience in a SAFe environment", "Understanding of Agile Release Train concepts"],
    contactHours: "24",
    rating: "4.7",
    reviewCount: "780",
  },
  "SAFE-LPM": {
    subtitle: "Align Strategy and Execution with SAFe® Lean Portfolio Management",
    heroHighlights: [
      "16 hours of Lean Portfolio Management training",
      "Portfolio strategy and investment funding",
      "Lean budgets and agile portfolio operations",
      "LPM certification exam included",
    ],
    secretSauce: [
      { title: "Portfolio Simulation", icon: "briefcase" },
      { title: "Lean Budgeting Workshop", icon: "dollar-sign" },
      { title: "Certification Exam Included", icon: "award" },
      { title: "Strategy Alignment Tools", icon: "target" },
    ],
    courseHighlights: [
      { text: "16 Hours of LPM Training", bold: "16 Hours" },
      { text: "Portfolio Strategy & Investment Funding", bold: "Portfolio Strategy" },
      { text: "Lean Budgets & Guardrails", bold: "Lean Budgets" },
      { text: "LPM Certification Exam Included", bold: "LPM Exam" },
    ],
    aboutCourse: "SAFe® LPM teaches how to align strategy and execution by applying Lean and systems thinking to portfolio management, including Lean budgets and agile governance.",
    benefits: [
      "Strategic Alignment — Connect strategy to execution",
      "Lean Budgeting — Replace traditional project funding",
      "Portfolio Agility — Respond faster to market changes",
      "Certification Included — Exam fee covered",
    ],
    demand: {
      jobOpenings: "Portfolio management roles evolving to Lean",
      roles: [
        { title: "Portfolio Manager (Agile)", salaryMin: "$130K", salaryAvg: "$160K", salaryMax: "$200K" },
        { title: "VP of Delivery", salaryMin: "$160K", salaryAvg: "$200K", salaryMax: "$260K" },
      ],
      hiringCompanies: ["Capital One", "Fidelity", "JP Morgan", "USAA"],
      growthPercent: "22%",
      growthDescription: "growth in lean portfolio management roles",
    },
    curriculum: [
      { title: "Introduction to LPM", topics: ["Lean Portfolio Management Overview", "Strategy & Investment Funding", "SAFe Portfolio Context"] },
      { title: "Strategy & Investment Funding", topics: ["Portfolio Vision", "Strategic Themes", "Lean Budgets & Guardrails"] },
      { title: "Agile Portfolio Operations", topics: ["Portfolio Flow", "Coordinating Value Streams", "Portfolio Metrics"] },
      { title: "Lean Governance", topics: ["Lean Governance Practices", "Continuous Compliance", "Portfolio Improvement"] },
    ],
    prerequisites: ["Senior leadership or portfolio management experience", "Leading SAFe recommended", "Understanding of SAFe framework"],
    contactHours: "16",
    rating: "4.7",
    reviewCount: "620",
  },
};

function enrichCourse(base: {
  name: string; code: string; duration: string; level: string;
  skills: string[]; learners: string; badge: BadgeType; category: string;
}): Course {
  const details = courseDetails[base.code] || comptiaDetails[base.code] || azureDetails[base.code] || awsDetails[base.code] || safeDetails[base.code] || {};
  
  const defaultSecretSauce = base.category === "Cybersecurity — CompTIA" 
    ? comptiaDefaults.secretSauce 
    : [
        { title: "Expert Instructors", icon: "users" },
        { title: "Official Courseware", icon: "book-open" },
        { title: "Practice Exams", icon: "check-circle" },
        { title: "Post-Training Support", icon: "headphones" },
      ];

  return {
    ...base,
    slug: generateSlug(base.code),
    description: details.aboutCourse || `Comprehensive ${base.level.toLowerCase()}-level certification training in ${base.name}. Gain practical skills with expert-led, accredited instruction designed for working professionals.`,
    subtitle: details.subtitle || `Master ${base.name} with Expert-Led Training`,
    heroHighlights: details.heroHighlights || [
      `Live instructor-led ${base.duration} training`,
      "Official courseware and study materials",
      "Hands-on labs and practice exams",
      "Exam application support included",
    ],
    secretSauce: details.secretSauce || defaultSecretSauce,
    courseHighlights: details.courseHighlights || [
      { text: `${base.duration} of Live Training`, bold: base.duration },
      { text: "Official Courseware & Materials", bold: "Official Courseware" },
      { text: "Hands-On Labs & Exercises", bold: "Hands-On Labs" },
      { text: "Full Exam Preparation Package", bold: "Exam Preparation" },
    ],
    aboutCourse: details.aboutCourse || `Comprehensive ${base.level.toLowerCase()}-level certification training in ${base.name}. Gain practical skills with expert-led, accredited instruction.`,
    benefits: details.benefits || [
      "Industry-Recognized Certification",
      "Hands-On Practical Skills",
      "Career Advancement",
      "Expert Instructor Guidance",
    ],
    demand: details.demand || {
      jobOpenings: "Growing demand across industries",
      roles: [{ title: base.name.split("(")[0].trim(), salaryMin: "$70K", salaryAvg: "$95K", salaryMax: "$130K" }],
      hiringCompanies: ["Top Fortune 500 Companies"],
      growthPercent: "15%",
      growthDescription: "growth in related roles",
    },
    curriculum: details.curriculum || [
      { title: "Foundation & Core Concepts", topics: [base.skills[0] || "Core Principles", "Industry Standards & Frameworks", "Key Terminology"] },
      { title: "Practical Application", topics: [base.skills[1] || "Applied Techniques", "Real-World Scenarios", "Case Studies"] },
      { title: "Advanced Topics & Exam Prep", topics: [base.skills[2] || "Advanced Strategies", "Practice Exams", "Exam Strategy"] },
    ],
    price: base.level === "Beginner" ? 599 : base.level === "Intermediate" ? 899 : base.level === "Advanced" ? 1199 : 1499,
    originalPrice: base.level === "Beginner" ? 899 : base.level === "Intermediate" ? 1299 : base.level === "Advanced" ? 1699 : 1999,
    certification: `Official ${base.category} certification upon passing the exam`,
    prerequisites: details.prerequisites || (base.level === "Beginner"
      ? ["No prior experience required", "Basic computer literacy"]
      : base.level === "Intermediate"
      ? ["1–3 years of professional experience", "Foundational knowledge in the domain"]
      : ["3+ years of professional experience", "Prior related certification recommended"]),
    includes: [
      "Live instructor-led training",
      "Official courseware & study materials",
      "Hands-on labs & exercises",
      "Full-length practice exams",
      "30-day recording access",
      "Certificate of completion",
      "Exam application support",
    ],
    contactHours: details.contactHours || base.duration.match(/\d+/)?.[0] || "40",
    rating: details.rating || "4.7",
    reviewCount: details.reviewCount || "1,000+",
  };
}

export const categories: Category[] = [
  {
    name: "Project Management",
    slug: "project-management",
    description: "Master globally recognised project management methodologies and frameworks.",
    icon: "clipboard-check",
    heroPoints: [
      "Earn Globally Recognized Project Management Certifications to Validate Leadership Capabilities.",
      "Join Live Interactive Training Sessions Led by Certified Project Managers & Industry Experts.",
      "Get Exam Support & Application Guidance From Experienced Trainers with Personalized Q&A Sessions.",
    ],
    courses: [
      enrichCourse({ name: "Project Management Professional (PMP®)", code: "PMI-PMP", duration: "4–8 Days | 35 Contact Hrs", level: "Intermediate", skills: ["PMBOK 7th Edition", "Predictive & Agile", "Stakeholder Mgmt"], learners: "25K+", badge: "Popular", category: "Project Management" }),
      enrichCourse({ name: "Certified Associate in Project Management (CAPM®)", code: "PMI-CAPM", duration: "3–6 Days | 23 Contact Hrs", level: "Beginner", skills: ["Project Fundamentals", "Planning", "Scheduling"], learners: "8K+", badge: "Trending", category: "Project Management" }),
      enrichCourse({ name: "PMI Agile Certified Practitioner (PMI-ACP®)", code: "PMI-ACP", duration: "3 Days | 21 Contact Hrs", level: "Intermediate", skills: ["Agile Methodologies", "Scrum", "Kanban"], learners: "6K+", badge: "Popular", category: "Project Management" }),
      enrichCourse({ name: "PMI Risk Management Professional (PMI-RMP®)", code: "PMI-RMP", duration: "3–4 Days | 24 Contact Hrs", level: "Advanced", skills: ["Risk Identification", "Quantitative Analysis", "Mitigation"], learners: "3K+", badge: "Advance", category: "Project Management" }),
      enrichCourse({ name: "PMI Professional in Business Analysis (PMI-PBA®)", code: "PMI-PBA", duration: "3–4 Days | 24 Contact Hrs", level: "Intermediate", skills: ["Needs Assessment", "Elicitation", "Requirements Mgmt"], learners: "4K+", badge: "Trending", category: "Project Management" }),
      enrichCourse({ name: "Program Management Professional (PgMP®)", code: "PMI-PgMP", duration: "4 Days | 32 Contact Hrs", level: "Expert", skills: ["Program Strategy", "Benefits Realization", "Governance"], learners: "2K+", badge: "Advance", category: "Project Management" }),
    ],
  },
  {
    name: "Cybersecurity — CompTIA",
    slug: "cybersecurity",
    description: "Build and validate essential cybersecurity, networking, and infrastructure skills.",
    icon: "shield-check",
    heroPoints: [
      "Earn Industry-Standard CompTIA Certifications Recognized by Employers Worldwide.",
      "Train with Hands-On Labs & Performance-Based Questions Mirroring Real Exam Scenarios.",
      "Get Dedicated Exam Prep Support Including Practice Tests & Personalized Study Plans.",
    ],
    courses: [
      enrichCourse({ name: "CompTIA Security+ (SY0-701)", code: "COMP-SEC+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Threat Analysis", "Network Security", "Cryptography"], learners: "18K+", badge: "Popular", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA Network+ (N10-009)", code: "COMP-NET+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Network Architecture", "Troubleshooting", "Security"], learners: "12K+", badge: "Popular", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA A+ (220-1101 & 220-1102)", code: "COMP-A+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Hardware", "OS", "Networking Fundamentals"], learners: "10K+", badge: "Trending", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA CySA+ (CS0-003)", code: "COMP-CYSA+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Threat Detection", "Incident Response", "SIEM"], learners: "7K+", badge: "Advance", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA PenTest+ (PT0-003)", code: "COMP-PEN+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Penetration Testing", "Vulnerability Mgmt", "Reporting"], learners: "5K+", badge: "Advance", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA Cloud+ (CV0-004)", code: "COMP-CLD+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Cloud Architecture", "Security", "Deployment"], learners: "4K+", badge: "Trending", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA SecurityX (CAS-005)", code: "COMP-SECX", duration: "5 Days | 40 Hrs", level: "Expert", skills: ["Enterprise Security", "Governance", "Risk Architecture"], learners: "3K+", badge: "Advance", category: "Cybersecurity — CompTIA" }),
      enrichCourse({ name: "CompTIA Server+ (SK0-005)", code: "COMP-SRV+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Server Administration", "Storage", "Troubleshooting"], learners: "3K+", badge: "Trending", category: "Cybersecurity — CompTIA" }),
    ],
  },
  {
    name: "Microsoft Azure",
    slug: "azure",
    description: "Master Microsoft Azure services from fundamentals to expert-level architecture.",
    icon: "cloud",
    courses: [
      enrichCourse({ name: "Microsoft Azure Fundamentals (AZ-900)", code: "AZ-900", duration: "1–2 Days | 8 Hrs", level: "Beginner", skills: ["Cloud Concepts", "Azure Services", "Pricing"], learners: "20K+", badge: "Popular", category: "Microsoft Azure" }),
      enrichCourse({ name: "Microsoft Azure Administrator (AZ-104)", code: "AZ-104", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Identity", "Storage", "Compute"], learners: "15K+", badge: "Popular", category: "Microsoft Azure" }),
      enrichCourse({ name: "Designing Azure Infrastructure Solutions (AZ-305)", code: "AZ-305", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["Solution Architecture", "Governance", "Migration"], learners: "8K+", badge: "Advance", category: "Microsoft Azure" }),
      enrichCourse({ name: "Microsoft Azure Security Technologies (AZ-500)", code: "AZ-500", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Identity Protection", "Data Security", "Threat Mgmt"], learners: "6K+", badge: "Trending", category: "Microsoft Azure" }),
      enrichCourse({ name: "Developing Solutions for Microsoft Azure (AZ-204)", code: "AZ-204", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["App Development", "Azure Functions", "Cosmos DB"], learners: "5K+", badge: "Trending", category: "Microsoft Azure" }),
      enrichCourse({ name: "Microsoft Azure AI Fundamentals (AI-900)", code: "AI-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["AI/ML Concepts", "Azure Cognitive Services"], learners: "7K+", badge: "Trending", category: "Microsoft Azure" }),
      enrichCourse({ name: "Microsoft Azure Data Fundamentals (DP-900)", code: "DP-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["Data Concepts", "Relational & Non-Relational Data"], learners: "6K+", badge: "Popular", category: "Microsoft Azure" }),
      enrichCourse({ name: "Microsoft 365 Fundamentals (MS-900)", code: "MS-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["Microsoft 365 Services", "Security", "Compliance"], learners: "5K+", badge: "Trending", category: "Microsoft Azure" }),
    ],
  },
  {
    name: "AWS",
    slug: "aws",
    description: "Gain hands-on expertise in Amazon Web Services with lab-based, exam-focused training.",
    icon: "server",
    courses: [
      enrichCourse({ name: "AWS Certified Cloud Practitioner (CLF-C02)", code: "AWS-CCP", duration: "1–2 Days | 8 Hrs", level: "Beginner", skills: ["Cloud Fundamentals", "AWS Core Services", "Billing"], learners: "14K+", badge: "Popular", category: "AWS" }),
      enrichCourse({ name: "AWS Certified Solutions Architect – Associate (SAA-C03)", code: "AWS-SAA", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Architecture Design", "High Availability", "Cost Optimization"], learners: "12K+", badge: "Popular", category: "AWS" }),
      enrichCourse({ name: "AWS Certified Developer – Associate (DVA-C02)", code: "AWS-DVA", duration: "3 Days | 24 Hrs", level: "Intermediate", skills: ["AWS SDKs", "Lambda", "API Gateway"], learners: "6K+", badge: "Trending", category: "AWS" }),
      enrichCourse({ name: "AWS Certified SysOps Administrator – Associate (SOA-C02)", code: "AWS-SOA", duration: "3 Days | 24 Hrs", level: "Intermediate", skills: ["Monitoring", "Deployment", "Security"], learners: "5K+", badge: "Trending", category: "AWS" }),
      enrichCourse({ name: "AWS Certified Solutions Architect – Professional (SAP-C02)", code: "AWS-SAP", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["Complex Architectures", "Migration", "Multi-Account Strategy"], learners: "4K+", badge: "Advance", category: "AWS" }),
      enrichCourse({ name: "AWS Certified DevOps Engineer – Professional (DOP-C02)", code: "AWS-DOP", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["CI/CD Pipelines", "Infrastructure as Code", "Automation"], learners: "3K+", badge: "Advance", category: "AWS" }),
    ],
  },
  {
    name: "SAFe® Agile",
    slug: "safe-agile",
    description: "Scale agile practices across your enterprise with accredited SAFe training programs.",
    icon: "layers",
    courses: [
      enrichCourse({ name: "Leading SAFe® 6.0 (SAFe Agilist – SA)", code: "SAFE-LSA", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Lean-Agile Mindset", "SAFe Principles", "PI Planning"], learners: "9K+", badge: "Popular", category: "SAFe® Agile" }),
      enrichCourse({ name: "SAFe® Scrum Master (SSM)", code: "SAFE-SSM", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Scrum in SAFe", "Iteration Execution", "Team Facilitation"], learners: "7K+", badge: "Popular", category: "SAFe® Agile" }),
      enrichCourse({ name: "SAFe® Product Owner/Product Manager (POPM)", code: "SAFE-POPM", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Product Backlog", "PI Objectives", "Customer Centricity"], learners: "6K+", badge: "Trending", category: "SAFe® Agile" }),
      enrichCourse({ name: "Implementing SAFe® 6.0 with SPC Certification", code: "SAFE-SPC", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["ART Launch", "Value Stream Mapping", "SAFe Implementation"], learners: "3K+", badge: "Advance", category: "SAFe® Agile" }),
      enrichCourse({ name: "SAFe® Release Train Engineer (RTE)", code: "SAFE-RTE", duration: "3 Days | 24 Hrs", level: "Expert", skills: ["ART Coordination", "Program Execution", "Inspect & Adapt"], learners: "2K+", badge: "Advance", category: "SAFe® Agile" }),
      enrichCourse({ name: "SAFe® Lean Portfolio Management (LPM)", code: "SAFE-LPM", duration: "2 Days | 16 Hrs", level: "Expert", skills: ["Portfolio Strategy", "Lean Budgets", "Agile Governance"], learners: "2K+", badge: "Advance", category: "SAFe® Agile" }),
    ],
  },
];

// Helper to find a course by slug
export function findCourseBySlug(slug: string): Course | undefined {
  for (const cat of categories) {
    const course = cat.courses.find(c => c.slug === slug);
    if (course) return course;
  }
  return undefined;
}

export const testimonials = [
  { name: "Priya M.", designation: "Project Manager, TCS", course: "PMP® Certification Training", quote: "The PMP training at The EduEdge was exceptional. The instructor broke down complex PMBOK concepts into practical, real-world scenarios. I passed on my first attempt with Above Target scores across all domains." },
  { name: "Rajesh K.", designation: "Cloud Architect, Infosys", course: "AWS Solutions Architect – Associate", quote: "The hands-on lab experience was unmatched. The exam simulators were incredibly close to the real exam. I felt 100% prepared walking into the testing centre." },
  { name: "Sneha D.", designation: "Security Analyst, Wipro", course: "CompTIA Security+ (SY0-701)", quote: "The training was thorough and well-structured. The practice tests and performance-based question preparation were the difference-maker. Highly recommend The EduEdge for any cybersecurity certification." },
  { name: "Arjun V.", designation: "Agile Coach, Deloitte", course: "Leading SAFe® 6.0", quote: "Transformative training. The trainer had deep enterprise agile experience, and the case studies were directly applicable to my organization. Worth every rupee." },
];

export const faqs = [
  { q: "What certification should I start with if I'm new to IT?", a: "If you're new to the industry, we recommend starting with CompTIA A+ for hardware/networking fundamentals, AWS Cloud Practitioner (CLF-C02) or Azure Fundamentals (AZ-900) for cloud, or CAPM® for project management. Our learning advisors can help you choose the right path based on your career goals." },
  { q: "Are your courses accredited?", a: "Yes. All our training programs use official courseware and are delivered by certified instructors authorised by PMI (as a PMI Registered Education Provider), CompTIA, Microsoft, AWS, and Scaled Agile Inc." },
  { q: "What is included in the course fee?", a: "Every program includes live instructor-led training, official courseware, hands-on labs (where applicable), full-length practice exams, 30-day recording access, a certificate of completion, and exam application support." },
  { q: "Do you offer weekend or evening batches?", a: "Yes. Most certifications offer both weekday (intensive) and weekend batch options. We also offer custom scheduling for corporate groups. Check the course page for available schedules." },
  { q: "What is the pass guarantee policy?", a: "If you complete the full training, attempt all practice exams, and do not pass the certification exam on your first try, you are eligible for free re-training in the next available batch. Terms and conditions apply." },
  { q: "Can I switch between live online and classroom training?", a: "Yes, we offer flexible format switching. If a seat is available in the alternate format, you can switch at no additional cost. Contact your learning advisor to arrange this." },
  { q: "Do you provide placement or career support?", a: "We provide career support including resume review, LinkedIn profile optimisation, and interview preparation guidance. While we do not guarantee placement, our certified learners report an average 35% salary increase within 6 months of certification." },
];

export const whyChooseUs = [
  { title: "Accredited Training", description: "Official courseware from PMI, CompTIA, Microsoft, AWS, and Scaled Agile. Every program meets vendor-mandated quality standards.", icon: "award" },
  { title: "Expert Instructors", description: "All trainers hold active certifications with 10+ years of industry experience. No theoretical-only faculty.", icon: "users" },
  { title: "Exam-Focused Prep", description: "Full-length practice exams, performance-based question (PBQ) labs, and exam day strategy sessions included with every program.", icon: "target" },
  { title: "Flexible Learning", description: "Live online classrooms, weekend batches, self-paced modules, and blended options to fit every schedule.", icon: "calendar" },
  { title: "Post-Training Support", description: "30-day post-class access to recordings, doubt-clearing sessions, and community forums.", icon: "headphones" },
  { title: "First-Attempt Pass Guarantee", description: "Free re-training if you don't pass on your first attempt (terms apply).", icon: "check-circle" },
];

export const blogPosts = [
  { title: "PMP vs CAPM: Which PMI Certification Should You Get in 2026?", category: "Project Management", date: "Mar 15, 2026" },
  { title: "CompTIA Security+ SY0-701: Complete Exam Guide & Study Plan", category: "Cybersecurity", date: "Mar 10, 2026" },
  { title: "AWS vs Azure: Which Cloud Certification Path Is Right For You?", category: "Cloud Computing", date: "Mar 5, 2026" },
];
