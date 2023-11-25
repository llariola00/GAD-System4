let monthlyChartCanvas = document.getElementById("main-chart");
let attendanceMonthlyChart;

let AttendanceMonthlyData = [];
let AttendanceMonthlyLabels = [];

export function initializeAttendanceMonthlyChart(chartData, chartLabels) {
    monthlyChartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!monthlyChartCanvas) {
        return;
    }

    attendanceMonthlyChart = new Chart(monthlyChartCanvas, {
        type: "bar",
        data: {
            labels: AttendanceMonthlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 0,
                    borderColor: "rgba(54, 162, 235, 0.8)",
                    hoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: AttendanceMonthlyData,
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

    attendanceMonthlyChart.data.datasets[0].data = chartData;
    attendanceMonthlyChart.data.labels = chartLabels;
    attendanceMonthlyChart.update();
    console.log("Attendance MONTHLY chart INITIALIZED!!!");
}

// Export function to create the attendance main chart
export function attendanceMonthly(chartData, chartLabels) {
    if (!chartData) {
        console.log("Attendance Monthly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("Attendance Monthly: Passed chart labels is undefined");
        return;
    }
    if (!attendanceMonthlyChart) {
        console.log("Attendance MONTHLY chart not initialized!!!");
        return;
    }

    attendanceMonthlyChart.data.datasets[0].data = chartData;
    attendanceMonthlyChart.data.labels = chartLabels;
    attendanceMonthlyChart.update();
    console.log("Attendance MONTHLY chart updated");
}
