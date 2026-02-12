"use client";

export default function Development() {



    const courses = [
        { title: "Deep Learning Internship", provider: "Pantech Prolabs India Pvt Ltd", date: "June 2023", link: "certificates/courses.pdf" },
        { title: "Multi-Class Semantic Image Segmentation with Keras in Python", provider: "Udemy", date: "May 2023", link: "certificates/Multi-Class Semantic Image Segmentation with Keras in Python.jpg.pdf" },
        { title: "U-Net: Image Segmentation with U-Net", provider: "Udemy", date: "May 2023", link: "certificates/UNet - Image Segmentation with UNet.jpg.pdf" },
        { title: "Computer Vision and Image Processing", provider: "IIT Guwahati (NPTEL)", link: "/certificates/Computer Vision and Image Processing - Fundamentals and Applications (1).jpg" },
        { title: "Deep Learning for Visual Computing", provider: "IIT Kharagpur (NPTEL)", score: "68% Elite Score", link: "/certificates/Deep Learning for Visual Computing.jpg" },
        { title: "Introduction to Machine Learning", provider: "IIT Madras (NPTEL)", link: "/certificates/Introduction to Machine Learning.jpg" },
        { title: "Research Methodology", provider: "IIT Madras (NPTEL)", link: "/certificates/Research Methodology.jpg" },
        { title: "NPTEL BELIEVER Award", provider: "NPTEL", date: "April 2022", link: "/certificates/NPTEL.jpeg" },
    ];

    return (
        <div className="container" style={{ paddingBottom: "4rem" }}>
            <header className="page-header">
                <h1 className="section-title">Professional Development</h1>
               
            </header>

            <div className="dev-grid">


                <section className="column">
                    <h2 className="sub-title">Courses & Certifications</h2>
                    <div className="list-container">
                        {courses.map((item, index) => (
                            <div key={index} className="dev-card card">
                                <div className="card-header">
                                    {item.date && <span className="date">{item.date}</span>}
                                    {item.score && <span className="score-badge">{item.score}</span>}
                                </div>
                                <h3>{item.title}</h3>
                                <p className="organizer">{item.provider}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        Click to access
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

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

        .dev-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }

        .sub-title {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: var(--primary);
          border-bottom: 2px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .list-container {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }
        
        /* Using global card style, just adding custom layout flex */
        .dev-card  {
           display: flex;
           flex-direction: column;
           height: 100%;
        }
        
        .card-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 0.75rem;
           flex-wrap: wrap;
           gap: 0.5rem;
        }

        .type-badge {
           font-size: 0.75rem;
           text-transform: uppercase;
           letter-spacing: 0.5px;
           color: var(--primary);
           font-weight: 700;
           background: #e2e8f0;
           padding: 0.25rem 0.5rem;
           border-radius: 4px;
        }

        .score-badge {
           background: var(--accent);
           color: white;
           padding: 0.2rem 0.5rem;
           border-radius: 4px;
           font-size: 0.8rem;
           font-weight: 600;
        }

        .date {
           font-size: 0.85rem;
           color: var(--secondary);
           font-weight: 500;
        }

        .dev-card h3 {
           font-size: 1.1rem;
           margin-bottom: 0.5rem;
           line-height: 1.4;
           color: var(--primary);
           flex-grow: 1;
        }

        .organizer {
           font-size: 0.95rem;
           color: var(--secondary);
           font-style: italic;
           margin-top: 0.5rem;
        }
        
        .cert-link {
            display: inline-block;
            margin-top: 1rem;
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            transition: color 0.2s;
        }
        
        .cert-link:hover {
            color: var(--primary);
            text-decoration: underline;
        }

        @media (max-width: 768px) {
           .dev-grid {
             grid-template-columns: 1fr;
           }
        }
      `}</style>
        </div>
    );
}
