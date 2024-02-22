
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log('Hola')
  return (
    <main className={styles.main}>
      <h1>Hola</h1>
    </main>
  );
}
