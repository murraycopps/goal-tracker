const defaultDay: Day = {
    date: new Date(),
    meals: [],
    felt: "",
    effort: 0,
    sleep: 0,
    lift: false,
    run: false,
    stretch: false,
    notes: "",
};


const createWeek = (week: number): Week => {
    const days: Day[] = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(defaultDay.date.getDate());
        date.setDate(date.getDate() + i);
        return { ...defaultDay, date };
    });
    return { week, days };
}

export { createWeek}