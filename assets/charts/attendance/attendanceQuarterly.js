let chartCanvas = document.getElementById("side-chart-quarterly");
let attendanceQuarterlyChart;

let attendanceQuarterlyData = [];
let attendanceQuarterlyLabels = ["Q1", "Q2", "Q3", "Q4"];

// Export function to create the quarterly chart
export function initializeAttendanceQuarterlyChart(chartData) {
    chartCanvas = document.getElementById("side-chart-quarterly");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    attendanceQuarterlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: attendanceQuarterlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    borderWidth: 0,
                    backgroundColor: "rgba(160, 106, 255, 0.9)",
                    borderColor: "rgba(160, 106, 255, 0.5)",
                    hoverBackgroundColor: "rgba(160, 106, 255, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 5,
                    data: attendanceQuarterlyData,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    display: true,
                },
            },
        },
    });

    attendanceQuarterlyChart.data.datasets[0].data = chartData;
    attendanceQuarterlyChart.update();
    console.log("Attendance QUARTERLY chart INITIALIZED!!!");
}

export function attendanceQuarterly(chartData) {
    if (!chartData) {
        console.log("Attendance Yearly: Passed chart data is undefined");
        return;
    }
    if (!attendanceQuarterlyChart) {
        console.log("Attendance QUARTERLY chart not initialized!!!");
        return;
    }

    attendanceQuarterlyChart.data.datasets[0].data = chartData;
    attendanceQuarterlyChart.update();
    console.log("Attendance QUARTERLY chart updated");
}
