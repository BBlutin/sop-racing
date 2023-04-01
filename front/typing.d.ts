type Component = {
  name: string;
  id: number;
  image: string;
  rarity: string;
  sellingPrice: number;
  statistiques: [];
  type: string;
};

type Stats = {
  power: number;
  acceleration: number;
  grip: number;
  handling: number;
  weight: number;
  wear: number;
  energy: number;
};

type Stat = {
  type: string;
  value: number;
};
