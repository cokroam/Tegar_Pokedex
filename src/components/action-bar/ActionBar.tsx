import {
  addPokemonToCombat,
  removePokemonFromCombat,
} from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { ActionBarProps } from "./ActionBar.def";
import { BurgerIcon } from "../burger-icon";
import { Button } from "../button";
import classes from "./ActionBar.module.scss";
import { useNavigate } from "react-router-dom";

export const ActionBar = ({ pokemon }: ActionBarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const combatList = useAppSelector((state) => state.combat.combatList);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleAddPokemonToCombat = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    dispatch(addPokemonToCombat(pokemon));
  };

  const handleRemovePokemonToCombat = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    dispatch(removePokemonFromCombat(id));
  };

  const isPokemonInCombatList = (id: number) => {
    return combatList.some((pokemon) => pokemon.id === id);
  };

  return (
    <div className={classes["action-bar"]}>
      <Button iconName="ri-arrow-go-back-line" onClick={handleGoBack}>
        Back
      </Button>

      {isPokemonInCombatList(Number(pokemon.id)) ? (
        <Button
          iconName="ri-delete-bin-2-line"
          backgroundColor="remove-item"
          onClick={(e) => handleRemovePokemonToCombat(e, Number(pokemon.id))}
        >
          Hapus dari Combat
        </Button>
      ) : (
  
        <Button 
          iconName="ri-add-line"
          backgroundColor="add-item"
          onClick={handleAddPokemonToCombat}
        >
          Tambahkan ke Combat
        </Button>
      )}

      <BurgerIcon />
    </div>
  );
};
