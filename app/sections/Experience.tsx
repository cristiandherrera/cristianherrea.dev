"use client";

import { useState } from "react";

const experiences = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Full Stack Developer & Data Engineer",
    company: "Freelance & Personal Projects",
    description: "Built end-to-end data solutions processing 1M+ records daily. Developed React dashboards with real-time analytics, reducing data analysis time by 75%. Created automated ETL pipelines using Python and Apache Airflow.",
    details: [
      "Architected and deployed scalable data pipelines handling over 1 million records daily using Python, Apache Airflow, and Azure Data Factory",
      "Developed real-time analytics dashboards with React, TypeScript, and D3.js, resulting in 75% reduction in data analysis time",
      "Implemented comprehensive ETL solutions integrating multiple data sources including REST APIs, databases, and file systems",
      "Built RESTful APIs with Node.js and Express, handling 10K+ requests per day with 99.9% uptime",
      "Optimized database queries and indexing strategies, improving query performance by 60%",
      "Deployed containerized applications using Docker and orchestrated with Kubernetes on Azure"
    ],
    technologies: ["Python", "React", "TypeScript", "Node.js", "Azure", "Docker", "Apache Airflow", "PostgreSQL", "MongoDB"]
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Data Analyst & Web Developer",
    company: "Emerging Tech Solutions",
    description: "Designed and implemented data visualization dashboards serving 500+ daily users. Built responsive web applications with React and Node.js while managing PostgreSQL databases and creating automated reporting systems.",
    details: [
      "Created interactive data visualization dashboards using React and Chart.js, serving 500+ daily active users",
      "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL",
      "Automated data collection and reporting processes, saving 20 hours per week of manual work",
      "Implemented data quality checks and validation rules, improving data accuracy by 95%",
      "Collaborated with cross-functional teams to gather requirements and deliver data-driven insights",
      "Built custom SQL queries and stored procedures for complex business logic and reporting needs"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "SQL", "Chart.js", "Express", "Git"]
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Junior Full Stack Developer",
    company: "Digital Innovation Hub",
    description: "Developed scalable web applications using modern JavaScript frameworks. Collaborated with data teams to integrate analytics features, improving user engagement metrics by 40%. Gained expertise in cloud deployment and database optimization.",
    details: [
      "Developed responsive web applications using React and Vue.js, improving user engagement by 40%",
      "Integrated analytics features and tracking mechanisms to monitor user behavior and application performance",
      "Participated in code reviews and implemented best practices for code quality and maintainability",
      "Optimized database queries and implemented caching strategies, reducing page load times by 50%",
      "Deployed applications to cloud platforms (AWS and Azure) with CI/CD pipelines",
      "Worked in Agile environment with daily standups and bi-weekly sprint planning"
    ],
    technologies: ["JavaScript", "React", "Vue.js", "Node.js", "MongoDB", "AWS", "Git", "Jenkins"]
  },
  {
    id: 4,
    date: "2020 - 2021",
    title: "Software Developer Intern",
    company: "TechStart Solutions",
    description: "Started my professional journey building web applications and learning industry best practices. Contributed to data migration projects and developed internal tools that streamlined team workflows by 30%.",
    details: [
      "Built internal tools and utilities using Python and JavaScript, improving team productivity by 30%",
      "Assisted in large-scale data migration project, successfully transferring 500K+ records",
      "Developed unit tests and documentation for existing codebases",
      "Participated in daily code reviews and learned industry best practices",
      "Created automated scripts for repetitive tasks, saving 10+ hours per week",
      "Gained hands-on experience with version control (Git) and collaborative development workflows"
    ],
    technologies: ["Python", "JavaScript", "HTML/CSS", "SQL", "Git", "JIRA"]
  },
];

interface ExperienceModal {
  isOpen: boolean;
  experience: typeof experiences[0] | null;
}

export default function Experience() {
  const [modal, setModal] = useState<ExperienceModal>({
    isOpen: false,
    experience: null
  });

  const openModal = (exp: typeof experiences[0]) => {
    setModal({ isOpen: true, experience: exp });
  };

  const closeModal = () => {
    setModal({ isOpen: false, experience: null });
  };
  return (
    <section id="experience" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--color-border)' }} className="timeline-line" />
            
            {/* Timeline items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                  className={index % 2 === 0 ? "timeline-left" : "timeline-right"}
                >
                  {/* Timeline dot */}
                  <div style={{ position: 'absolute', left: '2rem', width: '1rem', height: '1rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--background)' }} className="timeline-dot" />
                  
                  {/* Content */}
                  <div style={{ marginLeft: '5rem', width: '100%' }} className={index % 2 === 0 ? "timeline-content-left" : "timeline-content-right"}>
                    <div 
                      className="glass timeline-card" 
                      style={{ 
                        padding: '1.5rem', 
                        borderRadius: '0.5rem', 
                        cursor: 'pointer',
                        position: 'relative'
                      }} 
                      onClick={() => openModal(exp)}
                    >
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>{exp.date}</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '0.5rem' }}>{exp.title}</h3>
                      <h4 className="text-gray-static" style={{ fontSize: '1.125rem' }}>{exp.company}</h4>
                      <p className="text-gray-static" style={{ marginTop: '0.5rem' }}>{exp.description}</p>
                      <div style={{
                        marginTop: '1rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-primary)',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        Click to see more details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && modal.experience && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: 'var(--background)',
              borderRadius: '1rem',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '1.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  {modal.experience.date}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>
                  {modal.experience.title}
                </h3>
                <h4 className="text-gray-static" style={{ fontSize: '1.125rem' }}>
                  {modal.experience.company}
                </h4>
              </div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--foreground)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
                Key Achievements
              </h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {modal.experience.details.map((detail, index) => (
                  <li key={index} style={{
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.6'
                  }} className="text-gray-static">
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--color-primary)'
                    }}>▸</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {modal.experience.technologies && (
              <div>
                <h5 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
                  Technologies Used
                </h5>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {modal.experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}