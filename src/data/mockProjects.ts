import type { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    projectName: 'E-Commerce Platform Redesign',
    clientName: 'TechCorp Industries',
    status: 'Active',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    description: 'Complete redesign of the e-commerce platform with modern UI/UX improvements and enhanced performance.',
  },
  {
    id: '2',
    projectName: 'Mobile App Development',
    clientName: 'StartupXYZ',
    status: 'Active',
    startDate: '2024-02-01',
    endDate: '2024-08-15',
    description: 'Native mobile application development for iOS and Android platforms.',
  },
  {
    id: '3',
    projectName: 'Legacy System Migration to Cloud Infrastructure with Modern Microservices Architecture',
    clientName: 'Enterprise Solutions Ltd',
    status: 'On Hold',
    startDate: '2023-11-10',
    endDate: null, // Missing end date - edge case
    description: 'Migration of legacy systems to cloud-based microservices architecture.',
  },
  {
    id: '4',
    projectName: 'Marketing Website',
    clientName: 'Local Business Co',
    status: 'Completed',
    startDate: '2023-09-01',
    endDate: '2023-12-15',
    description: 'Corporate marketing website with CMS integration.',
  },
  {
    id: '5',
    projectName: 'API Integration Project',
    clientName: 'TechCorp Industries',
    status: 'Active',
    startDate: '2024-03-10',
    endDate: '2024-07-20',
    description: 'Integration of third-party APIs for payment processing and shipping.',
  },
  {
    id: '6',
    projectName: 'Data Analytics Dashboard',
    clientName: 'DataDriven Inc',
    status: 'Completed',
    startDate: '2023-10-05',
    endDate: '2024-01-20',
    description: 'Real-time analytics dashboard with interactive visualizations.',
  },
  {
    id: '7',
    projectName: 'Security Audit',
    clientName: 'Enterprise Solutions Ltd',
    status: 'On Hold',
    startDate: '2024-01-20',
    endDate: '2024-05-10',
    description: 'Comprehensive security audit and vulnerability assessment.',
  },
  {
    id: '8',
    projectName: 'Short',
    clientName: 'A',
    status: 'Active',
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    // Missing description - edge case
  },
];

