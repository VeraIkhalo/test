interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">Search Projects</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search by project name or client name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

