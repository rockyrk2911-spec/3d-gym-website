import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: "bi-person-arms-up",
    title: "Personal Training",
    description:
      "One-to-one professional coaching designed around your fitness goals, body type, experience and performance level.",
    highlights: [
      "Custom workout plan",
      "Technique correction",
      "Progress tracking",
    ],
  },
  {
    number: "02",
    icon: "bi-fire",
    title: "Strength Training",
    description:
      "Build muscle, increase power and improve overall strength using structured progressive training programs.",
    highlights: [
      "Muscle development",
      "Progressive overload",
      "Strength coaching",
    ],
  },
  {
    number: "03",
    icon: "bi-heart-pulse",
    title: "Cardio Training",
    description:
      "Improve stamina, endurance and cardiovascular fitness with modern cardio equipment and guided sessions.",
    highlights: [
      "Endurance improvement",
      "Fat burning",
      "Heart health",
    ],
  },
  {
    number: "04",
    icon: "bi-lightning-charge",
    title: "HIIT",
    description:
      "High-intensity interval training designed to improve conditioning, speed, power and calorie burn.",
    highlights: [
      "High calorie burn",
      "Conditioning",
      "Short intense sessions",
    ],
  },
  {
    number: "05",
    icon: "bi-activity",
    title: "CrossFit",
    description:
      "Functional training that combines strength, endurance, mobility and athletic movements in one powerful workout.",
    highlights: [
      "Functional fitness",
      "Full-body training",
      "Athletic performance",
    ],
  },
  {
    number: "06",
    icon: "bi-egg-fried",
    title: "Nutrition",
    description:
      "Practical nutrition guidance designed to support your training, recovery and long-term body transformation.",
    highlights: [
      "Goal-based guidance",
      "Recovery support",
      "Healthy habits",
    ],
  },
  {
    number: "07",
    icon: "bi-speedometer2",
    title: "Weight Loss",
    description:
      "Structured training and lifestyle guidance focused on sustainable fat loss without sacrificing strength.",
    highlights: [
      "Fat loss plan",
      "Cardio strategy",
      "Lifestyle support",
    ],
  },
  {
    number: "08",
    icon: "bi-universal-access",
    title: "Muscle Building",
    description:
      "Hypertrophy-focused training programs designed to increase lean muscle mass, strength and body composition.",
    highlights: [
      "Hypertrophy training",
      "Progress tracking",
      "Recovery planning",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We understand your fitness level, experience, lifestyle and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create the right training direction based on your individual needs.",
  },
  {
    number: "03",
    title: "Train",
    description:
      "You train with structure, professional guidance and proper technique.",
  },
  {
    number: "04",
    title: "Progress",
    description:
      "Your results are tracked and your program is adjusted as you improve.",
  },
];

export default function Services() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <section className="services-hero-section">
        <div className="services-grid" />
        <div className="services-hero-glow" />

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
                  WHAT WE OFFER
                </span>

                <h1 className="services-main-title">
                  TRAIN
                  <br />
                  SMARTER.
                  <br />
                  GET <span>STRONGER.</span>
                </h1>

                <p className="services-main-description">
                  From personal coaching to strength, cardio,
                  CrossFit and nutrition, IRONX gives you the
                  tools, structure and support needed to achieve
                  real results.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link
                    to="/contact"
                    className="gym-btn"
                  >
                    Start Training
                    <i className="bi bi-arrow-right ms-2" />
                  </Link>

                  <a
                    href="#services-list"
                    className="gym-outline-btn"
                  >
                    Explore Programs
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                className="services-hero-card"
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
                  PREMIUM TRAINING
                </span>

                <h2>
                  BUILT
                  <br />
                  AROUND
                  <br />
                  <strong>YOU.</strong>
                </h2>

                <p>
                  Every member has different goals. Our training
                  services are designed to help you progress with
                  structure, coaching and consistency.
                </p>

                <div className="services-hero-line" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SERVICES GRID
      ========================== */}
      <section
        className="premium-services-section"
        id="services-list"
      >
        <div className="container">

          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">

            <div>
              <span className="section-small-title">
                CHOOSE YOUR PROGRAM
              </span>

              <h2 className="section-title mb-0">
                OUR <span>SERVICES</span>
              </h2>
            </div>

            <p className="services-section-intro mb-0">
              Professional programs for beginners,
              intermediate members and serious athletes.
            </p>

          </div>

          <div className="row g-4">

            {services.map((service, index) => (
              <div
                className="col-lg-6"
                key={service.title}
              >
                <motion.article
                  className="premium-service-card h-100"
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
                  <span className="premium-service-number">
                    {service.number}
                  </span>

                  <div className="premium-service-icon">
                    <i
                      className={`bi ${service.icon}`}
                    />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="premium-service-description">
                    {service.description}
                  </p>

                  <div className="premium-service-highlights">
                    {service.highlights.map((item) => (
                      <div
                        className="service-highlight-item"
                        key={item}
                      >
                        <i className="bi bi-check2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="premium-service-link"
                  >
                    Start This Program
                    <i className="bi bi-arrow-up-right ms-2" />
                  </Link>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          TRAINING PROCESS
      ========================== */}
      <section className="services-process-section">
        <div className="container">

          <div className="text-center mb-5">
            <span className="section-small-title">
              HOW IT WORKS
            </span>

            <h2 className="section-title">
              YOUR ROAD TO
              <br />
              <span>RESULTS.</span>
            </h2>
          </div>

          <div className="row g-4">

            {steps.map((step, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={step.title}
              >
                <motion.article
                  className="service-process-card h-100"
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
                  <span>
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>
                </motion.article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE OUR SERVICES
      ========================== */}
      <section className="services-benefits-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <motion.div
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
                <span className="section-small-title">
                  WHY TRAIN WITH US
                </span>

                <h2 className="section-title">
                  NOT JUST
                  <br />
                  A WORKOUT.
                  <br />
                  <span>A SYSTEM.</span>
                </h2>

                <p className="section-description">
                  Our programs are built around progression,
                  technique and consistency. You do not simply
                  exercise — you follow a structured path toward
                  measurable improvement.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <div className="service-benefits-list">

                <div className="service-benefit-item">
                  <div className="service-benefit-icon">
                    <i className="bi bi-person-check-fill" />
                  </div>

                  <div>
                    <h4>
                      Professional Guidance
                    </h4>

                    <p>
                      Train with expert support and safer technique.
                    </p>
                  </div>
                </div>

                <div className="service-benefit-item">
                  <div className="service-benefit-icon">
                    <i className="bi bi-graph-up-arrow" />
                  </div>

                  <div>
                    <h4>
                      Progress Tracking
                    </h4>

                    <p>
                      Monitor performance and adjust training as you improve.
                    </p>
                  </div>
                </div>

                <div className="service-benefit-item">
                  <div className="service-benefit-icon">
                    <i className="bi bi-sliders" />
                  </div>

                  <div>
                    <h4>
                      Goal-Based Programs
                    </h4>

                    <p>
                      Training is matched to your fitness goals and experience.
                    </p>
                  </div>
                </div>

                <div className="service-benefit-item">
                  <div className="service-benefit-icon">
                    <i className="bi bi-trophy-fill" />
                  </div>

                  <div>
                    <h4>
                      Results Focus
                    </h4>

                    <p>
                      Every phase of training is designed around improvement.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="services-cta-section">
        <div className="container">

          <motion.div
            className="services-cta-box"
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
                READY TO TRAIN?
              </span>

              <h2>
                CHOOSE YOUR GOAL.
                <br />
                WE'LL BUILD THE
                <span> PLAN.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="gym-btn"
            >
              Get Started
              <i className="bi bi-arrow-right ms-2" />
            </Link>

          </motion.div>

        </div>
      </section>
    </main>
  );
}