import { CombatList } from "../../components";
import { RootLayoutProps } from "./RootLayout.def";
import classes from "./RootLayout.module.scss";
import { useAppSelector } from "../../hooks";

export const RootLayout = ({ children }: RootLayoutProps) => {
  const isOpenSidebar = useAppSelector((state) => state.sidebar.isOpenSidebar);

  return (
    <main className={classes["layout-container"]}>
           <CombatList isOpen={isOpenSidebar} />
      {children}
 
    </main>
  );
};
