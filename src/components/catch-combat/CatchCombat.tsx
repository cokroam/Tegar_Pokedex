import { useAppSelector } from "../../hooks";
import classes from "./CatchCombat.module.scss";

export default function CatchCombat() {
  const combatList = useAppSelector((state) => state.combat.combatList);

  return (
    <div className={classes["catch-combat"]}>
      <img src="/src/assets/images/poke_ball_icon.svg" alt="ball" className={classes["catch-combat__ball"]} />
      {combatList.map((combat) => (
        <div key={combat.id} className={classes["catch-combat__image"]}>
          <img src={combat.image} alt="pokemon" />
        </div>
      ))}
    </div>
  );
}
