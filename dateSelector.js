export function setupDateSelectorEventListeners() {
    const selectedYear = document.getElementById("selectedYear");
    const selectedMonth = document.getElementById("selectedMonth");

    const year = document.getElementById("card-year");
    const month = document.getElementById("card-month");

    function test_setData() {
        year.innerHTML = selectedYear.value;
        month.innerHTML = selectedMonth.value;
    }

    function setTitle() {}

    if (selectedMonth) {
        selectedMonth.addEventListener("change", test_setData);
    }

    if (selectedYear) {
        selectedYear.addEventListener("change", test_setData);
    }

    // Call test_setData to set initial values
    test_setData();
}
