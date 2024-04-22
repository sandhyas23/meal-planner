
type TypedColumn = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

interface WeekPlan{
    meal:DayPlan[];
}

interface DayPlan{
    day: TypedColumn;
    breakfast:string;
    lunch:string;
    dinner:string;
}
