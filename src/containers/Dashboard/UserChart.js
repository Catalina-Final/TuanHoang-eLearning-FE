import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
const UserChart = () => {
  const users = useSelector((state) => state.auth.users);
  const courses = useSelector((state) => state.course.courses);
  console.log(users);

  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const randomR = () => {
    return Math.ceil(Math.random() * 255);
  };

  useEffect(() => {
    setData({
      labels: courses.map((el) => el.title),
      datasets: [
        {
          label: "Enrollment",
          data: courses.map((el) => el.enrollmentCount),
          backgroundColor: courses.map(
            (el) => `rgba(${randomR()}, 99, 132, 0.6)`
          ),
        },
      ],
    });
    setUserData({
      labels: ["teacher", "student", "admin"],
      datasets: [
        {
          label: "User Number",
          data: [
            users.filter((el) => el.role === "teacher").length,
            users.filter((el) => el.role === "student").length,
            users.filter((el) => el.role === "admin").length,
          ],
          backgroundColor: ["", "", ""].map(
            (el) => `rgba(${randomR()}, 99, ${randomR()}, 0.8)`
          ),
        },
      ],
    });
  }, [courses, users]);

  console.log(users);
  return (
    <>
      <div className="chart">
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Courses Enrollment",
              fontSize: "30",
            },
            legend: { display: true, possition: "right" },
          }}
        />
        <Pie
          data={userData}
          options={{
            title: {
              display: true,
              text: "Users",
              fontSize: "30",
            },
            legend: { display: true, possition: "right" },
          }}
        />
      </div>
    </>
  );
};

export default UserChart;
