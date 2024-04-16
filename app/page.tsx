import MealPlan from "./components/MealPlan";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="flex flex-row items-center mx-auto">
      {/* Header component */}
      <SideBar/>
      <MealPlan/>
    </main>
  );
}
