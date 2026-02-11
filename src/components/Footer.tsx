export default function Footer() {
    return (
        <footer style={{ marginTop: 'auto', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <p style={{ color: 'var(--secondary)' }}>&copy; {new Date().getFullYear()} Geomol George. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
