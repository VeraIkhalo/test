import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects found matching your filters.</p>
        <p className="empty-state-hint">Try adjusting your search or status filters.</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}

