import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusClass = (status: string) => {
    return `status status-${status.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-header">
        <h3 className="project-name" title={project.projectName}>
          {project.projectName}
        </h3>
        <span className={getStatusClass(project.status)}>{project.status}</span>
      </div>
      <div className="project-card-body">
        <div className="project-field">
          <span className="field-label">Client:</span>
          <span className="field-value">{project.clientName}</span>
        </div>
        <div className="project-field">
          <span className="field-label">Start Date:</span>
          <span className="field-value">{formatDate(project.startDate)}</span>
        </div>
        <div className="project-field">
          <span className="field-label">End Date:</span>
          <span className="field-value">{formatDate(project.endDate)}</span>
        </div>
      </div>
    </div>
  );
}

