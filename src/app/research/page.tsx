"use client";

import { useState } from 'react';

export default function Research() {
  const [visibleCount, setVisibleCount] = useState(5);

  const impactStats = [
    { label: "Citations", value: "24+" },
    { label: "h-index", value: "Impact" },
    { label: "i10-index", value: "Reach" },
  ];

  const publications = [
    {
      title: "Enhancing Underwater Image Segmentation: A Semantic Approach to Segment Objects in Challenging Aquatic Environment",
      authors: "G George, S Anusuya",
      journal: "Procedia Computer Science, 235, 361-371",
      year: "2024",
      doi: "https://doi.org/10.1016/j.procs.2024.04.036"
    },
    {
      title: "Pretrained U-Net: In-depth Analysis of Binary Image Segmentation in Underwater Marine Environment",
      authors: "G George, A S",
      journal: "Machine Learning for Computational Science and Engineering, 4",
      year: "2025",
      doi: "https://doi.org/10.1007/s44379-024-00003-x"
    },
    {
      title: "Exploring the Superiority of Encoder-Decoder Architecture Over Traditional Image Processing Techniques for Binary Segmentation of Underwater Images",
      authors: "G George, A Anusuya, A Kanakala, CY Lau",
      journal: "AIP Conference Proceedings, 3161(1)",
      year: "2024",
      doi: "https://doi.org/10.1063/5.0229289"
    },
    {
      title: "Utilizing the Power of Residual and Attention Properties with Binary Focal Loss Optimization for Underwater Image Segmentation Using UNet Architecture",
      authors: "G George, S Anusuya",
      journal: "International Conference on Communication, Devices and Networking, 93-106",
      year: "2024",
      doi: "https://doi.org/10.1007/978-981-97-6465-5_9"
    },
    {
      title: "Performance Evaluation of a Multi-Class Classification Model for Marine Objects",
      authors: "G George",
      journal: "12th International Conference on Advanced Computing (ICoAC), 1-8",
      year: "2023",
      doi: "https://doi.org/10.1109/ICoAC59537.2023.10250023"
    },
    {
      title: "Advancing Underwater Binary Image Segmentation with PDBU-Net: A Progressive Approach to Feature Extraction and Accuracy Improvement",
      authors: "G George, S Anusuya",
      journal: "Regional Studies in Marine Science, 104065",
      year: "2025",
      doi: "https://doi.org/10.1016/j.rsma.2025.104065"
    },
    {
      title: "Leveraging EfficientNet-B3 with Advanced Fine-Tuning for Precise Breast Cancer Classification",
      authors: "G George, S Anusuya",
      journal: "IEEE 16th International Conference on Computational Intelligence and Computing",
      year: "2024",
      doi: "https://doi.org/10.1109/CICN63059.2024.10847503"
    },
    {
      title: "Underwater Image Classification Using Efficient Fine-Tuned DenseNet-121 with Image Augmentation and Adagrad Optimizer for Minimum Loss",
      authors: "G George",
      journal: "Global Conference on Information Technologies and Communications (GCITC)",
      year: "2023",
      doi: "https://doi.org/10.1109/GCITC60406.2023.10425927"
    },
    {
      title: "Revolutionizing Underwater Imaging: Unveiling the Impact and Advancements Enabled by the Keras UNet Family",
      authors: "G George, S Anusuya",
      journal: "International Conference on Intelligent Vision and Computing, 33-45",
      year: "2023",
      doi: "https://doi.org/10.1007/978-3-031-71388-0_4"
    },
    {
      title: "Analyzing Otsu’s Thresholding and Level-Set Algorithms Reliability in Underwater Image Segmentation",
      authors: "G George",
      journal: "Underwater Image Segmentation",
      year: "2023",
      doi: "http://dx.doi.org/10.1504/IJCVR.2024.10068414"
    }
  ];

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  return (
    <div className="container" style={{ paddingBottom: "4rem" }}>
      <header className="page-header">
        <h1 className="section-title">Research & Publications</h1>
        <p className="lead">
          Exploring the depths of Deep Learning, Computer Vision, and Marine Object Detection.
        </p>
      </header>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="stat-card card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="research-interests card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Research Interests</h3>
          <p style={{ color: 'var(--secondary)' }}>
            Artificial Intelligence • Machine Learning • Deep Learning • Computer Vision
          </p>
        </div>

        <div className="profile-links">
          <a href="https://scholar.google.com/citations?user=8hgfs2wAAAAJ&hl=en" target="_blank" className="btn btn-outline">
            View Google Scholar
          </a>
          <a href="https://orcid.org/0009-0007-1038-7391" target="_blank" className="btn btn-scopus">
            ORCID Profile
          </a>
        </div>
      </section>

      {/* Publications List */}
      <section className="publications-section">
        <h2 className="sub-title">Selected Publications</h2>
        <div className="publications-list">
          {publications.slice(0, visibleCount).map((pub, index) => (
            <div key={index} className="pub-card card">
              <div className="pub-year">{pub.year}</div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-journal">{pub.journal}</p>

              <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="doi-link">
                View DOI <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {visibleCount < publications.length && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={handleLoadMore} className="btn">
              Load More Publications
            </button>
          </div>
        )}
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

        .stats-section {
          margin-bottom: 5rem;
          text-align: center;
        }

        .stats-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .stat-card {
           padding: 1.5rem 3rem;
           text-align: center;
           min-width: 150px;
           background: var(--primary);
           color: #fff;
           border: none;
        }

        .stat-value {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff; /* White for contrast on primary bg */
        }

        .stat-label {
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .research-interests {
          display: inline-block;
          padding: 1.5rem 2rem;
          margin-bottom: 2rem;
          background: #f8fafc;
        }

        .profile-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
        }
        
        .btn-scopus {
           background: #a6c400;
           color: #fff;
           padding: 0.75rem 1.5rem;
           border-radius: 4px;
           font-weight: 500;
        }

        .sub-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--primary);
          border-bottom: 2px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .pub-card {
          padding: 2rem;
          position: relative;
          border-left: 4px solid transparent;
        }

        .pub-card:hover {
          border-left-color: var(--accent);
        }

        .pub-year {
          font-size: 3rem;
          font-weight: 700;
          color: #e2e8f0; /* Very light grey for background effect */
          position: absolute;
          top: 1rem;
          right: 2rem;
          line-height: 1;
        }

        .pub-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
          padding-right: 4rem; /* Space for year */
          line-height: 1.4;
        }

        .pub-authors {
          color: var(--secondary);
          font-style: italic;
          margin-bottom: 0.25rem;
        }
        
        .pub-journal {
          color: var(--foreground);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .doi-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .doi-link:hover span {
           transform: translateX(3px);
        }
        
        .doi-link span {
           transition: transform 0.2s ease;
        }

        @media (max-width: 768px) {
           .pub-year {
             position: static;
             font-size: 2rem;
             color: var(--secondary);
             margin-bottom: 0.5rem;
             opacity: 0.5;
           }
           .pub-title {
             padding-right: 0;
           }
        }
      `}</style>
    </div>
  );
}
