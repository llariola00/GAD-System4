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
                    backgroundColor: "rgba(0, 98, 255, 0.9)",
                    borderWidth: 0,
                    borderColor: "rgba(0, 98, 255, 0.5)",
                    hoverBackgroundColor: "rgba(0, 98, 255, 0.4)",
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
