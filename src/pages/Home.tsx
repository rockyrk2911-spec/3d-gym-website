import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GymScene from "../components/GymScene";

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="hero-section">
        <div className="hero-red-glow" />

        <div className="container hero-container">
          <div className="row align-items-center g-4">
            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <motion.div
                className="hero-content"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <span className="hero-small-title">
                  NO EXCUSES. JUST RESULTS.
                </span>

                <h1 className="hero-title">
                  BREAK
                  <br />
                  YOUR
                  <br />
                  <span>LIMITS.</span>
                </h1>

                <p className="hero-description">
                  Transform your body and build your strongest
                  version with professional trainers, advanced
                  equipment and powerful workout programs.
                </p>

                <div className="hero-buttons">
                  <Link
                    className="gym-btn"
                    to="/contact"
                  >
                    Start Training
                    <i className="bi bi-arrow-right ms-2" />
                  </Link>

                  <Link
                    className="gym-outline-btn"
                    to="/services"
                  >
                    Explore Services
                  </Link>
                </div>

                {/* STATS */}
                <div className="row hero-stats g-3">
                  <div className="col-4">
                    <div className="hero-stat-item">
                      <h3>10+</h3>

                      <p>
                        Years
                        <br />
                        Experience
                      </p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="hero-stat-item">
                      <h3 className="red-text">
                        1.5K+
                      </h3>

                      <p>
                        Active
                        <br />
                        Members
                      </p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="hero-stat-item">
                      <h3>20+</h3>

                      <p>
                        Expert
                        <br />
                        Trainers
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT 3D SIDE */}
            <div className="col-lg-6">
              <motion.div
                className="gym-scene"
                initial={{
                  opacity: 0,
                  x: 40,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              >
                <GymScene />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT PREVIEW
      ========================== */}
      <section className="home-about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <span className="section-small-title">
                  WHO WE ARE
                </span>

                <h2 className="section-title">
                  BUILT FOR
                  <br />
                  <span>STRONGER PEOPLE.</span>
                </h2>

                <p className="section-description">
                  IRONX is a modern fitness space designed for
                  people who want real progress. We combine
                  professional coaching, advanced equipment,
                  strength training and high-energy workouts
                  in one powerful environment.
                </p>

                <Link
                  to="/about"
                  className="gym-btn mt-3"
                >
                  Discover More
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="about-feature-box"
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <div className="about-feature">
                  <span>01</span>

                  <div>
                    <h4>Modern Equipment</h4>

                    <p>
                      Professional gym machines and equipment
                      for complete strength and fitness
                      training.
                    </p>
                  </div>
                </div>

                <div className="about-feature">
                  <span>02</span>

                  <div>
                    <h4>Expert Trainers</h4>

                    <p>
                      Experienced coaches who help members
                      train safely and achieve better results.
                    </p>
                  </div>
                </div>

                <div className="about-feature">
                  <span>03</span>

                  <div>
                    <h4>Performance Focus</h4>

                    <p>
                      Training programs built around strength,
                      endurance, mobility and transformation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROGRAMS
      ========================== */}
      <section className="home-services-section">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">
            <div>
              <span className="section-small-title">
                TRAIN YOUR WAY
              </span>

              <h2 className="section-title mb-0">
                OUR <span>PROGRAMS</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="gym-outline-btn"
            >
              View All Services
            </Link>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <motion.article
                className="program-card h-100"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <span className="program-number">
                  01
                </span>

                <i className="bi bi-fire program-icon" />

                <h3>
                  Strength Training
                </h3>

                <p>
                  Build muscle, power and confidence using
                  structured strength programs and
                  professional equipment.
                </p>

                <Link to="/services">
                  Explore
                  <i className="bi bi-arrow-up-right ms-2" />
                </Link>
              </motion.article>
            </div>

            <div className="col-lg-4 col-md-6">
              <motion.article
                className="program-card h-100"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                <span className="program-number">
                  02
                </span>

                <i className="bi bi-person-arms-up program-icon" />

                <h3>
                  Personal Training
                </h3>

                <p>
                  One-to-one coaching designed around your
                  goals, fitness level and training
                  performance.
                </p>

                <Link to="/services">
                  Explore
                  <i className="bi bi-arrow-up-right ms-2" />
                </Link>
              </motion.article>
            </div>

            <div className="col-lg-4 col-md-6">
              <motion.article
                className="program-card h-100"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                <span className="program-number">
                  03
                </span>

                <i className="bi bi-lightning-charge program-icon" />

                <h3>
                  HIIT Training
                </h3>

                <p>
                  High-intensity workouts focused on
                  conditioning, stamina, calorie burn and
                  athletic performance.
                </p>

                <Link to="/services">
                  Explore
                  <i className="bi bi-arrow-up-right ms-2" />
                </Link>
              </motion.article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}