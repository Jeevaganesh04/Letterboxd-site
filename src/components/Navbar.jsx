import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20,
      }}
    >
      <div className="row m-0 ">
        <div className="col-2 px-0"></div>

        <div className="col-8 px-0">
          <nav
            className="d-flex align-items-center justify-content-between"
            style={{
              padding: "1rem",
              background: "transparent",
            }}
          >
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" style={{ height: 40, width: 40 }} />
              <Link className="text-decoration-none" to="./">
                <h2
                  className="mb-0 text-white d-none d-lg-block"
                  style={{ fontWeight: 700, marginLeft: 10 }}
                >
                  Letterboxd
                </h2>
              </Link>
            </div>

            <div className="d-none d-lg-flex gap-2 align-items-center text-white flex-nowrap ms-auto">
              <h6 className="mb-0">SIGN IN</h6>
              <h6 className="mb-0">CREATE ACCOUNT</h6>
              <h6 className="mb-0">FILMS</h6>
              <h6 className="mb-0">LISTS</h6>

              <Link className="text-decoration-none text-white" to="/Journel">
                <h6 className="mb-0">JOURNAL</h6>
              </Link>

              <input
                type="text"
                placeholder="Search"
                className="form-control"
                style={{
                  width: 160,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              />
            </div>

            <div className="d-lg-none d-flex gap-3">
              <i className="bi bi-search text-white fs-5"></i>
              <i className="bi bi-list text-white fs-4"></i>
            </div>
          </nav>
        </div>

        <div className="col-2 px-0"></div>
      </div>
    </div>
  );
};

export default Navbar;
