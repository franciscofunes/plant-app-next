// our-domain.com/new-plant
import { useRouter } from "next/router";
import Head from "next/head";
import NewPlantForm from "../../components/plants/NewPlantForm";

const NewPlantPage = () => {
  const router = useRouter();

  async function addPlantHandler(enteredPlantData) {
    // request to API to add new plant
    const response = await fetch("/api/new-plant", {
      method: "POST",
      body: JSON.stringify(enteredPlantData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Plant app - Agregar nueva planta</title>
        <meta
          name="description"
          content="Add a new plant to the database"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <NewPlantForm onAddPlant={addPlantHandler} />
    </>
  );
};

export default NewPlantPage;
