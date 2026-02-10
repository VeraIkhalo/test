import type { Project } from '../types/project';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusClass = (status: string) => {
    return `status status-${status.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="project-detail-header">
          <h2>{project.projectName}</h2>
          <button className="close-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="project-detail-body">
          <div className="detail-field">
            <span className="detail-label">Client Name:</span>
            <span className="detail-value">{project.clientName}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Status:</span>
            <span className={getStatusClass(project.status)}>{project.status}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Start Date:</span>
            <span className="detail-value">{formatDate(project.startDate)}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">End Date:</span>
            <span className="detail-value">{formatDate(project.endDate)}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Description:</span>
            <span className="detail-value">
              {project.description || 'No description available'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

