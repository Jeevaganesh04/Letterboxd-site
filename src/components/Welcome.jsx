import timothe from "../assets/images/timothe.jpg";

const Welcome = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-10 col-xl-8 mx-auto position-relative mb-4 px-0">
        <div
          className="d-flex flex-column justify-content-end text-center"
          style={{
            minHeight: "675px",
            backgroundImage: `
              radial-gradient(
                ellipse at center,
                rgba(15,24,29,0.1) 10%,
                rgba(15,24,29,0.7) 90%,
                rgba(20,24,29,1) 100%
              ),
              url(${timothe})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem 1rem",
            paddingTop: "5rem"
          }}
        >
          <h1 className="testing text-white px-2" >
            Track films you've watched. Save those you want to see. Tell your friends what's good.
          </h1>


          <button
            className="getstared btn align-self-center "
            style={{
              backgroundColor: "#01ac1d",
              borderRadius: "4px",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            Get Started — it's free
          </button>

          {/* <button
            className="btn mt-3 align-self-center d-lg-none"
            style={{
              backgroundColor: "#01ac1d",
              borderRadius: "4px",
              color: "white",
              fontWeight: "bold",
              padding: "0.65rem 1.5rem",
              fontSize: "0.95rem"
            }}
          >
            Get started — it's free
          </button> */}

          <h5 className="socialnetwork mt-4 px-2 " style={{color: "#c6dcf1"}}>
            The Social Network for film lovers
          </h5>

          {/* <h6 className="mt-3 px-2 d-lg-none" style={{ 
            color: "#c6dcf1",
            fontSize: "0.95rem"
          }}>
            The social network for film lovers. Also available on 
            <i className="bi bi-apple ms-1"></i>
            <i className="bi bi-android2 ms-1"></i>
          </h6> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;