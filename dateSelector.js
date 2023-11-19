export function setupDateSelectorEventListeners() {
    const selectedYear = document.getElementById("selectedYear");
    const selectedMonth = document.getElementById("selectedMonth");

    const test_date = document.getElementById("test-date");
    const test_total = document.getElementById("test-total");

    function test_setData() {
        test_date.innerHTML = selectedYear.value;
        test_total.innerHTML = selectedMonth.value;
    }

    if (selectedMonth) {
        selectedMonth.addEventListener("change", test_setData);
    }

    if (selectedYear) {
        selectedYear.addEventListener("change", test_setData);
    }

    // Call test_setData to set initial values
    test_setData();
}
