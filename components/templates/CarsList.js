import { useRouter } from "next/router";

import Back from "../icons/Back";
import Card from "../module/Card";

import styles from "./CarsList.module.css";

function CarsList({ data }) {
  //   console.log(data);
  const router = useRouter();

  function backHandler(){
    router.back()
  }

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>

      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
