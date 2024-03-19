import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const YearChart = ({ setActiveComponent }) => {
  const [dropoutData, setDropoutData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getDropoutStudents');
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
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dropoutData.years && dropoutData.counts) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById('yearChart');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dropoutData.years,
          datasets: [{
            label: 'Dropout Students by Year',
            data: dropoutData.counts,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });

      setChartInstance(newChartInstance);
    }
  }, [dropoutData]);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <div className="container mt-3">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <div className="text-center">
        <h1>This is a Year Chart</h1>
        <canvas id="yearChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default YearChart;
