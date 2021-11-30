import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewWaterForm.module.css";

function NewWaterForm(props) {
  const idPlantInputRef = useRef();
  const dateInputRef = useRef();
  const waterInputRef = useRef();
  const fertilizeInputRef = useRef();
  const stateInputRef = useRef();
  const observationsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredIdPlant = idPlantInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredWater = waterInputRef.current.value;
    const enteredFertilize = fertilizeInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredObservations = observationsInputRef.current.value;

    const plantWater = {
      idPlant: enteredIdPlant,
      date: enteredDate,
      water: enteredWater,
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
            <label htmlFor="idPlant">ID Planta</label>
            <input type="text" required id="idPlant" ref={idPlantInputRef} />
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
            <label htmlFor="fertilize">Vol. Fertilizante</label>
            <input
              type="number"
              required
              id="fertilize"
              ref={fertilizeInputRef}
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
              rows="5"
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
