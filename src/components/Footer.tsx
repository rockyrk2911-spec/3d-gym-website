import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Activities",
    path: "/activities",
  },
  {
    label: "Trainers",
    path: "/trainers",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const trainingLinks = [
  "Personal Training",
  "Strength Training",
  "CrossFit",
  "HIIT Training",
  "Bodybuilding",
  "Cardio Training",
];

const socialLinks = [
  {
    icon: "bi-instagram",
    label: "Instagram",
  },
  {
    icon: "bi-facebook",
    label: "Facebook",
  },
  {
    icon: "bi-youtube",
    label: "YouTube",
  },
  {
    icon: "bi-twitter-x",
    label: "X",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer">
      {/* TOP CTA */}
      <div className="footer-cta-wrapper">
        <div className="container">
          <motion.div
            className="footer-cta"
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
              duration: 0.7,
            }}
          >
            <div className="footer-cta-glow" />

            <div className="footer-cta-content">
              <span className="footer-small-title">
                READY TO START?
              </span>

              <h2>
                BUILD YOUR
                <br />
                STRONGEST <span>SELF.</span>
              </h2>

              <p>
                Stop waiting for the perfect time. Start training,
                stay consistent and become stronger every day.
              </p>
            </div>

            <div className="footer-cta-action">
              <Link
                to="/contact"
                className="footer-join-btn"
              >
                Join IRONX

                <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-background-text">
          IRONX
        </div>

        <div className="footer-red-glow" />

        <div className="container position-relative">
          <div className="row g-5">
            {/* BRAND */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <Link
                  to="/"
                  className="footer-logo"
                >
                  IRON<span>X</span>
                </Link>

                <p className="footer-brand-text">
                  IRONX is built for people who refuse to settle.
                  Train harder, move better and build the strongest
                  version of yourself.
                </p>

                <div className="footer-socials">
                  {socialLinks.map((social) => (
                    <a
                      href="#"
                      key={social.label}
                      aria-label={social.label}
                      onClick={(event) =>
                        event.preventDefault()
                      }
                    >
                      <i
                        className={`bi ${social.icon}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-column">
                <h4>
                  Explore
                </h4>

                <div className="footer-title-line" />

                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path}>
                        <i className="bi bi-arrow-right-short" />

                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TRAINING */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-column">
                <h4>
                  Training
                </h4>

                <div className="footer-title-line" />

                <ul className="footer-links">
                  {trainingLinks.map((item) => (
                    <li key={item}>
                      <Link to="/services">
                        <i className="bi bi-arrow-right-short" />

                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-column">
                <h4>
                  Contact
                </h4>

                <div className="footer-title-line" />

                <div className="footer-contact-list">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>

                    <div>
                      <span>
                        Visit Us
                      </span>

                      <p>
                        Bangalore,
                        <br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <i className="bi bi-telephone-fill" />
                    </div>

                    <div>
                      <span>
                        Call Us
                      </span>

                      <p>
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <i className="bi bi-envelope-fill" />
                    </div>

                    <div>
                      <span>
                        Email
                      </span>

                      <p>
                        info@ironxgym.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div className="footer-hours">
            <div className="footer-hours-left">
              <div className="footer-hours-icon">
                <i className="bi bi-clock-fill" />
              </div>

              <div>
                <span>
                  GYM HOURS
                </span>

                <h5>
                  Train When It Works For You.
                </h5>
              </div>
            </div>

            <div className="footer-hours-times">
              <div>
                <span>
                  MON - FRI
                </span>

                <strong>
                  05:00 AM — 11:00 PM
                </strong>
              </div>

              <div>
                <span>
                  SATURDAY
                </span>

                <strong>
                  06:00 AM — 10:00 PM
                </strong>
              </div>

              <div>
                <span>
                  SUNDAY
                </span>

                <strong className="footer-closed">
                  CLOSED
                </strong>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom-premium">
            <div>
              <p>
                © {currentYear} IRONX Fitness. All rights
                reserved.
              </p>
            </div>

            <div className="footer-bottom-links">
              <a
                href="#"
                onClick={(event) =>
                  event.preventDefault()
                }
              >
                Privacy Policy
              </a>

              <span>/</span>

              <a
                href="#"
                onClick={(event) =>
                  event.preventDefault()
                }
              >
                Terms & Conditions
              </a>
            </div>

            <button
              type="button"
              className="footer-back-top"
              aria-label="Back to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <i className="bi bi-arrow-up" />

              <span>
                TOP
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}