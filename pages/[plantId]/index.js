import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import PlantPage from "../../components/plants/PlantPage";

const PlantPages = (props) => {
  console.log(props.plantData.id);
  return (
    <>
      <Head>
        <title>Plant App - {props.plantData.title}</title>
        <meta
          name="description"
          content={props.plantData.description}
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <PlantPage
        image={props.plantData.image}
        title={props.plantData.title}
        family={props.plantData.family}
        description={props.plantData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const DB_KEY = process.env.mongoDbKey;

  const client = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/plants?retryWrites=true&w=majority`
  );
  const db = client.db();

  const plantsCollection = db.collection("plants");

  const plants = await plantsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  const paths = plants.map((plant) => ({
    params: { plantId: plant._id.toString() },
  }));

  // tell the router about our static paths
  // fallback to / if no plantId is found
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const plantId = context.params.plantId;

  const DB_KEY = process.env.mongoDbKey;

  const client = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/plants?retryWrites=true&w=majority`
  );
  const db = client.db();

  const plantsCollection = db.collection("plants");

  const selectedPlant = await plantsCollection.findOne({
    _id: ObjectId(plantId),
  });

  // console.log(selectedPlant);

  client.close();

  return {
    props: {
      plantData: {
        id: selectedPlant._id.toString(),
        title: selectedPlant.title,
        image: selectedPlant.image,
        family: selectedPlant.family,
        description: selectedPlant.description,
      },
    },
  };
}
export default PlantPages;
