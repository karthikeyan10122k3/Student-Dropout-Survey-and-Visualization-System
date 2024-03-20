import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const YearChart = ({ title, url }) => {
  const [dropoutData, setDropoutData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const students = response.data;

        const dropoutCounts = students.reduce((acc, student) => {
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
  }, [url]);

  useEffect(() => {
    if (dropoutData.years && dropoutData.counts) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById(`${title.replace(/\s/g, "")}Chart`);
      const newChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: dropoutData.years,
          datasets: [
            {
              label: `Dropout Students by Year - ${title}`,
              data: dropoutData.counts,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [dropoutData, title]);

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h1>This is a {title} Year Chart</h1>
        <canvas
          id={`${title.replace(/\s/g, "")}Chart`}
          width="400"
          height="200"
        ></canvas>
      </div>
    </div>
  );
};

const DisplayChart = ({ setActiveComponent }) => {
  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <div className="container my-5">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <YearChart
        title="Institution"
        url="http://localhost:8000/getDropoutStudents"
      />
      <YearChart
        title="Student"
        url="http://localhost:8000/studentSurveySubmit"
      />
    </div>
  );
};

export default DisplayChart;
