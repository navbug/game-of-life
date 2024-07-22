export type CellState = 0 | 1 | 2 | -3;
export type Grid = CellState[][];

export interface GameState {
  grid: Grid;
  isRunning: boolean;
}

export interface GameSettings {
  rows: number;
  cols: number;
  speed: number;
}