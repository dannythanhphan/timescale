import "./styles/footer.scss"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="copyright-container">
                <div className="copyright">
                    © 2020 Travelize
                </div>
            </div>
            <div className="privacy-terms-container">
                <a className="footer-link" href="">
                    Privacy Policy
                </a>
                <a className="footer-link" href="">
                    Terms and conditions
                </a>
            </div>
        </div>
    )
};

export default Footer;