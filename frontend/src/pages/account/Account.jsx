import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div>
      {user && (
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name - {user.name}</strong>
            </p>

            <p>
              <strong>Email - {user.email}</strong>
            </p>

            <div className="button-area">
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="common-btn"
                style={{width: "45%"}}
              >
                <MdDashboard />
                Dashboard
              </button>

              <button
                onClick={logoutHandler}
                className="common-btn"
                style={{ background: "red", width: "45%" }}
              >
                <IoMdLogOut />
                Logout
              </button>
            </div>

            <br />

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
                style={{width: "100%"}}
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
