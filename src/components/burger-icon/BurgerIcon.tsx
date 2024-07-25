import { useAppDispatch, useAppSelector } from "../../hooks";
import { setOpenSidebar } from "../../store/slices";
import classes from "./BurgerIcon.module.scss";

export const BurgerIcon = () => {
  const dispatch = useAppDispatch();
  const { isOpenSidebar } = useAppSelector((state) => state.sidebar);

  const handleOpenSidebar = () => {
    dispatch(setOpenSidebar(!isOpenSidebar));
  };

  return (
    <div className={classes["burger-icon"]} onClick={handleOpenSidebar}>
      <i className="ri-menu-line"></i>
    </div>
  );
};
