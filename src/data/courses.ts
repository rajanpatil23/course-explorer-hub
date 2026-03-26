export type BadgeType = "Popular" | "Trending" | "Advance";

export interface Course {
  name: string;
  code: string;
  duration: string;
  level: string;
  skills: string[];
  learners: string;
  badge: BadgeType;
  category: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  courses: Course[];
}

export const categories: Category[] = [
  {
    name: "Project Management",
    slug: "project-management",
    description: "Master globally recognised project management methodologies and frameworks.",
    icon: "clipboard-check",
    courses: [
      { name: "Project Management Professional (PMP®)", code: "PMI-PMP", duration: "4–8 Days | 35 Contact Hrs", level: "Intermediate", skills: ["PMBOK 7th Edition", "Predictive & Agile", "Stakeholder Mgmt"], learners: "25K+", badge: "Popular", category: "Project Management" },
      { name: "Certified Associate in Project Management (CAPM®)", code: "PMI-CAPM", duration: "3–6 Days | 23 Contact Hrs", level: "Beginner", skills: ["Project Fundamentals", "Planning", "Scheduling"], learners: "8K+", badge: "Trending", category: "Project Management" },
      { name: "PMI Agile Certified Practitioner (PMI-ACP®)", code: "PMI-ACP", duration: "3 Days | 21 Contact Hrs", level: "Intermediate", skills: ["Agile Methodologies", "Scrum", "Kanban"], learners: "6K+", badge: "Popular", category: "Project Management" },
      { name: "PMI Risk Management Professional (PMI-RMP®)", code: "PMI-RMP", duration: "3–4 Days | 24 Contact Hrs", level: "Advanced", skills: ["Risk Identification", "Quantitative Analysis", "Mitigation"], learners: "3K+", badge: "Advance", category: "Project Management" },
      { name: "PMI Professional in Business Analysis (PMI-PBA®)", code: "PMI-PBA", duration: "3–4 Days | 24 Contact Hrs", level: "Intermediate", skills: ["Needs Assessment", "Elicitation", "Requirements Mgmt"], learners: "4K+", badge: "Trending", category: "Project Management" },
      { name: "Program Management Professional (PgMP®)", code: "PMI-PgMP", duration: "4 Days | 32 Contact Hrs", level: "Expert", skills: ["Program Strategy", "Benefits Realization", "Governance"], learners: "2K+", badge: "Advance", category: "Project Management" },
    ],
  },
  {
    name: "Cybersecurity — CompTIA",
    slug: "cybersecurity",
    description: "Build and validate essential cybersecurity, networking, and infrastructure skills.",
    icon: "shield-check",
    courses: [
      { name: "CompTIA Security+ (SY0-701)", code: "COMP-SEC+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Threat Analysis", "Network Security", "Cryptography"], learners: "18K+", badge: "Popular", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA Network+ (N10-009)", code: "COMP-NET+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Network Architecture", "Troubleshooting", "Security"], learners: "12K+", badge: "Popular", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA A+ (220-1101 & 220-1102)", code: "COMP-A+", duration: "5 Days | 40 Hrs", level: "Beginner", skills: ["Hardware", "OS", "Networking Fundamentals"], learners: "10K+", badge: "Trending", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA CySA+ (CS0-003)", code: "COMP-CYSA+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Threat Detection", "Incident Response", "SIEM"], learners: "7K+", badge: "Advance", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA PenTest+ (PT0-003)", code: "COMP-PEN+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Penetration Testing", "Vulnerability Mgmt", "Reporting"], learners: "5K+", badge: "Advance", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA Cloud+ (CV0-004)", code: "COMP-CLD+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Cloud Architecture", "Security", "Deployment"], learners: "4K+", badge: "Trending", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA SecurityX (CAS-005)", code: "COMP-SECX", duration: "5 Days | 40 Hrs", level: "Expert", skills: ["Enterprise Security", "Governance", "Risk Architecture"], learners: "3K+", badge: "Advance", category: "Cybersecurity — CompTIA" },
      { name: "CompTIA Server+ (SK0-005)", code: "COMP-SRV+", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["Server Administration", "Storage", "Troubleshooting"], learners: "3K+", badge: "Trending", category: "Cybersecurity — CompTIA" },
    ],
  },
  {
    name: "Microsoft Azure",
    slug: "azure",
    description: "Master Microsoft Azure services from fundamentals to expert-level architecture.",
    icon: "cloud",
    courses: [
      { name: "Microsoft Azure Fundamentals (AZ-900)", code: "AZ-900", duration: "1–2 Days | 8 Hrs", level: "Beginner", skills: ["Cloud Concepts", "Azure Services", "Pricing"], learners: "20K+", badge: "Popular", category: "Microsoft Azure" },
      { name: "Microsoft Azure Administrator (AZ-104)", code: "AZ-104", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Identity", "Storage", "Compute"], learners: "15K+", badge: "Popular", category: "Microsoft Azure" },
      { name: "Designing Azure Infrastructure Solutions (AZ-305)", code: "AZ-305", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["Solution Architecture", "Governance", "Migration"], learners: "8K+", badge: "Advance", category: "Microsoft Azure" },
      { name: "Microsoft Azure Security Technologies (AZ-500)", code: "AZ-500", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Identity Protection", "Data Security", "Threat Mgmt"], learners: "6K+", badge: "Trending", category: "Microsoft Azure" },
      { name: "Developing Solutions for Microsoft Azure (AZ-204)", code: "AZ-204", duration: "5 Days | 40 Hrs", level: "Intermediate", skills: ["App Development", "Azure Functions", "Cosmos DB"], learners: "5K+", badge: "Trending", category: "Microsoft Azure" },
      { name: "Microsoft Azure AI Fundamentals (AI-900)", code: "AI-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["AI/ML Concepts", "Azure Cognitive Services"], learners: "7K+", badge: "Trending", category: "Microsoft Azure" },
      { name: "Microsoft Azure Data Fundamentals (DP-900)", code: "DP-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["Data Concepts", "Relational & Non-Relational Data"], learners: "6K+", badge: "Popular", category: "Microsoft Azure" },
      { name: "Microsoft 365 Fundamentals (MS-900)", code: "MS-900", duration: "1 Day | 8 Hrs", level: "Beginner", skills: ["Microsoft 365 Services", "Security", "Compliance"], learners: "5K+", badge: "Trending", category: "Microsoft Azure" },
    ],
  },
  {
    name: "AWS",
    slug: "aws",
    description: "Gain hands-on expertise in Amazon Web Services with lab-based, exam-focused training.",
    icon: "server",
    courses: [
      { name: "AWS Certified Cloud Practitioner (CLF-C02)", code: "AWS-CCP", duration: "1–2 Days | 8 Hrs", level: "Beginner", skills: ["Cloud Fundamentals", "AWS Core Services", "Billing"], learners: "14K+", badge: "Popular", category: "AWS" },
      { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", code: "AWS-SAA", duration: "4 Days | 32 Hrs", level: "Intermediate", skills: ["Architecture Design", "High Availability", "Cost Optimization"], learners: "12K+", badge: "Popular", category: "AWS" },
      { name: "AWS Certified Developer – Associate (DVA-C02)", code: "AWS-DVA", duration: "3 Days | 24 Hrs", level: "Intermediate", skills: ["AWS SDKs", "Lambda", "API Gateway"], learners: "6K+", badge: "Trending", category: "AWS" },
      { name: "AWS Certified SysOps Administrator – Associate (SOA-C02)", code: "AWS-SOA", duration: "3 Days | 24 Hrs", level: "Intermediate", skills: ["Monitoring", "Deployment", "Security"], learners: "5K+", badge: "Trending", category: "AWS" },
      { name: "AWS Certified Solutions Architect – Professional (SAP-C02)", code: "AWS-SAP", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["Complex Architectures", "Migration", "Multi-Account Strategy"], learners: "4K+", badge: "Advance", category: "AWS" },
      { name: "AWS Certified DevOps Engineer – Professional (DOP-C02)", code: "AWS-DOP", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["CI/CD Pipelines", "Infrastructure as Code", "Automation"], learners: "3K+", badge: "Advance", category: "AWS" },
    ],
  },
  {
    name: "SAFe® Agile",
    slug: "safe-agile",
    description: "Scale agile practices across your enterprise with accredited SAFe training programs.",
    icon: "layers",
    courses: [
      { name: "Leading SAFe® 6.0 (SAFe Agilist – SA)", code: "SAFE-LSA", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Lean-Agile Mindset", "SAFe Principles", "PI Planning"], learners: "9K+", badge: "Popular", category: "SAFe® Agile" },
      { name: "SAFe® Scrum Master (SSM)", code: "SAFE-SSM", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Scrum in SAFe", "Iteration Execution", "Team Facilitation"], learners: "7K+", badge: "Popular", category: "SAFe® Agile" },
      { name: "SAFe® Product Owner/Product Manager (POPM)", code: "SAFE-POPM", duration: "2 Days | 16 Hrs", level: "Intermediate", skills: ["Product Backlog", "PI Objectives", "Customer Centricity"], learners: "6K+", badge: "Trending", category: "SAFe® Agile" },
      { name: "Implementing SAFe® 6.0 with SPC Certification", code: "SAFE-SPC", duration: "4 Days | 32 Hrs", level: "Expert", skills: ["ART Launch", "Value Stream Mapping", "SAFe Implementation"], learners: "3K+", badge: "Advance", category: "SAFe® Agile" },
      { name: "SAFe® Release Train Engineer (RTE)", code: "SAFE-RTE", duration: "3 Days | 24 Hrs", level: "Expert", skills: ["ART Coordination", "Program Execution", "Inspect & Adapt"], learners: "2K+", badge: "Advance", category: "SAFe® Agile" },
      { name: "SAFe® Lean Portfolio Management (LPM)", code: "SAFE-LPM", duration: "2 Days | 16 Hrs", level: "Expert", skills: ["Portfolio Strategy", "Lean Budgets", "Agile Governance"], learners: "2K+", badge: "Advance", category: "SAFe® Agile" },
    ],
  },
];

export const testimonials = [
  {
    name: "Priya M.",
    designation: "Project Manager, TCS",
    course: "PMP® Certification Training",
    quote: "The PMP training at The EduEdge was exceptional. The instructor broke down complex PMBOK concepts into practical, real-world scenarios. I passed on my first attempt with Above Target scores across all domains.",
  },
  {
    name: "Rajesh K.",
    designation: "Cloud Architect, Infosys",
    course: "AWS Solutions Architect – Associate",
    quote: "The hands-on lab experience was unmatched. The exam simulators were incredibly close to the real exam. I felt 100% prepared walking into the testing centre.",
  },
  {
    name: "Sneha D.",
    designation: "Security Analyst, Wipro",
    course: "CompTIA Security+ (SY0-701)",
    quote: "The training was thorough and well-structured. The practice tests and performance-based question preparation were the difference-maker. Highly recommend The EduEdge for any cybersecurity certification.",
  },
  {
    name: "Arjun V.",
    designation: "Agile Coach, Deloitte",
    course: "Leading SAFe® 6.0",
    quote: "Transformative training. The trainer had deep enterprise agile experience, and the case studies were directly applicable to my organization. Worth every rupee.",
  },
];

export const faqs = [
  {
    q: "What certification should I start with if I'm new to IT?",
    a: "If you're new to the industry, we recommend starting with CompTIA A+ for hardware/networking fundamentals, AWS Cloud Practitioner (CLF-C02) or Azure Fundamentals (AZ-900) for cloud, or CAPM® for project management. Our learning advisors can help you choose the right path based on your career goals.",
  },
  {
    q: "Are your courses accredited?",
    a: "Yes. All our training programs use official courseware and are delivered by certified instructors authorised by PMI (as a PMI Registered Education Provider), CompTIA, Microsoft, AWS, and Scaled Agile Inc.",
  },
  {
    q: "What is included in the course fee?",
    a: "Every program includes live instructor-led training, official courseware, hands-on labs (where applicable), full-length practice exams, 30-day recording access, a certificate of completion, and exam application support.",
  },
  {
    q: "Do you offer weekend or evening batches?",
    a: "Yes. Most certifications offer both weekday (intensive) and weekend batch options. We also offer custom scheduling for corporate groups. Check the course page for available schedules.",
  },
  {
    q: "What is the pass guarantee policy?",
    a: "If you complete the full training, attempt all practice exams, and do not pass the certification exam on your first try, you are eligible for free re-training in the next available batch. Terms and conditions apply.",
  },
  {
    q: "Can I switch between live online and classroom training?",
    a: "Yes, we offer flexible format switching. If a seat is available in the alternate format, you can switch at no additional cost. Contact your learning advisor to arrange this.",
  },
  {
    q: "Do you provide placement or career support?",
    a: "We provide career support including resume review, LinkedIn profile optimisation, and interview preparation guidance. While we do not guarantee placement, our certified learners report an average 35% salary increase within 6 months of certification.",
  },
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
