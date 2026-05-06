function ProjectList({ projects }) {
  return (
    <div className="project-list">
      <h2>My Projects ({projects.length})</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProjectList;