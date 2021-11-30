// our-domain.com/new-plant
import { useRouter } from "next/router";
import Head from "next/head";
import NewWaterForm from "../../components/plants/NewWaterForm";

const NewWateringPage = () => {
  const router = useRouter();

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

    console.log(data);

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
      <NewWaterForm onAddWatering={addWateringHandler} />
    </>
  );
};

export default NewWateringPage;
