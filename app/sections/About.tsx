import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-static leading-relaxed mb-6">
              Full stack developer and data engineer with a passion for building scalable web applications 
              and robust data pipelines. I specialize in creating end-to-end solutions that combine intuitive 
              user experiences with powerful data-driven insights.
            </p>
            <p className="text-lg text-gray-static leading-relaxed mb-6">
              My expertise spans from React frontends to Python-based ETL processes, helping businesses make 
              informed decisions through both beautiful interfaces and comprehensive analytics. I don&apos;t just 
              build websites OR process data - I create complete ecosystems where data flows seamlessly from 
              source to stunning, interactive user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl" style={{ color: 'var(--color-primary)' }}>DATA</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">Web Development</h3>
                <p className="text-gray-static">Modern, responsive applications with cutting-edge technologies</p>
              </div>
              <div className="glass p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl" style={{ color: 'var(--color-primary)' }}>DATA</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">Data Engineering</h3>
                <p className="text-gray-static">Scalable pipelines and analytics infrastructure</p>
              </div>
              <div className="glass p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl" style={{ color: 'var(--color-primary)' }}>CODE</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">Full-Stack Solutions</h3>
                <p className="text-gray-static">Complete systems from data ingestion to user visualization</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}