import './App.css';
import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
)

function App() {

  const [chartData, setChartData] = useState ({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState ({});

  useEffect(() => {

    setChartData ({
      labels: ['Felicidade','Medo','Tristeza','Neutro','Nojo','Surpresa','Raiva'],
      datasets: [
        {
          label: "Média de humor na semana",
          data: [24, 12, 32, 41, 2, 32, 66],
          borderColor: "rgb(172,28,28)",
          backgroundColor: "rgb(253, 169, 0)",
          borderWidth: "6",
        }
      ]
    })
    setChartOptions ({
      responsive: true,
      plugins: {
        legends: {
          position: "top"
        },
        title: {
          display: true,
          text: "Essa foi a média de seu Humor"
        },
      }
    })
  }, []);
  return ( 
    <div className="App">
      <Bar options={chartOptions} data={chartData}/>
    </div>
  );
  }


export default App;