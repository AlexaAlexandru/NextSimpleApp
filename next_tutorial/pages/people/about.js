import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>People List | About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Vestibulum quis commodo urna, vitae tempus turpis. Donec vehicula
          rhoncus ipsum, et scelerisque nunc vestibulum in. Nam commodo ligula
          eget risus malesuada semper.
        </p>
        <p>
          Ut finibus lectus sem, a pulvinar magna hendrerit quis. Suspendisse
          posuere elit et felis efficitur sollicitudin. Aliquam facilisis tellus
          ac ultrices tempus. Cras tincidunt nunc sit amet vestibulum porta.
          Phasellus eget pretium erat, eget cursus neque. Aliquam et sapien et
          mauris tempus mattis iaculis non augue.
        </p>
      </div>
    </>
  );
};

export default About;
