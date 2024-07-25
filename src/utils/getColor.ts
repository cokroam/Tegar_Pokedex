export interface ColorsType {
  hp: { backgroundLineColor: string; lineColor: string };
  attack: { backgroundLineColor: string; lineColor: string };
  defense: { backgroundLineColor: string; lineColor: string };
  "special-attack": { backgroundLineColor: string; lineColor: string };
  "special-defense": { backgroundLineColor: string; lineColor: string };
  speed: { backgroundLineColor: string; lineColor: string };
}

const colorsType: ColorsType = {
  hp: { backgroundLineColor: "#dff6ea", lineColor: "#60d394" },
  attack: { backgroundLineColor: "#fcdbd8", lineColor: "#f14b3d" },
  defense: { backgroundLineColor: "#fff7df", lineColor: "#fdd85d" },
  "special-attack": { backgroundLineColor: "#e8f6ff", lineColor: "#4aa9ff" },
  "special-defense": { backgroundLineColor: "#f8e7f3", lineColor: "#f75bb0" },
  speed: { backgroundLineColor: "#ffe2d5", lineColor: "#ff844f" },
};

export const getColor = (type: keyof ColorsType) => {
  return colorsType[type];
};
