import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { capitalizeFirstLetter } from "../../utils";
import { PokemonCardProps } from "./PokemonCard.def";
import {
  addPokemonToCombat,
  removePokemonFromCombat,
} from "../../store/slices";

import classes from "./PokemonCard.module.scss";

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const combatList = useAppSelector((state) => state.combat.combatList);
  const { name, image } = pokemon;

  const handleRedirectToPokemon = (id: string) => {
    navigate(`/pokemon/${id}`);
  };

  const handleAddPokemonToCombat = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(addPokemonToCombat(pokemon));
  };

  const handleRemovePokemonToCombat = (event: MouseEvent, id: number) => {
    event.stopPropagation();
    dispatch(removePokemonFromCombat(id));
  };

  const isPokemonInCombatList = (id: number) => {
    return combatList.some((pokemon) => pokemon.id === id);
  };

  return (
    <div
      className={classes["pokemon-card"]}
      onClick={() => handleRedirectToPokemon(name)}
    >
      <div className={classes["pokemon-card__image"]}>
        <img src={image} alt={name} />
      </div>

      <h3 className={classes["pokemon-card__name"]}>
        {capitalizeFirstLetter(name)}
      </h3>

      <div className={classes["pokemon-card__icon"]}>
        {isPokemonInCombatList(pokemon.id) ? (
          <i
            className={`ri-delete-bin-2-line ${classes["pokemon-card__color-remove"]}`}
            onClick={(e) => handleRemovePokemonToCombat(e, pokemon.id)}
          />
        ) : (
          <i
            className={`ri-add-circle-fill ${classes["pokemon-card__color-add"]}`}
            onClick={handleAddPokemonToCombat}
          />
        )}
      </div>
    </div>
  );
};
