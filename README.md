# Project Dashboard

A clean, functional Project Dashboard interface built with React, TypeScript, and Vite. This application demonstrates frontend development skills including component architecture, state management, filtering logic, and edge case handling.

## Features

- **Project List View**: Displays projects with Project Name, Client Name, Status, Start Date, and End Date
- **Advanced Filtering**: 
  - Multi-select status filter (Active, On Hold, Completed)
  - Search by Project Name or Client Name
  - Filters work in combination without mutating original data
- **Project Detail View**: Modal panel showing all project details including an additional Description field
- **Edge Case Handling**: 
  - Empty state when no projects available
  - No results message when filters return empty
  - Handles missing optional fields (endDate, description)
  - Handles long project names with text truncation

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Filters.tsx     # Status filter component
│   ├── ProjectCard.tsx # Individual project card
│   ├── ProjectDetail.tsx # Project detail modal
│   ├── ProjectList.tsx # Project list container
│   └── SearchBar.tsx   # Search input component
├── data/               # Mock data
│   └── mockProjects.ts # Sample project data
├── types/              # TypeScript type definitions
│   └── project.ts      # Project interface and types
├── utils/              # Utility functions
│   └── filterProjects.ts # Filtering logic
├── App.tsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles
└── main.tsx            # Application entry point
```

## Assumptions Made

1. **Date Format**: Dates are stored as ISO strings (YYYY-MM-DD) and displayed in a user-friendly format (e.g., "Jan 15, 2024")
2. **Status Values**: Status is limited to exactly three values: "Active", "On Hold", "Completed"
3. **Client-Side Only**: All filtering and data manipulation happens on the client side
4. **No Routing**: Project detail view is implemented as a modal overlay rather than a separate route (keeps it simple)
5. **Responsive Design**: Mobile-friendly layout with breakpoint at 768px
6. **Accessibility**: Basic accessibility considerations (labels, ARIA attributes where appropriate)

## Trade-offs

1. **Modal vs. Routing**: Chose modal overlay for project details instead of routing to keep the implementation simple and avoid adding a routing library. This works well for a small application but might not scale for larger apps.

2. **State Management**: Used React hooks (useState) instead of a state management library. This is sufficient for the current scope but would need refactoring if the app grows significantly.

3. **Styling Approach**: Used plain CSS instead of CSS-in-JS or Tailwind. This keeps dependencies minimal but requires more manual CSS management.

4. **Filter Logic**: Implemented filtering in a utility function rather than a custom hook. This keeps the logic testable and reusable but could be abstracted further if needed.

5. **Mock Data**: Hardcoded mock data in a TypeScript file. In a real application, this would come from an API, but for this assignment, it demonstrates the data structure and edge cases.

## Extra Field

**Description**: Added a `description` field to projects. This field is optional and displays "No description available" when missing. This demonstrates handling of optional fields in the UI.

## Edge Cases Handled

1. **No Projects**: Shows a message when the projects array is empty
2. **No Filter Results**: Shows a helpful message when filters return no results
3. **Missing End Date**: Displays "N/A" or "Not specified" when endDate is null
4. **Missing Description**: Shows "No description available" in the detail view
5. **Long Project Names**: Truncates with ellipsis and shows full name on hover
6. **Empty Search**: Handles empty search queries gracefully
7. **No Status Selected**: Shows all projects when no status filters are applied

## Technical Decisions

1. **Functional Components**: All components are functional using React hooks, following modern React best practices
2. **TypeScript**: Full type safety with interfaces for Project and FilterState
3. **Immutable Filtering**: Filter function creates a new array instead of mutating the original data
4. **Component Separation**: Each component has a single responsibility (Filters, Search, List, Card, Detail)
5. **CSS Organization**: Styles are organized by component sections with clear naming conventions

## AI Usage Disclosure

### AI_USAGE.md

**What tools were used:**
- Cursor AI (Claude Sonnet 4.5) for code generation and assistance

**For which parts:**
- Initial project structure and component scaffolding
- TypeScript type definitions
- Filtering utility function logic
- CSS styling and layout
- README documentation structure

**What was changed or rejected:**
- Initially considered using a routing library (React Router) but rejected it in favor of a simpler modal approach
- Rejected using CSS-in-JS libraries in favor of plain CSS to keep dependencies minimal
- Simplified some AI-suggested complex state management patterns to use basic useState hooks
- Adjusted CSS to be more maintainable and less "clever"

**What I don't fully agree with in the AI output:**
- Some AI suggestions for more complex state management patterns were over-engineered for this use case
- Initial CSS suggestions were too verbose; simplified to be more concise
- Some component abstractions were suggested that would have added unnecessary complexity


