import CarDetails from "@/components/templates/CarDetails";

import carsData from "@/data/carsData";

import { useRouter } from "next/router";

function CarsDetailsPage() {

    // To obtain the iD of each card
    const router = useRouter();
    const {carsId} = router.query
    
    // To obtain Data about a one car from among the Data of all cars
    const carDetails = carsData[carsId - 1]
    // console.log(carDetails)

  return (
    <CarDetails {...carDetails} />
  )
}

export default CarsDetailsPage