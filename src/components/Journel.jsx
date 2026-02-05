import gosling from "../assets/images/gosling.jpg";
import j1 from "../assets/images/j1.jpg";
import j2 from "../assets/images/j2.jpg";
import j3 from "../assets/images/j3.jpg";
import j4 from "../assets/images/j4.jpg";
import j5 from "../assets/images/j5.jpg";
import j6 from "../assets/images/j6.jpg";
import pta from "../assets/images/pta.jpg";
const news = [
  {
    headingimg: j1,
    heading: "Deep Impact · 21 JAN 2026",
    content:
      "Live and Learn. With Half Nelson celebrating the twentieth anniversary of its Sundance premiere, ﬁlmmakers Anna Boden and Ryan Fleck tell Dan Mecca about their indie breakthrough, Ryan Gosling’s Oscar-nominated performance and how they snagged that Broken Social Scene score.",
    author: "DAN MECCA",
  },
  {
    headingimg: j2,
    heading: "Cinemascope",
    content:
      "Freedom Now! In honor of Martin Luther King Jr. Day, Robert Daniels recommends 24 ﬁlms that shed light on the Civil Rights Movement and the ongoing ﬁght for Black liberation in America.",
    author: "ROBERT DANIELS",
  },
  {
    headingimg: j3,
    heading: "Platform",
    content:
      "Year in Review Selects (January 2026). For our latest Letterboxd Video Store shelf, we’re ringing in our 2025 Year in Review with a celebration of select titles from the community’s favorites, as well as some highlights from previous editions.",
    author: "LETTERBOXD CREW",
  },
  {
    headingimg: j4,
    heading: "Interview",
    content:
      "Making Miracles. As the ambitious, emotional The Testament of Ann Lee sets sail, director Mona Fastvold, choreographer Celia Rowlson Hall and composer Daniel Blumberg tell Ella Kemp about their radical portrait of a leader.",
    author: "ELLA KEMP",
  },
  {
    headingimg: j5,
    heading: "Festival Circuit",
    content:
      "Sundance Seeking 2026. Charli XCX, Olivia Wilde, Kogonada and more: oh my! Here are ten of the ﬁlms we’re most looking forward to from the Sundance Film Festival’s ﬁnal year in Park City.",
    author: "LETTERBOXD CREW",
  },
  {
    headingimg: j6,
    heading: "Deep Impact",
    content:
      "The Social Network. With Yi Yi out now on 4K UHD from the Criterion Collection, Brendan Hodges reﬂects on Edward Yang’s rapturous city symphony and how his gentle century-deﬁning epic shows us who we really are.",
    author: "BRENDAN HODGES",
  },
];

const Journel = () => {
  return (
    <>
      <div className="goslingdiv">
        <div className="container">
          <div className="container">
            <div className="row text-white pt-4">
              <div className="col-12"></div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="row text-white align-items-center mt-4">
                  <div className="col-12 d-flex justify-content-between gap-4 opacity-75">
                    <h6 className="mb-0">sections</h6>
                    <h6 className="mb-0">newsletter</h6>
                  </div>
                </div>
                <hr className="hero-divider" />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-7 col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={gosling} className="img-fluid hero-img" />
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 text-white">
              <h6 className="text-uppercase opacity-75 mb-3">CinemaScope</h6>

              <h2 className="hero-title mb-4">
                Watchlist This! (January 2026).
              </h2>

              <p className="hero-text">
                Our picks of under-the-radar gems from this month’s new
                releases. This edition includes a generational Palestinian epic,
                the return of the Dardenne brothers, a football (soccer) drama,
                a colorful animated documentary and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="news-wrapper">
        <div className="container">
          <div className="news-grid">
            {news.map((n, i) => (
              <div key={i} className="card news">
                <img src={n.headingimg} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{n.heading}</h5>
                  <p className="card-text">{n.content}</p>
                  <h6 className="text-muted">{n.author}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="row align-items-center mt-5">
            <div className="col-lg-7 col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={gosling} className="img-fluid hero-img" />
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 text-white">
              <h6 className="text-uppercase opacity-75 mb-3">CinemaScope</h6>

              <h2 className="hero-title mb-4">
                Watchlist This! (January 2026).
              </h2>

              <p className="hero-text">
                Our picks of under-the-radar gems from this month’s new
                releases. This edition includes a generational Palestinian epic,
                the return of the Dardenne brothers, a football (soccer) drama,
                a colorful animated documentary and more.
              </p>
            </div>
          </div> */}
      <div className="row align-items-center mt-3">
        <div className="col-2"></div>

        <div className="col-lg-2 col-md-3 col-sm-12 mb-3 mb-md-0">
          <img src={pta} alt="" className="img-fluid" />
        </div>


        <div className="ptatext col-lg-6 col-md-5 col-sm-12 text-white">
          <p>
            All of these sources—whether it’s a fictional book, non-fiction
            work, or my own life or my own observations over the past twenty
            years— have gone into the soup of the whole film.—⁠Paul Thomas
            Anderson on One Battle After Another
          </p>
        </div>
        
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Journel;
