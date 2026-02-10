import type { ProjectStatus } from '../types/project';

interface FiltersProps {
  selectedStatuses: ProjectStatus[];
  onStatusChange: (statuses: ProjectStatus[]) => void;
}

const ALL_STATUSES: ProjectStatus[] = ['Active', 'On Hold', 'Completed'];

export default function Filters({ selectedStatuses, onStatusChange }: FiltersProps) {
  const handleStatusToggle = (status: ProjectStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const handleSelectAll = () => {
    if (selectedStatuses.length === ALL_STATUSES.length) {
      onStatusChange([]);
    } else {
      onStatusChange([...ALL_STATUSES]);
    }
  };

  return (
    <div className="filters">
      <h3>Filter by Status</h3>
      <div className="filters-options">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={selectedStatuses.length === ALL_STATUSES.length}
            onChange={handleSelectAll}
          />
          <span>Select All</span>
        </label>
        {ALL_STATUSES.map((status) => (
          <label key={status} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedStatuses.includes(status)}
              onChange={() => handleStatusToggle(status)}
            />
            <span>{status}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

