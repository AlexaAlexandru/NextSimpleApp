import Head from "next/head";
import Link from "next/link";
import styles from "styles/People.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      people: data,
    },
  };
};

const People = ({ people }) => {
  return (
    <>
      <Head>
        <title>People List | List</title>
        <meta name="keywords" content="list" />
      </Head>
      <div>
        <h1>All People</h1>
        {people.map((people) => (
          <Link
            href={"/people/" + people.id}
            key={people.id}
            className={styles.single}
          >
            <h3> {people.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default People;
