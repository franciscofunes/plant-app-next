import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewPlantForm.module.css";

function NewPlantForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const FamilyInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredFamily = FamilyInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const plantData = {
      title: enteredTitle,
      image: enteredImage,
      family: enteredFamily,
      description: enteredDescription,
    };

    props.onAddPlant(plantData);
  }

  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Nombre Planta</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">URL imagen</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="family">Familia</label>
            <input type="text" required id="family" ref={FamilyInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Agregar Planta</button>
          </div>
        </form>
      </Card>
      <div className={classes.unplash}>
        <a href="https://unsplash.com/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default NewPlantForm;
