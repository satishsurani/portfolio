import Cursor from "./Components/Cursor";
import Nav from "./Components/Nav";
import "./css/styles.css";
import dp from "./assets/dp.jpeg";
import htmlicon from "./assets/800px-HTML5_Badge.svg.png";
import cssicon from "./assets/CSS3_logo.svg.png";
import jsicon from "./assets/javascript-logo-8892AEFCAC-seeklogo.com.png";
import laravelicon from "./assets/laravel.svg";
import djangoicon from "./assets/django.webp";
import todo from "./assets/todo.png";
import mybus from "./assets/mybus.png";
import SkillCard from "./Components/SkillCard";
import Test from "./Components/Test";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./Components/Button";
import jqicon from "./assets/jquery.webp";
import mysqlicon from "./assets/mysql.png";
import aimlicon from "./assets/aiml.webp";
import giticon from "./assets/git.png";
import phpicon from "./assets/php.png";
import fern from "./assets/fern.png";
import wordpressicon from "./assets/wordpress.webp";
import pythonicon from "./assets/python.webp";
// import phpicon from "./assets/php.png";
// import dockericon from './assets/97_Docker_logo_logos-512.png'
// import storybookicon from './assets/storybook-icon.svg'
// import awsicon from './assets/AWS-Cloud-logo_32.svg'

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };

  const { scrollYProgress } = useScroll();
  const translateX1 = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);
  const translateX2 = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  const translateX3 = useTransform(scrollYProgress, [0, 1], ["0vh", "35vh"]);
  const translateX4 = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);
  const translateX5 = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  const translateX6 = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);

  const [portfolioImg, setPortfolioImg] = useState<string>("none");

  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [0, window.innerWidth], [-1, 1]);
  const translateX = useTransform(x, [0, window.innerWidth], [-10, 10]);

  useEffect(() => {
    window.addEventListener("scroll", toggleBackground);
    const footerDiv = document.getElementById("footer");

    function toggleBackground() {
      const windowheight = window.innerHeight;
      let revealtop = 0;
      if (footerDiv) {
        revealtop = footerDiv.getBoundingClientRect().top;
      }
      const revealPoint = 400;

      if (revealtop < windowheight - revealPoint) {
        setBackgroundColor("active");
      } else {
        setBackgroundColor("");
      }
    }
  }, []);

  return (
    <>
      <Cursor cursorVariant={cursorVariant} backgroundState={backgroundColor} />
      <header>
        <Nav
          textEnter={textEnter}
          textLeave={textLeave}
          backgroundState={backgroundColor}
        ></Nav>
      </header>

      <Test />

      <main data-state={backgroundColor ? "active" : ""}>
        <section className="section-home-intro">
          <div className="small-txt-ihero">
            <motion.div
              className="small-txt-block-1"
              initial={{
                opacity: "0%",
                transform: "translateY(30px)",
              }}
              animate={{
                opacity: "100%",
                transform: "translateY(0px)",
                transition: {
                  delay: 1,
                  duration: 0.5,
                },
              }}
            >
              <h4>
                Php &&
                Laravel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;specialising
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Developing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Systems _
              </h4>
            </motion.div>
          </div>
          <motion.div
            className="hero-parent"
            initial={{
              opacity: "0%",
              transform: "translateY(30px)",
            }}
            animate={{
              opacity: "100%",
              transform: "translateY(0px)",
              transition: {
                delay: 0.8,
                duration: 0.5,
              },
            }}
          >
            <div className="headline-txt">
              <motion.div style={{ x: translateX1 }}>
                <h1 className="heading-1">
                  <span className="heading-accent">. Hi there.</span>Hi there.
                  <span className="heading-accent"> G'day.</span>
                </h1>
              </motion.div>
              <motion.div style={{ x: translateX2 }}>
                <h1 className="heading-2">
                  <span className="heading-accent">I am. I am. </span>I'm
                  <span className="heading-accent">. I am. I am</span>
                </h1>
              </motion.div>
            </div>
            <div className="headline-txt">
              <motion.div style={{ x: translateX3 }}>
                <h1 className="heading-3">
                  <span className="heading-accent">. Satish.</span>Satish
                  <span className="heading-accent">. Satish.</span>
                </h1>
              </motion.div>
              <motion.div style={{ x: translateX4 }}>
                <h1 className="heading-4">
                  <span className="heading-accent">. Surani.</span> Surani.
                  <span className="heading-accent"> Surani.</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <div className="small-txt-ihero-2">
          <motion.div
            className="small-txt-block-2"
            initial={{
              transform: "translateY(80px)",
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: {
                duration: 0.8,
              },
            }}
          >
            <h1>
              &nbsp;&nbsp;&nbsp;&nbsp;just
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bit
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; me _
            </h1>
          </motion.div>
        </div>

        <section className="section-about">
          <motion.div
            className="about-hero"
            initial={{
              opacity: 0,
              transform: "translateY(60px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <div className="flex-mobile">
              <img className="dp" src={dp} alt="" />
              <div className="about-txt">
                <p>
                  I'm a passionate developer based in Gandhinagar, Gujrat.
                  <br />
                  <br />
                  Welcome to my portfolio! I'm a developer specializing in Wordpress and Backend Developer, building dynamic web applications. I'm always
                  learning new skills, solving problems, and exploring the power
                  of AI. Currently open to projects—feel
                  free to connect!
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="small-txt-ihero-3">
          <motion.div
            className="small-txt-block-3"
            initial={{
              transform: "translateY(80px)",
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: {
                duration: 0.8,
              },
            }}
          >
            <h6>
              the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;techstack
              <br />
              &nbsp;&nbsp;that&nbsp;&nbsp;&nbsp;i&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              use _
            </h6>
          </motion.div>
        </div>

        {/* SKILL CARD SECTION */}

        <section className="section-skills">
          <div className="skills-box skills-container">
            <SkillCard imgurl={wordpressicon}>Wordpress</SkillCard>
            <SkillCard imgurl={pythonicon}>Python</SkillCard>
            <SkillCard imgurl={phpicon}>Php</SkillCard>
            <SkillCard imgurl={laravelicon}>Laravel</SkillCard>
            <SkillCard imgurl={htmlicon}>HTML</SkillCard>
            <SkillCard imgurl={cssicon}>CSS</SkillCard>
            <SkillCard imgurl={jsicon}>JavaScript</SkillCard>
            <SkillCard imgurl={jqicon}>Jquery</SkillCard>
            <SkillCard imgurl={mysqlicon}>MySql</SkillCard>
            <SkillCard imgurl={aimlicon}>AI/ML</SkillCard>
            <SkillCard imgurl={djangoicon}>Django</SkillCard>
            <SkillCard imgurl={giticon}>Git & GitHub</SkillCard>

            {/* <SkillCard  imgurl={tsicon}>TypeScript</SkillCard> */}
            {/* <SkillCard  imgurl={reacticon}>React</SkillCard> */}
            {/* <SkillCard  imgurl={reduxicon}>Redux</SkillCard> */}
            {/* <SkillCard  imgurl={muiicon}>Material UI</SkillCard> */}
            {/* <SkillCard  imgurl={storybookicon}>Storybook</SkillCard> */}
            {/* <SkillCard  imgurl={mongodbicon}>MongoDB</SkillCard> */}
            {/* <SkillCard  imgurl={expressicon}>Express</SkillCard> */}
            {/* <SkillCard  imgurl={nodeicon}>Node.js</SkillCard> */}
            {/* <SkillCard  imgurl={dockericon}>Docker</SkillCard> */}
            {/* <SkillCard  imgurl={awsicon}>AWS</SkillCard> */}
          </div>
        </section>

        <section className="section-projects">
          <div className="container">
            <div className="small-txt-ihero-4">
              <motion.div
                className="small-txt-block-4"
                initial={{
                  transform: "translateY(80px)",
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: {
                    duration: 0.8,
                  },
                }}
              >
                <h6>
                  here's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what
                  <br />
                  i&nbsp;&nbsp;&nbsp;can&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; do _
                </h6>
              </motion.div>
            </div>
            <div
              className="portfolio-box"
              onMouseLeave={() => setPortfolioImg("none")}
              onMouseMove={(event) => {
                x.set(event.clientX);
              }}
            >
              

              <a
                href="https://github.com/satishsurani/Mybus-Bus-Booking-site"
                title="Github Repo"
                target="_blank"
                className="portfolio-block-1"
                onMouseEnter={() => setPortfolioImg("mybus")}
              >
                <p className="small-txt-font">02.</p>
                <motion.h2
                  className="heading-txt margin-bottom"
                  animate={{
                    transform:
                      portfolioImg === "mybus"
                        ? "translateX(15px)"
                        : "translateX(0px)",
                    opacity:
                      portfolioImg === "mybus" || portfolioImg === "none"
                        ? 1
                        : 0.4,
                    color:
                      portfolioImg === "mybus" || portfolioImg === "none"
                        ? "#0f0f0f"
                        : "#c8c1b4",
                    transition: {
                      duration: 1.7,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  MyBus.
                </motion.h2>
                <motion.img
                  style={{ translateX, rotateZ }}
                  className="portfolio-img"
                  src={mybus}
                  alt="mybus"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    transform:
                      portfolioImg === "mybus"
                        ? `translateX(0px)`
                        : "translateX(90px) rotate(4deg)",
                    opacity: portfolioImg === "mybus" ? 1 : 0,
                    transition: {
                      duration: 1,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                />
              </a>

              <a
                href="https://github.com/satishsurani/The-Fern-Hotel-Booking-Site"
                title="Github Repo"
                target="_blank"
                className="portfolio-block-1"
                onMouseEnter={() => setPortfolioImg("fern")}
              >
                <p className="small-txt-font">01.</p>
                <motion.h2
                  className="heading-txt margin-bottom"
                  animate={{
                    transform:
                      portfolioImg === "fern"
                        ? "translateX(15px)"
                        : "translateX(0px)",
                    opacity:
                      portfolioImg === "fern" || portfolioImg === "none"
                        ? 1
                        : 0.4,
                    color:
                      portfolioImg === "fern" || portfolioImg === "none"
                        ? "#0f0f0f"
                        : "#c8c1b4",
                    transition: {
                      duration: 1.7,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  The Fern Hotel.
                </motion.h2>
                <motion.img
                  style={{ translateX, rotateZ }}
                  className="portfolio-img"
                  src={fern}
                  alt="mybus"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    transform:
                      portfolioImg === "fern"
                        ? `translateX(0px)`
                        : "translateX(90px) rotate(4deg)",
                    opacity: portfolioImg === "fern" ? 1 : 0,
                    transition: {
                      duration: 1,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                />
              </a>
              
              <a
                href="https://github.com/satishsurani/TodoApp-Laravel"
                title="Github repo"
                target="_blank"
                className="portfolio-block-1"
                onMouseEnter={() => setPortfolioImg("todo")}
              >
                <p className="small-txt-font">03.</p>
                <motion.h2
                  className="heading-txt margin-bottom"
                  animate={{
                    transform:
                      portfolioImg === "todo"
                        ? "translateX(15px)"
                        : "translateX(0px)",
                    opacity:
                      portfolioImg === "todo" || portfolioImg === "none"
                        ? 1
                        : 0.4,
                    color:
                      portfolioImg === "todo" || portfolioImg === "none"
                        ? "#0f0f0f"
                        : "#c8c1b4",
                    transition: {
                      duration: 1.7,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  TodoApp Laravel
                </motion.h2>
                <motion.img
                  style={{ translateX, rotateZ }}
                  className="portfolio-img"
                  src={todo}
                  alt="job page"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    transform:
                      portfolioImg === "todo"
                        ? `translateX(0px)`
                        : "translateX(90px) rotate(4deg)",
                    opacity: portfolioImg === "todo" ? 1 : 0,
                    transition: {
                      duration: 1,
                      ease: [0.3, 1.4, 0.3, 1],
                    },
                  }}
                />
              </a>

              {/* <div className="portfolio-block-1 important" onMouseEnter={() => setPortfolioImg("admin")}>
                <p className='small-txt-font'>04.</p>
                <motion.h2 className='heading-txt'
                  animate={{
                    transform: portfolioImg==='admin' ? "translateX(15px)" : "translateX(0px)",
                    opacity: (portfolioImg === 'admin' || portfolioImg === 'none') ? 1 : 0.4,                    color: (portfolioImg === 'admin' || portfolioImg === 'none') ? "#0f0f0f" : "#c8c1b4",
                    transition: {
                      duration: 1,
                      ease: [0.3, 1.4, 0.3, 1]
                    }
                  }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >Language Parser.</motion.h2>
                <motion.div style={{ translateX, rotateZ }} className='portfolio-soon' 
                  initial={{
                    opacity: 0,
                  }}

                  animate={{ 
                    transform: portfolioImg === 'admin' ? `translateX(0px)` : "translateX(90px) rotate(4deg)",
                    opacity: portfolioImg === 'admin' ? 1 : 0,
                    transition: {
                      duration: 1,
                      ease: [0.3, 1.4, 0.3, 1]
                    }
                  }}>
                    <p>coming soon...</p>
                  </motion.div>
              </div> */}
            </div>
          </div>
        </section>

        <footer id="footer" data-state={backgroundColor}>
          <motion.div
            className="hero-parent"
            initial={{
              opacity: "0%",
              transform: "translateY(30px)",
            }}
            animate={{
              opacity: "100%",
              transform: "translateY(0px)",
              transition: {
                delay: 0.8,
                duration: 0.5,
              },
            }}
          >
            <div className="headline-txt">
              <motion.div style={{ x: translateX5 }}>
                <h1 className="heading-5">
                  <span className="heading-accent">. Contact me. </span>Let's
                  craft<span className="heading-accent">. Contact me.</span>
                </h1>
              </motion.div>
              <motion.div style={{ x: translateX6 }}>
                <h1 className="heading-6">
                  <span className="heading-accent">. Chiang.</span> greatness.
                  <span className="heading-accent"> Chiang.</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>

          <div className="small-txt-ihero-2" data-state="footer">
            <div className="about-txt">
              <p className="test">
                Need someone to create <br />
                the impossible?
                <br />
                <br />
                I'd love to help.
                <br />
                <br />
                <Button>Contact Me</Button>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
export default App;
