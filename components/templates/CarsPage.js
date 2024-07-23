import styles from "./CarsPage.module.css";
import Card from "../module/Card";

// For displaying car cards on the (ROUTE === "/cars" )
function CarsPage({data}) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} car={car}/>
      ))}
    </div>
  );
}

export default CarsPage;
