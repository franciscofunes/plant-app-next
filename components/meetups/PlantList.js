import PlantItem from "./PlantItem";
import classes from "./PlantList.module.css";

function PlantList(props) {
  return (
    <ul className={classes.list}>
      {props.plants.map((plant) => (
        <PlantItem
          key={plant.id}
          id={plant.id}
          image={plant.image}
          title={plant.title}
          family={plant.family}
        />
      ))}
    </ul>
  );
}

export default PlantList;
