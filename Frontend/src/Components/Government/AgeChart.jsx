import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const AgeChart = ({ setActiveComponent, governmentState }) => {
  const [ageData, setAgeData] = useState(null);

  useEffect(() => {
    const fetchAgeData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/student/surveySubmit"
        );
        const students = response.data;

        if (!Array.isArray(students)) {
          throw new Error("Data is not in the expected format");
        }

        const filteredStudents = students.filter(
          (student) => student.studentInstituteState === governmentState
        );

        const ageCounts = filteredStudents.reduce((counts, student) => {
          const age = student.age;
          counts[age] = (counts[age] || 0) + 1;
          return counts;
        }, {});

        const ages = Object.keys(ageCounts);
        const counts = Object.values(ageCounts);

        setAgeData({ ages, counts });
      } catch (error) {
        console.error("Error fetching age data:", error);
      }
    };
    fetchAgeData();
  }, [governmentState]);

  useEffect(() => {
    let chartInstance = null;

    if (ageData) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById("ageChart");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ageData.ages,
          datasets: [
            {
              label: "Number of Students",
              data: ageData.counts,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Students",
              },
            },
            x: {
              title: {
                display: true,
                text: "Age",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [ageData]);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <div className="container mt-3 mb-5">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <div className="text-center mb-5">
        <h1>Age-wise Dropout Distribution</h1>
        <canvas id="ageChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default AgeChart;
