import { useState } from 'react';
import './App.css';
import { mockProjects } from './data/mockProjects';
import type { Project, ProjectStatus } from './types/project';
import { filterProjects } from './utils/filterProjects';
import type { FilterState } from './utils/filterProjects';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedStatuses: [],
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filterProjects(mockProjects, filters);

  const handleStatusChange = (statuses: ProjectStatus[]) => {
    setFilters((prev) => ({ ...prev, selectedStatuses: statuses }));
  };

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Project Dashboard</h1>
      </header>
      <main className="app-main">
        <div className="dashboard-controls">
          <SearchBar
            searchQuery={filters.searchQuery}
            onSearchChange={handleSearchChange}
          />
          <Filters
            selectedStatuses={filters.selectedStatuses}
            onStatusChange={handleStatusChange}
          />
        </div>
        <div className="dashboard-content">
          {mockProjects.length === 0 ? (
            <div className="empty-state">
              <p>No projects available.</p>
            </div>
          ) : (
            <ProjectList
              projects={filteredProjects}
              onProjectClick={handleProjectClick}
            />
          )}
        </div>
      </main>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
