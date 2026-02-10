import type { Project, ProjectStatus } from '../types/project';

export interface FilterState {
  searchQuery: string;
  selectedStatuses: ProjectStatus[];
}

export function filterProjects(
  projects: Project[],
  filters: FilterState
): Project[] {
  let filtered = [...projects]; 
  
  // Search filter
  if (filters.searchQuery.trim()) {
    const query = filters.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (project) =>
        project.projectName.toLowerCase().includes(query) ||
        project.clientName.toLowerCase().includes(query)
    );
  }

  // Status filter
  if (filters.selectedStatuses.length > 0) {
    filtered = filtered.filter((project) =>
      filters.selectedStatuses.includes(project.status)
    );
  }

  return filtered;
}

