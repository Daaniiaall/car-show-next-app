import carsData from "@/data/carsData";

import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import ShowAllCarsButton from "@/components/module/ShowAllCarsButton";

function Home() {
  const cars = carsData.slice(0,3)
  return (

    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={cars} />
      <ShowAllCarsButton />
    </div>

  );
}

export default Home;
