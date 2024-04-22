import { create } from 'zustand';

interface PantryState{
    ingredient : string;
    setIngredient: (ingredient:string) => void;
    pantryItems:string[];
    addIngredient : (ingredient:string) => void;
    deleteIngredient : (index:number) => void;

    mealPlanClicked:boolean;
    setMealPlanClicked: (mealPlanClicked:boolean) => void;


    weekPlan : WeekPlan;
    setWeekPlan: (meal:string) => void;

}

export const usePantryStore = create<PantryState>()((set) => ({
    ingredient : "",
    setIngredient: async(ingredient) =>{
        set({ingredient:ingredient})
    },
    pantryItems: [],
    addIngredient: async(ingredient) => {
        
        set((state) => {
            const newPantry = state.pantryItems;
            if(!newPantry.includes(ingredient)){
                newPantry.push(ingredient);
                
            }
            else{alert("item already present")};
            return {pantryItems:newPantry}
        })
        set({ingredient: ""}); 

    } ,
    deleteIngredient:async(index) =>{
        console.log("in delete",index);

        set((state) => {
            const newPantry = state.pantryItems;
            newPantry.splice(index,1);
            return {pantryItems:newPantry}
        })

    },

    mealPlanClicked:false,
    setMealPlanClicked: async(value) =>{
        set({mealPlanClicked:value})
    },


    weekPlan: {meal: []},

    setWeekPlan: async(meal) =>{
        set({weekPlan:{meal:JSON.parse(meal)}})
    }   
}))
