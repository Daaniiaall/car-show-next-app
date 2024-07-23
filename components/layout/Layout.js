import Link from "next/link"

import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <>
      <Link href="/">
      <header className={styles.header}>
        <h2>Car show</h2>
        <p>choose and buy your car</p>
      </header>
      </Link>
      <div className={styles.container}>
        {children}
      </div>
      <footer className={styles.footer}>
        Developed by <a href="https://github.com/Daaniiaall">Danial Momenpour</a> | Next.js Project
      </footer>
    </>
  );
}

export default Layout;
