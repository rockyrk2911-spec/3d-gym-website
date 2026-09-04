import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const activities = [
  {
    number: "01",
    icon: "bi-fire",
    title: "Weight Training",
    description:
      "Build strength, muscle and confidence through structured resistance training using free weights and machines.",
    meta: "Strength • Muscle • Power",
  },
  {
    number: "02",
    icon: "bi-lightning-charge-fill",
    title: "CrossFit",
    description:
      "High-energy functional workouts combining strength, conditioning, endurance and athletic movements.",
    meta: "Functional • Conditioning • Endurance",
  },
  {
    number: "03",
    icon: "bi-bullseye",
    title: "Boxing",
    description:
      "Improve speed, coordination, stamina and confidence through dynamic boxing and conditioning sessions.",
    meta: "Speed • Cardio • Technique",
  },
  {
    number: "04",
    icon: "bi-activity",
    title: "HIIT",
    description:
      "Short, intense training sessions designed to improve conditioning, burn calories and challenge performance.",
    meta: "Intensity • Fat Burn • Fitness",
  },
  {
    number: "05",
    icon: "bi-heart-pulse-fill",
    title: "Cardio",
    description:
      "Improve heart health, stamina and endurance using treadmill, cycling and interval-based cardio sessions.",
    meta: "Stamina • Endurance • Heart Health",
  },
  {
    number: "06",
    icon: "bi-person-arms-up",
    title: "Yoga",
    description:
      "Improve mobility, flexibility, balance and recovery through controlled movement and breathing.",
    meta: "Mobility • Balance • Recovery",
  },
  {
    number: "07",
    icon: "bi-universal-access",
    title: "Functional Training",
    description:
      "Develop strength and movement patterns that improve everyday performance, mobility and athletic ability.",
    meta: "Movement • Strength • Mobility",
  },
  {
    number: "08",
    icon: "bi-trophy-fill",
    title: "Bodybuilding",
    description:
      "Hypertrophy-focused training designed to increase muscle size, symmetry, strength and body composition.",
    meta: "Hypertrophy • Strength • Physique",
  },
];

const benefits = [
  {
    icon: "bi-person-check-fill",
    title: "Trainer Guidance",
    description:
      "Our coaches help you perform each activity with proper technique and confidence.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Progressive Training",
    description:
      "Workouts evolve as your strength, fitness and performance improve.",
  },
  {
    icon: "bi-shield-check",
    title: "Safer Training",
    description:
      "Structured programming reduces unnecessary risk and improves training quality.",
  },
  {
    icon: "bi-trophy-fill",
    title: "Real Results",
    description:
      "Every activity is designed around measurable improvement and consistency.",
  },
];

export default function Activities() {
  return (
    <main>
      {/* HERO */}
      <section className="activities-hero-section">
        <div className="activities-grid" />
        <div className="activities-glow" />

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
                  MOVE. TRAIN. GROW.
                </span>

                <h1 className="activities-main-title">
                  FIND YOUR
                  <br />
                  WAY TO
                  <br />
                  <span>MOVE.</span>
                </h1>

                <p className="activities-main-description">
                  From strength and bodybuilding to boxing, HIIT,
                  cardio and functional training, IRONX gives you
                  multiple ways to challenge your body and improve
                  your performance.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    href="#activity-list"
                    className="gym-btn"
                  >
                    Explore Activities
                    <i className="bi bi-arrow-down ms-2" />
                  </a>

                  <Link
                    to="/contact"
                    className="gym-outline-btn"
                  >
                    Join IRONX
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                className="activities-hero-card"
                initial={{
                  opacity: 0,
                  x: 45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                }}
              >
                <span>
                  TRAIN WITH PURPOSE
                </span>

                <h2>
                  EVERY
                  <br />
                  SESSION
                  <br />
                  <strong>COUNTS.</strong>
                </h2>

                <p>
                  Choose the training style that matches your goal,
                  experience and energy.
                </p>

                <div className="activities-hero-line" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ACTIVITY GRID */}
      <section
        className="premium-activities-section"
        id="activity-list"
      >
        <div className="container">

          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
            <div>
              <span className="section-small-title">
                CHOOSE YOUR CHALLENGE
              </span>

              <h2 className="section-title mb-0">
                GYM <span>ACTIVITIES</span>
              </h2>
            </div>

            <p className="activities-section-intro mb-0">
              Train for strength, conditioning, mobility, endurance
              or physique using a style that keeps you motivated.
            </p>
          </div>

          <div className="row g-4">

            {activities.map((activity, index) => (
              <div
                className="col-lg-6"
                key={activity.title}
              >
                <motion.article
                  className="premium-activity-card h-100"
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 2) * 0.08,
                  }}
                >
                  <span className="premium-activity-number">
                    {activity.number}
                  </span>

                  <div className="premium-activity-icon">
                    <i className={`bi ${activity.icon}`} />
                  </div>

                  <h3>
                    {activity.title}
                  </h3>

                  <p className="premium-activity-description">
                    {activity.description}
                  </p>

                  <div className="premium-activity-meta">
                    {activity.meta}
                  </div>

                  <Link
                    to="/contact"
                    className="premium-activity-link"
                  >
                    Join This Activity
                    <i className="bi bi-arrow-up-right ms-2" />
                  </Link>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="activities-experience-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <motion.div
                className="activities-experience-visual"
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <span className="activities-big-number">
                  08
                </span>

                <div>
                  <span className="activities-visual-label">
                    TRAINING STYLES
                  </span>

                  <h2>
                    ONE GYM.
                    <br />
                    MORE WAYS
                    <br />
                    TO <strong>GROW.</strong>
                  </h2>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
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
                  duration: 0.7,
                }}
              >
                <span className="section-small-title">
                  TRAIN YOUR WAY
                </span>

                <h2 className="section-title">
                  NEVER TRAIN
                  <br />
                  <span>WITHOUT PURPOSE.</span>
                </h2>

                <p className="section-description">
                  Every IRONX activity has a clear purpose. Some are
                  built for strength, some for conditioning, some for
                  mobility and others for complete body transformation.
                </p>

                <p className="section-description">
                  You can combine multiple activities as your fitness
                  improves and build a training routine that stays
                  challenging and enjoyable.
                </p>

                <Link
                  to="/services"
                  className="gym-btn mt-3"
                >
                  View Training Programs
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="activities-benefits-section">
        <div className="container">

          <div className="text-center mb-5">
            <span className="section-small-title">
              BETTER TRAINING
            </span>

            <h2 className="section-title">
              BUILT FOR
              <br />
              <span>PROGRESS.</span>
            </h2>
          </div>

          <div className="row g-4">

            {benefits.map((benefit, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={benefit.title}
              >
                <motion.article
                  className="activity-benefit-card h-100"
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
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="activity-benefit-icon">
                    <i className={`bi ${benefit.icon}`} />
                  </div>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="activities-cta-section">
        <div className="container">

          <motion.div
            className="activities-cta-box"
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
              duration: 0.7,
            }}
          >
            <div>
              <span className="section-small-title">
                YOUR NEXT SESSION
              </span>

              <h2>
                STOP WAITING.
                <br />
                START
                <span> TRAINING.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="gym-btn"
            >
              Start Today
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}