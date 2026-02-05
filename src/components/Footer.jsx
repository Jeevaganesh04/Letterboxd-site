const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2d3441", padding: "2rem 0", marginTop: "4rem" }}>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto px-3 px-md-0">
          <div className="row g-3">
            <div className="col-12 col-lg-7 mb-3 mb-lg-0">
              <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center justify-content-lg-start" 
                   style={{ color: "#8faec7", fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)" }}>
                {['About', 'Pro', 'News', 'Apps', 'Year in Review', 'Gifts', 'Help', 'Terms', 'API', 'Contact'].map(item => (
                  <h6 key={item} className="mb-0" style={{ cursor: 'pointer' }}>{item}</h6>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="d-flex gap-3 justify-content-center justify-content-lg-end" 
                   style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", color: "#8faec7" }}>
                <i className="bi bi-instagram" style={{ cursor: 'pointer' }}></i>
                <i className="bi bi-twitter-x" style={{ cursor: 'pointer' }}></i>
                <i className="bi bi-facebook" style={{ cursor: 'pointer' }}></i>
                <i className="bi bi-tiktok" style={{ cursor: 'pointer' }}></i>
                <i className="bi bi-youtube" style={{ cursor: 'pointer' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
