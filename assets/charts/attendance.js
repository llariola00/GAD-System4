export function attendanceChart(chartData, chartLabels) {
    const chartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    const attendanceChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: chartLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderWidth: 0,
                    borderColor: "rgba(54, 162, 235, 1)",
                    hoverBackgroundColor: "rgba(54, 162, 235, 1)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: chartData,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

            layout: {
                padding: 20,
            },
        },
    });

    attendanceChart.update();
}
