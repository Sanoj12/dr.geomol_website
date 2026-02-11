"use client";

export default function Contact() {
  return (
    <div className="container" style={{ paddingBottom: "4rem" }}>
      <header className="page-header">
        <h1 className="section-title">Get in Touch</h1>
        <p className="lead">
          Feel free to reach out for research collaborations, academic queries, or just to say hello.
        </p>
      </header>

      <div className="contact-container">
        <div className="contact-info card">
          <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Contact Information</h2>
          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <a href="mailto:geomolgeorge@gmail.com">geomolgeorge@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📱</span>
            <div>
              <h3>Mobile</h3>
              <p>+91 94460 22865</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>No. 69, First Cross Street, TNHB Nolambur, Mogappair West, Chennai – 600037, India</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://scholar.google.com/citations?user=8hgfs2wAAAAJ&hl=en" target="_blank" className="btn btn-outline">
              Google Scholar
            </a>
            <a href="https://orcid.org/0009-0007-1038-7391" target="_blank" className="btn btn-scopus">
              ORCID Profile
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper card">
          <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Send a Message</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Write your message here..." rows={5}></textarea>
            </div>

            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .page-header {
          text-align: center;
          margin: 4rem 0 5rem;
        }

        .lead {
          font-size: 1.25rem;
          color: var(--secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .icon {
          font-size: 1.5rem;
          color: var(--primary);
          background: #f1f5f9;
          padding: 0.75rem;
          border-radius: 50%;
          line-height: 1;
        }

        .info-item h3 {
          font-size: 0.9rem;
          color: var(--secondary);
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .info-item p, .info-item a {
          font-size: 1.1rem;
          color: var(--foreground);
          font-weight: 500;
        }
        
        .social-links {
           margin-top: 3rem;
           display: flex;
           gap: 1rem;
           flex-wrap: wrap;
        }
        
        .btn-outline {
           background: transparent;
           border: 1px solid var(--primary);
           color: var(--primary);
           flex: 1;
           text-align: center;
        }
        
        .btn-scopus {
           background: #a6c400;
           color: white;
           flex: 1;
           text-align: center;
           padding: 0.75rem 1.5rem;
           border-radius: 4px;
           font-weight: 500;
        }

        .contact-form .form-group {
          margin-bottom: 1.5rem;
        }

        .contact-form label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--foreground);
          font-weight: 500;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 4px;
          background: #f8fafc;
          border: 1px solid var(--border);
          color: var(--foreground);
          font-family: inherit;
          transition: border-color 0.3s;
        }
        
        .contact-form input:focus,
        .contact-form textarea:focus {
           outline: none;
           border-color: var(--accent);
           background: #fff;
        }

        .submit-btn {
          width: 100%;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          /* Center headers inside cards for better mobile alignment */
          h2 {
            text-align: center;
          }
          
          .page-header {
            margin: 3rem 0 3rem;
          }
          
          .social-links {
            flex-direction: column;
            gap: 1rem; /* Maintain gap */
          }
          
          /* Make buttons full width and centered */
          .social-links a {
            width: 100%;
            text-align: center;
            display: block; /* Ensure it takes full width */
          }
          
          /* Prevent zoom on iOS inputs */
          .contact-form input,
          .contact-form textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
