import React, { useEffect, useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
const UserChart = () => {
  const users = useSelector((state) => state.auth.users);
  const courses = useSelector((state) => state.course.courses);
  console.log(courses);

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
  }, [courses]);

  //   useEffect(() => {}, [data
  return (
    <>
      <div className="chart">
        <Bar
          data={data}
          options={{
            title: { display: true, text: "Courses Enrollment" },
            legend: { display: true, possition: "right" },
          }}
        />
      </div>
    </>
  );
};

export default UserChart;
