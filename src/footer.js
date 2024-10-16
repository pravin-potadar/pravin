import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>Get In Touch</h5>
                        <ul className="list-unstyled">
                            <li><strong>Locations:</strong> Jath, Sangli, Maharashtra</li>
                            <li><strong>Email:</strong> contact.pravinpotadar@gmail.com</li>
                            <li><strong>Phone:</strong> +91 755 876 5703</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Me</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Report an Issue</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>My Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>© 2024 Potadar, All Rights Reserved. With Love by Pravin Potadar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
