import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './PlantItem.module.css';

function PlantItem(props) {
  const router = useRouter();

  function showPlantHandler() {
    router.push('/' + props.id);
  }

  function showWateringHandler() {
    router.push('/watering');
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.family}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showPlantHandler}>Historia</button>
          <button onClick={showWateringHandler}>Regar</button>
        </div>
      </Card>
    </li>
  );
}

export default PlantItem;
