import Link from "next/link"
import styles from "./ShowAllCarsButton.module.css"

function ShowAllCarsButton() {
  return (
    <div className={styles.container}>
        <Link href="/cars">
            See All Cars
        </Link>
    </div>
  )
}

export default ShowAllCarsButton