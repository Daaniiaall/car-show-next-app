import Image from "next/image";
import Link from "next/link";

import Location from "../icons/Location";

import styles from "./Card.module.css";

function Card({ car }) {
  // console.log(car)
  const { id, distance, image, location, model, name, price, year } = car;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <Image className={styles.image} src={image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}KM`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>${price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
