"use client";

export default function About() {
  return (
    <div className="container" style={{ paddingBottom: "4rem" }}>
      <header className="page-header">
        <h1 className="section-title">About Me</h1>
        <p className="lead">
          My academic journey and professional evolution in the field of Artificial Intelligence and Computer Vision.
        </p>
      </header>

      {/* Structured Layout: Qualifications vs Experience */}
      <div className="about-content">

        {/* Academic Qualification Section */}
        <section className="about-section">
          <div className="section-header">
            <div className="icon-box">🎓</div>
            <h2>Academic Qualifications</h2>
          </div>

          <div className="timeline-list">
            <div className="timeline-card card">

              <h3>Ph.D. in Computer Science Engineering</h3>
              <p className="institution">SIMATS Engineering, SIMATS University, Chennai</p>
            </div>

            <div className="timeline-card card">
              <div className="meta">
                <span className="year">2013</span>

              </div>
              <h3>M.E. in Signal Processing</h3>
              <p className="institution">Rajagiri School of Engineering, Cochin (MG University)</p>
            </div>

            <div className="timeline-card card">
              <div className="meta">
                <span className="year">2009</span>

              </div>
              <h3>B.E. in Electronics & Communication</h3>
              <p className="institution">IHRD Govt. Engineering, Cherthala (Cochin University)</p>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="about-section">
          <div className="section-header">
            <div className="icon-box">💼</div>
            <h2>Professional Experience</h2>
          </div>

          <div className="experience-list">
            <div className="experience-card card">
              <div className="role-header">
                <h3>Junior Research Fellow (JRF)</h3>
                <span className="duration">Nov 2021 – Nov 2024</span>
              </div>
              <p className="institution">SIMATS Engineering, SIMATS University</p>
              <ul className="job-details">
                <li>Researching deep learning applications in underwater image segmentation.</li>
                <li>Developing AI models for object detection in marine environments.</li>
                <li>Publishing research in reputed journals.</li>
              </ul>
            </div>

            <div className="experience-card card">
              <div className="role-header">
                <h3>Assistant Professor</h3>
                <span className="duration">Current</span>
              </div>
              <p className="institution">Chennai Institute of Technology</p>
              <p className="job-summary">Focusing on AI curriculum and student research mentorship.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Skills Section - Clean Grid */}
      <section className="skills-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category card">
            <h3>Languages</h3>
            <div className="tags">
              <span>Python</span>
              <span>MATLAB</span>
            </div>
          </div>

          <div className="skill-category card">
            <h3>Deep Learning</h3>
            <div className="tags">
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>U-Net</span>
              <span>ResNet</span>
              <span>DenseNet</span>
            </div>
          </div>

          <div className="skill-category card">
            <h3>Computer Vision</h3>
            <div className="tags">
              <span>OpenCV</span>
              <span>Semantic Segmentation</span>
              <span>Object Detection</span>
            </div>
          </div>

          <div className="skill-category card">
            <h3>Tools</h3>
            <div className="tags">
              <span>Google Colab</span>
              <span>Anaconda</span>
              <span>Spyder</span>
              <span>LaTeX</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          text-align: center;
          margin: 4rem 0 5rem;
        }

        .lead {
          font-size: 1.25rem;
          color: var(--secondary);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }
        
        .section-header {
           display: flex;
           align-items: center;
           gap: 1rem;
           margin-bottom: 2rem;
           border-bottom: 2px solid var(--border);
           padding-bottom: 1rem;
        }
        
        .section-header h2 {
           font-size: 2rem;
           margin: 0;
           color: var(--primary);
        }
        
        .icon-box {
           width: 50px;
           height: 50px;
           background: var(--primary);
           color: #fff;
           display: flex;
           align-items: center;
           justify-content: center;
           border-radius: 8px;
           font-size: 1.5rem;
        }

        .timeline-list, .experience-list {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .timeline-card, .experience-card {
           border-left: 4px solid var(--accent);
        }

        .meta {
           display: flex;
           justify-content: space-between;
           margin-bottom: 0.5rem;
           font-size: 0.9rem;
        }

        .year {
           font-weight: 700;
           color: var(--primary);
        }
        
        .grade {
           color: var(--secondary);
        }
        
        .badge {
           background: rgba(14, 165, 233, 0.1);
           color: var(--accent);
           padding: 0.1rem 0.5rem;
           border-radius: 4px;
           font-weight: 600;
           font-size: 0.8rem;
        }

        .role-header {
           display: flex;
           justify-content: space-between;
           align-items: baseline;
           margin-bottom: 0.25rem;
           flex-wrap: wrap;
        }
        
        .role-header h3 {
           font-size: 1.25rem;
           margin: 0;
           color: var(--primary);
        }
        
        .duration {
           font-size: 0.9rem;
           color: var(--secondary);
           font-weight: 600;
        }

        .institution {
          font-weight: 500;
          color: var(--secondary);
          margin-bottom: 0.75rem;
        }

        .job-details {
          padding-left: 1.2rem;
          color: var(--foreground);
        }
        
        .job-details li {
           margin-bottom: 0.5rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-category {
           text-align: center;
           border-top: 4px solid var(--secondary);
        }
        
        .skill-category h3 {
           color: var(--primary);
           margin-bottom: 1rem;
           font-size: 1.2rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .tags span {
          padding: 0.4rem 0.8rem;
          background: #f1f5f9;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--secondary);
          transition: all 0.2s;
        }

        .tags span:hover {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 900px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
