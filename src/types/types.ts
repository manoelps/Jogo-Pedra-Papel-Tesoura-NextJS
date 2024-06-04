export type HandProps = {
  id: number;
  hand: string;
  choice: string;
};

export type MoveProps = {
  player1: HandProps;
  player2: HandProps;
};

export type PlacarProps = {
  player1: number;
  player2: number;
};
