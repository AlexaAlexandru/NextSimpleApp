import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>People List | Home</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Ut finibus lectus sem, a pulvinar magna hendrerit quis. Suspendisse
          posuere elit et felis efficitur sollicitudin. Aliquam facilisis tellus
          ac ultrices tempus. Cras tincidunt nunc sit amet vestibulum porta.
          Phasellus eget pretium erat, eget cursus neque. Aliquam et sapien et
          mauris tempus mattis iaculis non augue. ee
        </p>
        <Link href="/people/people" className={styles.btn}>
          See People Listing
        </Link>
      </div>
    </>
  );
}
