export default function Portfolio() {
  return (
    <div className="app-shell overflow-x-hidden">
      <nav className="navbar">
        <div className="section-container flex items-center justify-between">
          <h1 className="navbar-brand">Aditya</h1>
          <div className="nav-links hidden md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certifications" className="nav-link">Certificates</a>
          </div>
        </div>
      </nav>

      <section className="section-base relative overflow-hidden min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center">
        <div className="hero-bubbles">
          <span className="bubble-1" />
          <span className="bubble-2" />
        </div>

        <div className="section-container section-grid-2 items-center gap-10">
          <div className="hero-copy">
            <h1 className="hero-title">Aditya Maddheshiya</h1>
            <p className="hero-text">
              BTech (CSE-AIML) Student passionate about web development, cloud computing, and creating responsive modern applications.
            </p>

            <div className="btn-group mt-10">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFt-TtHML2TQh7U78iv6ffBxaQdBuMhAc2s3e7VlJGlFNwFA/viewform?usp=publish-editor" className="btn-primary">
                Contact Me
              </a>
              <a href="https://github.com/adityamaddheshiy" target="_blank" className="btn-secondary">
                GitHub
              </a>
            </div>
          </div>

          <div className="surface-card hero-panel">
            <h2 className="section-heading mb-6">Quick Info</h2>
            <div className="space-y-4 card-copy">
              <p>📞 <span className="text-white">+91 9569530930</span></p>
              <p>✉️ <span className="text-white">adityamaddheshiya669@gmail.com</span></p>
              <p>🎓 ABES Engineering College, Ghaziabad</p>
              <p>💻 Web Developer & AIML Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-base section-base-alt">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="surface-card p-10 card-copy shadow-panel">
            I am currently pursuing BTech in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning at ABES Engineering College. I enjoy building responsive web applications, exploring cloud technologies, and continuously improving my development skills through practical projects.
          </div>
        </div>
      </section>

      <section id="education" className="section-base">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="card-grid card-grid-3">
            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">BTech (CSE-AIML)</h3>
              <p className="card-subtitle mt-3">ABES EC | Ghaziabad</p>
              <p className="section-copy mt-5">2024 – 2027</p>
              <p className="card-strength mt-3">Percentage: 73.72%</p>
            </div>

            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">Diploma (CSE)</h3>
              <p className="card-subtitle mt-3">School of Management Sciences | Lucknow</p>
              <p className="section-copy mt-5">2021 – 2024</p>
              <p className="card-strength mt-3">Percentage: 71.2%</p>
            </div>

            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">Matriculate</h3>
              <p className="card-subtitle mt-3">Saraswati UMV | Mau</p>
              <p className="section-copy mt-5">2019 – 2020</p>
              <p className="card-strength mt-3">Percentage: 67.5%</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-base section-base-alt">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'C/C++',
              'JavaScript',
              'HTML5',
              'CSS3',
              'React.js',
              'Tailwind CSS',
              'Bootstrap',
              'MySQL',
              'MongoDB',
              'Git',
              'GitHub',
            ].map((skill) => (
              <div key={skill} className="tag-pill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-base">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="card-grid card-grid-3">
            <div className="surface-card p-8 surface-card-strong transition-transform duration-300 hover:-translate-y-2">
              <h3 className="card-title mb-4">Multipurpose App</h3>
              <p className="section-copy">
                Designed and developed a feature-rich Android application using Java and Firebase with responsive performance and scalable architecture.
              </p>
            </div>
            <div className="surface-card p-8 surface-card-strong transition-transform duration-300 hover:-translate-y-2">
              <h3 className="card-title mb-4">Quiz Website</h3>
              <p className="section-copy">
                Built a quiz platform with user login, timed quizzes, database connectivity, and automatic scoring using HTML, CSS, JavaScript, and MongoDB.
              </p>
            </div>
            <div className="surface-card p-8 surface-card-strong transition-transform duration-300 hover:-translate-y-2">
              <h3 className="card-title mb-4">Razorpay UI Clone</h3>
              <p className="section-copy">
                Recreated Razorpay’s official website UI using Tailwind CSS, focusing on responsive layouts, pixel-perfect design, and reusable components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section-base section-base-alt">
        <div className="section-container">
          <h2 className="section-title">Certifications</h2>
          <div className="card-grid card-grid-3">
            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">AWS Academy Cloud Foundation</h3>
              <p className="card-subtitle mt-4">AWS</p>
              <p className="card-strength mt-3">Issued: 2025-06-06</p>
            </div>
            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">AWS Academy Machine Learning</h3>
              <p className="card-subtitle mt-4">AWS</p>
              <p className="card-strength mt-3">Issued: 2025-06-06</p>
            </div>
            <div className="surface-card p-8 surface-card-strong">
              <h3 className="card-title">Data Science & Analytics</h3>
              <p className="card-subtitle mt-4">HCL GUVI</p>
              <p className="card-strength mt-3">Issued: 2025-08-02</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-base">
        <div className="section-container text-center">
          <p>© 2026 Aditya Maddheshiya. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/adityamaddheshiy" target="_blank" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
