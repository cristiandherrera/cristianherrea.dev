"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Real-time Analytics Dashboard",
    description: "Built a comprehensive analytics platform processing streaming data from multiple APIs. Features real-time visualizations, automated reporting, and predictive analytics with 99.9% uptime.",
    technologies: ["Python", "Apache Kafka", "React", "D3.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "data"
  },
  {
    id: 2,
    title: "E-Commerce Data Pipeline",
    description: "Designed and implemented ETL pipeline processing 2M+ daily transactions. Automated data quality checks and real-time inventory management reducing processing time by 80%.",
    technologies: ["Python", "Apache Airflow", "Snowflake", "dbt", "AWS", "Terraform"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "data"
  },
  {
    id: 3,
    title: "SaaS Web Application",
    description: "Full-stack SaaS platform with user authentication, subscription management, and integrated analytics dashboard. Serves 1000+ active users with 99.8% uptime.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "web"
  },
  {
    id: 4,
    title: "Machine Learning Model API",
    description: "Built scalable ML model serving infrastructure with automated retraining pipelines. Processes 50K+ predictions daily with sub-100ms response times.",
    technologies: ["Python", "FastAPI", "scikit-learn", "Docker", "Kubernetes", "MLflow"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "data"
  },
  {
    id: 5,
    title: "Task Management Platform",
    description: "Collaborative project management tool with real-time updates, file sharing, and advanced reporting. Features custom workflow automation and team analytics.",
    technologies: ["Vue.js", "Django", "WebSockets", "Redis", "PostgreSQL", "Celery"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "web"
  },
  {
    id: 6,
    title: "IoT Data Processing System",
    description: "Scalable IoT data ingestion and processing system handling 10M+ sensor readings per hour. Real-time anomaly detection and automated alerting system.",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "MQTT", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/400/300",
    category: "data"
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p style={{ textAlign: 'center', fontSize: '1.125rem', color: 'var(--color-accent)', marginBottom: '3rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
          A showcase of my work spanning web development and data engineering, from user-facing applications to robust data infrastructure
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass project-card"
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                transition: 'transform 300ms',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', height: '12rem', backgroundColor: 'var(--color-secondary)', overflow: 'hidden' }}>
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: project.category === 'data' 
                    ? 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))' 
                    : 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), rgba(30, 64, 175, 0.2))' 
                }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3.75rem', opacity: 0.2, color: 'var(--color-primary)' }}>
                    {project.category === 'data' ? 'DATA' : 'WEB'}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backgroundColor: project.category === 'data' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(37, 99, 235, 0.2)',
                    color: project.category === 'data' ? 'rgb(34, 197, 94)' : 'rgb(37, 99, 235)',
                    borderRadius: '9999px',
                    border: `1px solid ${project.category === 'data' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`
                  }}>
                    {project.category === 'data' ? 'Data Engineering' : 'Web Development'}
                  </span>
                </div>
                
                {/* Overlay with links */}
                <div className="project-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10, 10, 10, 0.9)', opacity: 0, transition: 'opacity 300ms', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <Link
                    href={project.liveUrl}
                    aria-label="View live project"
                  >
                    <span
                      style={{
                        padding: '0.75rem',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                        transition: 'background-color 200ms',
                        color: 'white',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                    >
                      <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    aria-label="View on GitHub"
                  >
                    <span
                      style={{
                        padding: '0.75rem',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                        transition: 'background-color 200ms',
                        color: 'white',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                    >
                      <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Project Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-accent)', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--color-primary)',
                        borderRadius: '9999px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}