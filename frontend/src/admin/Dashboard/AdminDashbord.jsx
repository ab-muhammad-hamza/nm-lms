import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <div className="box">
            <h2>Total Courses</h2>
            <h3>{stats.totalCoures}</h3>
          </div>
          <div className="box">
            <h2>Total Lectures</h2>
            <h3>{stats.totalLectures}</h3>
          </div>
          <div className="box">
            <h2>Total Users</h2>
            <h3>{stats.totalUsers}</h3>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;
