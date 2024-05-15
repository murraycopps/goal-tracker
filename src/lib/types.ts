type Goal = {
    id: number;
    goal: string;
    type: string;
    at: string;
    completed: boolean;
};

type Day = {
    date: Date;
    meals: String[];
    felt: string;
    distance?: number;
    effort: number;
    sleep: number;
    lift: boolean;
    run: boolean;
    stretch: boolean;
    notes: string;
};

type Week = {
    week: number;
    days: Day[];
};