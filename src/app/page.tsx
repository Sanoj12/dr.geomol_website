"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="title">Geomol George</h1>
            <p className="subtitle">
              Assistant Professor | Researcher in <span className="highlight">AI</span> & <span className="highlight">Underwater Object Detection</span>
            </p>
            <p className="institution">Chennai Institute of Technology</p>

            <div className="cta-group">
              <Link href="/contact" className="btn">
                Get in Touch
              </Link>
              <a
                href="https://scholar.google.com/citations?user=8hgfs2wAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginLeft: '1rem' }}
              >
                Google Scholar
              </a>
            </div>
          </div>
          {/* Decorative Element instead of glowing orb */}
          <div className="hero-decoration">
            <div className="decorative-square"></div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="container section-spacing">
        <h2 className="section-title">Professional Summary</h2>
        <div className="card summary-card">
          <p>
            A highly motivated Electronics and Communication Engineering professional specializing in
            <span className="text-highlight"> AI for Underwater Object Detection and Recognition</span>.
            Passionate about advancing AI and Machine Learning technologies, with a focus on developing
            innovative applications for complex underwater environments. Skilled in Deep Learning,
            Machine Learning, and Python programming, with expertise in image processing and analysis.
          </p>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="container section-spacing">
        <h2 className="section-title">Quick Highlights</h2>
        <div className="grid-highlights">
          <div className="card highlight-card">
            <h3>Ph.D. Scholar</h3>
            <p>Computer Science Engineering (Submitted Thesis)</p>
          </div>
          <div className="card highlight-card">
            <h3>Research Focus</h3>
            <p>Deep Learning, Underwater Image Segmentation, Marine Object Detection</p>
          </div>
          <div className="card highlight-card">
            <h3>Publications</h3>
            <p>Multiple papers in clustered journals and international conferences</p>
          </div>
          <div className="card highlight-card">
            <h3>Teaching</h3>
            <p>Assistant Professor at Chennai Institute of Technology</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f8fafc, #ffffff);
        }
        
        .hero {
          padding: 8rem 0 6rem;
          position: relative;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .hero-text {
          max-width: 600px;
          z-index: 2;
        }

        .title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
          line-height: 1.1;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .highlight {
          color: var(--primary);
          font-weight: 600;
        }
        
        .text-highlight {
           font-weight: 600;
           color: var(--primary);
        }

        .institution {
          font-size: 1.1rem;
          color: var(--secondary);
          opacity: 0.8;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .section-spacing {
          margin-bottom: 6rem;
        }
        
        .summary-card {
          font-size: 1.15rem;
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto;
          border-left: 4px solid var(--accent);
        }
        
        .grid-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .highlight-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--primary);
        }
        
        .highlight-card p {
          font-size: 0.95rem;
          color: var(--secondary);
        }
        
        .decorative-square {
          width: 300px;
          height: 300px;
          border: 20px solid rgba(15, 23, 42, 0.03);
          transform: rotate(45deg);
          position: absolute;
          right: 10%;
          top: 20%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero { padding: 6rem 0 4rem; }
          .hero-content { flex-direction: column; text-align: center; }
          .title { font-size: 2.5rem; }
          .cta-group { justify-content: center; }
          .decorative-square { display: none; }
        }
      `}</style>
    </div>
  );
}
