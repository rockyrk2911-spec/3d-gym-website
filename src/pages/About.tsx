import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    icon: "bi-lightning-charge-fill",
    title: "Performance",
    description:
      "Professional training programs focused on strength, endurance and measurable progress.",
  },
  {
    number: "02",
    icon: "bi-person-check-fill",
    title: "Expert Coaching",
    description:
      "Experienced trainers who guide every workout with proper technique and personalized support.",
  },
  {
    number: "03",
    icon: "bi-heart-pulse-fill",
    title: "Healthy Lifestyle",
    description:
      "We help our members build sustainable fitness habits that improve both body and mind.",
  },
];

const statistics = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "1500+",
    label: "Active Members",
  },
  {
    value: "20+",
    label: "Expert Trainers",
  },
  {
    value: "15+",
    label: "Fitness Programs",
  },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="premium-about-hero">
        <div className="premium-about-grid" />
        <div className="premium-about-glow" />

        <div className="container position-relative">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
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
                <span className="section-small-title">
                  ABOUT IRONX
                </span>

                <h1 className="premium-about-title">
                  MORE THAN
                  <br />
                  JUST A
                  <br />
                  <span>GYM.</span>
                </h1>

                <p className="premium-about-description">
                  IRONX is built for people who refuse to stay
                  average. We combine high-performance training,
                  professional coaching and a powerful fitness
                  environment to help every member become stronger.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link
                    to="/contact"
                    className="gym-btn"
                  >
                    Join IRONX

                    <i className="bi bi-arrow-right ms-2" />
                  </Link>

                  <Link
                    to="/services"
                    className="gym-outline-btn"
                  >
                    Our Programs
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                className="premium-about-quote"
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                }}
              >
                <div className="quote-icon">
                  <i className="bi bi-quote" />
                </div>

                <span>
                  OUR MINDSET
                </span>

                <h2>
                  DISCIPLINE
                  <br />
                  CREATES
                  <br />
                  <strong>RESULTS.</strong>
                </h2>

                <p>
                  The strongest transformation begins when motivation
                  becomes discipline.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="premium-story-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <motion.div
                className="story-visual"
                initial={{
                  opacity: 0,
                  x: -50,
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
                <span className="story-background-number">
                  10
                </span>

                <div className="story-content">
                  <span>
                    YEARS OF EXPERIENCE
                  </span>

                  <h2>
                    BUILT THROUGH
                    <br />
                    <strong>DISCIPLINE.</strong>
                  </h2>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <span className="section-small-title">
                  OUR STORY
                </span>

                <h2 className="section-title">
                  WHERE STRENGTH
                  <br />
                  <span>BEGINS.</span>
                </h2>

                <p className="section-description">
                  IRONX started with one purpose: creating a training
                  environment where people can push beyond their
                  limits.
                </p>

                <p className="section-description">
                  From first-time gym members to serious athletes,
                  every person receives access to modern equipment,
                  professional coaching and structured programs.
                </p>

                <p className="section-description">
                  Our focus is not quick results. We build sustainable
                  strength, confidence and performance.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="premium-mission-section">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-6">
              <motion.article
                className="mission-card"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <span className="mission-number">
                  01
                </span>

                <i className="bi bi-bullseye mission-icon" />

                <h3>
                  OUR MISSION
                </h3>

                <p>
                  To provide professional fitness coaching and an
                  inspiring training environment that helps people
                  become stronger, healthier and more confident.
                </p>
              </motion.article>
            </div>

            <div className="col-lg-6">
              <motion.article
                className="mission-card"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.1,
                }}
              >
                <span className="mission-number">
                  02
                </span>

                <i className="bi bi-eye-fill mission-icon" />

                <h3>
                  OUR VISION
                </h3>

                <p>
                  To become a high-performance fitness community where
                  discipline, knowledge and consistency create lasting
                  transformations.
                </p>
              </motion.article>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="premium-values-section">
        <div className="container">

          <div className="text-center mb-5">
            <span className="section-small-title">
              WHY CHOOSE US
            </span>

            <h2 className="section-title">
              THE IRONX
              <br />
              <span>STANDARD.</span>
            </h2>
          </div>

          <div className="row g-4">

            {values.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.title}
              >
                <motion.article
                  className="premium-value-card h-100"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <span className="premium-value-number">
                    {item.number}
                  </span>

                  <div className="premium-value-icon">
                    <i
                      className={`bi ${item.icon}`}
                    />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="premium-stats-section">
        <div className="container">

          <div className="row g-4">

            {statistics.map((item) => (
              <div
                className="col-6 col-lg-3"
                key={item.label}
              >
                <motion.div
                  className="premium-stat"
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <h3>
                    {item.value}
                  </h3>

                  <p>
                    {item.label}
                  </p>
                </motion.div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="training-philosophy-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="section-small-title">
                OUR PHILOSOPHY
              </span>

              <h2 className="section-title">
                TRAIN.
                <br />
                RECOVER.
                <br />
                <span>EVOLVE.</span>
              </h2>
            </div>

            <div className="col-lg-6">
              <div className="philosophy-list">

                <div className="philosophy-item">
                  <span>
                    01
                  </span>

                  <div>
                    <h4>
                      Train With Purpose
                    </h4>

                    <p>
                      Every workout should move you closer to a clear
                      goal.
                    </p>
                  </div>
                </div>

                <div className="philosophy-item">
                  <span>
                    02
                  </span>

                  <div>
                    <h4>
                      Recover Smarter
                    </h4>

                    <p>
                      Progress requires quality recovery, nutrition
                      and consistency.
                    </p>
                  </div>
                </div>

                <div className="philosophy-item">
                  <span>
                    03
                  </span>

                  <div>
                    <h4>
                      Become Stronger
                    </h4>

                    <p>
                      We measure success through long-term improvement.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="premium-about-cta">
        <div className="container">

          <motion.div
            className="premium-about-cta-box"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div>
              <span className="section-small-title">
                START TODAY
              </span>

              <h2>
                YOUR STRONGEST
                <br />
                VERSION
                <span> STARTS HERE.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="gym-btn"
            >
              Join Now

              <i className="bi bi-arrow-right ms-2" />
            </Link>

          </motion.div>

        </div>
      </section>
    </main>
  );
}