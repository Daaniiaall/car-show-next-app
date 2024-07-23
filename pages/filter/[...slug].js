import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  console.log(filteredData);

  if (filteredData.length === 0) {
    return( 
    <>
      <h3>Car Not Found :( </h3>
      <style jsx>
        {`h3{
          margin:50px auto;
          width:fit-content;
          font-weight:red;
        }`}
      </style>
    </>
    );
  }

  return <CarsList data={filteredData} />;
}

export default FilteredCars;
