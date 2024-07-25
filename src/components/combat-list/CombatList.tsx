import { useAppDispatch, useAppSelector } from "../../hooks";

import { CombatListProps } from "./CombatList.def";
import { Link } from "react-router-dom";
import { Paragraph } from "../paragraph";
import { PokemonCard } from "../pokemon-card";
import { ScrollToTop } from "../scroll-to-top";
import classes from "./CombatList.module.scss";
import { setOpenSidebar } from "../../store/slices";

export const CombatList = ({ isOpen }: CombatListProps) => {
  const dispatch = useAppDispatch();
  const combatList = useAppSelector((state) => state.combat.combatList);

  const handleCloseSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <div className={`${classes["combat-list"]} ${classes[`${isOpen ? "combat-list--is-open" : ""}`]}`}>
      <div className={classes["combat-list__wrapper-icon"]} onClick={handleCloseSidebar}>
        <i className="ri-close-line"></i>
      </div>

      <h2 className={classes["combat-list__title"]}>Ready Combat</h2>

      {combatList.length === 0 && <Paragraph text="Tidak ada pokomen dicombat" style={{ textAlign: "center" }} />}

      <div className={classes["combat-list__wrapper-fighters"]}>
        {combatList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <Link to="/catch" className={classes["combat-list__btn"]}>
        Catch
      </Link>
      <ScrollToTop />
    </div>
  );
};
