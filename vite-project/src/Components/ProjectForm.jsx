import { useState } from 'react';

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addProject(title.trim(), description.trim());
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;