export interface WorkItem {
  year: number
  title: string
  company: string
  description: string
  tech: string[]
  current?: boolean
}

export const workHistoryHighlights: WorkItem[] = [
  {
    year: 2026,
    title: 'Senior Backend Engineer',
    company: 'Freetrade',
    description: 'Coming Soon...',
    tech: ['TypeScript', 'Node.js', 'React', 'GCP', 'Terraform', 'K8s'],
    current: true,
  },
  {
    year: 2023,
    title: 'Founding Software Engineer',
    company: 'Hyper',
    description:
      "Led the backend development and infrastructure for the flagship consumer social app, later expanding the platform's purpose as a source of real-world AI training data for robotics companies, defining technical direction and architecture throughout.\n" +
      '\n' +
      'Key Achievements:\n' +
      '• Scaled from 0 to 12,000+ weekly active users at peak across EU & US\n' +
      '• 180,000+ registered users\n' +
      '• 92,000+ social connections\n' +
      '• 3M+ accepted user submissions',
    tech: ['TypeScript', 'Node.js', 'React', 'AWS', 'Terraform'],
  },
  {
    year: 2023,
    title: 'Senior Software Engineer',
    company: 'Mirada Medical',
    description:
      'Developed and maintained the Interventional Radiology Solution (Simplicit90Y\u2122) and SaaS (DaaS) solutions.',
    tech: ['Java 11', 'Spring Boot', 'React', 'AWS', 'CloudFormation'],
  },
  {
    year: 2022,
    title: 'Software Engineer',
    company: 'Babylon',
    description:
      'Developed microservices and process automation solutions to support internal client operations.',
    tech: ['Java 11', 'Spring Boot', 'AWS', 'Kafka', 'Docker'],
  },
  {
    year: 2021,
    title: 'Software Engineer In Test',
    company: 'R3',
    description:
      'Maintained and evolved the in-house regression automation framework (CRAFT \u2192 CRAFT5), while developing functional test cases.',
    tech: ['Java 11', 'Kotlin', 'Azure'],
  },
  {
    year: 2020,
    title: 'Quality Assurance Engineer',
    company: 'Amazon',
    description:
      'Planned, documented, executed, and automated tests, cooperating with different teams and platforms while onboarding and extending testing frameworks.',
    tech: ['TypeScript', 'Scala', 'AWS', 'Webdriver.io'],
  },
  {
    year: 2019,
    title: 'Associate QA Engineer',
    company: 'ASOS.com',
    description:
      'Automated end-to-end tests, performed regression testing, analytics and accessibility testing.',
    tech: ['Swift', 'XCUITest'],
  },
]
