import { motion } from "framer-motion";

function Nav({
  textEnter,
  textLeave,
  backgroundState,
}: {
  textEnter: () => void;
  textLeave: () => void;
  backgroundState: string;
}) {
  return (
    <>
      <nav className="nav">
        <motion.div
          className="container flex-split-horizontal"
          initial={{
            transform: "translateY(-60px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: {
              delay: 0.5,
              duration: 0.7,
            },
          }}
        >
          <a
            href="#"
            data-state={backgroundState}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="logo"
            title="home"
          >
            S<span className="clr-neutral-beige">S</span>
          </a>
          <div className="link-parent">
            {/*<a*/}
            {/*  href="/satishsurani.pdf"*/}
            {/*  download="SatishSurani_CV.pdf"*/}
            {/*  className="link-block"*/}
            {/*  onMouseEnter={textEnter}*/}
            {/*  onMouseLeave={textLeave}*/}
            {/*>*/}
            {/*  <span className="fs-larger">Download</span> CV*/}
            {/*</a>*/}
            
            <a
              href="https://github.com/satishsurani"
              data-state={backgroundState}
              target="_blank"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="link-block"
            >
              <span className="fs-larger">G</span>itHub
            </a>
            <a
              href="mailto:satishsurani60@gmail.com"
              title="email"
              data-state={backgroundState}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="link-block"
            >
              <span className="fs-larger">C</span>ontact
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default Nav;
