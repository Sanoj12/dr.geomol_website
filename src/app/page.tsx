"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="title">Dr.Geomol George</h1>
            <p className="subtitle">
              Assistant Professor | AI Research | Computer Vision | Intelligent Systems | Real-World Impact
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

          <div className="hero-image-container">
            <div className="image-wrapper">
              <Image
                src="/profile.jpg"
                alt="Geomol George"
                width={350}
                height={350}
                className="profile-image"
                priority
              />
            </div>
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
          gap: 4rem;
        }

        .hero-text {
          flex: 1;
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
        
        .hero-image-container {
           flex: 1;
           display: flex;
           justify-content: center;
           position: relative;
        }
        
        .image-wrapper {
           position: relative;
           padding: 10px;
           background: #fff;
           border: 1px solid var(--border);
           border-radius: 12px;
           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
           transition: transform 0.3s ease;
        }
        
        .image-wrapper:hover {
           transform: scale(1.02);
        }
        
        /* Next/Image styling handled via class or global CSS generally, but specific overrides here */
        :global(.profile-image) {
           border-radius: 8px;
           object-fit: cover;
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

        @media (max-width: 768px) {
          .hero { padding: 6rem 0 4rem; }
          .hero-content { 
            flex-direction: column-reverse; 
            text-align: center; 
            gap: 2rem; 
            align-items: center; /* Ensure items are centered in column layout */
          }
          .title { font-size: 2.5rem; }
          .cta-group { justify-content: center; }
          
          /* Remove frame styles completely on mobile */
          .image-wrapper { 
            transform: none !important; 
            max-width: 280px; /* Slightly increase for visibility */
            width: 100%;
            padding: 0 !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          /* Ensure no hover effects on mobile */
          .image-wrapper:hover {
            transform: none !important;
          }
          
          /* Optional: Add a simple rounded style instead of the heavy frame if desired, or keep it clean */
          :global(.profile-image) {
             border-radius: 50%; /* Make circular on mobile if preferred, or keep rounded rect */
             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* Add subtle shadow directly to image */
          }
        }
      `}</style>
    </div>
  );
}
