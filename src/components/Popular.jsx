import React from 'react';
import Welcome from "./Welcome";
import marty from "../assets/images/marty.jpg";
import nootherchoice from "../assets/images/nootherchoice.jpg";
import Annlee from "../assets/images/Annlee.jpg";
import avatar from "../assets/images/avatar.jpg";
import resurrection from "../assets/images/resurrection.jpg";
import hinder from "../assets/images/hinder.jpg";
import wrapped from "../assets/images/wrapped.png";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";
import eight from "../assets/images/8.jpg";
import nine from "../assets/images/9.jpg";
import ten from "../assets/images/10.jpg";
import eleven from "../assets/images/11.jpg";
import twelve from "../assets/images/12.jpg";
import moment from "../assets/images/moment.jpg";
import mercy from "../assets/images/mercy.jpg";
import sicario from "../assets/images/sicario.jpg";
import bop from "../assets/images/bop.jpg";
import bonetemple from "../assets/images/bonetemple.jpg";
import vacation from "../assets/images/vacation.jpg";
import listone from "../assets/images/listone.png";
import listtwo from "../assets/images/listtwo.png";
import listthree from "../assets/images/listthree.png";
import a from "../assets/images/a.jpg";
import b from "../assets/images/b.jpg";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.jpg";
import e from "../assets/images/e.jpg";
import f from "../assets/images/f.jpg";
import g from "../assets/images/g.jpg";
import h from "../assets/images/h.jpg";
import i from "../assets/images/i.jpg";
import j from "../assets/images/j.jpg";
import k from "../assets/images/k.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";

const Popular = () => {
  const moviePosters = [
    { id: 0, image: marty },
    { id: 1, image: nootherchoice },
    { id: 2, image: Annlee },
    { id: 3, image: avatar },
    { id: 4, image: resurrection },
    { id: 5, image: hinder },
    { id: 6, image: one },
    { id: 7, image: two },
    { id: 8, image: three },
    { id: 9, image: four },
    { id: 10, image: five },
    { id: 11, image: six }
  ];

  const justReviewedPosters = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];

  const Reviews = [
    {
      title: "People we Meet on Vacation",
      user: "michellie",
      rating: 5,
      review: "at least he didn't inpt a dictator thid time",
      likes: "17,022",
      poster: vacation,
    },
    {
      title: "The Moment",
      user: "itscharlibb",
      rating: 0,
      review: "final cut ",
      likes: "8,401",
      poster: moment,
    },
    {
      title: "28 years later: The Bone Temple",
      user: "Keanu",
      rating: 5,
      review: "Still haven't seen it",
      likes: "3",
      poster: bonetemple,
    },
    {
      title: "Birds of Prey",
      user: "abbieclay",
      rating: 4,
      review: "Can I just say thank you to Emily Henry and, most importantly, to Netflix for not casting Sofia Carson in this one",
      likes: "21,558",
      poster: bop,
    },
    {
      title: "Mercy",
      user: "theo",
      rating: 2,
      review: "bro was more in love with ohio than the girl",
      likes: "356",
      poster: mercy,
    },
    {
      title: "Sicario",
      user: "Jake",
      rating: 4,
      review: "Dr. Ian Kelson is my buddy. That's my best friend. That guy can come over anytime. That's my pal.",
      likes: "4,708",
      poster: sicario,
    },
  ];

  const lists = [
    {
      listimg: listone,
      listinfo: "people say greatest movie ever then it lives up to the hype",
      listuser: "abdullah",
      films: "188 films",
      likes: "21k",
      comments: "133",
    },
    {
      listimg: listtwo,
      listinfo: "Movies everyone should watch at least once during their lifetime",
      listuser: "fcbarcelona",
      films: "800 films",
      likes: "345k",
      comments: "2k",
    },
    {
      listimg: listthree,
      listinfo: "Classic movies for beginners",
      listuser: "alanis",
      films: "120 films",
      likes: "31k",
      comments: "733",
    },
  ];

  const Reviewers = [
    {
      name: "James (Schaffrillas)",
      filmcount: "1,383 films",
      reviewcount: "1,276 reviews",
    },
    {
      name: "Karsten",
      filmcount: "2,440 films",
      reviewcount: "1,629 reviews",
    },
    {
      name: "Joe A",
      filmcount: "2,147 films",
      reviewcount: "1,485 reviews",
    },
    {
      name: "Zoe rose bryant",
      filmcount: "5,039 films",
      reviewcount: "2,404 reviews",
    },
    {
      name: "mak",
      filmcount: "651 films",
      reviewcount: "719 reviews",
    },
  ];

  const Stories = [
    {
      id: "story1",
      storyimg: a,
      platform: "Arrow Video",
      headline: "Snakes on a Plane Unboxing",
      content: "Sit back. Relax. Enjoy the fright",
    },
    {
      storyimg: b,
      platform: "AFI",
      headline: "AFI FEST 2026 Dates Announced and Submissions Open",
      content: "AFI announced the dates for AFI FEST 2026 presented by Canva. The 40th edition of the Institute's annual film festival will take place October 21–25 at the TCL Chinese Theatres in the heart of Hollywood and will feature a curated selection of Red Carpet Premiere screenings, Special Screenings, World Cinema, Documentaries and Short Films.",
    },
    {
      storyimg: c,
      platform: "Cine Lumiere",
      headline: "Celebrating Claudia Cardinale",
      content: "Over a six-decade career, the late Claudia Cardinale starred in more than 150 films, including many classics of Italian and French cinema.",
    },
    {
      storyimg: d,
      platform: "MUBI",
      headline: "Working for the Knife: VFX Labor in Park Chan-wook's NO OTHER CHOICE",
      content: "Computer-enhanced imagery speaks to the film's broader themes about work and sacrifice.",
    },
    {
      storyimg: e,
      platform: "France Inter",
      headline: "skjbvjsfnblkfsnb  de Vincent Munier",
      content: "Au loin, la brume et les nuées d'oiseaux, au plus proche, le grouillement du monde sauvage et la présence cachée d'observateurs à l'affût.",
    },
    {
      storyimg: f,
      platform: "Cinema Urbana",
      headline: "Welcome to Cinema Urbana!",
      content: "Welcome to Cinema Urbana's Letterboxd. Your front-row seat to the film program of Antwerp city festival Zomer van Antwerpen!",
    },
    {
      storyimg: g,
      platform: "ARTHAUS",
      headline: "Philine Sonny erzählt, wie sie der Film The Outrun zu ihrem Song ourun inspiriert hat",
      content: "Vor einigen Tagen veröffentlichte die Sängerin, Songwriterin und Produzentin Philine Sonny ihre neue Single.",
    },
    {
      storyimg: h,
      platform: "The Odyssey Cinema",
      headline: "The Podyssey: Most Anticipated Films of 2026",
      content: "It's January and we're back at it (just about…). It's gonna be an exciting year for films, so the boys look ahead to some genuinely cracking sounding releases coming up in 2026.",
    },
    {
      storyimg: i,
      platform: "Cinema beltrade",
      headline: "la settimana al BELTRADE | what's on at BELTRADE!",
      content: "è una nuova settimana al @Cinema Beltrade, anche stavolta all'insegna di nuovi arrivi pluripremiati, #midnightmovie da non perdere.",
    },
    {
      storyimg: j,
      platform: "RobertEbert.com",
      headline: "The 17 Best Movies About Radio, Ranked",
      content: "Even in an era of CGI and AI, nothing is more vivid than the intimacy and imagination of radio or more direct than the connection radio has with listeners.",
    },
    {
      storyimg: k,
      platform: "Light House Cinema",
      headline: "MY FATHER'S SHADOW Q&A at Light House",
      content: "Light House Cinema, Volta Pictures, UMUTI:MA and Maona Art present a special preview of My Father's Shadow that will be followed by an in-person Q&A with director Akinola Davies Jr.",
    },
    {
      storyimg: d,
      platform: "Hyde Park Pictures House",
      headline: "This week's Hyde Park Pick: No Other Choice",
      content: "The film starts by introducing us to Man-su (Lee Byung Hun), a specialist in paper manufacturing with 25 years of experience.",
    },
  ];

  const Showdows = [
    {
      showdownimg: s1,
      showheading: "Glasses On!",
      showcontext: "Best 3D films",
    },
    {
      showdownimg: s2,
      showheading: "The Last Picture Show",
      showcontext: "Best Scenes in movie theaters",
    },
    {
      showdownimg: s3,
      showheading: "To Live and Die in LA",
      showcontext: "Best LA noir films",
    },
  ];

  const News = [
    {
      newsimg: s4,
      newsheading: "Live and Learn",
      newscontext: "Half Nelson filmmakers Ryan Fleck and Anna Boden reflect on twenty years of their scrappy indie drama.",
    },
    {
      newsimg: s5,
      newsheading: "Freedom Now!",
      newscontext: "A starter pack of 24 films about the Civil Rights Movement and Black liberation.",
    },
    {
      newsimg: s6,
      newsheading: "Year in Review Selects (January 2026)",
      newscontext: "The latest titles to rent on Letterboxd Video Store.",
    },
  ];

  return (
    <div>
      <Welcome />
      <div className="row mt-4">
        <div className="posters d-none d-lg-block col-lg-10 col-xl-8 mx-auto">
          <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
            {moviePosters.slice(0, 6).map(poster => (
              <div
                key={poster.id}
                id="popularimg"
                className="rounded"
                style={{
                  backgroundImage: `url(${poster.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "229px",
                  width: "154px",
                  cursor: 'pointer',

                }}
              />
            ))}
          </div>


          <div style={{
            backgroundImage: `url(${wrapped})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "100%",
            height: "100px",
            marginTop: "40px",
            marginBottom: "40px",
          }} />

          <h6 className="text-start mb-3" style={{ color: "#c6dcf1", fontSize: "1rem" }}>
            LETTERBOXD LETS YOU...
          </h6>

          <div style={{ display: "flex", gap: "15px", marginBottom: "10px" }}>
            <div id="info1" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-3">
                  <i className="bi bi-eye-fill mt-4" style={{ fontSize: "40px", color: "#99abba", paddingLeft: "20px" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-1" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    Keep track of every film you've ever watched or just start from day you join
                  </h6>
                </div>
              </div>
            </div>
            <div id="info2" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-3">
                  <i className="bi bi-heart-fill ms-4" style={{ fontSize: "40px", color: "#99abba" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-2" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    Show some love for your favorite films, lists and reviews with a "like"
                  </h6>
                </div>
              </div>
            </div>
            <div id="info3" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-2">
                  <i className="bi bi-list ms-4" style={{ fontSize: "50px", color: "#99abba" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-2" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    Write and share reviews follow friends and other members to read theirs
                  </h6>
                </div>
              </div>
            </div>
          </div>


          <div style={{ display: "flex", gap: "15px", marginBottom: "50px" }}>
            <div id="info1" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-2">
                  <i className="bi bi-star-fill ms-4" style={{ fontSize: "40px", color: "#99abba" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-1" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    Rate each film with a 5 star scale (half includes) to share your reaction
                  </h6>
                </div>
              </div>
            </div>
            <div id="info2" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-3">
                  <i className="bi bi-calendar-fill ms-4" style={{ fontSize: "35px", color: "#99abba" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-1" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    keep a diary of your film watching and upgrade to pro for comprehensive stats
                  </h6>
                </div>
              </div>
            </div>
            <div id="info3" className="infobox" style={{ height: "102px", flex: 1 }}>
              <div className="row">
                <div className="col-3 mt-3">
                  <i className="bi bi-box2-fill ms-4" style={{ fontSize: "35px", color: "#99abba" }}></i>
                </div>
                <div className="col-8 mb-1 mt-3 me-1" style={{ textAlign: "start" }}>
                  <h6 className="mt-1" style={{ color: "#c6dcf1", fontSize: "14px", fontWeight: "500", fontFamily: "Arial", lineHeight: "1.5" }}>
                    Compile and share lists of films on any topic keep a watchlist of films to see
                  </h6>
                </div>
              </div>
            </div>
          </div>


          <h6 className="text-start mb-3" style={{ color: "#c6dcf1", fontSize: "1rem", fontWeight: "300" }}>
            Just reviewed
          </h6>
          <hr style={{ color: "white" }} />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "50px" }}>
            {justReviewedPosters.map((img, index) => (
              <div
                key={index}
                id="popularimg"
                className="rounded"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100px",
                  width: "154px",
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>


          <h4 style={{ fontFamily: "sans-serif", color: "#c6dcf1", marginTop: "35px" }}>
            Write and share reviews. Compile your own lists. Share your life in film.
          </h4>
          <h5 style={{ color: "#c6dcf1", fontWeight: "lighter", marginTop: "15px" }}>
            Below are some popular reviews and lists from this week. Sign up to create your own.
          </h5>


          <div className="row justify-content-between mt-4">
            <div className="col-8">
              <div className="row">
                <h6 className="col" style={{ textAlign: "start", color: "#c6dcf1" }}>
                  Popular this week
                </h6>
                <h6 className="col" style={{ textAlign: "end", color: "#c6dcf1" }}>
                  more
                </h6>
                <hr style={{ color: "white" }} />
                
                {Reviews.map((r, index) => (
                  <div key={index}>
                    <div className="row align-items-start mb-2">
                      <div className="col-2" style={{ paddingLeft: "30px" }}>
                        <div
                          id="popularimg"
                          style={{
                            backgroundImage: `url(${r.poster})`,
                            height: "100px",
                            width: "64px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>

                      <div className="col-10">
                        <h3 style={{ color: "white", fontFamily: "Times New Roman", fontWeight: "800", marginTop: 0, textAlign: "left" }}>
                          {r.title}
                        </h3>

                        <div className="d-flex gap-2">
                          <h6 style={{ marginTop: "3px", color: "#c6dcf1", fontSize: "13px" }}>
                            {r.user}
                          </h6>
                          <div className="d-flex">
                            {Array(5).fill(0).map((_, i) => (
                              <span key={i} style={{ color: i < r.rating ? "#01c130" : "#555", fontSize: "15px" }}>★</span>
                            ))}
                          </div>
                        </div>

                        <h6 style={{ color: "#c6dcf1", textAlign: "left", paddingBottom: "10px", fontFamily: "new times roman" }}>
                          {r.review}
                        </h6>
                        <h6 style={{ color: "#c6dcf1", textAlign: "left", fontFamily: "times new roman" }}>
                          ❤︎ {r.likes} likes
                        </h6>
                      </div>
                    </div>
                    {index !== Reviews.length - 1 && <hr style={{ borderColor: "white", opacity: 0.5 }} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-1"></div>
            
            <div className="col-3">
              <div className="row mt-0">
                <h6 className="col" style={{ textAlign: "start", color: "#c6dcf1" }}>
                  Popular list
                </h6>
                <h6 className="col" style={{ textAlign: "end", color: "#c6dcf1" }}>
                  more
                </h6>
                <hr style={{ color: "white" }} />
              </div>
              
              {lists.map((l, index) => (
                <div key={index} className="mb-2">
                  <div
                    id="popularimg"
                    style={{
                      backgroundImage: `url(${l.listimg})`,
                      height: "100px",
                      width: "225px",
                      marginBottom: "4px",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <h6 style={{ color: "white", textAlign: "left" }}>
                    {l.listinfo}
                  </h6>
                  <div style={{ color: "#c6dcf1" }} className="d-flex gap-2">
                    <h6>{l.listuser}</h6>
                    <h6 style={{ fontWeight: "10", fontSize: "13px", marginTop: "1px" }}>
                      ❤︎ {l.likes}
                    </h6>
                    <h6 style={{ fontWeight: "10", fontSize: "13px", marginTop: "3px" }}>
                      🗒 {l.comments}
                    </h6>
                  </div>
                </div>
              ))}
              
              <div className="row mt-3">
                <h6 className="col" style={{ textAlign: "start", color: "#c6dcf1" }}>
                  Popular reviewers
                </h6>
                <h6 className="col" style={{ textAlign: "end", color: "#c6dcf1" }}>
                  more
                </h6>
                <hr style={{ color: "white" }} />
                
                {Reviewers.map((r, index) => (
                  <div key={index}>
                    <div className="d-flex align-items-center gap-3 py-1" style={{ marginLeft: "30px" }}>
                      <div style={{ lineHeight: "1.7" }}>
                        <h5 style={{ color: "white", margin: 0, fontSize: "16px" }}>
                          {r.name}
                        </h5>
                        <div className="d-flex gap-2" style={{ color: "#8faec7", fontSize: "13px" }}>
                          <span>{r.filmcount}</span>
                          <span>{r.reviewcount}</span>
                        </div>
                      </div>
                    </div>
                    <hr style={{ color: "#c6dcf1", margin: "6px 0" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-between mt-5" style={{ lineHeight: "0.1" }}>
            <h6 style={{ color: "#8faec7", fontSize: "12px" }}>Recent Stories</h6>
            <h6 style={{ color: "#8faec7", fontSize: "12px" }}>All HQS</h6>
          </div>
          <hr style={{ color: "#c6dcf1", margin: "1px 0" }} />
          
          <div className="story-grid mt-2">
            {Stories.map((s, index) => (
              <div className="story-card" key={index}>
                <img
                  style={{
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                  src={s.storyimg}
                  className="img-fluid"
                  alt=""
                />
                <div
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    textAlign: "left",
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                  }}
                  className="story-body"
                >
                  <h5 style={{ color: "#8faec7", fontSize: "13px" }}>
                    {s.platform}
                  </h5>
                  <h3
                    style={{
                      color: "white",
                      fontFamily: "new times roman",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    {s.headline}
                  </h3>
                  <p
                    style={{
                      color: "#8faec7",
                      fontSize: "13px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    {s.content}
                  </p>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#d9dedc",
                      fontStyle: "bold",
                      marginRight: "200px",
                    }}
                    href="#"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <h6
              className="col"
              style={{
                textAlign: "start",
                marginRight: "20px",
                color: "#c6dcf1",
                fontWeight: "lighter",
              }}
            >
              Recent Showdowns
            </h6>
            <h6
              className="col"
              style={{
                textAlign: "end",
                color: "#c6dcf1",
                fontWeight: "lighter",
              }}
            >
              more
            </h6>
            <hr style={{ color: "white" }} />
          </div>
          
          <div className="story-grid mt2">
            {Showdows.map((s, index) => (
              <div className="story-card" key={index}>
                <img
                  style={{
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                  src={s.showdownimg}
                  className="img-fluid"
                  alt=""
                />
                <div
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    textAlign: "left",
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                    backgroundColor: "#14191d",
                  }}
                  className="story-body"
                >
                  <h5
                    style={{
                      color: "white",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    {s.showheading}
                  </h5>
                  <p style={{ color: "#8faec7", fontSize: "15px" }}>
                    {s.showcontext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-2">
            <h6
              className="col"
              style={{
                textAlign: "start",
                color: "#c6dcf1",
                fontWeight: "lighter",
              }}
            >
              Recent News
            </h6>
            <h6
              className="col"
              style={{
                textAlign: "end",
                color: "#c6dcf1",
                fontWeight: "lighter",
              }}
            >
              more
            </h6>
            <hr style={{ color: "white" }} />
          </div>
          
          <div className="story-grid mt2">
            {News.map((n, index) => (
              <div className="story-card" key={index}>
                <img
                  style={{
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                  src={n.newsimg}
                  className="img-fluid"
                  alt=""
                />
                <div
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    textAlign: "left",
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                    backgroundColor: "#14191d",
                  }}
                  className="story-body"
                >
                  <h5
                    style={{
                      color: "white",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    {n.newsheading}
                  </h5>
                  <p style={{ color: "#8faec7", fontSize: "13px" }}>
                    {n.newscontext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="d-lg-none col-12 px-3">

          <div className="d-flex gap-2 overflow-auto pb-3 mb-4">
            {moviePosters.slice(0, 6).map(poster => (
              <div
                key={poster.id}
                className="flex-shrink-0 rounded"
                style={{
                  backgroundImage: `url(${poster.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "180px",
                  width: "120px",
                  minWidth: "120px"
                }}
              />
            ))}
          </div>


          <div className="text-center my-4">
            <div className="rounded p-3 mb-3" style={{
              backgroundImage: 'url(${wrapped})',
              color: 'white'
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>2025 YEAR IN REVIEW</h3>
            </div>
          </div>


          <h6 className="text-start mb-3" style={{ color: "#c6dcf1", fontSize: "0.85rem", letterSpacing: "0.5px" }}>
            LETTERBOXD LETS YOU...
          </h6>
          
          <div className="mb-4">
            {[
              { icon: "bi-eye-fill", text: "Keep track of every film you've ever watched (or just start from the day you join)" },
              { icon: "bi-heart-fill", text: "Show some love for your favorite films, lists and reviews with a like" },
              { icon: "bi-list", text: "Write and share reviews, and follow friends and other members to read theirs" },
              { icon: "bi-star-fill", text: "Rate each film on a five-star scale (with halves) to record and share your reaction" },
              { icon: "bi-calendar-fill", text: "Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)" },
              { icon: "bi-box2-fill", text: "Compile and share lists of films on any topic and keep a watchlist of films to see" }
            ].map((feature, i) => (
              <div key={i} className="mb-3">
                <div className="p-3 rounded d-flex align-items-start gap-3 infobox" 
                     style={{ minHeight: "80px" }}>
                  <i className={`bi ${feature.icon}`} style={{ fontSize: "2rem", color: "#99abba", flexShrink: 0, marginTop: "0.25rem" }}></i>
                  <p className="mb-0" style={{ color: "#c6dcf1", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className="mb-4">
            <h6 className="text-start mb-3" style={{ color: "#c6dcf1", fontSize: "0.85rem", letterSpacing: "0.5px" }}>
              ALL THE BEST MOMENTS AT THE 2025 ACADEMY AWARDS, HOSTED SUNDAY, MARCH 2 ON HULU
            </h6>
            
            <div className="d-flex gap-2 overflow-auto pb-3">
              {justReviewedPosters.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 rounded"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "120px",
                    width: "80px",
                    minWidth: "80px"
                  }}
                />
              ))}
            </div>
          </div>


          <div className="text-center my-5">
            <h4 className="text-white mb-3" style={{ 
              fontFamily: "sans-serif",
              fontSize: "1.5rem",
              lineHeight: '1.3',
              fontWeight: '400'
            }}>
              Write and share reviews. Compile your own lists. Share your life in film.
            </h4>
            <p style={{ color: "#c6dcf1", fontSize: "0.95rem" }}>
              Below are some popular reviews and lists from this week. Sign up to create your own.
            </p>
            <button className="btn btn-success mb-3" style={{
              backgroundColor: "#01ac1d",
              borderRadius: "4px",
              padding: "0.65rem 1.5rem",
              fontWeight: "bold"
            }}>
              BEST REVIEWED
            </button>
            <div className="d-flex justify-content-center gap-2 mb-4">
              <button className="btn btn-outline-light btn-sm">THIS WEEK</button>
              <button className="btn btn-outline-light btn-sm" style={{ opacity: 0.6 }}>ADDED</button>
              <button className="btn btn-outline-light btn-sm" style={{ opacity: 0.6 }}>POPULAR</button>
            </div>
          </div>


          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem", letterSpacing: "0.5px" }}>RECENT STORIES</h6>
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem" }}>ALL HQS</h6>
            </div>
            <hr style={{ color: "white", opacity: 0.2 }} />
            
            {Stories.slice(0, 3).map((story, index) => (
              <div key={index} className="mb-4">
                <img src={story.storyimg} className="rounded mb-2 w-100" alt={story.headline} style={{ height: "180px", objectFit: "cover" }} />
                <div style={{ color: "#8faec7", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
                  <i className="bi bi-circle-fill" style={{ fontSize: "0.4rem", marginRight: "0.5rem" }}></i>
                  {story.platform}
                </div>
                <h6 className="text-white mb-2" style={{ fontSize: "1rem", lineHeight: "1.3" }}>
                  {story.headline}
                </h6>
                <a href="#" style={{ color: "#d9dedc", fontSize: "0.85rem", textDecoration: "none" }}>
                  READ STORY
                </a>
                {index < 2 && <hr style={{ borderColor: "#445467", opacity: 0.2, marginTop: "1.5rem" }} />}
              </div>
            ))}=
          </div>


          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem", letterSpacing: "0.5px" }}>RECENT SHOWDOWNS</h6>
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem" }}>MORE</h6>
            </div>
            <hr style={{ color: "white", opacity: 0.2 }} />
            
            {Showdows.map((showdown, index) => (
              <div key={index} className="mb-4">
                <img src={showdown.showdownimg} className="rounded mb-2 w-100" alt={showdown.showheading} style={{ height: "180px", objectFit: "cover" }} />
                <h6 className="text-white mb-1" style={{ fontSize: "1rem", fontWeight: "700" }}>
                  {showdown.showheading}
                </h6>
                <p style={{ color: "#8faec7", fontSize: "0.9rem", marginBottom: "0" }}>
                  {showdown.showcontext}
                </p>
                {index < Showdows.length - 1 && <hr style={{ borderColor: "#445467", opacity: 0.2, marginTop: "1.5rem" }} />}
              </div>
            ))}
          </div>


          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem", letterSpacing: "0.5px" }}>RECENT NEWS</h6>
              <h6 style={{ color: "#c6dcf1", fontSize: "0.85rem" }}>MORE</h6>
            </div>
            <hr style={{ color: "white", opacity: 0.2 }} />
            
            {News.map((news, index) => (
              <div key={index} className="mb-4">
                <img src={news.newsimg} className="rounded mb-2 w-100" alt={news.newsheading} style={{ height: "180px", objectFit: "cover" }} />
                <h6 className="text-white mb-1" style={{ fontSize: "1rem", fontWeight: "700" }}>
                  {news.newsheading}
                </h6>
                <p style={{ color: "#8faec7", fontSize: "0.9rem" }}>
                  {news.newscontext}
                </p>
                {index < News.length - 1 && <hr style={{ borderColor: "#445467", opacity: 0.2, marginTop: "1.5rem" }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;