// app/projects/page.tsx
export default function ProjectsPage() {
    const projects = [
      { title: "Project One", description: "A fantastic project about X.", link: "#" },
      { title: "Project Two", description: "A cool app for doing Y.", link: "#" },
      { title: "Project Three", description: "An innovative solution for Z.", link: "#" },
    ];
  
    return (
      <div className="container">
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link}>Learn More</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  