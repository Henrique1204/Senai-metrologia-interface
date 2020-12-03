import React from "react";
// Import da biblioteca externa para criação de gráficos.
import Chart from "chart.js";

const ChartLine = ({ dados }) => {
    const chart = React.useRef();

    React.useEffect(() => {
        new Chart(chart.current, {
            type: "line",
            data: {
                labels: dados.label,
                datasets: [{
                    label: dados.titulo,
                    data: dados.valores,
                    backgroundColor: "#164673",
                    borderColor: "rgba(0, 0, 0, 0.5)"
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 20
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontSize: 16,
                            fontColor: "#222"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 16,
                            fontColor: "#222"
                        }
                    }]
                }
            }
        });

    }, [dados]);

    return <canvas ref={chart} />;
};

export default ChartLine;
