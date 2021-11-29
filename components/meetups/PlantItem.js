import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './PlantItem.module.css';

function PlantItem(props) {
  const router = useRouter();

  function showPlantHandler() {
    router.push('/' + props.id);
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
          <button onClick={showPlantHandler}>Ver planta</button>
        </div>
      </Card>
    </li>
  );
}

export default PlantItem;
