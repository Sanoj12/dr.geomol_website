"use client";

export default function Development() {
    const fdps = [
        {
            title: "Machine Learning for Signal Processing: Applications and Research Challenges",
            organizer: "Kumaraguru College of Technology",
            date: "May 15-20, 2023",
            type: "One-Week FDP"
        },
        {
            title: "Recent Advances in Electronics and Communication Engineering – An Approach Through AI & ML",
            organizer: "Vignan’s Nirula Institute",
            date: "August 21-26, 2023",
            type: "One-Week National Level FDP"
        },
        {
            title: "Research Advances in Computational Intelligence",
            organizer: "Saveetha School of Engineering",
            date: "December 19-23, 2022",
            type: "5-day Course"
        },
        {
            title: "Emerging Technologies",
            organizer: "Vidyavardhaka College of Engineering",
            date: "December 11-15, 2023",
            type: "FDP"
        },
        {
            title: "Research Methodology and Developing Research Skills",
            organizer: "Shridevi Institute",
            date: "February 26 to March 1, 2024",
            type: "FDP"
        },
        {
            title: "Image, Audio, & Video Processing for Pattern Recognition",
            organizer: "IEEE SPS Seasonal School",
            date: "June 23-28, 2022",
            type: "Seasonal School"
        },
        {
            title: "Deep Learning and Its Applications",
            organizer: "Kalpataru Institute",
            date: "March 6-10, 2023",
            type: "Five-Day Workshop"
        },
        {
            title: "LaTeX for Technical Documentation",
            organizer: "Saveetha School of Engineering",
            date: "September 26-30, 2022",
            type: "Five-Day Workshop"
        },
        {
            title: "Applications of Artificial Intelligence using Machine Learning and Deep Learning",
            organizer: "Anna University",
            date: "August 28-29, 2023",
            type: "Two-Day Workshop"
        },
        {
            title: "Signal Processing, Artificial Intelligence, and Machine Learning in Biomedical Engineering",
            organizer: "Saveetha School of Engineering",
            date: "November 16-18, 2022",
            type: "FDP"
        },
        {
            title: "Case Studies in Artificial Intelligence and Machine Learning",
            organizer: "PSGR Krishnammal College for Women",
            date: "November 17, 2022",
            type: "International Workshop"
        }
    ];

    const courses = [
        { title: "Deep Learning Internship", provider: "Pantech Prolabs India Pvt Ltd", date: "June 2023" },
        { title: "Multi-Class Semantic Image Segmentation with Keras in Python", provider: "Udemy", date: "May 2023" },
        { title: "U-Net: Image Segmentation with U-Net", provider: "Udemy", date: "May 2023" },
        { title: "Computer Vision and Image Processing", provider: "IIT Guwahati (NPTEL)", score: "57%" },
        { title: "Deep Learning for Visual Computing", provider: "IIT Kharagpur (NPTEL)", score: "68% Elite Score" },
        { title: "Introduction to Machine Learning", provider: "IIT Madras (NPTEL)", score: "50%" },
        { title: "Research Methodology", provider: "IIT Madras (NPTEL)", score: "62%" },
        { title: "NPTEL BELIEVER Award", provider: "NPTEL", date: "April 2022" },
    ];

    return (
        <div className="container" style={{ paddingBottom: "4rem" }}>
            <header className="page-header">
                <h1 className="section-title">Professional Development</h1>
                <p className="lead">
                    Continuous learning through Faculty Development Programs, Workshops, and Certifications.
                </p>
            </header>

            <div className="dev-grid">
                <section className="column">
                    <h2 className="sub-title">Faculty Development & Workshops</h2>
                    <div className="list-container">
                        {fdps.map((item, index) => (
                            <div key={index} className="dev-card card">
                                <div className="card-header">
                                    <span className="type-badge">{item.type}</span>
                                    <span className="date">{item.date}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p className="organizer">Organized by {item.organizer}</p>
                            </div>
                        ))}
                    </div>
                </section>

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
        
        @media (max-width: 768px) {
           .dev-grid {
             grid-template-columns: 1fr;
           }
        }
      `}</style>
        </div>
    );
}
