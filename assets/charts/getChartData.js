import { months, getRandomInt, randomStrings, numbers } from "./Utils.js";

// ATTENDANCE CHARTS
// FUNCTION TO GET DATA FOR ATTENDANCE CHARTS
export function getAttendanceByMonth(attndSelectedYear, attndSelectedMonth) {
    let RANDOM_LENGTH = getRandomInt(3, 20);
    let MONTHLY_DATA = numbers({ count: RANDOM_LENGTH, min: 0, max: 100 });
    let MONTHLY_LABELS = randomStrings({
        count: RANDOM_LENGTH,
        minLen: 8,
        maxLen: 20,
    });
    let MONTHLY_TITLE = "Monthly (" + attndSelectedMonth.value + ")";

    return { MONTHLY_DATA, MONTHLY_LABELS, MONTHLY_TITLE };
}

export function getAttendanceByYear(attndSelectedYear) {
    let YEARLY_DATA = numbers({ count: 12, min: 100, max: 350 });
    let YEARLY_LABELS = months({ count: 12 });
    let YEARLY_TITLE = "Yearly (" + attndSelectedYear.value + ")";

    return { YEARLY_DATA, YEARLY_LABELS, YEARLY_TITLE };
}

export function getAttendanceByQuarter(attndSelectedYear) {
    let QUARTERLY_DATA = numbers({ count: 4, min: 20, max: 500 });
    let QUARTERLY_LABELS = ["Q1", "Q2", "Q3", "Q4"];
    let QUARTERLY_TITLE = "Quarterly (" + attndSelectedYear.value + ")";

    return { QUARTERLY_DATA, QUARTERLY_LABELS, QUARTERLY_TITLE };
}

// EVENT CHARTS
// FUNCTION TO GET DATA FOR EVENT CHARTS
export function getEventByMonth(eventSelectedYear, eventSelectedMonth) {
    let MONTHLY_DATA = numbers({ count: 12, min: 1, max: 20 });
    let MONTHLY_LABELS = months({ count: 12 });
    let MONTHLY_TITLE = "Yearly (" + eventSelectedYear.value + ")";

    return { MONTHLY_DATA, MONTHLY_LABELS, MONTHLY_TITLE };
}

export function getEventByQuarter(eventSelectedYear) {
    let QUARTERLY_DATA = numbers({ count: 4, min: 20, max: 500 });
    let QUARTERLY_LABELS = ["Q1", "Q2", "Q3", "Q4"];
    let QUARTERLY_TITLE = "Quarterly (" + eventSelectedYear.value + ")";

    return { QUARTERLY_DATA, QUARTERLY_LABELS, QUARTERLY_TITLE };
}
