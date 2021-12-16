import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewWaterForm.module.css";
import { v4 as uuidv4 } from 'uuid';

function NewWaterForm(props) {
  const plants = props.plants;
  const plantNameInputRef = useRef();
  const dateInputRef = useRef();
  const waterInputRef = useRef();
  const fertilizerInputRef = useRef();
  const stateInputRef = useRef();
  const observationsInputRef = useRef();
  const fertilizerNameInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredPlantName = plantNameInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredWater = waterInputRef.current.value;
    const enteredFertilize = fertilizerInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredObservations = observationsInputRef.current.value;
    const enteredFertilizerName = fertilizerNameInputRef.current.value;


    const plantWater = {
      plantName: enteredPlantName,
      date: enteredDate,
      water: enteredWater,
      fertilizeName: enteredFertilizerName,
      fertilize: enteredFertilize,
      state: enteredState,
      observations: enteredObservations,
    };

    props.onAddWatering(plantWater);
  }

  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="idPlant">Elegí una planta</label>
            <select id="name" ref={plantNameInputRef}>
              {plants.map((plant) => (
                <option key={uuidv4()} value={plant.title}>{plant.title}</option>
              ))}
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Fecha</label>
            <input type="date" required id="date" ref={dateInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="water">Vol. Agua</label>
            <input type="number" required id="water" ref={waterInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="state">Nombre Fertilizante</label>
            <select id="fertilizer" ref={fertilizerNameInputRef}>
              <option value="Pro">Pro</option>
              <option value="N">N</option>
              <option value="Candy">Candy</option>
              <option value="A">A</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="fertilize">Vol. Fertilizante</label>
            <input
              type="number"
              id="fertilize"
              ref={fertilizerInputRef}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="state">Estado</label>
            <select id="states" ref={stateInputRef}>
              <option value="realizado">Realizado</option>
              <option value="pendiente">Pendiente</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="observations">Observaciones</label>
            <textarea
              id="observations"
              rows="4"
              ref={observationsInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Registrar</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default NewWaterForm;
