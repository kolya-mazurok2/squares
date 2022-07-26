export interface BoardConfig {
  name: string;
  field: number;
}

export interface Option {
  name: string;
  value: string;
}

export interface PaintedShape {
  row: number;
  col: number;
  active: boolean;
}
