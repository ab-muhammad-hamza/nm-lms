import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Home = () => {
  const { courses } = CourseData();
  const navigate = useNavigate();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <div className="bubble"></div>
      <div className="bubble-variation-2"></div>
      <motion.div
        className="home"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="home-content">
          <motion.h1 variants={fadeInVariants}>Learn with Lemida now!</motion.h1>
          <motion.p variants={fadeInVariants}>
            Start your learning journey with our top lecturers and teachers all around
            the world
          </motion.p>
          <motion.button
            onClick={() => navigate("/courses")}
            className="common-btn"
            variants={fadeInVariants}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
      <section className="marquee-section">
        <div class="marquee">
          <div class="track">
            <div class="marquee-text">
              &nbsp;| LEARN | INSPIRE | GROW | LEARN | INSPIRE | GROW | LEARN |
              INSPIRE | GROW
            </div>
          </div>
        </div>
      </section>
      <section
        className="courses-section"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
      <div className="courses">
        <h2>Available Courses</h2>
        <p>Learn expert skills from experts themselves</p>
  
        <div className="course-container">
          {courses && courses.length > 0 ? (
            courses.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p style={{color: "white"}}>No Courses Yet!</p>
          )}
        </div>
      </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;