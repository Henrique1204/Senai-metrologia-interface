import React from "react";
// Import da biblioteca externa para criação de gráficos.
import Chart from "chart.js";

const ChartLine = ({ dados, cor }) => {
    const chart = React.useRef();

    React.useEffect(() => {
        new Chart(chart.current, {
            type: "bar",
            data: {
                labels: dados.labels,
                datasets: [{
                    label: dados.titulo,
                    data: dados.valores,
                    backgroundColor: cor,
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
