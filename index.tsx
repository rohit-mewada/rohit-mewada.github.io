
import React, { useState, useEffect, FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import profileImage from './assets/profile-pic.png';
import AnimatedSection from './components/AnimatedSection';
import { skills, experiences, projects, certifications, achievements, socials } from './data/data';


// --- COMPONENTS ---

const Header: FC = () => (
  <header className="app-header">
    <div className="nav-container">
      <a href="#" className="nav-logo">RM.</a>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero: FC = () => {
    const roles = ["Software Developer", "Backend Engineer", "Cloud Enthusiast"];
    const [currentRole, setCurrentRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setCurrentRole(
                isDeleting
                    ? fullText.substring(0, currentRole.length - 1)
                    : fullText.substring(0, currentRole.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && currentRole === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentRole === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <h1>Hello, I'm Rohit Mewada</h1>
                <p className="subtitle">
                    {currentRole}
                    <span className="cursor">&nbsp;</span>
                </p>
                <p className="description">
                    I build scalable and resilient backend systems that solve real-world problems. Let's create something amazing together.
                </p>
                <a href="#contact" className="cta-button">Get In Touch</a>
            </div>
        </section>
    );
};

const About: FC = () => (
    <AnimatedSection id="about">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={profileImage} alt="Rohit Mewada" className="about-image" />
                <div>
                    <p>
                        I'm a passionate software developer with a knack for building robust and efficient backend systems. My expertise lies in Java, Spring Boot, and cloud technologies, where I focus on creating clean, scalable microservices architectures.
                    </p>
                    <div className="about-social-links">
                        {socials.map(social => (
                            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                    <ul className="skills-list">
                        {skills.map(skill => <li key={skill} className="skill-tag">{skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Experience: FC = () => (
    <AnimatedSection id="experience">
        <div className="container">
            <h2>My Journey</h2>
            <div className="experience-timeline">
                {experiences.map(exp => (
                    <div className="experience-card" key={exp.company}>
                        <h3>{exp.company}</h3>
                        <p className="role">{exp.role}</p>
                        <p className="date">{exp.date}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Projects: FC = () => (
    <AnimatedSection id="projects">
        <div className="container">
            <h2>Personal Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <div className="project-links">
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub <i className="fas fa-external-link-alt"></i></a>
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Demo <i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Certifications: FC = () => (
    <AnimatedSection id="certifications">
        <div className="container">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                {certifications.map(cert => (
                    <div className="certification-card" key={cert.title}>
                        <div className="cert-icon">
                            <i className={cert.icon}></i>
                        </div>
                        <div className="cert-details">
                            <h3>{cert.title}</h3>
                            <p>{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Achievements: FC = () => (
    <AnimatedSection id="achievements">
        <div className="container">
            <h2>Achievements</h2>
            <div className="achievements-grid">
                {achievements.map(ach => (
                     <div className="achievement-card" key={ach.title}>
                        <h3>{ach.title}</h3>
                        <p>{ach.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);


const Contact: FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <AnimatedSection id="contact">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Get In Touch</h2>
                <p>I'm currently open to new opportunities. Feel free to reach out via the form below or email me directly at <a href="mailto:rohitmewada98@gmail.com">rohitmewada98@gmail.com</a>.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </AnimatedSection>
    );
};

const Footer: FC = () => (
    <footer className="app-footer">
        <div className="container footer-content">
            <div className="social-links">
                <a href="https://github.com/rohit-mewada" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/rohitmewada98" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:rohitmewada98@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Rohit Mewada. All Rights Reserved.</p>
        </div>
    </footer>
);


const App: FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/3a8c5be373.js';
        script.crossOrigin = 'anonymous';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Certifications />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}