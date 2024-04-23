import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import '../../Assets/Styles/Government/genderChart.css'

const GenderChart = ({ setActiveComponent, governmentState }) => {
  const [surveyData, setSurveyData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/student/surveySubmit"
        );
        setSurveyData(response.data);
      } catch (error) {
        console.error("Error fetching survey data:", error);
      }
    };

    fetchData();
  }, [governmentState]); 

  useEffect(() => {
    if (surveyData.length > 0) {
      const filteredSurveyData = surveyData.filter(
        (survey) => survey.studentInstituteState=== governmentState
      );

      const genders = {};
      filteredSurveyData.forEach((entry) => {
        const gender = entry.gender;
        if (genders[gender]) {
          genders[gender]++;
        } else {
          genders[gender] = 1;
        }
      });

      const labels = Object.keys(genders);
      const data = Object.values(genders);

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document
        .getElementById("dropoutByGenderChart")
        .getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of Dropouts",
              data: data,
              backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(49, 49, 200, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(100, 162, 150, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              display: false,
            },
          },
        },
      });
    }
  }, [surveyData, governmentState]);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <>
      <button onClick={handleBackButton} className="btn btn-primary mt-3 mb-3 px-4 ms-5">Back</button>
      <div className="container mb-1" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-1">Number of Dropouts by Gender</h2>
        <canvas id="dropoutByGenderChart" className="small-chart" style={{ width: "100%", height: "auto" }}></canvas>
      </div>
    </>
  );
};

export default GenderChart;
