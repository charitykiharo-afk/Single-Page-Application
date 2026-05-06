import { useState, useEffect } from 'react';
import Header from './Components/Header';
import ProjectForm from './Components/ProjectForm';
import Searchbar from './Components/Searchbar';
import ProjectList from './Components/ProjectList';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load projects from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('projects');
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      const defaultProjects = [
        {
          id: 1,
          title: "E-commerce Website",
          description: "Online shopping website with cart and payment system."
        },
        {
          id: 2,
          title: "Weather Dashboard",
          description: "Shows live weather information using API."
        },
        {
          id: 3,
          title: "Todo App",
          description: "Simple task manager with add, edit and delete features."
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('projects', JSON.stringify(defaultProjects));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (title, description) => {
    setProjects([...projects, { id: Date.now(), title, description }]);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <ProjectForm addProject={addProject} />
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;