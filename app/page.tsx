import MealPlan from "./components/MealPlan";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="grid grid-cols-2 max-w-full mx-auto  bg-gray-100">
      {/* Header component */}
      <SideBar/>
      <MealPlan/>
    </main>
  );
}
