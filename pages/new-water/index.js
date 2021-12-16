// our-domain.com/new-plant
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import Head from "next/head";
import NewWaterForm from "../../components/plants/NewWaterForm";

const NewWateringPage = (props) => {
  const router = useRouter();

  const plantsData = props.plants;
  // console.log(plantsData);

  async function addWateringHandler(enteredWateringData) {
    // request to API to add new plant
    const response = await fetch("/api/new-water", {
      method: "POST",
      body: JSON.stringify(enteredWateringData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // console.log(data);

    router.push("/watering");
  }

  return (
    <>
      <Head>
        <title>Plant app - Agregar riego</title>
        <meta
          name="description"
          content="Add a new watering data to the database"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <NewWaterForm
        onAddWatering={addWateringHandler}
        plants={props.plants}
      />
    </>
  );
};

export async function getStaticProps() {
  const DB_KEY = process.env.mongoDbKey;

  const client = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/plants?retryWrites=true&w=majority`
  );

  const clientWater = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/watering?retryWrites=true&w=majority`
  );

  const db = client.db();

  const dbWater = clientWater.db();

  const plantsCollection = db.collection("plants");

  const plants = await plantsCollection.find().toArray();

  const waterCollection = dbWater.collection("watering");

  const watering = await waterCollection.find().toArray();

  client.close();

  return {
    props: {
      plants: plants.map((plant) => ({
        id: plant._id.toString(),
        title: plant.title,
        image: plant.image,
        family: plant.family,
      })),
      watering: watering.map((water) => ({
        id: water._id.toString(),
        plantName: water.plantName,
        date: water.date,
        fertilize: water.fertilize,
        water: water.water,
        state: water.state,
        observations: water.observations,
      })),
    },
    revalidate: 1,
  };
}

export default NewWateringPage;
