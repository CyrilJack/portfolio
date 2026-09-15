function ProjectCard({ project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >

      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        className="project-image"
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <p className="project-link">
          Voir sur GitHub →
        </p>

      </div>

    </a>
  )
}

export default ProjectCard