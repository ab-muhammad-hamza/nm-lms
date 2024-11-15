import React from "react";
import "./courseCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import { FaChalkboardTeacher, FaRegClock } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="course-card-admin">
      <img src={`${server}/${course.image}`} alt="" className="course-image" />
      <div className="not-image">
        <div className="info-box">
          <p alt="Teacher"><FaChalkboardTeacher /> &nbsp;{course.createdBy}</p>
          <p alt="Duration"><FaRegClock /> &nbsp;{course.duration} Hours</p>
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <h4>Price - ₹{course.price}</h4>
        {isAuth ? (
          <>
            {user && user.role !== "admin" ? (
              <>
                {user.subscription.includes(course._id) ? (
                  <button
                    onClick={() => navigate(`/lectures/${course._id}`)}
                    className="common-btn full-width"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="common-btn full-width"
                  >
                    Get Started
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={() => navigate(`/lectures/${course._id}`)}
                className="common-btn full-width"
              >
                Edit
              </button>
            )}
          </>
        ) : (
          <button onClick={() => navigate("/login")} className="common-btn full-width">
            Get Started
          </button>
        )}

        <br />

        {user && user.role === "admin" && (
          <button
            onClick={() => deleteHandler(course._id)}
            className="common-btn full-width"
            style={{ background: "red" }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
