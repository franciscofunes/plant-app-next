import { MongoClient } from "mongodb";
import Link from "next/link";
import classes from "./index.module.css";

export default function Watering({ wateringRecords }) {
  return (
    <div className={classes.container}>
      <button><Link href="/new-water">Nuevo Registro</Link></button>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Nombre Planta</th>
            <th>Fecha</th>
            <th>Vol. Agua</th>
            <th>Nombre Fertilizante</th>
            <th>Vol. Fertilizante</th>
            <th>Estado</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {wateringRecords.map((watering) => (
            <tr>
              <td>{watering.plantName}</td>
              <td>{watering.date}</td>
              <td>{watering.water} ml</td>
              <td>{watering.fertilizeName}</td>
              <td>{watering.fertilize} ml</td>
              <td>{watering.state}</td>
              <td>{watering.observations}</td>
              <td>
                <button onClick="">✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export async function getServerSideProps() {
  const DB_KEY = process.env.mongoDbKey;

  const client = await MongoClient.connect(
    `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/watering?retryWrites=true&w=majority`
  );

  const db = client.db();

  const wateringRecords = await db.collection("watering").find({}).toArray();
  return {
    props: {
      wateringRecords: JSON.parse(JSON.stringify(wateringRecords)),
    },
  };
}
