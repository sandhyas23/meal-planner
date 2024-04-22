import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request:Request) {

    const {ingredients} = await request.json();
    console.log(ingredients);

    //communicate with openai

    const response = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        temperature:0.8,
        n:1,
        stream:false,
        messages:[
            {
                role:"user",
                content:`Hi there, provide a meal plan with recipe names from monday through sunday that includes breakfast, lunch and dinner using the list of 
                ingredients given below.
                Here are the ingredients: ${JSON.stringify({ingredients})}
                Return the meal plan as array of objects like the following format
                 ['{"day":"monday","breakfast":"","lunch":"","dinner":""}']`
                
            }
        ]
    })

    console.log("DATA IS: ",response);
    console.log(response.choices[0].message);

    return NextResponse.json(response.choices[0].message);
    
}