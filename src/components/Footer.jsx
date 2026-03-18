const Footer = () => {
  return (
    <div className="footer">

      {/* TOP SECTION */}
      <div className="footerTop">

        <div>
          <h4>Get to Know Us</h4>
          <p>About Amazon</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div>
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div>
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay</p>
        </div>

        <div>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Help</p>
        </div>

      </div>

      {/* MIDDLE */}
      <div className="footerMiddle">
        <h2>amazon</h2>
        <div className="footerOptions">
          <button>🌐 English</button>
          <button>🇮🇳 India</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footerBottom">
        <p>Conditions of Use & Sale</p>
        <p>Privacy Notice</p>
        <p>© 2026 Amazon Clone</p>
      </div>

    </div>
  );
};

export default Footer;