import './App.css'
import projects from './data/projects'
import ProjectCard from './components/ProjectCard'
import parcours from './data/parcours'
import Timeline from './components/Timeline'
import experiences from './data/experiences'

function App() {
  return (
    <div className="portfolio">
      
      <nav className="navbar">
        <div className="logo">Cyril Jacques</div>

        <div className="nav-links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section className="hero">
          <p className="hero-intro">Bonjour, je suis</p>

          <h1>Cyril Jacques</h1>

          <h2>Ingénieur informatique</h2>

          <p className="hero-description">
            Ingénieur informatique spécialité IA, je m'intéresse au développement logiciel d'outils d'analyse,
            et d'automatisation, je suis actuellement à la recherche de nouvelles opportunités professionnelles
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Voir mes projets
            </a>

            <a
              href="/cyril_jacques_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              Mon CV
            </a>

            <a
              href="https://github.com/CyrilJack"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub
            </a>
          </div>
        </section>


        {/* À PROPOS */}
        <section id="parcours" className="section">
          <p className="section-label">PARCOURS</p>
          <h2>Mon parcours</h2>

          <Timeline items={parcours} />
        </section>

        <section id="experience" className="section">
          <p className="section-label">EXPÉRIENCES</p>
          <h2>Mes expériences professionnelles</h2>

          <Timeline items={experiences} />
        </section>


        {/* COMPÉTENCES */}
        <section id="skills" className="section">
          <p className="section-label">COMPÉTENCES</p>

          <h2>Technologies & domaines</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Programmation</h3>
              <p>Python · Java · JavaScript · C++ · C# · Git · Docker · .NET </p>
            </div>

            <div className="skill-card">
              <h3>Intelligence artificielle</h3>
              <p> PyTorch · TensorFlow · Choco Solver · Jenetics</p>
            </div>

            <div className="skill-card">
              <h3>Optimisation</h3>
              <p>Recherche opérationnelle · Optimisation beyésienne · Informatique Quantique · PPC ·</p>
            </div>

            <div className="skill-card">
              <h3>Web & données</h3>
              <p>React · SQL · Bases de données · HTML · CSS · React · TypeScript · PHP · Laravel · Springboot </p>
            </div>

          </div>
        </section>


        {/* PROJETS */}
        <section id="projects" className="section">

          <p className="section-label">PROJETS</p>

          <h2>Mes projets</h2>

          <div className="projects-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact">
          <p className="section-label">CONTACT</p>

          <h2>Me contacter</h2>

          <p>
            Vous souhaitez échanger à propos d'une opportunité ou de l'un
            de mes projets ?
          </p>

          <a href="mailto:jacques.cyril80@gmail.com" className="button primary">
            Me contacter
          </a>
        </section>

      </main>


      <footer>
        <p>© 2026 Cyril Jacques</p>
      </footer>

    </div>
  )
}

export default App