"use client";

import Image from 'next/image';

interface Skill {
  name: string;
  svg: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", svg: "/tech/React.svg" },
      { name: "JavaScript", svg: "/tech/JavaScript.svg" },
      { name: "TypeScript", svg: "/tech/TypeScript.svg" },
      { name: "Tailwind CSS", svg: "/tech/Tailwind CSS.svg" },
      { name: "Bootstrap", svg: "/tech/Bootstrap.svg" },
      { name: "Vite.js", svg: "/tech/Vite.js.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", svg: "/tech/Node.js.svg" },
      { name: "Python", svg: "/tech/Python.svg" },
      { name: "Java", svg: "/tech/Java.svg" },
      { name: "C#", svg: "/tech/C%23%20(CSharp).svg" },
      { name: "Express", svg: "/tech/Express.svg" },
      { name: "Django", svg: "/tech/Django.svg" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "PostgreSQL", svg: "/tech/PostgresSQL.svg" },
      { name: "MongoDB", svg: "/tech/MongoDB.svg" },
      { name: "Azure SQL Database", svg: "/tech/Azure SQL Database.svg" },
      { name: "SQL Server", svg: "/tech/Microsoft SQL Server.svg" },
      { name: "Azure Synapse", svg: "/tech/Azure-Synapse-Analytics.svg" },
      { name: "Data Factory", svg: "/tech/Data-Factory.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--foreground)'
          }}>
            Relevant <span style={{ color: 'var(--color-primary)' }}>Skills</span>
          </h2>
        </div>
        
        {/* Skills Container */}
        <div className="glass" style={{
          padding: '3rem',
          borderRadius: '1rem',
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} style={{ marginBottom: categoryIndex < skillCategories.length - 1 ? '3rem' : '0' }}>
              {/* Category Title */}
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  marginBottom: '0.5rem'
                }}>
                  {category.title}
                </h3>
                {/* Underline */}
                <div style={{
                  width: '60px',
                  height: '3px',
                  background: 'var(--color-primary)',
                  margin: '0 auto',
                  borderRadius: '2px'
                }} />
              </div>

              {/* Skills Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2rem',
                justifyItems: 'center',
                alignItems: 'center',
                padding: '1rem 0'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem',
                      cursor: 'default',
                      width: '100%',
                      maxWidth: '140px',
                      transition: 'transform 0.2s ease',
                      willChange: 'transform'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Tech Icon - Optimized size and loading */}
                    <Image
                      src={skill.svg}
                      alt={skill.name}
                      width={64}
                      height={64}
                      loading={categoryIndex === 0 && skillIndex < 3 ? "eager" : "lazy"}
                      priority={categoryIndex === 0 && skillIndex < 3}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'contain'
                      }}
                    />
                    
                    {/* Tech Name */}
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      textAlign: 'center',
                      lineHeight: '1.2'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category Separator */}
              {categoryIndex < skillCategories.length - 1 && (
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                  marginTop: '2rem'
                }} />
              )}
            </div>
          ))}

          {/* Additional Tools Section */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem' }}>
            <div style={{
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              marginBottom: '2rem'
            }} />
            
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.5rem'
              }}>
                Other
              </h3>
              <div style={{
                width: '60px',
                height: '3px',
                background: 'var(--color-primary)',
                margin: '0 auto',
                borderRadius: '2px'
              }} />
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {[
                { name: "Git", svg: "/tech/Git.svg" },
                { name: "GitHub", svg: "/tech/GitHub.svg" },
                { name: "BitBucket", svg: "/tech/BitBucket.svg" },
                { name: "Azure", svg: "/tech/Azure.svg" },
              ].map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem',
                    cursor: 'default',
                    transition: 'transform 0.2s ease',
                    willChange: 'transform'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Tool Icon - Lazy loaded */}
                  <Image
                    src={tool.svg}
                    alt={tool.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--color-accent)',
                    textAlign: 'center'
                  }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}