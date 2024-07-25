import { MouseEvent } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  backgroundColor?: "default" | "add-item" | "remove-item";
  iconName?: string;
};
