import type {EducationItem, ExperienceItem, ProjectItem, SiteSettings, SkillGroup} from './types'

export const fallbackSiteSettings: SiteSettings = {
  name: 'Mateo Pereira',
  role: 'Software Engineer',
  tagline: 'Computer Enthusiast, Programmer, and Problem Solver',
  summary:
    'Software Engineer at Wells Fargo working on Java applications, CI/CD automation, and internal tooling. Rutgers University Computer Science graduate.',
  email: 'mateo.pereira2002@gmail.com',
  githubUrl: 'https://github.com/mateo-pereira',
  linkedinUrl: 'https://linkedin.com/in/mateo-pereiracs',
  resumeUrl: '/MateoPereira_Resume.pdf',
}

export const fallbackExperience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Wells Fargo',
    location: 'Charlotte, North Carolina',
    startDate: '2024-07',
    isCurrent: true,
    bullets: [
      'Developing Java applications to generate packages for Home Lending',
      'Resolved security vulnerabilities across 25+ Java microservices by implementing code fixes, validating compatibility, and deploying updates to production environments',
      'Maintained CI/CD pipelines in Harness, OCP, Jenkins, and UCD to automate application builds and deployments',
      'Monitored 4+ applications and 20+ environments to detect and resolve application issues, along with contributing to weekly releases',
      'Working alongside a team of developers to automate verification of the creation of loan packages, speeding up workflow by 60%',
      'Using multithreading in Python to manipulate hundreds of zip files simultaneously per execution, processing zip files 250% faster/min, deployed to multiple Linux VMs',
      'Making configuration changes to upgrade external/internal libraries and their dependencies using Gradle and Artifactory',
      'Creating scripts with OpenRewrite to replace files needed to run projects locally, eliminating 45 minutes of setup per application onboarding process',
    ],
  },
  {
    role: 'Web Designer',
    company: 'Create Humanity 501(c)(3)',
    location: 'New York City, New York',
    startDate: '2022-01',
    endDate: '2023-12',
    bullets: [
      'Increased sales by over 40% by collaborating with two senior executives on the full-stack design and implementation of the website for over 5,000 users monthly using HTML, CSS, and JavaScript',
    ],
  },
]

export const fallbackProjects: ProjectItem[] = [
  {
    title: 'Internal Workflow Automation System',
    subtitle: 'Cross-Platform Integrator',
    location: 'Charlotte, North Carolina',
    startDate: '2025-04',
    endDate: '2025-09',
    bullets: [
      'Automated employee onboarding by using Google Apps Script to trigger emails based on Google Sheets and Docs inputs, and integrated SignRequest for document signing',
      'Connected Slack for event scheduling and Notion for auto-generated weekly recaps, complete with dynamic task assignment automation',
    ],
    tags: ['Google Apps Script', 'Slack API', 'Notion API', 'SignRequest'],
  },
  {
    title: 'Beast Bot',
    subtitle: 'Multi-Functional Discord Bot',
    location: 'Charlotte, North Carolina',
    startDate: '2024-05',
    isCurrent: true,
    bullets: [
      'Developed and deployed a scalable Python-based Discord bot on an Ubuntu-based VM hosted on Oracle Cloud Infrastructure, deployed using Docker, serving over 5,000+ users daily',
      'Integrated MongoDB to manage personalized user, game, and event data',
      'Built automated features to reward and re-engage users by implementing birthday-triggered subscription discounts and individualized notifications, contributing to a 40% increase in subscriptions',
    ],
    tags: ['Python', 'Docker', 'MongoDB', 'Oracle Cloud'],
  },
  {
    title: 'BuyMe',
    subtitle: 'Auction Site',
    location: 'Clifton, New Jersey',
    startDate: '2023-05',
    endDate: '2023-08',
    bullets: [
      "Engineered a full-stack application that replicates eBay's auction functionality",
      'Utilized JDBC to handle and process queries requested on a site created using HTML, CSS, and JavaScript, stored in a MySQL database',
    ],
    tags: ['Java', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
]

export const fallbackSkillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'SQL', 'C', 'JavaScript', 'Lua', 'Perl', 'JSP', 'HTML', 'CSS', 'MATLAB'],
  },
  {
    category: 'Technology',
    items: [
      'MongoDB',
      'Git',
      'Docker',
      'OCP',
      'Harness',
      'Jenkins',
      'Jira',
      'Gradle',
      'Splunk',
      'Groovy',
      'UCD',
      'Postman',
      'Oracle Cloud',
      'Artifactory',
      'Kafka',
      'Spring Framework',
      'JDBC',
      'Unix',
      'Node.js',
    ],
  },
  {
    category: 'Certifications & Practices',
    items: ['AZ-900 Certification', 'DevOps', 'CI/CD Pipeline', 'Full Stack', 'Data Management', 'Algorithms'],
  },
]

export const fallbackEducation: EducationItem[] = [
  {
    school: 'Rutgers University',
    degree: 'Bachelor of Arts in Computer Science',
    location: 'New Brunswick, New Jersey',
    startDate: '2020-09',
    endDate: '2024-05',
  },
]
