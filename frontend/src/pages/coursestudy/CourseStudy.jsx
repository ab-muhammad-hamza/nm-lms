import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import { FaChalkboardTeacher, FaRegClock } from "react-icons/fa";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <div className="imageHolder">
            <img src={`${server}/${course.image}`} alt="" />
          </div>
          <div className="description">
            <h2>{course.title}</h2>
            <small><FaChalkboardTeacher /> &nbsp;{course.createdBy} &nbsp;|&nbsp;&nbsp; <FaRegClock /> &nbsp;{course.duration} Hours</small>
            <h4>{course.description}</h4>
            <Link to={`/lectures/${course._id}`}>
              <p>Start Course</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
