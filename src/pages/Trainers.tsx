import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const trainers = [
  {
    name: "Arjun Raj",
    role: "Strength Coach",
    experience: "8 Years Experience",
    specialties: [
      "Strength Training",
      "Muscle Building",
      "Powerlifting",
    ],
    icon: "bi-person-arms-up",
  },
  {
    name: "Rahul Dev",
    role: "CrossFit Coach",
    experience: "6 Years Experience",
    specialties: [
      "CrossFit",
      "Functional Training",
      "Conditioning",
    ],
    icon: "bi-lightning-charge-fill",
  },
  {
    name: "Vikram S",
    role: "Personal Trainer",
    experience: "7 Years Experience",
    specialties: [
      "Weight Loss",
      "Personal Coaching",
      "Body Transformation",
    ],
    icon: "bi-person-check-fill",
  },
  {
    name: "Karthik R",
    role: "Bodybuilding Coach",
    experience: "9 Years Experience",
    specialties: [
      "Hypertrophy",
      "Muscle Gain",
      "Competition Prep",
    ],
    icon: "bi-trophy-fill",
  },
  {
    name: "Meera K",
    role: "Fitness Coach",
    experience: "5 Years Experience",
    specialties: [
      "Cardio Training",
      "HIIT",
      "Mobility",
    ],
    icon: "bi-heart-pulse-fill",
  },
  {
    name: "Anjali P",
    role: "Yoga & Mobility Coach",
    experience: "6 Years Experience",
    specialties: [
      "Yoga",
      "Flexibility",
      "Recovery",
    ],
    icon: "bi-universal-access",
  },
];

const advantages = [
  {
    icon: "bi-award-fill",
    title: "Certified Coaches",
    description:
      "Train with experienced fitness professionals who understand proper technique and progression.",
  },
  {
    icon: "bi-person-check-fill",
    title: "Personal Attention",
    description:
      "Get guidance based on your current fitness level, goals and training experience.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Progress Tracking",
    description:
      "Your trainer monitors performance and adjusts your program as you improve.",
  },
  {
    icon: "bi-shield-check",
    title: "Safer Training",
    description:
      "Correct technique and structured workouts help reduce unnecessary injury risk.",
  },
];

export default function Trainers() {
  return (
    <main>
      {/* HERO */}
      <section className="trainers-hero-section">
        <div className="trainers-grid" />
        <div className="trainers-glow" />

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
                  MEET THE TEAM
                </span>

                <h1 className="trainers-main-title">
                  TRAIN WITH
                  <br />
                  PEOPLE WHO
                  <br />
                  <span>KNOW RESULTS.</span>
                </h1>

                <p className="trainers-main-description">
                  Our coaches bring experience, discipline and
                  professional guidance to every session. Whatever your
                  goal, there is an IRONX trainer ready to help you
                  progress.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    href="#trainer-list"
                    className="gym-btn"
                  >
                    Meet Trainers
                    <i className="bi bi-arrow-down ms-2" />
                  </a>

                  <Link
                    to="/contact"
                    className="gym-outline-btn"
                  >
                    Book Trainer
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                className="trainers-hero-card"
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
                  PROFESSIONAL COACHING
                </span>

                <h2>
                  GUIDANCE
                  <br />
                  CREATES
                  <br />
                  <strong>PROGRESS.</strong>
                </h2>

                <p>
                  The right coach helps you train with better technique,
                  better structure and greater confidence.
                </p>

                <div className="trainers-hero-line" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* TRAINER GRID */}
      <section
        className="premium-trainers-section"
        id="trainer-list"
      >
        <div className="container">

          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
            <div>
              <span className="section-small-title">
                OUR COACHES
              </span>

              <h2 className="section-title mb-0">
                EXPERT <span>TRAINERS</span>
              </h2>
            </div>

            <p className="trainers-section-intro mb-0">
              Every coach brings a different specialization so you can
              train with the right expert for your goals.
            </p>
          </div>

          <div className="row g-4">

            {trainers.map((trainer, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={trainer.name}
              >
                <motion.article
                  className="premium-trainer-card h-100"
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
                    delay: (index % 3) * 0.08,
                  }}
                >
                  <div className="premium-trainer-photo">
                    <div className="trainer-photo-glow" />

                    <i
                      className={`bi ${trainer.icon}`}
                    />

                    <span className="trainer-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="premium-trainer-content">
                    <span className="trainer-role">
                      {trainer.role}
                    </span>

                    <h3>
                      {trainer.name}
                    </h3>

                    <p className="trainer-experience">
                      {trainer.experience}
                    </p>

                    <div className="trainer-specialties">
                      {trainer.specialties.map((specialty) => (
                        <span key={specialty}>
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="trainer-actions">
                      <Link
                        to="/contact"
                        className="trainer-book-link"
                      >
                        Book Trainer
                        <i className="bi bi-arrow-up-right ms-2" />
                      </Link>

                      <div className="trainer-socials">
                        <a
                          href="#"
                          aria-label="Instagram"
                        >
                          <i className="bi bi-instagram" />
                        </a>

                        <a
                          href="#"
                          aria-label="Facebook"
                        >
                          <i className="bi bi-facebook" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* COACHING BENEFITS */}
      <section className="trainer-benefits-section">
        <div className="container">

          <div className="text-center mb-5">
            <span className="section-small-title">
              WHY TRAIN WITH A COACH
            </span>

            <h2 className="section-title">
              BETTER GUIDANCE.
              <br />
              <span>BETTER RESULTS.</span>
            </h2>
          </div>

          <div className="row g-4">

            {advantages.map((item, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={item.title}
              >
                <motion.article
                  className="trainer-benefit-card h-100"
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
                  <div className="trainer-benefit-icon">
                    <i className={`bi ${item.icon}`} />
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

      {/* COACHING EXPERIENCE */}
      <section className="trainer-experience-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <motion.div
                className="trainer-experience-visual"
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
                <span className="trainer-experience-number">
                  20+
                </span>

                <div>
                  <span className="trainer-experience-label">
                    PROFESSIONAL COACHES
                  </span>

                  <h2>
                    EXPERIENCE
                    <br />
                    THAT MOVES
                    <br />
                    YOU <strong>FORWARD.</strong>
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
                  PERSONAL COACHING
                </span>

                <h2 className="section-title">
                  YOUR GOAL.
                  <br />
                  YOUR PLAN.
                  <br />
                  <span>YOUR COACH.</span>
                </h2>

                <p className="section-description">
                  Personal training gives you structure and
                  accountability. Your coach helps you understand what
                  to train, how to train and how to progress.
                </p>

                <p className="section-description">
                  Whether your target is fat loss, muscle gain,
                  strength, conditioning or overall fitness, we match
                  you with the right training approach.
                </p>

                <Link
                  to="/contact"
                  className="gym-btn mt-3"
                >
                  Find Your Trainer
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="trainers-cta-section">
        <div className="container">

          <motion.div
            className="trainers-cta-box"
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
                START WITH A COACH
              </span>

              <h2>
                TRAIN SMARTER.
                <br />
                BECOME
                <span> STRONGER.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="gym-btn"
            >
              Book A Trainer
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}