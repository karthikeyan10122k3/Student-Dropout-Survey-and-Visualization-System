import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const YearChart = ({ setActiveComponent, governmentState }) => {
  const [dropoutData, setDropoutData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/student/surveySubmit"
        );
        const students = response.data;

        const filteredStudents = students.filter(
          (student) => student.studentInstituteState === governmentState
        );

        const dropoutCounts = filteredStudents.reduce((acc, student) => {
          const year = new Date(student.dropoutStudentDate).getFullYear();
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {});

        const years = Object.keys(dropoutCounts);
        const counts = Object.values(dropoutCounts);

        setDropoutData({ years, counts });
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [governmentState]);

  useEffect(() => {
    if (dropoutData.years && dropoutData.counts) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById("YearChart");
      const newChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: dropoutData.years,
          datasets: [
            {
              label: "Dropout Students by Year",
              data: dropoutData.counts,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Dropped out Year",
                color: "rgb(33, 33, 33)",
                font: {
                  weight: "bold",
                },
              },
              ticks: {
                color: "rgb(33, 33, 33)",
                font: {
                  weight: "bold",
                },
              },
            },
            y: {
              title: {
                display: true,
                text: "No of Dropout",
                color: "rgb(33, 33, 33)",
                font: {
                  weight: "bold",
                },
              },
              ticks: {
                color: "rgb(33, 33, 33)",
                font: {
                  weight: "bold",
                },
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "rgb(33, 33, 33)",
                font: {
                  weight: "bold",
                },
              },
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [dropoutData]);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <div className="container mt-3 mb-5">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <div className="text-center">
        <h1>Year Wise Dropout Distribution</h1>
        <canvas id="YearChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default YearChart;
