import { MongoClient } from "mongodb";
import Head from "next/head";
import PlantList from "../components/meetups/PlantList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Plant App - Cuida tus plantas</title>
        <meta
          name="description"
          content="Plant App - Cuida tus plantas"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <PlantList plants={props.plants} />
    </>
  );
}

// code inside getStaticProps function will never execute in the client side

export async function getStaticProps() {
  //fetches data from an API, or other source, and provides it to the page via props
  // always need to return an object here
  // this object will be merged with the props object
  // the code define in here will never execute in the client side
  //TODO put this connection file in a config file an import it here
  const DB_KEY = process.env.mongoDbKey;

  const client = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/plants?retryWrites=true&w=majority`
  );
  const db = client.db();

  // collections equal tables in a relational database
  const plantsCollection = db.collection("plants");

  const plants = await plantsCollection.find().toArray();

  client.close();

  return {
    props: {
      plants: plants.map((plant) => ({
        id: plant._id.toString(),
        title: plant.title,
        image: plant.image,
        family: plant.family,
      })),
    },
    //property for revalidating props, number of seconds for regenerating static page
    revalidate: 1,
  };
}

//alternative always running on server side after deployment
// always run on the server side, never on client side

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             plants: PLANT_LIST,
//         },
//     };
// }

export default HomePage;
