import classes from './PlantPage.module.css';

const PlantPage = (props) => {
    return (
        <section className={classes.detail}>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <address>{props.family}</address>
          <p>{props.description}</p>
        </section>
    )
}

export default PlantPage;
