import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string;
};

const contactInfo = [
  {
    icon: "bi-geo-alt-fill",
    title: "Visit Us",
    value: "IRONX Fitness, Bangalore, India",
  },
  {
    icon: "bi-telephone-fill",
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: "bi-envelope-fill",
    title: "Email Us",
    value: "info@ironxgym.com",
  },
  {
    icon: "bi-clock-fill",
    title: "Working Hours",
    value: "Mon - Sat: 5:00 AM - 11:00 PM",
  },
];

const quickStats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Expert Trainers",
  },
  {
    value: "1.5K+",
    label: "Active Members",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("IRONX Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "",
      message: "",
    });
  }

  return (
    <main>
      {/* =====================================
          HERO
      ====================================== */}
      <section className="contact-hero-section">
        <div className="contact-grid" />
        <div className="contact-glow" />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* LEFT */}
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
                  GET IN TOUCH
                </span>

                <h1 className="contact-main-title">
                  YOUR NEXT
                  <br />
                  CHAPTER
                  <br />
                  <span>STARTS HERE.</span>
                </h1>

                <p className="contact-main-description">
                  Ready to train harder, get stronger and build your
                  best version? Contact IRONX and our team will help
                  you choose the right program for your goals.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    href="#contact-form"
                    className="gym-btn"
                  >
                    Contact Us

                    <i className="bi bi-arrow-down ms-2" />
                  </a>

                  <Link
                    to="/services"
                    className="gym-outline-btn"
                  >
                    View Programs
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-5">
              <motion.div
                className="contact-hero-card"
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
                  READY WHEN YOU ARE
                </span>

                <h2>
                  ONE
                  <br />
                  DECISION
                  <br />
                  <strong>
                    CHANGES EVERYTHING.
                  </strong>
                </h2>

                <p>
                  Speak with our team and take the first step
                  toward your fitness goal.
                </p>

                <div className="contact-hero-line" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT INFORMATION
      ====================================== */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={item.title}
              >
                <motion.article
                  className="contact-info-card h-100"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <div className="contact-info-icon">
                    <i
                      className={`bi ${item.icon}`}
                    />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.value}
                  </p>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT FORM
      ====================================== */}
      <section
        className="premium-contact-section"
        id="contact-form"
      >
        <div className="container">
          <div className="row align-items-start g-5">
            {/* LEFT INFORMATION */}
            <div className="col-lg-5">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
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
                  START YOUR JOURNEY
                </span>

                <h2 className="section-title">
                  TALK TO
                  <br />
                  OUR <span>TEAM.</span>
                </h2>

                <p className="section-description">
                  Tell us what you want to achieve and our team
                  will help you choose the right training program.
                </p>

                <div className="contact-side-points">
                  <div className="contact-side-point">
                    <i className="bi bi-check2-circle" />

                    <div>
                      <h4>
                        Goal-Based Guidance
                      </h4>

                      <p>
                        We help you choose the right direction
                        based on your fitness goals.
                      </p>
                    </div>
                  </div>

                  <div className="contact-side-point">
                    <i className="bi bi-check2-circle" />

                    <div>
                      <h4>
                        Trainer Support
                      </h4>

                      <p>
                        Get connected with the right coach for
                        your training style.
                      </p>
                    </div>
                  </div>

                  <div className="contact-side-point">
                    <i className="bi bi-check2-circle" />

                    <div>
                      <h4>
                        Simple Start
                      </h4>

                      <p>
                        Contact us today and begin your training
                        without confusion.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-7">
              <motion.div
                className="premium-contact-form-wrapper"
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
                <div className="contact-form-header">
                  <span>
                    LET&apos;S TALK
                  </span>

                  <h3>
                    Send Us A Message
                  </h3>

                  <p>
                    Fill in the details below and our team will
                    contact you.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* NAME */}
                    <div className="col-md-6">
                      <label
                        htmlFor="name"
                        className="contact-form-label"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control premium-contact-input"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </div>

                    {/* PHONE */}
                    <div className="col-md-6">
                      <label
                        htmlFor="phone"
                        className="contact-form-label"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-control premium-contact-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="col-12">
                      <label
                        htmlFor="email"
                        className="contact-form-label"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control premium-contact-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>

                    {/* GOAL */}
                    <div className="col-12">
                      <label
                        htmlFor="goal"
                        className="contact-form-label"
                      >
                        Fitness Goal
                      </label>

                      <select
                        id="goal"
                        name="goal"
                        className="form-select premium-contact-input"
                        value={formData.goal}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select your goal
                        </option>

                        <option value="Weight Loss">
                          Weight Loss
                        </option>

                        <option value="Muscle Building">
                          Muscle Building
                        </option>

                        <option value="Strength Training">
                          Strength Training
                        </option>

                        <option value="Personal Training">
                          Personal Training
                        </option>

                        <option value="General Fitness">
                          General Fitness
                        </option>

                        <option value="CrossFit">
                          CrossFit
                        </option>

                        <option value="HIIT">
                          HIIT
                        </option>

                        <option value="Bodybuilding">
                          Bodybuilding
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <label
                        htmlFor="message"
                        className="contact-form-label"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="form-control premium-contact-input premium-contact-textarea"
                        placeholder="Tell us about your fitness goal..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* SUBMIT */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="gym-btn contact-submit-btn"
                      >
                        Send Message

                        <i className="bi bi-send-fill ms-2" />
                      </button>
                    </div>

                    {/* SUCCESS */}
                    {submitted && (
                      <div className="col-12">
                        <motion.div
                          className="contact-success-message"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                        >
                          <i className="bi bi-check-circle-fill" />

                          <span>
                            Thank you! Your message has been
                            received.
                          </span>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          STATS
      ====================================== */}
      <section className="contact-stats-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {quickStats.map((item) => (
              <div
                className="col-6 col-lg-3"
                key={item.label}
              >
                <div className="contact-stat-card">
                  <h3>
                    {item.value}
                  </h3>

                  <p>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          LOCATION
      ====================================== */}
      <section className="contact-location-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
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
                  FIND US
                </span>

                <h2 className="section-title">
                  COME TRAIN
                  <br />
                  WITH <span>US.</span>
                </h2>

                <p className="section-description">
                  Visit IRONX, meet our trainers and experience
                  the gym before starting your membership.
                </p>

                <div className="contact-location-details">
                  <div>
                    <i className="bi bi-geo-alt-fill" />

                    <span>
                      Bangalore, Karnataka, India
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-clock-fill" />

                    <span>
                      Monday - Saturday: 5:00 AM - 11:00 PM
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-telephone-fill" />

                    <span>
                      +91 98765 43210
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-envelope-fill" />

                    <span>
                      info@ironxgym.com
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="col-lg-7">
              <motion.div
                className="contact-map-placeholder"
                initial={{
                  opacity: 0,
                  x: 35,
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
                <div className="contact-map-grid" />

                <div className="contact-map-pin">
                  <i className="bi bi-geo-alt-fill" />
                </div>

                <div className="contact-map-content">
                  <span>
                    IRONX FITNESS
                  </span>

                  <h3>
                    Bangalore
                  </h3>

                  <p>
                    Replace this section with your real Google
                    Maps location when your gym address is ready.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}
      <section className="contact-cta-section">
        <div className="container">
          <motion.div
            className="contact-cta-box"
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
                NO MORE EXCUSES
              </span>

              <h2>
                YOUR FIRST STEP
                <br />
                STARTS
                <span> TODAY.</span>
              </h2>
            </div>

            <a
              href="#contact-form"
              className="gym-btn"
            >
              Get Started

              <i className="bi bi-arrow-up ms-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}