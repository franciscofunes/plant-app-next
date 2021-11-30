import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PLANT APP 🍍</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Plantas</Link>
          </li>
          <li>
            <Link href="/watering">Riegos</Link>
          </li>
          <li>
            <Link href="/new-plant">Agregar ➕</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
