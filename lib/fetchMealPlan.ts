
//import { formatTodosForAI } from "./formatTodosForAI";

export const fetchMealPlan = async(pantryItems:string[]) => {
    //const todos = formatTodosForAI(board);

    console.log("ingredients modified for AI", pantryItems);

    const res = await fetch("/api/generateMealPlan",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"ingredients":pantryItems})
    });

    const GPTdata = await res.json();
    const {content} = GPTdata;

    //console.log("ggggggggg",GPTdata);

    return content;

}