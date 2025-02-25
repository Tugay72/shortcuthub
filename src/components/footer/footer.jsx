import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h2>ShortcutHub</h2>
                        <p>Find the fastest way to boost your productivity!</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Categories</a></li>
                            <li><a href="/suggest">Submit a Shortcut</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>Email: <a href="mailto:support@shortcutfinder.com">support@shortcutfinder.com</a></p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Shortcut Finder. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
