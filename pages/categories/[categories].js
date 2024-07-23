import CarsList from "@/components/templates/CarsList"
import carsData from "@/data/carsData"
import { useRouter } from "next/router"


function CategoriesPage() {

    const router = useRouter()
    const category = router.query.categories

    const hatchbackCars = carsData.filter((item)=> item.category === "hatchback")
    const suvCars = carsData.filter((item)=> item.category === "suv")
    const sportCars = carsData.filter((item)=> item.category === "sport")
    const sedanCars = carsData.filter((item)=> item.category === "sedan")
    // console.log({hatchbackCars , suvCars , sportCars , sedanCars})
  return (
    <div>
        {category === "hatchback" && <CarsList data={hatchbackCars} />}
        {category === "suv" && <CarsList data={suvCars} />}
        {category === "sport" && <CarsList data={sportCars} />}
        {category === "sedan" && <CarsList data={sedanCars} />}
    </div>
  )
}

export default CategoriesPage